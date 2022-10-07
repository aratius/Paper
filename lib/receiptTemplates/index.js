const bookstore1 = require("./bookStore1")
const aa1 = require("./aa1")

module.exports = class Templates {

  static _config = {
    bookstore1,
    aa1
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