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
      }
    }
  }

  .target {
    flex: 1;

    div {
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
          <td>反馈班级</td>
          <td>{{item.class_name}}</td>
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
          <td style="color:#f40">{{item.receives_count}}人</td>
        </tr>
        <tr v-if="item.status">
          <td>反馈状态</td>
          <td style="color:#f60">{{item.status}}</td>
        </tr>
        <tr v-if="item.status === $config.status_keys.rating">
          <td>测评链接</td>
          <td>
            <a class="js-external-link" href="{{server_link + item.stamp}}">{{server_link + item.stamp}}</a>
            <span>&nbsp;&nbsp;</span>
            <a @click="copy(server_link + item.stamp)">点击复制</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="actions">
      <button class="btn btn-primary btn-lg btn-block" v-if="item.status === $config.status_keys.initial" @click="start()">开始反馈统计</button>
      <button class="btn btn-danger btn-lg btn-block" v-if="item.status === $config.status_keys.rating" @click="stop()">结束反馈统计</button>
      <button class="btn btn-warning btn-lg btn-block" v-if="item.status === $config.status_keys.rated" @click="preview()">查看反馈结果</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      // const stamp = this.$route.params.item
      // this.$storage.watch(stamp, () => this.loadData(stamp))
      // return { item: this.loadData(stamp) }
      this.$root.$on('server_link_changed', () => {
        this.server_link = `http://${this.$root.server_address}:${this.$root.server_port}/`
      })
      return { item: {}, server_link: `http://${this.$root.server_address}:${this.$root.server_port}/` }
    },

    route: {
      data (transition) {
        const stamp = transition.to.params.item
        this.loadData(stamp)
        this.$storage.watch(stamp, () => this.loadData(stamp))
      }
    },

    methods: {
      loadData (stamp) {
        if (!stamp) return this.$router.go({ name: 'start' })
        const item = this.$storage.get(stamp)
        if (!item) return this.$router.go({ name: 'start' })
        this.item = item
        this.$root.title = item.stamp
        return this.item
      },

      copy (txt) {
        this.$electron.clipboard.writeText(txt)
        this.$dialog.info('已经将打分链接复制到剪切板\n请将链接发送给学生')
      },

      save () {
        this.$storage.set(this.item.stamp, this.item)
      },

      start () {
        // 当前状态为初始状态
        if (this.item.status === this.$config.status_keys.initial) {
          // 开始测评
          this.item.status = this.$config.status_keys.rating
          this.save()
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
          this.save()
          this.stoping = false
        }
      },

      preview () {
        this.$router.go({ name: 'preview', params: { item: this.item.stamp } })
      }
    }
  }
</script>
