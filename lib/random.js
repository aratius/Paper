const Printer = require("./printer")
const Templates = require("./receiptTemplates/index")

module.exports = class Random {

  /** @type {Printer} */
  _printer = null

  constructor() {
    console.log("ramdom");
    this._printer = new Printer("127.0.0.1", "8080")
  }

  /**
   * start
   */
  start() {
    const text = Templates.getRandom()
    this._printer.add(text)

    // TODO: ループさせる
  }

}
