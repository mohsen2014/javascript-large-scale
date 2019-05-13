export default class Core {

  constructor(sandbox){
    this.sandbox = sandbox;
    this.modulesList = {};

  }

  register(module ,moduleName){
    this.modulesList[moduleName] = new module();
  }

  start(moduleName){
    this.modulesList[moduleName].start();
  }

  stop(moduleName){
    this.modulesList[moduleName].stop();
    
  }
}