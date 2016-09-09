// {
//   type: 'pie',
//   data: {
//     labels: ['非常清楚', '基本清楚', '有点模糊', '几乎不懂'],
//     datasets: [
//       {
//         label: '综合结果',
//         data: [60.71, 23.57, 4.29, 11.43],
//         backgroundColor: ['#F48FB1', '#EF9A9A', '#80DEEA', '#81D4FA']
//       }
//     ]
//   }
// }
;(function (global) {
  var Chart = global.Chart
  var document = global.document
  // 标题栏中的选项集合
  var thead = document.querySelector('#statistics > thead > tr')
  var optionElements = document.querySelectorAll('#statistics > thead > tr > th + th')
  var labels = []
  var backgroundColor = []

  // 获取通用数据信息
  optionElements.forEach(function (e) {
    labels.push(e.innerText)
    backgroundColor.push(e.dataset['color'])
    e.remove()
  })
  var th = document.createElement('th')
  th.innerText = '吸收情况'
  thead.appendChild(th)

  // 单行数据集合
  var itemElements = document.querySelectorAll('#statistics > tbody > tr')

  itemElements.forEach(function (e) {
    var label = e.children[0].innerText
    var data = []
    var dataElements = e.querySelectorAll('td + td')
    dataElements.forEach(s => {
      data.push(parseFloat(s.dataset['value']))
      s.remove()
    })
    var td = document.createElement('td')
    var canvas = document.createElement('canvas')
    canvas.width = 300
    canvas.height = 300
    td.align = 'center'
    td.appendChild(canvas)
    e.appendChild(td)
    new Chart(canvas, {
      type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: label,
            data: data,
            backgroundColor: backgroundColor
          }]
        },
        options: { responsive: false, maintainAspectRatio: true }
      })
    })
}(this))
