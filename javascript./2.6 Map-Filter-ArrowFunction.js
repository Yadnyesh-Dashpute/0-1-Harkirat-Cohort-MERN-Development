// Arrow Function

let sum = (a,b) => {
    return a + b;
}

const ans = sum(1,2)
console.log(ans)

// Map 

const input = [1,2,3,4,5]

// const newArray = []

// for(let i=0; i<input.length; i++)
//     {
//         newArray.push(input[i]*2)
//     }

// console.log(newArray)

// Other Solution 

function transform(i){
    return i * 2;
}

console.log(input.map(transform))


// Filter 

const arr = [1,2,3,4,5,6,7,8]

function even(i)
{
    if(i % 2 == 0)
        {
            return true
        }
        else{
            return false
        }
}

console.log(arr.filter(even))
