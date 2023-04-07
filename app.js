let cake ={}
console.log(cake)

Object.defineProperty(
    cake,"Ingredients",{
        value :["Sugar","Ingridents"],
        enumerable:true,
        configurable:true,
        writable:true
    }
)

console.log(cake)

// In the above example, notice how we modified the structure 
// of the cake object using Object.defineProperty(). 
// Self-modification deals with the ability to access or create new 
// properties and modify the structure of a program in runtime.