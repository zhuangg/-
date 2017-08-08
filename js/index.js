$(function () {
    /*顶部的鼠标移动颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function () {
        $(this).css('color','#fff');
    }).mouseout(function () {
        $(this).css('color','#a4b094');
    })
    //购物车
    $('.shopCar').mouseover(function () {
        $(this).css({color:'#FF6700', background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function () {
        $(this).css({color:'#a4b094', background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    });
    var flag = true;
    //输入框 移入效果
    $('.ser1').mousemove(function () {
        if(flag){
            $('.ser1 input').css('border','1px solid #999');
            $('.ser2').css({border:'1px solid #999', borderLeft:'none'});
        }
    }).mouseout(function () {
        if(flag){
            $('.ser1 input').css('border','1px solid #ccc');
            $('.ser2').css({border: '1px solid #ccc', borderLeft:'none'})
        }
    });
    //热门搜索 移入效果
    $('.hots a').mouseover(function () {
        $(this).css({color:'#fff', background:'#FF6700'})
    }).mouseout(function () {
        $(this).css({color:'#757575', background:'#eee'})
    });
    //搜索效果
    $('.ser2').mouseover(function () {
        $(this).css({color:'#fff', background:'#FF6700', border:'1px solid #FF6700'});
        $('.ser1').css('border-right','none')
    }).mouseout(function () {
        $(this).css({color:'#000', background:'#fff', border:'1px solid #ccc', borderLeft:'none'})
    });
    //表单获取焦点的时候
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color','#FF6700');
        $('.ser2').css('border-color','#FF6700');
        $('.keywordsList').show().css('border-color','#FF6700');
    }).blur(function () {
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    });
    //导航效果
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color','#FF6700');
        if($(this).index() < 7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();//停止当前动画和动画队列
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {$(this).children('a').css('color','#000');});
    $('.nav').mouseout(function () {$('.select').slideUp().finish();});
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish();
    }).mouseout(function () {$('.select').slideUp();});
    //轮播图效果
    var num = 0;
    var timer;
    timer = setInterval(autoplay,2000);
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    });
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay, 2000)
    });
    $('.direcL').click(function(){  //上一张
        clearInterval(timer);
        num = num - 1;
        if(num < 0){ num = 4; }
        displayImg();
    });
    $('.direcR').click(function(){  //下一张
        clearInterval(timer);
        num = num + 1;
        if(num > 4){ num = 0; }
        displayImg();
    });
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({background:"#000", opacity:'0.5'});
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        if(num > 4){ num = 0; }
        displayImg();
    }
    $();
    //隐藏的导航
    $('.navL li').mouseover(function () {
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide').css({
            boxShadow:'rgba(170,170,170,0.5) 0 0 20px', borderTop:'1px solid #eee', borderBottom:'1px solid #eee'
        });
    }).mouseout(function () {
        $(this).css('background','transparent');
    });
    //鼠标移出二级导航的时候,让他消失
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide');
    });
    //鼠标移入三级导航的时候,也要让他显示
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    });
    //小米明星单品切换
    //手动
    $('.next').click(function () { next(); });
    $('.prev').click(function () { prev(); });
    //自动
    var clockLR;
    $('.p').mouseover(function(){
        clearInterval(clockLR);
    }).mouseout(function(){
        clockLR=setInterval(autoLR,2000);
    });
    clockLR = setInterval(autoLR,2000);
    function autoLR(){
        if($('.scroll nav').css('left')!='0px'){ prev(); }
        else if($('.scroll nav').css('left') == '0px'){ next(); }
    }
    function next() {
        $('.scroll nav').css('left','-1226px');
        $('.next').css('color','#dfdfe0').siblings().css('color', '#333');
    }
    function prev() {
        $('.scroll nav').css('left','0');
        $('.prev').css('color','#dfdfe0').siblings().css('color','#333');
    }
    //智能硬件
    $('.proList .toAll a').mouseover(function () {
        $(this).css('color','#FF6700').find('.iconfont').css('color','#FF6700');
    }).mouseout(function () {
        $(this).css('color','#000').find('.iconfont').css('color','#B0B0B0');
    });
    //搭配/配件/周边  通用的
    $('.ProLi>li').mouseover(function () {
        $(this).find('.slideDiv').stop(true,false).slideDown();
    }).mouseout(function () {
        $(this).find('.slideDiv').stop(true,false).slideUp();
    });
    function sameLi(same,sam2){
        $(same).mouseover(function () {
            var a = $(this).index();
            $(this).css({color:'#FF6700',borderBottom:'2px solid #FF6700'}).siblings().css({
                color:'#000',borderBottom:'none'});
            $(sam2).find('.ProLi').eq(a).removeClass('hide').siblings().addClass('hide');
        });
    }
    sameLi('.list41 li','.productR2');//搭配
    sameLi('.list42 li','.productR3');//配件
    sameLi('.list5 li','.productR4');//周边
    //为你推荐
    $('.recommend .scroll2 li').mouseover(function () {
        $(this).find('img').css('marginTop','48px');
    }).mouseout(function () {
        $(this).find('img').css('marginTop','50px');
    });
    //手动
    var anum = 0;
    var step = null;
    var nnum = 0;
    $('.next2').click(function() {
        ++anum;
        if(anum < 4) {
            step = -(anum * 1226);
            $('.scroll2 nav').css('left', step + 'px');
            if($('.scroll2 nav').css('left') == '-1226px'){
                $('.next2').add('.prev2').css('color','#333');
            }else if($('.scroll2 nav').css('left') == '-2452px'){
                $('.next2').add('.prev2').css('color','#333');
            }else if($('.scroll2 nav').css('left') == '-3678px'){
                $('.next2').css('color','#eee').siblings('.prev2').css('color','#333');
            }
            nnum = anum;
        }
        else{ anum = 3; }
    });
    $('.prev2').click(function() {
        --anum;
        if(anum >= 0){
            $('.scroll2 nav').css('left',step+(1226 * (nnum-anum)) + 'px');
            if($('.scroll2 nav').css('left') =='0px'){
                $('.next2').css('color','#333').siblings('.prev2').css('color','#dfdfe0');
            }else if($('.scroll2 nav').css('left') == '-1226px'){
                $('.next2').add('.prev2').css('color','#333');
            }else if($('.scroll2 nav').css('left') == '-2452px'){
                $('.next2').add('.prev2').css('color','#333');
            }
        }else{ anum = 0; }
    });
    //自动
    var clockLR2;
    $('.p1').mouseover(function(){
        clearInterval(clockLR2);
    }).mouseout(function(){
        clockLR2=setInterval(autoLR2,3000);
    });
    clockLR2=setInterval(autoLR2,3000);
    function autoLR2(){
        if($('.scroll2 nav').css('left') =='0px'){
            $('.scroll2 nav').css('left','-1226px');
            $('.next2').add('.prev2').css('color','#333');
        }else if($('.scroll2 nav').css('left') == '-1226px'){
            $('.scroll2 nav').css('left','-2452px');
            $('.next2').add('.prev2').css('color','#333');
        }else if($('.scroll2 nav').css('left') == '-2452px'){
            $('.scroll2 nav').css('left','-3678px');
            $('.next2').css('color','#dfdfe0').siblings('.prev2').css('color','#333');
        }else if($('.scroll2 nav').css('left') == '-3678px'){
            $('.scroll2 nav').css('left','0');
            $('.next2').css('color','#333').siblings('.prev2').css('color','#dfdfe0');
        }
    }
    //内容
    //方块显示隐藏
    $('.contList>li').mouseover(function(){
        index = $(this).index();
        $(this).find('.p2').css('opacity','1');
    }).mouseout(function(){
        $(this).find('.p2').css('opacity','0');
    });
    //方块鼠标移上去效果
    $('.p2').mouseover(function(){
        $(this).css('background','#757575');
    }).mouseout(function(){
        $(this).css('background','#b0b0b0');
    });
    //点击方块翻页
    var num2 = [0,0,0,0]; //当前显示的
    var index = 0;
    $('.l2').mouseover(function(){//后3个鼠标变成手型
        num2[index] > 0 ? $(this).css('cursor','pointer') : $(this).css('cursor','default');
    }).click(function(){
        if(num2[index] > 0){num2.splice(index,1,num2[index]-1);}//添加前一个,往左翻页
        else if(num2[index] == 0){$(this).css('cursor','default');}
        showN($('.contBox'),num2);
    });
    $('.r2').mouseover(function(){//前3个鼠标变成手型
        num2[index] < 3 ? $(this).css('cursor','pointer') : $(this).css('cursor','default');
    }).click(function(){
        if(num2[index] >= 0 && num2[index]<3){num2.splice(index,1,num2[index]+1);}//右翻页
        else if(num2[index] == 3){$(this).css('cursor','default');}
        showN($('.contBox'),num2);
    });
    //点击圆圈的时候效果
    $('.round2 p').mouseover(function () {
        if($(this).index() == num2[index]){
            $(this).css({border:'2px solid #ff6700', background:'#fff'})
        }else{
            $(this).css({background:'#ff6700', cursor:' pointer'});
            $('.round2').eq(index).find('p').eq(num2[index]).css({border:'2px solid #ff6700', background:'#fff'})
        }
    }).mouseout(function(){
        $('.round2').eq(index).find('p').css({background:'#b0b0b0', cursor:'default'}).eq(num2[index]).css({border:'2px solid #ff6700', background:'#fff'})
    });
    //显示图片
    function showN(obj,num2){
        obj.eq(index).find('li').hide();
        obj.eq(index).find('li').eq(num2[index]).show();
        $('.round2').eq(index).find('p').css({border:'2px solid #fff', background:'#b0b0b0'}).eq(num2[index]).css({border:'2px solid #ff6700', background:'#fff'})
    }
    //点击圆圈的时候翻页
    $('.round2 p').click(function(){
        num2[index] = $(this).index();
        showN($('.contBox'),num2);
        $('.round2').eq(index).find('p').css('background','#b0b0b0');
        $(this).css({border:'2px solid #ff6700', background:'#fff'})
    });
    //前往..div的hover效果
    $('.goTo').mouseover(function(){
        $(this).css({background:$(this).css('color'), color:'#fff', cursor:'pointer'})
    }).mouseout(function(){
        $(this).css({color:$(this).parent().css('color'), background:'#fff'});
    });
    //视频
    $('.video .toAll a').mouseover(function () {
       $(this).css({color:'#ff6700', cursor:'pointer'}).find('i').css('color','#ff6700');
    }).mouseout(function () {
        $(this).css({color:'#000'}).find('i').css('color','#B0B0B0');
    });
    $('.video .videoList li').mouseover(function () {
        $(this).css({boxShadow:'rgb(170,170,170) 0 0 28px', marginTop:'12px'}).find('.icon-bofang').css('color','#FF6700');
    }).mouseout(function () {
        $(this).css({boxShadow:'none', marginTop:'14px'}).find('.icon-bofang').css('color','#fff');
    })
})

