export default function FindOdd() {
  const arr = [5, 6, 4, 12, 19, 121, 1, 7, 9, 632];
  function findEven(arr) {
    return arr.filter((a) => a % 2 === 0);
  }
  function findSecond(arr) {
    return arr.filter((a) => a % 2 !== 0);
  }
  const evenNumbers = findEven(arr);
  const oddNumbers = findSecond(arr);
  return (
    <div>
      <h1>Find odd even</h1>
      <h3>
        Even numbers
        {evenNumbers &&
          evenNumbers.map((e, ind) => {
            return (
              <div key={ind}>
                <p>{e}</p>
              </div>
            );
          })}
      </h3>
      <h3>
        Odd numbers
        {oddNumbers &&
          oddNumbers.map((o, ind) => {
            return (
              <div key={ind}>
                <p>{o}</p>
              </div>
            );
          })}
      </h3>
    </div>
  );
}
