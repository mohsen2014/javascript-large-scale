export default class Core {
  constructor(sandbox){
    this.sandbox = sandbox;
    this.modulesList = {};

  }
  register(module ,moduleName){
    this.modulesList[moduleName] = module;
  }
}