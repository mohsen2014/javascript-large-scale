export default class Sandbox{
  constructor(core){
    this._core = core;
  }
  findElement (selector) {
    this._core.getExtension('$').find(selector);
  }
}