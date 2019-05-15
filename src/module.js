export default class Module{
  constructor(sandbox){
    this.sandbox = sandbox;

    this.view = `<div><h1>Hello World</h1></div>`;
  }

  start(){
    console.log(1)
  }

  stop(){

  }

  onClick( selector ) {
    this.sandbox.findElement(selector);
  }
  
}