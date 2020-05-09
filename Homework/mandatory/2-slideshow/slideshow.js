// Write your code here
var dog1= "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
var dog2="https://images.unsplash.com/photo-1570021974424-60e83dfee639?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80";
var dog3="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80";
var dog4="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"

const dogs = [dog1,dog2, dog3, dog4];


const imgContainer = document.querySelector("#imgContainer");
const backBtn = document.querySelector("#backBtn");
const forwardBtn = document.querySelector("#forwardBtn");
const abackBtn = document.querySelector("#abackBtn");
const aforwardBtn = document.querySelector("#aforwardBtn");
const img = document.createElement("img");
let imgIndex = 0;
// function displayImg(arr){ 
//     img.setAttribute('src',arr[0])
//     imgContainer.appendChild(img);
// }
function displayImg(arr){ 
        img.setAttribute('src',arr[imgIndex])
        imgContainer.appendChild(img);   
}
displayImg(dogs);

function forwardImg (arr){
    if(imgIndex===arr.length-1){
        imgIndex===imgIndex
    } else {
        imgIndex++  
        img.setAttribute('src',arr[imgIndex])
    }
}

forwardBtn.addEventListener("click",function(){  
    forwardImg(dogs);
});

const aforward = aforwardBtn.addEventListener("click",function(){  
    clearInterval(arewind)
    setInterval(function(){
    forwardImg(dogs);
    },2000)
    
});


function rewindImg (arr){
    if(imgIndex===0){
    // imgIndex===imgIndex
    } else {
        imgIndex-- 
        img.setAttribute('src',arr[imgIndex])
    }
}

backBtn.addEventListener("click",function(){
    rewindImg(dogs);
});

const arewind = abackBtn.addEventListener("click",function(){  
    clearInterval(aforward)
    setInterval(function(){
    rewindImg(dogs);
    },2000)    
});
