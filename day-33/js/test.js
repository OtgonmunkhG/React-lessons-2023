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