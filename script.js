function hamburger(){
    var x = document.getElementById('linki');
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
       x.style.backgroundColor = "aquamarine";
    }
}