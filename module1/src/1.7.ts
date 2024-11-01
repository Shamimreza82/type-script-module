{

    //// spread operator 
    /// rest operator
    //destructuring 


   const bros1: string[] = ['shamim', "reza", "hasan "]
   const  bros2: string[] = ['nahid', 'rahat']

   bros1.push(...bros2)

   const mentros = {
    typeScriptMentor:"mazba", 
    redux: 'mir', 
    dbms: "mizan"
   }

   const mentros2 = {
    prisma:"ferose", 
    nextJs: 'tonmoy', 
    cloud: "nahid"
   }


   const mentorList ={
    ...mentros, 
    ...mentros2
   }


//// learn Rest rest operator 

const gridFriends = (...friend: string[]) => {
    // return `hi ${friend1} ${friend2} ${friend3}`
    friend.forEach((friend: string) => console.log(`hi ${friend}`))
}

gridFriends("abul", "aslam", "reza", "shamim", "one")





 //destructuring  

const user = {
    id: 325,
    name: {
        firstName: "shamim", 
        middelName: "reza", 
        lastName: "md"
    }, 
    contactInfo: '015788888888', 
    address: "gazipur"
}

const {contactInfo, name: {firstName: midName}} = user




 //destructuring  array

 const myFriends = ['jone', "rose", "reza", "shamim", "monica", "hasan"]


 const[, , , bestFriend, ...rest ] = myFriends

















}

