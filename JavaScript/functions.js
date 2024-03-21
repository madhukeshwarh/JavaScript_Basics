
function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}



function addTwoNumbers(number1, number2){

    return number1 + number2
}

const result = addTwoNumbers(3, 5)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}


function calculateCartPrice(val1, val2, ...num1){
    return num1
}


const user = {
    username: "",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


handleObject({
    username: "joe",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}


console.log(returnSecondValue([200, 400, 500, 1000]));