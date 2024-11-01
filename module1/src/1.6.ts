///// leaning function

///normal function 
//arrow function


function add(number1: number, number2: number = 10) : number{ ////// retune type define  
    return number1 +  number2
}

add(2, "2")

const addArrow = (num1: number, num2: number) : number => {  ////// retune type define  
return num1 + num2
}

addArrow(2, 5)


//// Object --> function --. method 

const poorUser = {
    name: "shamim", 
    balance: 0, 
    addBalance(balance: number): string{
       return ` My new Balance ${this.balance + balance}` 
    }
}


const arr : number[] = [1, 4, 10] 

const newArray: number[] = arr.map((element : number) => element*element )

