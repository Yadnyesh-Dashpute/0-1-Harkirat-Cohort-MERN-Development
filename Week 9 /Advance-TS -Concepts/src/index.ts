// ---- 1. Interface In TS:

/*
interface User{
    id:number;
    name:string;
    age:number;
    email:string;
    password:string;
}

function sumofAge(user1: User,user2:User){
    return user1.age + user2.age;
}

const age = sumofAge({name:'Tan', age:20}, {name:"Kiran", age:30})
console.log(age);

*/

// ---- 2. Pick in TS: It is used mostly for picking two or more arguments to be passed in function
 
/*

interface User{
   
    name:string;
    age:number;
    email:string;
   
}

const user1: User = {
    name:"Rakesh",
    age:10,
    email:"Abc@gmail.com"
};

type updateProps = Pick<User, 'name'|'email'>


const displayUserProfile = (user: updateProps) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
}

displayUserProfile(user1);

*/



// ---- 3. Partial in TS: It is used whenever we have to passed optional parameters means not 
// confirm about passing arguments.

// interface User{
   
//     name:string;
//     age:number;
//     email:string;
   
// }



// type updateProps = Pick<User, 'name'|'email'>

// type updatePropsOptional = Partial<updateProps>

// const displayUserProfile = (user: updatePropsOptional) => {
//     console.log(`Name: ${user.name}, Email: ${user.email}`);
// }

// displayUserProfile({name:"Rohan"});


/*

---- 4.  ReadOnly in TS: Whenever we want inner value inside the object should be
         constant in such case we used Read Only.


type User = {
   readonly name: string,
   readonly age: string,
}

const user: User = {
    name:'John',
    age:"20"
}

// user.age = 20 -->> Error - Cannot assign/change age because it is read only

*/
    
/*

---- 5. Record : Using Record we can use *type* in Object - TS Concept
    Eg:

type User = Record <string, {age:number, name:string}>;

const users: User = {
    "read1":{age:21,name:"rohan"}
}
*/



/*

---- 6. Map: Another Syntax to create key:value pair - JS Concept
    Eg:

const User = new Map()

User.set("read1",{name:"Raone",age:20})
User.set("read2",{name:"one",age:10})

User.get("read1")
User.delete("read1")


type Users = {
    name: string;
    age: number;
    email: string;
}

const User = new Map<string, Users>()

User.set("read1",{name:"Raone",age:20}) // Error - Email is not Assigned


User.get("read1")
User.delete("read1")

*/




/*

---- 7. Exclude : Similar to pick but when we call exclude then it give error
    Eg:

type EventType = 'click' | 'scroll' | 'mousemove';

type ExcludeEventType = Exclude<EventType,'scroll'>;

const handleEvent = (event: ExcludeEventType) => {
    console.log(`${event}`);
}

// handleEvent("scroll") -- Give error

handleEvent("click") //Ok 

*/




/*

---- 8. Type Inference in Zod : It is used for done runtime validation
    Eg:

*/

import { TypeOf, z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).optional(),
});

// type userProfileSchema = {
//     name: string,
//     email: string
// }
// Instead of these we use it in more cleaner way ->


type finalUserSchema = z.infer<typeof userProfileSchema>


app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);