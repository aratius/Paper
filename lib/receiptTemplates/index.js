const bookstore1 = require("./bookStore1")
const osDrug = require("./osDrug")
const sevenEleven = require("./sevenEleven")
const qrCode = require("./qrCode")

module.exports = class Templates {

  static _config = {
    // bookstore1,
    // osDrug,
    // sevenEleven,
    qrCode
  }

  /**
   * get random
   * @returns {Object}
   */
  static getRandom() {
    const keys = Object.keys(this._config)
    const item = this._config[keys[Math.floor(Math.random()*keys.length)]]()
    return item
  }

}
