;(function(){
console.log('start of the javascript 1');
if(window.top.location.host != window.location.host)
        throw new Error("Not the main page");
if(parent.document.URL!=document.location.href)
        throw new Error("Not the main page")
console.log('end of the javascrit 2');
//(function(e){e.setAttribute("src","http://localhost:8081/target/target-script-min.js#anonymous");document.getElementsByTagName("body")[0].appendChild(e);})(document.createElement("script"));void(0);
(function(e){e.setAttribute("src","https://weinre.mybluemix.net/target/target-script-min.js#anonymous");document.getElementsByTagName("body")[0].appendChild(e);})(document.createElement("script"));void(0);
console.log('script injected');
})();
