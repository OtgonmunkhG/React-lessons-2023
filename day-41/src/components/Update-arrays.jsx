export default function UpdateArrays() {
    let arr = [2, 3, 4, 5];
    console.log(arr);
    arr.push(6)
    console.log(arr);
    arr.unshift(1)
    console.log(arr);
    arr.pop()
    console.log(arr);
    arr.shift()
    console.log(arr);
    arr.splice(1, 1)
    console.log(arr);
    // arr.splice(1, 4)
    // console.log(arr);
    const b = arr.slice(1, 2)

    console.log(arr.reverse());
    console.log(b);

    let a = [ 1 , 3, 2, 5, 11, 12, 23, 100]
    console.log(a.sort());

    //sort [1, 100, 11, 12, 2, 23, 3]
    a.sort((a, b) => a - b)
    console.log(a);
    let d = [1, 2];
    let e = [4, 5];
    const f = d.concat(e)
    console.log(f);

    e = [...d];
    console.log(e); 

    console.log(a.filter(el => el > 5));
    //hussen arr awah

    

  

    return(
        <div>
            <p>Arrays</p>
        </div>
    )
}