import Module from './../src/module';

describe('Name of the group', () => {
  let module;
  beforeEach(() => {
    module = new Module()    
  });

  it("should have a view", () => {

    expect(module.view).toBeDefined();
    expect(typeof module.view).toBe("string");

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

  it('should use findElement ', () => {
    const Sandbox = jest.fn();
    Sandbox.mockImplementation(() => {
      return {findElement: jest.fn()}
    });
    const module = new Module(new Sandbox());
    module.onClick();
    
    expect(module.sandbox.findElement).toHaveBeenCalled();
  })

  it('should use findElement with a parameter as the selector ', () => {
    const Sandbox = jest.fn();
    Sandbox.mockImplementation(() => {
      return {findElement: jest.fn()}
    });
    const module = new Module(new Sandbox());
    const selector = 'selector';
    module.onClick(selector);
    
    expect(module.sandbox.findElement).toHaveBeenCalledWith(selector);
  })
});