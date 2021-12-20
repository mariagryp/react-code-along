//arrow funcs

/* function returnHello( ){
    return "hello";
}*/

const returnHello = () => {
    return "hello";
    return 
}

console.log(returnHello()); 

//.....................................................//
//arrow funcs with this

//class with regular function
class Message {
    constructor(){
        this.phrase = "hello";
    }
    //regular function
    logThis(){
        console.log(this);
    }
}

const msg = new Message();
//create button without HTML
const btn1 = document.createElement("button");
btn1.innerHTML = "Click here";
btn1.setAttribute("id", "btn1");
document.body.append(btn1);
//-------------------------------------//

//class with regular function
class Message2 {
    constructor(){
        this.phrase = "Hi";
    }
    //regular function
    logThis(){
        console.log(this);
    }
}

const msg2 = new Message2();
//create button without HTML
const btn2 = document.createElement("button");
btn2.innerHTML = "Click here again";
btn2.setAttribute("id", "btn2");
document.body.append(btn2);

//----------------------//
window.addEventListener("load", () => {
    msg.logThis();
    document.querySelector("#btn1").addEventListener("click", msg.logThis);
    msg2.logThis();
    document.querySelector("#btn2").addEventListener("click", msg.logThis);
})

