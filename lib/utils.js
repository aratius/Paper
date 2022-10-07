exports.handler = zenkaku2Hankaku = (str) => {
  return str.replace(/[A-Za-z0-9]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });
}

exports.handler = getTime = () => {
  const d = new Date()
  const year = d.getFullYear()
  const month = d.getMonth()
  const day = d.getDay()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  const dayOfWeek = d.getDay() ;	// 曜日(数値)
  const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek]
  return {
    year,
    month,
    day,
    hours,
    minutes,
    dayOfWeek,
    dayOfWeekStr
  }
}