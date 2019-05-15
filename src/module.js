export default class Module{
  constructor(sandbox){
    this.sandbox = sandbox;
  }

  start(){
  }

  stop(){

  }

  findElement( selector ) {
    this.sandbox.findElement(selector);
  }
  
}