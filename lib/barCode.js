const Printer = require("./printer")

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
    const msgs = ["You", "_talkin'", "_to", "_me?"]
    let cnt = 0
    const print = () => {
      this._printer.add(`
{code:${msgs[cnt % msgs.length]};option:code128,2,72,nohri}\n\n\
      `)
      if(cnt >= msgs.length-1) {
        clearInterval(this._loopTimer)
        setTimeout(() => this._printer.add("\n\n\n\n\n"), 1000)
      }
      cnt++
    }
    print()
    if(this._loopTimer != null) clearInterval(this._loopTimer)
    this._loopTimer = setInterval(print, 1000)
  }

}
