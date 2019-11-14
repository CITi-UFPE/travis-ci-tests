describe('Example Tests', () => {
  it('should do some assertions', () => {
    const text1 = 'hello';
    const text2 = 'world';
    const text3 = `${text1} ${text2}`;

    expect(text3).toBe('hello world');
  });
});
