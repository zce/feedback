<style lang="less">
  .form-control {
    display: flex;
    flex-direction: column;
    margin-bottom: 10/16rem ;

    &.full {
      flex: 1;
    }

    label {
      font-size: 20/16rem;
      font-weight: 500;
      margin-bottom: 10/16rem;
    }

    textarea, input {
      flex: 1;
      width: 100%;
      resize: none;
      padding: 5/16rem 10/16rem;
      font-size: 16/16rem;
      line-height: 26/16rem;
      border: 1/16rem solid #eee;

      &:focus {
        border-color: #ccc;
      }
    }

    .help-desk {
      font-size: 13/16rem;
      color: #999;
      margin: 5/16rem 2/16rem;
    }
  }
  ::-webkit-input-placeholder{
    // display: block;
    // content: "line@ \A line#";/*  \A 表示换行  */
    color: #c5c5c5;
  }
</style>

<template>
  <div class="inner">
    <h1 class="page-header">创建新的反馈</h1>
    <div class="form-control normal">
      <label for="class_name">反馈班级</label>
      <input id="class_name" type="text" v-model="class_name" placeholder="请输入班级名称"/>
      <p class="help-desk">分校名+品牌+学科名+班级类型+期数（时间+授课模式），例如：<strong class="select">北京传智JavaEE基础88期（20160608面授）</strong></p>
    </div>
    <div class="form-control full">
      <label for="editor">教学目标</label>
      <textarea id="editor" v-model="targets" placeholder="{{placeholder}}"></textarea>
      <!-- <p class="help-desk">请输入教学目标，一行一条</p> -->
    </div>
    <button class="btn btn-primary btn-lg btn-block" @click="submit()">创建新的反馈统计</button>
  </div>
</template>

<script>
  export default {
    ready () {
      this.$root.title = '创建新的反馈统计'
    },

    data () {
      return {
        class_name: this.$option.get('last_class_name'),
        targets: '',
        placeholder: `请在此处输入教学目标，一行一条，重点条目前面用“*”（英文半角）标记。例如：

        能够说出Angular一些常识（背景和特点）
        能够说出SPA是什么
        能够说出Angular的核心特性
        能够运用Angular基本指令
        能够运用Angular表达式
        能够运用Angular模块的创建及使用
        能运用Angular控制器的创建及使用`
      }
    },

    methods: {
      submit () {
        if (!/^.+?(传智|黑马).+?(基础|就业)\d{1,5}期（\d{8}(面授|双元)）\s?$/.test(this.class_name)) {
          return this.$dialog.error('请输入正确格式的班级名称')
        }
        this.$option.set('last_class_name', this.class_name)
        if (!this.targets) {
          return this.$dialog.error('请输入教学目标')
        }
        const stamp = this.$utils.getStamp()
        const className = this.class_name
        const targets = this.targets.split('\n').map(t => t.trim()).filter(t => t).map(t => ({ question: t, highlight: t.startsWith('*') }))
        const status = this.$config.status_keys.initial
        const datetime = this.$utils.formatDate(new Date(), 'yyyy-MM-dd HH:mm')
        const receives = {}
        const receivesCount = 0
        this.$storage.set(stamp, {
          stamp,
          class_name: className,
          targets,
          status,
          datetime,
          receives,
          receives_count: receivesCount
        })
        this.$router.go({ name: 'watch', params: { item: stamp } })
      }
    }
  }
</script>
