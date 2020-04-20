const body=document.querySelector("body")
const IMG_NUMBER=5;
// function handleImageLoad(){
//     console.log("finished image loading")
// }
function paintImage(img_num){
    const image=new Image();
    image.src=`/images/image${img_num}.jpg`
    console.log(image.src)
    // image.addEventListener("loadend",handleImageLoad)
    image.classList.add("bgImage")
    body.appendChild(image)
}
function gen_randnum(){
    const result=Math.floor(Math.random() * IMG_NUMBER) + 1;
    return result
}
function init(){
    const rand_num=gen_randnum()
    console.log(rand_num)
    paintImage(rand_num)
}

init()