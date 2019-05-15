import Core from "../src/core";
import Sandbox from '../src/sandbox';

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
});