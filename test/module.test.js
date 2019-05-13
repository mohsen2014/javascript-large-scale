import Module from './../src/module'
describe('Name of the group', () => {
  let module;
  beforeEach(() => {
    module = new Module()    
  });
  it('should call constructor ', () => {
    expect(module).toBeInstanceOf(Module)
  });

  it('should accept an object as sandbox', () => {
    const fn = jest.fn();
    const module = new Module(fn);
    expect(module.sandbox).toBe(fn)
  });

  it('should exist start method', () => {
    expect(module.start).not.toBe(undefined);
  });

  it('should exist stop method', () => {
    expect(module.stop).not.toBe(undefined);
  });
});