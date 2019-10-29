$(function(){
    var isLogin = false;
     var link;
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })
    $(".tabdl dd").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('dd').removeClass('hover');
             $(".table").hide().eq(index).fadeIn(200);
        })
    })
    // 秒杀部分样式控制开始
    // 0:11月1日-11月3日
    // 1:11月4日-11月6日
    // 2:11月7日-11月9日
    // 3:11月1日
    // $(".time_line .itx").each(function(index){
    //     $(this).mouseenter(function(){
    //         if(index == 0){
    //             $(this).animateCss('shake')
    //         }
    //     })
    // })
    $(".m2_r").removeClass("on").eq(0).addClass("on");
     // 秒杀部分样式控制结束


     $("#getyzm").click(function(event) {
        var phone = $("#phone").val();
        if (!phone) {
            alert('请输入手机号');
            return false;
        }
        var phone_re = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0-9]{1}\d{8}$|^18[\d]{9}$|^19[\d]{9}$/;
        if (!phone_re.test(phone)) {
            alert('请输入正确的手机号');
            return false;
        }
        $.ajax({
            url: 'http://zg99.offcn.com/index/biaodan/sendmsg?actid=3829&callback=?',
            type: 'GET',
            dataType: 'jsonp',
            data: {phone: phone},
            success: function(data) {
                if (data.status=="1") {
                    //alert('正在发送请稍后...');
                    alert('正在发送请稍后...');
                    var sec = 120;
                    $("#getyzm").text(sec+'s');
                    var timer = setInterval(function (){
                        sec--;
                        $("#getyzm").text(sec+'s');
                        if (sec<1) {
                            $("#getyzm").text('获取验证码');
                            clearInterval(timer);
                        }
                    }, 1000);
                } else {
                    //alert(data.msg);
                    alert(data.msg);
                }
            }
        });
    });
    $("#getyzm1").click(function(event) {
        var phone = $("#phone1").val();
        if (!phone) {
            alert('请输入手机号');
            return false;
        }
        var phone_re = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0-9]{1}\d{8}$|^18[\d]{9}$|^19[\d]{9}$/;
        if (!phone_re.test(phone)) {
            alert('请输入正确的手机号');
            return false;
        }
        $.ajax({
            url: 'http://zg99.offcn.com/index/biaodan/sendmsg?actid=3829&callback=?',
            type: 'GET',
            dataType: 'jsonp',
            data: {phone: phone},
            success: function(data) {
                if (data.status=="1") {
                    //alert('正在发送请稍后...');
                    alert('正在发送请稍后...');
                    var sec = 120;
                    $("#getyzm").text(sec+'s');
                    var timer = setInterval(function (){
                        sec--;
                        $("#getyzm").text(sec+'s');
                        if (sec<1) {
                            $("#getyzm").text('获取验证码');
                            clearInterval(timer);
                        }
                    }, 1000);
                } else {
                    //alert(data.msg);
                    alert(data.msg);
                }
            }
        });
    });
     // 开始秒杀
     $(".ms").click(function(){
        link = $(this).data("link")
        console.log(link)
     if($(this).parent().hasClass("on")){
         if(isLogin){
           $(".form_wrap").fadeOut()
           window.open(link) 
         }else{
           $(".form_wrap,.cover").fadeIn()
           clickSub()
         }
      }
   })
    // 点击抽奖
    $(".cj").click(function(){
        if(isLogin){
                 $(this).addClass("shake")
             setTimeout(()=>{
                $(".big_gift,.cover").fadeIn(800)
             },1000)
        }else{
            $(".form_wrap1,.cover").fadeIn()
            $("#dosubmit1").click(function(event) {
                var name = $("#name1").val();
                var phone = $("#phone1").val();
                var yzm = $("#yzm1").val();
                if (!name) {
                    //alert('请输入姓名');
                    alert('请输入姓名');
                    return false;
                }
                var name_re = /^[\u4e00-\u9fa5]{0,}$/;
                if (!name_re.test(name)) {
                    //alert('请输入正确的姓名');
                    alert('请输入正确的姓名');
                    return false;
                }
                if (!phone) {
                    //alert('请输入手机号');
                    alert('请输入手机号');
                    return false;
                }
                var phone_re = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0-9]{1}\d{8}$|^18[\d]{9}$|^19[\d]{9}$/;
                if (!phone_re.test(phone)) {
                    //alert('请输入正确的手机号');
                    alert('请输入正确的手机号');
                    return false;
                }
                if (!yzm) {
                    //alert('请输入手机验证码');
                    alert('请输入手机验证码');
                    return false;
                }
                $.ajax({
                    url: 'http://zg99.offcn.com/index/biaodan/register?actid=3829&callback=?',
                    type: 'GET',
                    dataType: 'jsonp',
                    data: {name: name, phone: phone, yzm: yzm },
                    success: function(data) {
                        if (data.status=="1") {
                            isLogin = true
                            $(".form_wrap1,.cover").hide()
                            // alert("福袋三")
                            // $(".cj").animateCss("shake")
                            setTimeout(()=>{
                             $(".big_gift,.cover").fadeIn(800)
                            },1000)
                        } else {
                            alert(data.msg);
                        }
                    }
                })
            })
        }
  })
    $(".form_close").click(function(){
        $(".form_wrap,.cover").fadeOut();
    });
    $(".form_close1").click(function(){
        $(".form_wrap1,.cover").fadeOut();
    });
    $(".big_gift span").click(function(){
        $(".big_gift,.cover").fadeOut();
    });
    clickSub = function(){
        $("#dosubmit").click(function(event) {
            var name = $("#name").val();
            var phone = $("#phone").val();
            var yzm = $("#yzm").val();
            if (!name) {
                //alert('请输入姓名');
                alert('请输入姓名');
                return false;
            }
            var name_re = /^[\u4e00-\u9fa5]{0,}$/;
            if (!name_re.test(name)) {
                //alert('请输入正确的姓名');
                alert('请输入正确的姓名');
                return false;
            }
            if (!phone) {
                //alert('请输入手机号');
                alert('请输入手机号');
                return false;
            }
            var phone_re = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0-9]{1}\d{8}$|^18[\d]{9}$|^19[\d]{9}$/;
            if (!phone_re.test(phone)) {
                //alert('请输入正确的手机号');
                alert('请输入正确的手机号');
                return false;
            }
            if (!yzm) {
                //alert('请输入手机验证码');
                alert('请输入手机验证码');
                return false;
            }
            $.ajax({
                url: 'http://zg99.offcn.com/index/biaodan/register?actid=3829&callback=?',
                type: 'GET',
                dataType: 'jsonp',
                data: {name: name, phone: phone, yzm: yzm },
                success: function(data) {
                    if (data.status=="1") {
                        isLogin = true
                        $(".form_wrap,.cover").fadeOut()
                        setTimeout(() => {
                            window.open(link)
                        }, 1000);
                    } else {
                        alert(data.msg);
                    }
                }
            })
        })
    }
})