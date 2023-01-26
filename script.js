closeNav = () =>{
    let nav = document.getElementById("side-nav");
    let isOpen = true;
    if(isOpen){
        nav.style.display = "none";
        isOpen = false;
    }
    else{
        nav.style.display = "flex";
        isOpen = true;
    }
}