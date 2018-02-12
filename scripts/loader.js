//1. make sure the import has loaded before trying to get it's content
    window.addEventListener('HTMLImportsLoaded', function (e) {
    
        // 2. all imports loaded so grab the DOM of the imported html
        var link = document.querySelector('link[rel="import"]');
        var content = link.import;
        
        // 3. Grab elements from static.html's document.
        var nav = content.getElementById('navmodule');
        var footer = content.getElementById('footermodule');
        
        //4. insert imported content into the right place in the page
       
        document.getElementById('page-nav').appendChild(nav);
        document.getElementById('page-footer').appendChild(footer);
    });