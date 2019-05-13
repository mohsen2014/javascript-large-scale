import Core from './../src/core';

describe('provide infrastructure for module', () => {
  it('should impliment core class', () => {
    const core = new Core();
    expect(core).toBeInstanceOf(Core);
  });


});