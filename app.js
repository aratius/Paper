const Random = require("./lib/random")
const BarCode = require("./lib/barCode")

const init = () => {
  // const random = new Random()
  // random.start()
  const barCode = new BarCode()
  barCode.start()
}

init()