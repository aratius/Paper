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
    const print = () => {
      this._printer.add(`

understand 20 male

{code:understand\,20\,0;option:code128,2,72,nohri}\n\n\


believe 60 female

{code:believe\,60\,1;option:code128,2,72,nohri}\n\n\


dance 4 male

{code:dance\,4\,0;option:code128,2,72,nohri}\n\n\



      `)
    }
    print()
    
  }

}
