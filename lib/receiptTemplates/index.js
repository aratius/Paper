const bookstore1 = require("./bookStore1")

module.exports = class Templates {

  static _config = {
    bookstore1
  }

  /**
   * get random
   * @returns {Object}
   */
  static getRandom() {
    const keys = Object.keys(this._config)
    return this._config[keys[Math.floor(Math.random()*keys.length)]]
  }

}