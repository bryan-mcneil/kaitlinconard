function imageloader(img){
    var i = img;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
    
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            
            var div = document.getElementById('loader');
            div.innerHTML = xmlhttp.responseText;
        }   
    }
    xmlhttp.open("POST", "/image/images.php?i=" + i, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}


