# RC Brand Slider

Responsive slider where you can show your brands. You can determine your item impressions by size.

<a href="http://developer.oguzhansengul.com/brand-slider/" target="_blank">Live Demo</a>
<--Install-->
```
$("#rcbrand1").rcbrand({
        visibleItems: 4,
        itemsToScroll: 3,
        animationSpeed: 200,
        infinite: true,
        navigationTargetSelector: null,
        autoPlay: {
            enable: false,
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
