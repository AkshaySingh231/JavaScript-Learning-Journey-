// const promiseOne =new Promise(function(resolve,reject){
//    // do async task
//     //Db calls ,cryptoGraphy ,network
//     setTimeout(function(){
//          console.log(`Async task is complete`);
//         resolve();
//     },1000);
// });
// promiseOne.then(function(){
//     console.log(`Promise consumed`);
// });

const PromiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
          console.log(`let's run`);
          resolve();
    },2000);
})

PromiseTwo.then(function(){
    console.log(`all clear`);
})
// new Promise(function(resolve ,reject){
//     setTimeout(function(){
//         console.log(`Async task 2`);
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("Async 2 resolved");
// })

const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Async3`);
        resolve({username:"akshay" ,email : "singh9484@gmail.com"});
    },1000)
}).then(function(user){
    console.log(user);
});


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username : "Akshay" ,LastName : "Pratap Singh"});
        }
        else{
           reject({error: "Something went wrong"});
        }
    },1000)
}).then(function(user){
    console.log(user);
}).catch(function(err){
    console.log(err);
}).finally(function() {
    console.log(`Gets out From the Jungle!`);
});