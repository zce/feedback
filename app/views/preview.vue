<style lang="less" scoped>
  table {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;

    thead {
      background-color: #fafafa;
    }

    tbody {
      flex: 1;
      overflow-y: auto;
    }

    tr {
      display: flex;
      min-height: 39/16rem;

      th, td {
        flex: 1;
      }
    }
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
  .actions {
    margin-top: 10/16rem;
  }
</style>

<template>
  <div>
    <h1 class="page-header">{{item.date}} 反馈报告预览（{{getAbsorptivity() | toFixed}}%）</h1>
    <table>
      <thead>
        <tr>
          <th>学习目标</th>
          <th v-for="option in $config.answer_options">{{option.full}}</th>
        </tr>
      </thead>
      <tbody class="select">
        <tr style="background-color: rgba(0, 255, 20, 0.1)">
          <td>综合结果：</td>
          <td v-for="a in percent" :style="style(a.total/a.count)">{{a.total/a.count | toFixed}}%</td>
        </tr>
        <tr><td></td></tr>
        <tr><td><h3>单个学习目标：</h3></td></tr>
        <tr v-for="target in item.targets">
          <td :style="{color: target.highlight ? '#f70' : ''}">{{target.question}}</td>
          <td v-for="option in $config.answer_options" :style="style(percent[$index][$parent.$index])">{{percent[$index][$parent.$index] | toFixed}}%</td>
        </tr>
        <tr><td></td></tr>
        <tr>
          <td><h3>意见与建议：</h3></td>
        </tr>
        <tr v-for="(ip, item) in item.receives" v-if="item.note">
          <td title="{{ip}}" style="flex: initial; width: 6em">{{item.name}}</td>
          <td>{{item.note}}</td>
        </tr>
        <tr><td></td></tr>
        <tr style="background-color: #f90; color: #fff">
          <td style="flex: initial; font-weight: bold">反馈人数：</td>
          <td>{{item.receives_count}}人</td>
        </tr>
        <tr><td></td></tr>
      </tbody>
    </table>
    <div class="actions">
      <button class="btn btn-primary btn-lg btn-block" @click="save()">保存详细报告</button>
    </div>
  </div>
</template>

<script>
  import fs from 'fs'
  import path from 'path'
  import XTemplate from 'xtemplate'

  export default {
    name: 'preview',
    pathname: '/preview/:item',

    data () {
      return { item: this.loadData(this.$route.params.item) }
    },

    // route: {
    //   data (transition) {
    //     const stamp = transition.to.params.item
    //     this.loadData(stamp)
    //   }
    // },

    methods: {
      loadData (stamp) {
        if (!stamp) return this.$router.go({ name: 'start' })
        const item = this.$storage.get(stamp)
        if (!item) return this.$router.go({ name: 'start' })
        // this.item = item
        this.temp = {}
        const keys = Object.keys(item.receives)
        keys.forEach(ip => {
          const marks = item.receives[ip].marks
          Object.keys(marks).forEach(i => {
            this.temp[i] = this.temp[i] || []
            this.temp[i].push(marks[i])
          })
        })
        this.percent = {}
        item.targets.forEach((t, i) => Object.keys(this.$config.answer_options).forEach((k, j) => this.percentage(i, j)))
        return item
      },

      style (pc) {
        // const pc = this.percentage(index, score)
        if (pc >= 75) {
          return { 'color': '#fff', 'background-color': 'rgba(92, 184, 92, 0.7)' }
        } else if (pc >= 50) {
          return { 'color': '#fff', 'background-color': 'rgba(91, 192, 222, 0.7)' }
        } else if (pc >= 25) {
          return { 'color': '#fff', 'background-color': 'rgba(240, 173, 78, 0.7)' }
        }
      },

      percentage (index, score) {
        const item = this.temp[index]
        const res = (item.filter(i => i === score).length / item.length * 100)
        this.percent[score] = this.percent[score] || { total: 0, count: 0 }
        this.percent[score][index] = res
        this.percent[score].total += res
        this.percent[score].count += 1
        return res
      },

      getAbsorptivity () {
        this.absorptivity = 0
        for (let s in this.percent) {
          this.absorptivity += this.percent[s].total / this.percent[s].count * this.$config.answer_options[s].ratio
        }
        return this.absorptivity
      },

      colspan () {
        return Object.keys(this.$config.answer_options).length
      },

      save () {
        const template = fs.readFileSync(path.join(this.$config.app.path, 'core.asar/www', 'report.xtpl'), 'utf8')
        const html = new XTemplate(template).render({
          item: this.item,
          percent: this.percent,
          absorptivity: this.absorptivity,
          answer_options: this.$config.answer_options
        })
        this.$electron.remote.dialog.showSaveDialog({
          title: `保存${this.item.date}详细报告`,
          filters: [
            { name: 'HTML', extensions: ['html'] },
            { name: 'All Files', extensions: ['*'] }
          ],
          defaultPath: path.join(this.$electron.remote.app.getPath('desktop'), `【每日反馈】${this.item.class_name}-${this.item.date}.htm`)
        }, filename => {
          if (!filename) return
          fs.writeFile(filename, html, 'utf8', () => this.$electron.shell.showItemInFolder(filename))
        })
      }
    }
  }
</script>
