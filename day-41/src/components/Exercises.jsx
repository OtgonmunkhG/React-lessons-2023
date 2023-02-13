export default function Exercises() {
    function findMax(a, b) {
        return Math.max(a, b)
    }

    console.log(findMax(1, 2));

function findNumberInArr(arr, num) {
    const a = [1, 2, 4, 6]
    const b = ["a", "f", "c", "d"]
    console.log(findNumberInArr(b, "a"));
    console.log(findNumberInArr(a, 6));
    console.log(findNumberInArr(a, 4));
    for(let i = 0; i < arr.length; i++){
        if(num === arr[i]){
            return i
        }
    }
    return -1;
}


function randomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    const c = Math.floor(Math.random() * (max - min + 1) + min)
    return c
}
function findAverage(arr) {
    let sum = 0;
    arr.map(n => {
        sum += n
    })
    return sum / arr.length
}
function isPrime(nam) {
    if(nam < 2) {
        for(let i = 0; i < nam.length; i++){
            if(nam % i === 0){
                return false;
            }
        }
    }
    return true;
}

console.log(isPrime(90));
// console.log(findAverage(a));
// console.log(arr);

// function strToLowerCase(arr) {
//     for(let i= 0; i < arr.length, i++){

//     }
// }


console.log(randomNumber(2, 5));

    return (
        <div>
            <h1>Day-41-Exercise</h1>
        </div>
    )
}