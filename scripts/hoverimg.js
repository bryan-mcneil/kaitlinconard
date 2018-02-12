function imageHover() { 
    var illustrations=document.getElementById('illustrations'),
            sketches=document.getElementById('sketches'),                  
            contact=document.getElementById('contact'),
            webcomic=document.getElementById('webcomic'),
            center=document.getElementById('homepageimg');
    illustrations.addEventListener('mouseover',function(){center.style.backgroundImage="url(/image/flyingCorgi_cover.jpg)";},true);
    illustrations.addEventListener('mouseout',function(){center.style.backgroundImage="url(/image/flyingKoi_cover.jpg)";},true);
    sketches.addEventListener('mouseover',function(){center.style.backgroundImage="url(/image/forest_cover.jpg)";},true);
    sketches.addEventListener('mouseout',function(){center.style.backgroundImage="url(/image/flyingKoi_cover.jpg)";},true);      
    contact.addEventListener('mouseover',function(){center.style.backgroundImage="url(/image/imgContact.jpg)";},true);
     contact.addEventListener('mouseout',function(){center.style.backgroundImage="url(/image/flyingKoi_cover.jpg)";},true);
      webcomic.addEventListener('mouseover',function(){center.style.backgroundImage="url(/rat_img/Cover.jpg)";},true);
     webcomic.addEventListener('mouseout',function(){center.style.backgroundImage="url(/image/flyingKoi_cover.jpg)";},true);
}