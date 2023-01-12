
function showComics(){
    let img = document.querySelectorAll("img")[0]
    if (img.style.display == "none"){
        img.style.display = "block"
    }else{
        img.style.display = "none"
    }   
}

document.querySelector("button").addEventListener("click", showComics)