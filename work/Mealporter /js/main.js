$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['section1','section2','section3','section4','section5','section6','section7','section8','section9','section10','section11','section12','section13','section14','section15','section16','section17','section18','section19','section20'],
        autoScrolling:true,
        scrollhorizontally: true,
        navigation: true,
        navigationPosition: 'right'
    });


    const $planning1 = $('.planning1');
    const $video = $('video');

    $planning1.hover(() => {
        $video.addClass('FadeInup');
    })


    const $planning2 = $('.planning2');
    const $p2M1 = $('.p2-m1');
    const $p2P1 = $('.p2-p1');
    const $p2P2 = $('.p2-p2');
    const $p2P3 = $('.p2-p3');
    const $p2P4 = $('.p2-p4');
    const $p2P5 = $('.p2-p5');
    const $p2P6 = $('.p2-p6');

    $planning2.hover(() => {
        $p2M1.addClass('FadeInup');
        $p2P1.addClass('FadeInup1');
        $p2P2.addClass('FadeInup2');
        $p2P3.addClass('FadeInup3');
        $p2P4.addClass('FadeInup4');
        $p2P5.addClass('FadeInup5');
        $p2P6.addClass('FadeInup6');
    })
        
    
    const $planning3 = $('.planning3');
    const $p3 = $('.p3');
    const $grape1 = $('.grape1');
    const $grape2 = $('.grape2');

    $planning3.hover(() => {
        $p3.addClass('FadeInLeft');
        $grape1.addClass('FadeInBottom1');
        $grape2.addClass('FadeInBottom2');
    })

    const $planning4 = $('.planning4');
    const $p4 = $('.p4');
    const $memoji1 = $('.memoji1');
    const $memoji2 = $('.memoji2');
    const $memoji3 = $('.memoji3');


    $planning4.hover(() => {
        $p4.addClass('ScaleUp');
        $memoji1.addClass('ScaleUp2');
        $memoji2.addClass('ScaleUp3');
        $memoji3.addClass('ScaleUp4');
    })

    const $planning5 = $('.planning5');
    const $solution1 = $('.solution1');
    const $solution2 = $('.solution2');
    const $solution3 = $('.solution3');
    const $p5 = $('.p5');
    const $p5P1 = $('.p5-p1');
    const $p5C1 = $('.p5-circle1');

    $planning5.hover(() => {
        $solution1.addClass('FadeInRight1-1');
        $solution2.addClass('ScaleUp1');
        $solution3.addClass('FadeInLeft1-1');
        $p5.addClass('ScaleUp');
        $p5P1.addClass('FadeInBottom2');
        $p5C1.addClass('ScaleUp0');
    })

    const $service1 = $('.service1');
    const $s1m1 = $('.s1-m1');
    const $s1m2 = $('.s1-m2');
    const $s1s1 = $('.s1-s1');
    const $s1s2 = $('.s1-s2');


    $service1.hover(() => {
        $s1m1.addClass('FadeInLeft');
        $s1m2.addClass('FadeInLeft');
        $s1s1.addClass('FadeInBottom1');
    })

    const $service2 = $('.service2');
    const $s2m1 = $('.s2-m1');
    const $s2m2 = $('.s2-m2');
    const $s2s1 = $('.s2-s1');
    const $s2s2 = $('.s2-s2');
    const $s2s3 = $('.s2-s3');
    const $s2s4 = $('.s2-s4');
    const $s2s5 = $('.s2-s5');
    const $s2s6 = $('.s2-s6');
    const $s2s7 = $('.s2-s7');


    $service2.hover(() => {
        $s2m1.addClass('FadeInup');
        $s2m2.addClass('FadeInup');
        $s2s1.addClass('ScaleUp');
        $s2s2.addClass('FadeInRight1');
        $s2s3.addClass('FadeInLeft1');
        $s2s4.addClass('FadeInRight2');
        $s2s5.addClass('FadeInLeft2');
        $s2s6.addClass('FadeInRight3');
        $s2s7.addClass('FadeInLeft3');


    })

    const $service3 = $('.service3');
    const $s3m1 = $('.s3-m1');
    const $s3m2 = $('.s3-m2');
    const $s3m3 = $('.s3-m3');
    const $s3m4 = $('.s3-m4');
    const $s3s1 = $('.s3-s1');
    const $s3s2 = $('.s3-s2');
    const $s3c1 = $('.s3-circle1');
    const $s3c2 = $('.s3-circle2');
    const $s3c3 = $('.s3-circle3');


    $service3.hover(() => {
        $s3m1.addClass('FadeInLeft');
        $s3m2.addClass('FadeInLeft');
        $s3m3.addClass('FadeInLeft');
        $s3m4.addClass('FadeInLeft');
        $s3s1.addClass('FadeInDown2');
        $s3s2.addClass('FadeInDown3');
        $s3c1.addClass('ScaleUp1');
        $s3c2.addClass('ScaleUp2');
        $s3c3.addClass('ScaleUp3');
    })


    const $service4 = $('.service4');
    const $s4m1 = $('.s4-m1');
    const $s4m2 = $('.s4-m2');
    const $s4s1 = $('.s4-s1');
    const $s4s2 = $('.s4-s2');
    const $s4s3 = $('.s4-s3');
    const $s4s4 = $('.s4-s4');


    $service4.hover(() => {
        $s4m1.addClass('FadeInLeft');
        $s4m2.addClass('FadeInLeft');
        $s4s1.addClass('FadeInLeft');
        $s4s2.addClass('FadeInDown1');
        $s4s3.addClass('FadeInDown2');
        $s4s4.addClass('FadeInDown3');
    })

    const $service5 = $('.service5');
    const $s5m1 = $('.s5-m1');
    const $s5m2 = $('.s5-m2');
    const $s5s1 = $('.s5-s1');
    const $s5s2 = $('.s5-s2');
    const $s5s3 = $('.s5-s3');


    $service5.hover(() => {
        $s5m1.addClass('FadeInLeft3');
        $s5m2.addClass('FadeInLeft3');
        $s5s1.addClass('FadeInLeft');
        $s5s2.addClass('FadeInLeft1');
        $s5s3.addClass('FadeInLeft2');
    })

    const $service6 = $('.service6');
    const $s6m1 = $('.s6-m1');
    const $s6m2 = $('.s6-m2');
    const $s6s1 = $('.s6-s1');
    const $s6s2 = $('.s6-s2');


    $service6.hover(() => {
        $s6m1.addClass('FadeInup');
        $s6m2.addClass('FadeInup');
        $s6s1.addClass('ScaleUp1');
        $s6s2.addClass('ScaleUp2');
    })
    const $service7 = $('.service7');
    const $s7m1 = $('.s7-m1');
    const $s7m2 = $('.s7-m2');
    const $s7s1 = $('.s7-s1');
    const $s7s2 = $('.s7-s2');
    const $s7i1 = $('.s7-i1');
    const $s7i2 = $('.s7-i2');
    


    $service7.hover(() => {
        $s7m1.addClass('FadeInLeft');
        $s7m2.addClass('FadeInLeft');
        $s7s1.addClass('FadeInLeft1');
        $s7s2.addClass('FadeInLeft2');
        $s7i1.addClass('ScaleUp0');
        $s7i2.addClass('ScaleUp1');
    })
});