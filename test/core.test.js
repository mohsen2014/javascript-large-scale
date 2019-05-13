import Core from './../src/core';

describe('provide infrastructure for module', () => {
  it('should impliment core class', () => {
    const core = new Core();
    expect(core).toBeInstanceOf(Core);
  });

  it('should accept an object as sandbox', () => {
    var fn = jest.fn();
    const core = new Core(fn);
    expect(core.sandbox).toBe(fn);
  });
});