// var option = {
//     title : {
//         text: '某站点用户访问来源',
//         subtext: '纯属虚构',
//         x:'center'
//     },
//     tooltip : {
//         trigger: 'item',
//         formatter: "{a} <br/>{b} : {c} ({d}%)"
//     },
//     legend: {
//         orient: 'vertical',
//         left: 'left',
//         data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
//     },
//     series : [
//         {
//             name: '访问来源',
//             type: 'pie',
//             radius : '55%',
//             center: ['50%', '60%'],
//             data:[
//                 {value:335, name:'直接访问'},
//                 {value:310, name:'邮件营销'},
//                 {value:234, name:'联盟广告'},
//                 {value:135, name:'视频广告'},
//                 {value:1548, name:'搜索引擎'}
//             ],
//             itemStyle: {
//                 emphasis: {
//                     shadowBlur: 10,
//                     shadowOffsetX: 0,
//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
//                 }
//             }
//         }
//     ]
// }

;(function (global) {
  var echarts = global.echarts
  var document = global.document

  var optionElements = document.querySelectorAll('#statistics > thead > tr > th + th')
  var option = {
    title: { text: '', x: 'center' },
    legend: { orient: 'vertical', left: 'left', data: Array(optionElements.length) },
    series: []
  }
  for (var i = optionElements.length - 1; i >= 0; i--) {
    option.legend.data[i] = optionElements[i].innerHTML
  }
  // 单条数据
  var itemElements = document.querySelectorAll('#statistics > tbody > tr')

}(this))
