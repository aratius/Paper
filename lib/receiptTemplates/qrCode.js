const { getTime } = require("../utils")

module.exports = () => {

  const {
    year,
    month,
    day,
    hours,
    minutes,
    dayOfWeekStr
  } = getTime()

  const text = `

{code:${year}/${month}/${day} ${hours}:${minutes}\Thank you for scanning this QR code.; option:qrcode,8,L}



  `

  return text
}
