import Core from "../src/core";
import Sandbox from '../src/sandbox';

//jest.mock('../src/core');

describe('sandbox', () => {
  it('should accept core in the constructor', () => {
    const core = new Core();
    const sandbox = new Sandbox(core);
    expect(sandbox._core).toBe(core);
  });

  it('shoud have find element', () => {
    const sandbox = new Sandbox();
    Sandbox.findElement = jest.fn();
    
    expect(sandbox.findElement).toBeDefined();
  })

  it('should call core find element', () => {
    const core = new Core();
    core.use('$', {find: jest.fn()});
    const sandbox = new Sandbox(core);
    sandbox.findElement();
    
    expect(sandbox._core.getExtension('$').find).toHaveBeenCalled();
  })
});