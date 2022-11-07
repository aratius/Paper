const { zenkaku2Hankaku, getTime, shuffle, pad2 } = require("../utils")

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
^^^^""オーエスドラッグ

\`\`^箕面の滝店
大阪府箕面市箕面公園２−２
              電話：080-7259-1080      レジ#2
${year + 2}年${pad2(month)}月${pad2(day)}日（${dayOfWeekStr}）${pad2(hours)}:${pad2(minutes)} 責153

{width:15;border:line;align:center;}
^領収書

{width:*;border:none;}
|立体マスク大人用50枚 x1         　　  *598

|
|-
|^小計""^　（税抜8%)        ¥598
|外税対象（10%)             ¥598          __"""
|外税額（10%)　　　　　 　　¥119
|\`\`\`^^^合計　　　　　　￥７１７
|""""_お買い上げの明細は上記の通りですか？
|_分からないのでご自分でお確かめてください。
|#11111113593959395204958483484286277758693943050
|伝票番号010 - 430 -112

{code:STOP SMOKING; option:qrcode,8,L}


|-
  `

  return text
}
