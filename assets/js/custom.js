var audio = new Audio('./assets/audio/trash-sound.mp3');
window.addEventListener("load", (event) => {

    var isFloadingAnimationRunning1 = false;
    var isFloadingAnimationRunning2 = false;

    var timeout_1, timeout_2, timeout_3, timeout_4, timeout_5, timeout_7, timeout_8, timeout_9, timeout_10, timeout_11,timeout_12,ms_timer_1,ms_timer_2;

    var timeouts1 = [timeout_1, timeout_2, timeout_3, timeout_4, timeout_5];
    var timeouts2 = [timeout_7, timeout_8, timeout_9, timeout_10, timeout_11,timeout_12];

    function clearTimeouts1() {
        for (var i = 0; i < timeouts1.length; i++) {
            clearTimeout(timeouts1[i]);
        }
        clearInterval(ms_timer_1)
    }
    function clearTimeouts2() {
        for (var i = 0; i < timeouts2.length; i++) {
            clearTimeout(timeouts2[i]);
        }
        clearInterval(ms_timer_2)
    }


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        autoplay: false,
        speed: 400,
        allowTouchMove: false,
        initialSlide: 0,
        keyboard: {
        enabled: true,
        },
        parallax:true,
        on: {
        init: function () {
           $(".bottom-toolbar").show();
        },
        setTransition: function (swiper) {
            $(".modal-container").hide();
            $(".modal-overlay").hide();
        },
        slideChange: function (swiper) {
            if(swiper.activeIndex !== 1){
                if($("#slide-2 .animate__animated").hasClass("animate__jackInTheBox")){
                    $("#slide-2 .animate__animated").removeClass("animate__jackInTheBox");
                }
            }
            else{
                if(!$("#slide-2 .animate__animated").hasClass("animate__jackInTheBox")){
                    $("#slide-2 .animate__animated").addClass("animate__jackInTheBox");
                }
            }
            if(swiper.activeIndex === 6 && swiper.previousIndex === 5){
                audio.play();
            }
            if(swiper.activeIndex === 4 && swiper.previousIndex === 3){
                floading_animation_2();
            }
            if(swiper.activeIndex < 4){
                if(isFloadingAnimationRunning2){
                    reset_floading_animation_2();
                }
            }

            if(swiper.activeIndex === 16 && swiper.previousIndex === 15){
                floading_animation_1();
            }
            if(swiper.activeIndex < 16){
                if(isFloadingAnimationRunning1){
                    reset_floading_animation_1();
                }
            }
        },
        },
    });

    var nested_swiper_options = {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        autoplay: false,
        speed: 400,
        allowTouchMove: false,
        initialSlide: 0,
        keyboard: {
            enabled: false,
        }
    }

    var nested_swiper_1 = new Swiper(".nested-swiper-1", {
        ...nested_swiper_options
    });
    var nested_swiper_2 = new Swiper(".nested-swiper-2", {
        ...nested_swiper_options
    });
    var nested_swiper_3 = new Swiper(".nested-swiper-3", {
        ...nested_swiper_options
    });

    $(document).on("change","#font-toggle", function(){
        if($(this).prop("checked")){
            $(".custom-font-text").each(function(){
                $(this).css("font-style","italic");
            });
        }
        else{
            $(".custom-font-text").each(function(){
                $(this).css("font-style","normal");
            });
        }
    });

    $(document).on("change","#font-toggle-2", function(){
        if($(this).prop("checked")){
            $(".custom-font-text-2").each(function(){
                $(this).css("font-style","italic");
            });
        }
        else{
            $(".custom-font-text-2").each(function(){
                $(this).css("font-style","normal");
            });
        }
    });

    $(document).on("change","#font-toggle-3", function(){
        if($(this).prop("checked")){
            $(".inbox-inter").hide();
            $(".inbox-outfit").fadeIn();
        }
        else{
            $(".inbox-outfit").hide();
            $(".inbox-inter").fadeIn();
        }
    });

    $( function() {
        $( "#fw-slider-1" ).slider({
            value: 400,
            step: 1,
            max: 900,
            min: 400,
            slide: function( event, ui ) {
                $(".custom-font-text").each(function(){
                    $(this).css("font-weight",ui.value);    
                });
            }
        });
        $( "#lh-slider-1" ).slider({
            value: 1.15,
            step: 0.05,
            max: 2,
            min: 0.75,
            slide: function( event, ui ) {
                $(".custom-font-text").each(function(){
                    $(this).css("line-height",ui.value);    
                });
            }
        });
        $( "#fw-slider-2" ).slider({
            value: 400,
            step: 1,
            max: 900,
            min: 400,
            slide: function( event, ui ) {
                $(".custom-font-text-2").each(function(){
                    $(this).css("font-weight",ui.value);    
                });
            }
        });
        $( "#lh-slider-2" ).slider({
            value: 1.15,
            step: 0.05,
            max: 2,
            min: 0.75,
            slide: function( event, ui ) {
                $(".custom-font-text-2").each(function(){
                    $(this).css("line-height",ui.value);    
                });
            }
        });
    });

    $(document).on("change","#font-family-toggle", function(){
        if($(this).prop("checked")){
            nested_swiper_1.slideTo(1);
            nested_swiper_2.slideTo(1);
            nested_swiper_3.slideTo(1);
        }
        else{
            nested_swiper_1.slideTo(0);
            nested_swiper_2.slideTo(0);
            nested_swiper_3.slideTo(0);
        }
    });
    var sysfont_swiper_options = {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        autoplay: false,
        speed: 400,
        allowTouchMove: false,
        initialSlide: 0,
        autoHeight: true,
        keyboard: {
            enabled: false,
        }
    }
    var sysfont_swiper_1 = new Swiper(".sysfont-swiper-1", {
        ...sysfont_swiper_options
    });
    var sysfont_swiper_2 = new Swiper(".sysfont-swiper-2", {
        ...sysfont_swiper_options
    });
    var sysfont_swiper_3 = new Swiper(".sysfont-swiper-3", {
        ...sysfont_swiper_options
    });

    $(document).on("change","input[name='sys-font-list']", function(){
        $(".switch-font-bottom").removeClass(function(index, className) {
            return (className.match(/\bactive-font-\S+/g) || []).join(' ');
        });
        $(".switch-font-bottom").addClass("active-"+$(this).val());
        $(".sysfont-prof").hide();
        $(".prof-"+$(this).val()).fadeIn();
        switch ($(this).val()) {
            case "font-mac":
                sysfont_swiper_1.slideTo(0); sysfont_swiper_2.slideTo(0); sysfont_swiper_3.slideTo(0);
                break;
            case "font-windows":
                sysfont_swiper_1.slideTo(1); sysfont_swiper_2.slideTo(1); sysfont_swiper_3.slideTo(1);
                break;
            case "font-linux":
                sysfont_swiper_1.slideTo(2); sysfont_swiper_2.slideTo(2); sysfont_swiper_3.slideTo(2);
                break;
            case "font-android":
                sysfont_swiper_1.slideTo(3); sysfont_swiper_2.slideTo(3); sysfont_swiper_3.slideTo(3);
                break;
            default:
                sysfont_swiper_1.slideTo(0); sysfont_swiper_2.slideTo(0); sysfont_swiper_3.slideTo(0);
          }
    });
    $(document).on("change","input[name='sys-font-list-2']", function(){
        $(".switch-font-top-2").removeClass(function(index, className) {
            return (className.match(/\bactive-font-\S+/g) || []).join(' ');
        });
        $(".switch-font-top-2").addClass("active-"+$(this).val());
        $(".inbox-img").hide();
        $(".inbox-"+$(this).val()).fadeIn();
    });

    var progress_options = {
        strokeWidth: 10,
        easing: 'easeInOut',
        color: '#243fa5',
        trailColor: '#D9D9D9',
        trailWidth: 10,
        svgStyle: null,
        fill: "#fff"
    }

    var progress_condition_opt = {
        step: function(state, circle, attachment) {
            if(state.offset === 0){
                circle.path.setAttribute('fill', "#243fa5");
            }
        }
    }

    var fontpb1 = new ProgressBar.Circle("#font-progress-1", {
        duration: 50,
        ...progress_options
    });
    var fontpb2 = new ProgressBar.Circle("#font-progress-2", {
        duration: 80,
        ...progress_options
    });
    var fontpb3 = new ProgressBar.Circle("#font-progress-3", {
        duration: 110,
        ...progress_options
    });
    var fontpb4 = new ProgressBar.Circle("#font-progress-4", {
        duration: 140,
        ...progress_options
    });
    var fontpb5 = new ProgressBar.Circle("#font-progress-5", {
        duration: 240,
        ...progress_options
    });

function reset_floading_animation_1(){
    clearTimeouts1();
    [fontpb1, fontpb2, fontpb3, fontpb4, fontpb5].forEach(pb => {
        pb.set(0);
        pb.path.setAttribute('fill', progress_options.fill);
    });
    $(".font-progress-container-2").each(function(){
        $(this).find("img").hide();
        $(this).parent().find("p").addClass("opacity-25");
    });
    isFloadingAnimationRunning1 = false;
}

function floading_animation_1(){
    isFloadingAnimationRunning1 = true;
    timeout_1 = setTimeout(() => {
        fontpb1.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-1 img`).fadeIn('fast');
            $(`#font-progress-1+p`).removeClass('opacity-25');
        }); 
    }, 1);

    timeout_2 = setTimeout(() => {
        fontpb2.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-2 img`).fadeIn('fast');
            $(`#font-progress-2+p`).removeClass('opacity-25');
        });  
    }, 44);

    timeout_3 = setTimeout(() => {
        fontpb3.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-3 img`).fadeIn('fast');
            $(`#font-progress-3+p`).removeClass('opacity-25');
        });
    }, 88);

    timeout_4 = setTimeout(() => {
        fontpb4.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-4 img`).fadeIn('fast');
            $(`#font-progress-4+p`).removeClass('opacity-25');
        });  
    }, 132);

    timeout_5 = setTimeout(() => {
        fontpb5.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-5 img`).fadeIn('fast');
            $(`#font-progress-5+p`).removeClass('opacity-25');
        }); 
    }, 176);


    var floading_time_1 = 0;
    var floading_time_max = 176;
    ms_timer_1 = setInterval(function(){
        if(floading_time_1 < floading_time_max){
            floading_time_1= floading_time_1+2;
            $("#floading-time-1").text(floading_time_1);
        }
        else{
            clearInterval(ms_timer_1)
        }
    }, 1);

}

    /* ------------------------------------------------------------- */

    var initfontpb1 = new ProgressBar.Circle("#font-progress-init-1", {
        duration: 170,
        ...progress_options
    });
    var initfontpb2 = new ProgressBar.Circle("#font-progress-init-2", {
        duration: 170,
        ...progress_options
    });
    var initfontpb3 = new ProgressBar.Circle("#font-progress-init-3", {
        duration: 170,
        ...progress_options
    });
    var initfontpb4 = new ProgressBar.Circle("#font-progress-init-4", {
        duration: 170,
        ...progress_options
    });
    var initfontpb5 = new ProgressBar.Circle("#font-progress-init-5", {
        duration: 170,
        ...progress_options
    });
    var initfontpb6 = new ProgressBar.Circle("#font-progress-init-6", {
        duration: 100,
        ...progress_options
    });

function reset_floading_animation_2(){
    clearTimeouts2();
    [initfontpb1,initfontpb2,initfontpb3,initfontpb4,initfontpb5,initfontpb6].forEach((pb)=>{
        pb.set(0);
        pb.path.setAttribute('fill', progress_options.fill);
    });
    $(".font-progress-container-1").each(function(){
        $(this).find("img").hide();
        $(this).parent().find("p").addClass("opacity-25");
    });
    isFloadingAnimationRunning2 = false;
}

function floading_animation_2(){
    isFloadingAnimationRunning2 = true;
    timeout_7 = setTimeout(() => {
        initfontpb1.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-init-1 img`).fadeIn('fast');
            $(`#font-progress-init-1+p`).removeClass('opacity-25');
        }); 
    }, 1);

    timeout_8 = setTimeout(() => {
        initfontpb2.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-init-2 img`).fadeIn('fast');
            $(`#font-progress-init-2+p`).removeClass('opacity-25');
        }); 
    }, 175);

    timeout_9 = setTimeout(() => {
        initfontpb3.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-init-3 img`).fadeIn('fast');
            $(`#font-progress-init-3+p`).removeClass('opacity-25');
        });
    }, 350);

    timeout_10 = setTimeout(() => {
        initfontpb4.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-init-4 img`).fadeIn('fast');
            $(`#font-progress-init-4+p`).removeClass('opacity-25');
        }); 
    }, 525);

    timeout_11 = setTimeout(() => {
        initfontpb5.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-init-5 img`).fadeIn('fast');
            $(`#font-progress-init-5+p`).removeClass('opacity-25');
        });  
    }, 700);

    timeout_12 = setTimeout(() => {
        initfontpb6.animate(1, {
            ...progress_condition_opt
        }, function() {
            $(`#font-progress-init-6 img`).fadeIn('fast');
            $(`#font-progress-init-6+p`).removeClass('opacity-25');
        });   
    }, 860);
    
    

    var floading_time_2 = 0;
    var floading_time_max_2 = 876;
    ms_timer_2 = setInterval(function(){
        if(floading_time_2 < floading_time_max_2){
            floading_time_2=floading_time_2+4;
            $("#floading-time-2").text(floading_time_2);
        }
        else{
            clearInterval(ms_timer_2)
        }
    }, 1);

}

$(document).on("change","input[name='social-platform']", function(){
    $(".social-platform-top").removeClass(function(index, className) {
        return (className.match(/\bactive-pf-\S+/g) || []).join(' ');
    });
    $(".social-platform-top").addClass("active-"+$(this).val());
    $(".social-platform-top").addClass("active-pf-"+$(this).val());
    $(".pf-img").hide();
    $("#"+$(this).val()+"-img").fadeIn();
});

$(document).on("click",".watch-video-btn", function(){
    $(".modal-overlay").fadeIn(100);
    $(".modal-container").fadeIn(150);
});
$(document).on("click",".modal-close-btn", function(){
    $(".modal-container").fadeOut(100);
    $(".modal-overlay").fadeOut(150);
});
$(document).on("click",".modal-overlay", function(){
    $(".modal-container").fadeOut(100);
    $(".modal-overlay").fadeOut(150);
});
    
});