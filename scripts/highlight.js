var elems = document.getElementsByClassName("lte");
for(var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', function(e) {
        for(var i = 0; i < elems.length; i++) {
            var cl = elems[i].classList;
            if(cl.contains('img-active')) {
                cl.remove('img-active');
            }
        }
        e.target.classList.add('img-active');
    })
}


