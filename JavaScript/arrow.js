const user = {
    username: "john",
    price: 900,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

const chai =  () => {
    let username = "Jimmy"
    console.log(this);
}

const addTwo = (num1, num2) => ({username: "Jimmy"})


console.log(addTwo(3, 4))


