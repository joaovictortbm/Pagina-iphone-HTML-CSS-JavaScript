const green= document.querySelector("#green");
const grafite= document.querySelector("#grafite");
const golden= document.querySelector("#golden");
const blue= document.querySelector("#blue");
const silver= document.querySelector("#silver");
const img= document.querySelector("#iphone-img");

green.addEventListener("click",()=>{
    cor("verde");
})
grafite.addEventListener("click",()=>{
    cor("grafite");
})
golden.addEventListener("click",()=>{
    cor("golden");
})
blue.addEventListener("click",()=>{
    cor("blue");
})
silver.addEventListener("click",()=>{
    
    cor("silver");
})

function cor (color){

    if(color ==="verde"){
        img.src="img/iphone_green.jpg"

    }else if(color ==="grafite"){
        img.src="img/iphone_grafite.jpg"

    }else if(color ==="golden"){
        img.src="img/iphone_golden.jpg"

    }else if(color ==="blue"){
        img.src="img/iphone_blue.jpg"

    }else if(color ==="silver"){
        img.src="img/iphone_silver.jpg"

    }

}