// BEGIN
export default function magic(...args) {
  const sum = args.reduce((acc, num) => acc + num, 0);
  
  const func = (...nextArgs) => {
    const nextSum = nextArgs.reduce((acc, num) => acc + num, 0);
    return magic(sum + nextSum);
  };
  
  func.valueOf = () => sum;
  
  return func;
}
// END
