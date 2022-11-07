const Printer = require("./printer")
const Templates = require("./receiptTemplates/index")

module.exports = class Random {

  /** @type {Printer} */
  _printer = null
  _loopTimer = null

  constructor() {
    this._printer = new Printer("127.0.0.1", "8080")
  }

  /**
   * start
   */
  start() {
    const print = () => {
      const text = Templates.getRandom()
      this._printer.add(text)
    }
    print()
    if(this._loopTimer != null) clearInterval(this._loopTimer)
    this._loopTimer = setInterval(print, 600 * 1000)
  }

}
