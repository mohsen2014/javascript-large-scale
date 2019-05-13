export default class Core {

  constructor(sandbox){
    this.sandbox = sandbox;
    this.modulesList = {};

  }

  register(module ,moduleName){
    this.modulesList[moduleName] = module;
  }

  start(moduleName){
    const module = new this.modulesList[moduleName]();
    module.start();
    return module;
  }
}