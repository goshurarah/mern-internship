console.log('ASYNC FUNCTION');


let myDisplay = async () => {
    let myPromise = new Promise((myResolve, myReject) => {
        setTimeout(() => {
            myResolve("I love You !!");
        }, 3000);
    });
    let result = await myPromise;
    console.log(result);
}
myDisplay();