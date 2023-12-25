gsap.from("#page1 h1,#page1 p",{
    x:-200,
    opacity:0,
    delay:0.2,
    stagger:0.5
})
gsap.from("#page2 .pictures",{
    opacity:0,
    scrollTrigger:{
        trigger:".pictures",
        scroller:"body",
        start:"top 20%",
        end:"bottom",
        duration:2
    }
})