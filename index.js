//SYNCHRONOUS JAVASCRIPT
console.log(1)
console.log(2)
console.log(3)
console.log(4)


//But if we were to introduce the setTimeout function to simulate a function taking ages – 
// it might change the order in which it runs, because setTimeout() runs asynchronously. 
// In this example, it will let us skip ahead to the next line without us having to wait 2seconds. 
// It will output: 
// 1 
// 4 
// 3 – running asyncly but only for 0 sec 
// 2 – running asyncly but only for 2 sec 
console.log(1)
setTimeout(() => {
    console.log(2)
}, 2000);
setTimeout(() => {
    console.log(3)
}, 0);
console.log(4)


// We can’t really always use setTimeout() as we cant always define how long something will take to complete. 
// We want some tasks to take as much time as they need to complete. 
// “Get the data from a server asap” – not in 2 secs 
//EXAMPLE WITHOUT USING HIGHER ORDER FUNCTION. 
// the post array won't log with post 4 as allPosts will run quicker than the createPost function.

// let myPosts = ['post 1', 'post 2', 'post 3'];
// const allPosts = () => {
//     setTimeout(() => {
//         myPosts.map((post) => console.log(post)) // mapping through the myPost array and logging each post to the terminal
//     }, 1000);
// }

// const createPost = (post) => {
//     setTimeout(() => {
//         myPosts.push(`${post}`)
//     }, 2000);
// }
// createPost('Post 4')
// allPosts()

//EXAMPLE USING HIGHER ORDER FUNCTIONS WITH A CALLBACK

// let myPosts = ['post 1', 'post 2', 'post 3'];
// const allPosts = () => {
//     setTimeout(() => {
//         myPosts.map((post) => console.log(post)) // mapping through the myPost array and logging each post to the terminal
//     }, 1000);
// }

// const createPost = (post, callback) => {
//     setTimeout(() => {
//         myPosts.push(`${post}`)
//         callback()
//     }, 2000);
// }
// createPost('Post 4', allPosts)

//Async and await usiong a promise
let myPosts = ['post 1', 'post 2', 'post 3'];
const allPosts = () => {
        setTimeout(() => {
            myPosts.map((post) => console.log(post)) // mapping through the myPost array and logging each post to the terminal
        }, 1000);
}
const createPost = (post) => {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            myPosts.push(`${post}`)
            const error = true
            if(!error) {
                resolve()
            } else{
                reject('oops there has been an error')
            }
        }, 2000);
    })
}

const init = async () => {
    try {
        await createPost('Post 5')
        allPosts()
    } catch (error) {
        console.log(error)
    }
}
init()

const fetchImages =  async () => {
    try {
        let response = await fetch("https://picsum.photos/v2/list")
        console.log(response)
        let data = await response.json() // formating the response to give us the data we need
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
fetchImages()






