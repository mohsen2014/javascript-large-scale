export default class Sandbox{
  constructor(core){
    this._core = core;
  }
  findElement () {
    this._core.getExtension('$').find();
  }
}