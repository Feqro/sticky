var scrollBody = $('.fix_motion');
var scrollHeight; //스크롤의 높이
var sectionOffsetTop;
var sectionScrollTop;
var scrollRealHeight; //스크롤의 실제 움직이는 높이
var winScrollTop; //스크롤바의 높이
var scrollPercent;//스크롤 백분율값
var percent;

function scrollFunc(){
    scrollHeight = scrollBody.height();
    sectionOffsetTop = scrollBody.offset().top; //윈도우 창의 크기에 따라 달라짐
    console.log('sectionOffsetTop' + sectionOffsetTop);
    console.log('scrollTop ' + $(window).scrollTop()); //스크롤할 때마다 숫자가 달라짐 맨 위가 0

    scrollRealHeight = scrollHeight - $(window).height();
    sectionScrollTop = $(window).scrollTop() - sectionOffsetTop;
    scrollPercent = sectionScrollTop/scrollRealHeight;
    console.log('scrollPercent' + scrollPercent); //sticky가 시작되는 부분이 0, 끝나는 부분이 1이 됨
    percent = scrollPercent * 100; //그냥 scrollPercent에 100 곱한 거

    contentIn();
}

function contentIn(){
    var deviceImg = $('.fix_motion .slide .child');
    var imgWidth = deviceImg.width();
    console.log(percent + '%'); //sticky가 시작되는 부분이 0, 끝나는 부분이 100이 됨

    if(percent >= 0 && percent < 25){
        $('.fix_motion .slide .child1').addClass('active');
        slideChange(imgWidth * 0);
    }
    if(percent >=25 && percent <50){
        $('.fix_motion .slide .child2').addClass('active');
        slideChange(imgWidth * 1);
    }
    if(percent >=50 && percent <75){
        $('.fix_motion .slide .child3').addClass('active');
        slideChange(imgWidth * 2);
    }
    if(percent >=75){
        $('.fix_motion .slide .child4').addClass('active');
        slideChange(imgWidth * 3);
    }
    if(percent<0){
        $('.fix_motion .slide .child').removeClass('active');
    }

}

function slideChange(moveX){
    var slide = $('.fix_motion .slide');
    slide.css({transform:'translateX(' + -moveX + 'px)'})
}

scrollFunc(); //이렇게만 적어두면 새로고침했을 때 한 번만 찍힘
$(window).scroll(function(){ //window야 스크롤할 때마다 scrollfunc(); 실행해
    scrollFunc();
}); //여기까지 적으면 스크롤 할 때마다 계속 알려줌