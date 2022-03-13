// Code your solutions in this file

function writeCards(arr, adj) {
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${adj} gift!`);
    }
    return newArr;
}

function countDown(num) {
    let i = num;
    while (i>-1) {
        console.log(i);
        i--;
    }
}