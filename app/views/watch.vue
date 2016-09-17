<style lang="less" scoped>
  table {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    thead, tbody {
      display: flex;
      flex-direction: column;
    }
    tbody {
      flex: 1;
    }
    tr {
      display: flex;
      th, td {
        flex: 1;
        &:not(:last-child) {
          width: 15%;
          flex: initial;
        }
        span {
          min-width: 300/16rem;
          display: inline-block;
          // .primary {
          //   color: #f40;
          // }
        }
      }
    }
  }
  .target {
    flex: 1;
    .select {
      height: 100%;
      overflow-y: auto;
      ol {
        margin: 1em 0;
        padding-left: 2em;
        line-height: 1.5;
      }
    }
  }

  .actions {
    margin-top: 10/16rem;
  }
</style>

<template>
  <div>
    <h1 class="page-header">{{item.datetime}} 教学反馈</h1>
    <table>
      <thead>
        <tr>
          <th>项目</th>
          <th>数据</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>班级信息</td>
          <td>
            <span class="select">{{item.class_name}}</span>
            <span>班级人数：{{item.class_count}}（实到：{{item.attendance}}）</span>
          </td>
        </tr>
        <tr>
          <td>教学进度</td>
          <td>
            <span>授课日期：{{item.date}}</span>
            <span>教学内容：{{item.course}}</span>
          </td>
        </tr>
        <tr>
          <td>工作人员</td>
          <td>
            <span>班主任：{{item.head}}</span>
            <span>助教：{{item.assistant}}</span>
            <span>讲师：{{item.teacher}}</span>
          </td>
        </tr>
        <tr class="target">
          <td>学习目标</td>
          <td>
            <div class="select">
              <ol>
                <li v-for="t in item.targets" track-by="$index" :style="{color: t.highlight ? 'red' : ''}">{{t.question}}</li>
              </ol>
            </div>
          </td>
        </tr>
        <tr>
          <td>已完成测评人数</td>
          <td style="color:#f30" v-if="item.attendance - item.receives_count >= 0">{{item.receives_count}}人（还少：{{item.attendance - item.receives_count}}人）</td>
          <td style="color:#f30" v-if="item.attendance - item.receives_count < 0">{{item.receives_count}}人（超出：{{-(item.attendance - item.receives_count)}}人）</td>
        </tr>
        <tr v-if="item.status">
          <td>反馈状态</td>
          <td style="color:#f60">{{item.status}}</td>
        </tr>
        <tr v-if="item.status === $config.status_keys.rating">
          <td>测评链接</td>
          <td>
            <a class="js-external-link" href="{{server_link + item.stamp}}">{{server_link + item.stamp}}</a>
            <i>&nbsp;&nbsp;</i>
            <a @click="copy(server_link + item.stamp)">点击复制</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="actions">
      <button class="btn btn-primary btn-lg btn-block" v-if="item.status === $config.status_keys.initial" @click="start()">开始反馈统计</button>
      <button class="btn btn-danger btn-lg btn-block" v-if="item.status === $config.status_keys.rating" @click="stop()">结束反馈统计</button>
      <button class="btn btn-warning btn-lg btn-block" v-if="item.status === $config.status_keys.rated" @click="save()">保存并预览反馈报告</button>
    </div>
  </div>
</template>

<script>
  import fs from 'fs'
  import path from 'path'
  import xtpl from 'xtpl'

  export default {
    name: 'watch',
    pathname: '/watch/:item',

    data () {
      // const stamp = this.$route.params.item
      // this.$storage.watch(stamp, () => this._loadData(stamp))
      // return { item: this._loadData(stamp) }
      this.$root.$on('server_link_changed', () => {
        this.server_link = `http://${this.$root.server_address}:${this.$root.server_port}/`
      })
      return { item: {}, server_link: `http://${this.$root.server_address}:${this.$root.server_port}/` }
    },

    route: {
      data (transition) {
        const stamp = transition.to.params.item
        this._loadData(stamp)
        this.$storage.watch(stamp, () => this._loadData(stamp))
      }
    },

    methods: {
      _loadData (stamp) {
        if (!stamp) return this.$router.go({ name: 'start' })
        const item = this.$storage.get(stamp)
        if (!item) return this.$router.go({ name: 'start' })
        this.item = item
        this.$root.title = item.stamp
        return this.item
      },

      _formatData () {
        // 二维数组（第一个维度是学习目标，第二个是学生）
        const temp = []
        Object.keys(this.item.receives).forEach(ip => {
          const marks = this.item.receives[ip].marks
          Object.keys(marks).forEach(i => {
            temp[i] = temp[i] || []
            temp[i].push(marks[i])
          })
        })
        return temp
      },

      _allPercents (answers = this._formatData()) {
        const percents = { targets: {} }
        let total = 0
        let base = 0
        this.item.targets.forEach((t, i) => {
          let itemScore = 0
          Object.keys(this.$config.answer_options).forEach((k, j) => {
            const temp = answers[i]
            const res = temp.filter(t => t === j).length / temp.length * 100
            percents[j] = percents[j] || { total: 0, count: 0, ratio: this.$config.answer_options[j].ratio }
            percents[j][i] = res
            percents[j].total += res
            percents[j].count += 1
            itemScore += res / 100 * this.$config.answer_options[j].ratio
          })
          percents.targets[i] = itemScore * this.$config.score_options.base + this.$config.score_options.offset
          const tBase = this.$config.score_options[t.highlight ? 'important' : 'normal']
          base += tBase
          total += percents.targets[i] * tBase
        })
        percents.all = total / base
        return percents
      },

      copy (txt) {
        this.$electron.clipboard.writeText(txt)
        this.$dialog.info('已经将打分链接复制到剪切板\n请将链接发送给学生')
      },

      start () {
        // 当前状态为初始状态
        if (this.item.status === this.$config.status_keys.initial) {
          // 开始测评
          this.item.status = this.$config.status_keys.rating
          this.$storage.set(this.item.stamp, this.item)
        }
      },

      stop () {
        if (this.stoping) return false
        // 防止多次点击
        this.stoping = true
        this.item.receives_count = Object.keys(this.item.receives).length

        if (!this.item.receives_count) {
          alert('尚未有人提交测评表单！')
          this.stoping = false
          return false
        }
        if (!(confirm('确定结束吗？') && confirm('真的确定结束吗？'))) {
          this.stoping = false
          return false
        }
        // 当前状态为正在测评
        if (this.item.status === this.$config.status_keys.rating) {
          // 测评完成状态
          this.item.status = this.$config.status_keys.rated
          this.$storage.set(this.item.stamp, this.item)
          this.stoping = false
        }
      },

      save () {
        // return xtpl.renderFile('D:\\zce\\Documents\\Repositories\\feedback\\app\\assets\\www\\report.xtpl', {
        //   feedback: this.item,
        //   answers: this._formatData(),
        //   allPercents: this._allPercents,
        //   options: this.$config.answer_options
        // }, (err, html) => {
        //   if (err) return console.error(err)
        //   const filename = path.join(this.$electron.remote.app.getPath('desktop'), `【每日反馈】${this.item.class_name}-${this.item.date}.htm`)
        //   fs.writeFile(filename, html, 'utf8')
        // })

        xtpl.renderFile(path.join(this.$config.app.path, 'core.asar/www', 'report.xtpl'), {
          feedback: this.item,
          answers: this._formatData(),
          allPercents: this._allPercents,
          options: this.$config.answer_options
        }, (err, html) => {
          if (err) return alert('保存失败，请重试！')
          this.$electron.remote.dialog.showSaveDialog({
            title: `保存${this.item.date}详细报告`,
            filters: [{ name: 'HTML', extensions: ['htm'] }],
            defaultPath: path.join(this.$electron.remote.app.getPath('desktop'), `【每日反馈】${this.item.class_name}-${this.item.date}.htm`)
          }, filename => {
            if (!filename) return
            // fs.writeFile(filename, html, 'utf8', () => this.$electron.shell.showItemInFolder(filename))
            fs.writeFile(filename, html, 'utf8', () => {
              const preview = new this.$electron.remote.BrowserWindow({ minimizable: false, maximizable: false })
              preview.maximize()
              preview.loadURL(`file://${filename}`)
            })
          })
        })
      }
    }
  }
</script>
