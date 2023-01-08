// use bellow function for print the whole page of web
    function wholepage() {
        window.print();
    }

// use bellow function for print the specific part/div/contentof web page
    function myfunct(paravalue) {
        var backup=document.body.innerHTML;
        var result=document.getElementById(paravalue).innerHTML;
        document.body.innerHTML=result;
        window.print();
        document.body.innerHTML=backup;
    }

        
