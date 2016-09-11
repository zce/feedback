<style lang="less">
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10/16rem ;
    &.full {
      flex: 1;
    }
    label {
      color: #888;
      font-size: 16/16rem;
      font-weight: 600;
      margin-bottom: 0/16rem;
      margin-left: 2/16rem;
    }
    textarea, input {
      flex: 1;
      width: 100%;
      resize: none;
      padding: 3/16rem 8/16rem;
      font-size: 14/16rem;
      line-height: 26/16rem;
      border: 1/16rem solid #eee;
      &:focus {
        border-color: #ccc;
      }
    }
  }
  ::-webkit-input-placeholder{
    // display: block;
    // content: "line@ \A line#";/*  \A 表示换行  */
    color: #999;
    font-weight: 100
  }
</style>

<template>
  <div class="inner">
    <h1 class="page-header">创建新的反馈</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="class_name">班级名称</label>
          <input id="class_name" type="text" v-model="class_name | trim" placeholder="分校名+品牌+学科名+班级类型+期数（时间+授课模式）" autofocus>
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <label for="head">班主任姓名</label>
          <input id="head" type="text" v-model="head | trim" placeholder="班主任姓名">
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <label for="class_count">班级人数</label>
          <input id="class_count" type="number" v-model="class_count | range 160" lazy number placeholder="班级人数" min="1" max="160">
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <label for="attendance">出勤人数</label>
          <input id="attendance" type="number" v-model="attendance | range 160" lazy number placeholder="出勤人数" min="1" max="160">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="course">教学内容</label>
          <input id="course" type="text" v-model="course | trim" placeholder="今天的教学内容">
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <label for="date">授课日期</label>
          <input id="date" type="text" v-model="date | trim" placeholder="今天的授课日期" readonly tabindex="-1">
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <label for="teacher">讲师姓名</label>
          <input id="teacher" type="text" v-model="teacher | trim" placeholder="讲师姓名">
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <label for="assistant">助教姓名</label>
          <input id="assistant" type="text" v-model="assistant | trim" placeholder="助教姓名">
        </div>
      </div>
    </div>
    <div class="form-group full">
      <label for="targets">学习目标</label>
      <textarea id="targets" v-model="targets | trim" placeholder="{{placeholder}}"></textarea>
    </div>
    <button class="btn btn-primary btn-lg btn-block" @click="submit()">创建新的反馈统计</button>
  </div>
</template>

<script>
  export default {
    name: 'start',
    pathname: '/start',

    ready () {
      this.$root.title = '创建新的学习目标反馈统计'
    },

    data () {
      return {
        class_name: this.$option.get('remembers.last_class_name'),
        class_count: this.$option.get('remembers.last_class_count', 0),
        attendance: this.$option.get('remembers.last_attendance', 0),
        date: this.$utils.formatDate(new Date(), 'yyyy年MM月dd日'),
        course: this.$option.get('remembers.last_course'),
        teacher: this.$option.get('remembers.last_teacher'),
        assistant: this.$option.get('remembers.last_assistant'),
        head: this.$option.get('remembers.last_head'),
        targets: '',
        placeholder: `请在此处输入学习目标，一行一条，重点条目前面用“*”（英文半角）标记。
例如：
        能够说出Angular一些常识（背景和特点）
        能够说出SPA是什么
        *能够说出Angular的核心特性
        能够运用Angular基本指令
        能够运用Angular表达式
        能够运用Angular模块的创建及使用
        能运用Angular控制器的创建及使用`
      }
    },

    methods: {
      submit () {
        // Validate inputs
        if (!this.$config.class_format.test(this.class_name)) {
          return this.$dialog.error('请输入正确格式的班级名称')
        }
        if (!(this.class_count && this.attendance && this.date && this.course && this.teacher && this.assistant && this.head)) {
          return this.$dialog.error('请完整填写基本信息')
        }
        if (!this.targets) {
          return this.$dialog.error('请输入学习目标')
        }

        // Remember
        this.$option.set('remembers.last_class_name', this.class_name)
        this.$option.set('remembers.last_class_count', this.class_count)
        this.$option.set('remembers.last_attendance', this.attendance)
        this.$option.set('remembers.last_course', this.course)
        this.$option.set('remembers.last_teacher', this.teacher)
        this.$option.set('remembers.last_assistant', this.assistant)
        this.$option.set('remembers.last_head', this.head)

        const stamp = this.$utils.getStamp()
        this.$storage.set(stamp, {
          stamp: stamp,
          class_name: this.class_name,
          class_count: this.class_count,
          assistant: this.assistant,
          course: this.course,
          teacher: this.teacher,
          head: this.head,
          attendance: this.attendance,
          date: this.$utils.formatDate(new Date(), 'yyyy年MM月dd日'),
          targets: this.targets.split('\n').map(t => t.trim()).filter(t => t).map(t => ({ question: t, highlight: t.startsWith('*') })),
          receives: {},
          receives_count: 0,
          status: this.$config.status_keys.initial
        })

        this.$router.go({ name: 'watch', params: { item: stamp } })
      }
    }
  }
</script>
