
/*sticky navbar*/
let myNav= document.querySelector("#my-nav"),
    offsetTopValue = myNav.offsetTop;

console.log(offsetTopValue);

window.onscroll = function () {
   if (window.pageYOffset > offsetTopValue) {
     myNav.classList.add("sticky")
   }else {
       myNav.classList.remove("sticky")
   }
};



/*progress circle*/

$(".progress-bar").loading();
$('input').on('click', function () {
    $(".progress-bar").loading();
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


/*multiply slider*/

$(window).load(function() {

    $("#rcbrand1").rcbrand({
        visibleItems: 2,
        itemsToScroll: 3,
        animationSpeed: 200,
        loop:true,
        navigationTargetSelector: true,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        },
        responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 1,
                itemsToScroll: 1
            },
            landscape: {
                changePoint:640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: {
                changePoint:768,
                visibleItems: 3,
                itemsToScroll: 3
            }
        }
    });

    $("#rcbrand2").rcbrand({
        visibleItems: 3,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 3000,
            pauseOnHover: true
        }
    });

    $("#rcbrand3").rcbrand({
        loop: true,
    });

});


try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
        return true;
    }).catch(function(e) {
        var carbonScript = document.createElement("script");
        carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
        carbonScript.id = "_carbonads_js";
        document.getElementById("carbon-block").appendChild(carbonScript);
    });
} catch (error) {
    console.log(error);
}



var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



