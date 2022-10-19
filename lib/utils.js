exports.zenkaku2Hankaku = (str) => {
  return str.replace(/[A-Za-z0-9]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });
}

exports.getTime = () => {
  const d = new Date()
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
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

exports.shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

exports.pad2 = (str) => {
  return str.toString().padStart(2, "0")
}