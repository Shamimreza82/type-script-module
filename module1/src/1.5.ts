/// referance type Objest 

const user: {   ///// this call explicate style 
    company: "programming Hero Bangladesh" //// custom type this is a default type value 
    firstName: string;
    lastName: string;
    middelName?: string; /// optional type
    isMarried: boolean; 
    readonly company2: "ph" //// this is not assignable 
} = {
    company: "programming Hero Bangladesh", /////  type ---> literal type 
    firstName: "shamim", 
    lastName: "reza", 
    isMarried: true
}  


user.company = ""