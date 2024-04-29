var tl = new TimelineMax({ repeat: -1, repeatDelay: 0.5 });
tl.to(".box", 1, {
    scale: 0.1,
    y: 60,
    repeat: 1,
    yoyo: true,
    stagger: {
        amount: 1,
        from: "center"
    }
})