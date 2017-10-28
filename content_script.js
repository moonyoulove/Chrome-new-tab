var img = new Image();
    //var t = new Date().getTime();
    var u = "https://picsum.photos/1366/637?random";
    //var src_unsplash = "https://source.unsplash.com/1366x637";
    //if(t.length===2)src_unsplash = "https://source.unsplash.com/1366x637/daily";
    img.src = u;
    img.onerror = function(){document.body.style.cssText = "background-image:url('https://source.unsplash.com/1366x637');background-repeat:no-repeat;";};
    document.body.style.cssText = "background-image:url('"+ u + "');background-repeat:no-repeat;";
    document.getElementById("gbw").children[0].children[0].style.cssText = "box-shadow: #e4e4e4 0px 1px 0; background-color: rgba(255, 255, 255, 0.5); border-radius: 3px 0px 0px 3px;";
    document.getElementById("fbar").style.cssText="background-color: rgba(255, 255, 255, 0.5);";
    document.getElementsByClassName("logo-subtext")[0].style.cssText="background-color: white;width: fit-content;border-radius: 15%;padding: 4px;box-shadow: inset -1px 2px 3px 0px black;";
    Gs_color();
    function Gs_color() {
    for(var i =0,a =document.getElementsByClassName("_Gs");i<a.length;i++){
    a[i].style.color="black";
    }}
