export default class Module{
  constructor(sandbox){
    this.sandbox = sandbox;
  }

  start(){
  }

  stop(){

  }

  onClick( selector ) {
    this.sandbox.findElement(selector);
  }
  
}