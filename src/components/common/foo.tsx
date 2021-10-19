const sum = (...a: number[]): number => a.reduce((acc, val) => acc + val, 0);
export default sum;
// uncomment to get a lint error
// const aString: string = 42;
