function khuslen(callbackFunction) {
    let a = 4;
    callbackFunction(a)
}
function forex(param) {
    console.log(param + 4);
}

const myPromise = new Promise((resolve, rejected) => {
    let isPlaying = true;
    if(isPlaying) {
        return resolve(isPlaying)
    } else {
       return rejected(isPlaying)
    }
})
const id = 45;
const URL = `..${id}`

const fetchResult = fetch(URL);
fetchResult.then(result => 
    result.json()
    ).then(data => {
        console.log(data);
    })

    const fetchedResult = await fetch(URL);
    console.log(fetchedResult);
    const JSONResult = await fetchResult.json()
    console.log(JSONResult);