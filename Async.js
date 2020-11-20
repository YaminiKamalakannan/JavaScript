const posts=[
    {title:"post 1",body:"My 1st post"},
    {title:"post 2",body:"My 2nd post"}
];
function getPosts(){
    let output=""
    setTimeout(()=>{
        posts.forEach(post=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);   
}
//getPosts(); //returns posts after 1sec

// function createPost(post){
//     setTimeout(()=>{
//         posts.push(post)
//     },2000);
// }
//createPost({title:"post 3",body:"My 3rd post"}); // returs only 1st two post, since createPost 2sec

// function createPost(post,callback){
//         setTimeout(()=>{
//             posts.push(post)
//         },2000);
//         callback(); //returns 1st two post, since it took 2 sec to create post
// }
// createPost({title:"post 3",body:"My 3rd post"},getPosts);
//instead of using callbacks
//Promises 
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject("Error!!! Somthing went wrong");
            }
        },2000);
    });
}
// createPost({title:"post 3",body:"My 3rd post"}).then(getPosts).catch(err=>console.log(err));
// console.log(posts);

//Async await
async function init(){
    await createPost({title:"post 3",body:"My 3rd post"}); //instead of using .then
    getPosts();
}
//init().catch(err=>console.log(err));

//
function status(){console.log("Printed message")};
function print(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            if(message!=undefined){
                console.log(message);
                resolve();
            }
            else{
                reject("Invalid data!");
            }
        },2000)
    })
}
async function sample(){
    await print("Welcome!");
    status();
}
//sample().catch(err=>console.log(err));

/*
async function a(){
return 1;
}
a();//returns Promise {<fulfilled>: 1}

function b(){
return Promise.resolve(1);
}
b();//Promise {<fulfilled>: 1}
*/

async function sample(){
    var a=await new Promise(resolve=>{
        setTimeout(()=>resolve("One"),2000)
    });
    console.log(a);
    var b=await new Promise(resolve=>{
        setTimeout(()=>resolve("two"),1000)
    });
    console.log(b);
}
//sample();

async function sample1(){
    var a=await new Promise(resolve=>{
        setTimeout(()=>resolve("One"),2000)
    });
    console.log(a);
    var b=await new Promise(resolve=>{
        setTimeout(()=>resolve("two"),1000)
    });   
    console.log(b);
}
sample1();