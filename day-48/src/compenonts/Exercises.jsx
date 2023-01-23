export default function Exercises() {
  const arr = [1, 2, 3, 4, 1];

  function filterNumbers(array, number) {
    return array.filter((a) => a === number);
  }
  function findNumber(arr) {
    let newArr = [];
    for (let i = 0; i < 10; i++) {
      const result = filterNumbers(arr, i);
      const resultObject = {
        i: result.lenth,
      };
      newArr = [...newArr, resultObject];
    }
    return newArr;
  }
  console.log(findNumber(arr));
  const number = filterNumbers(arr);
  console.log(number);

  return (
    <div>
      {number &&
        number.map((n, ind) => {
          return (
            <div key={ind}>
              <p>
                {ind}
                {n.i}
              </p>
            </div>
          );
        })}
    </div>
  );
}
