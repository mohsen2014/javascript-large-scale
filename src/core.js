export default class Core {

  constructor(sandbox){
    this.sandbox = sandbox;
    this.modulesList = {};
    this.extensions = {};
  }

  register(module ,moduleName){
    this.modulesList[moduleName] = new module();
  }

  start(moduleName){
    this.modulesList[moduleName].start();

    this.render(this.modulesList[moduleName].view);
  }

  stop(moduleName){
    this.modulesList[moduleName].stop();
    delete this.modulesList[moduleName];
  }

  use(exetnsionName, _object){
    this.extensions[exetnsionName] = _object;
  }
  
  getExtension(exetnsionName){
    return this.extensions[exetnsionName];
  }

  render(model) {

    let $ = this.getExtension("jquery");
    $.append("body", model);

  }
}