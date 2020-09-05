class Controller {
  constructor(){
  }

  
  /**
   * @param {*} ctx
   * @param {String} str
   * @memberof Controller
   */
  demo(ctx,str) {
    ctx.body = {
      "message": "this is from " + str
    }
  }
}

export default Controller