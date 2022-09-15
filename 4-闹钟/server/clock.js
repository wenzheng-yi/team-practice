module.exports = (ctx) => {
  let code, data, msg
  if (Math.random() > 0.3) {
    ;(code = 200), (msg = '成功')
    data = {
      time: createTime(),
    }
  } else {
    ;(code = 0), (msg = '请求失败，立即重新请求')
    data = {}
  }
  ctx.body = {
    code,
    data,
    msg,
  }
}

function createTime() {
  const hour = Math.floor(Math.random() * 24)
  const minute = Math.floor(Math.random() * 60)
  const second = Math.floor(Math.random() * 60)
  console.log(hour + ':' + minute + ':' + second)
  const time =
    readAsZh(hour) + '点' + readAsZh(minute) + '分' + readAsZh(second) + '秒'
  return time
}

const numZh = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
function readAsZh(num) {
  const ten = Math.floor(num / 10)
  const tenZh = ten ? (ten == 1 ? '十' : numZh[ten] + '十') : ''
  const unit = num % 10
  const unitZh = ten ? (unit ? numZh[unit] : '') : numZh[unit]
  let zh = tenZh + unitZh
  return zh
}
