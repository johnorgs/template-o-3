
// wait same seconds of css animation
wait(function(){
  anim('.plr','opacity',0,1,0,1000);
  // remove tag 
  wait(function(){
  
    document.querySelector('.plr').remove();
    $("h1").fadeOut('slow'); 
    myFunction(); 
  },1000);
},10000);



// wait(function(){},1000)
function wait(callback, time) {
	if (typeof setTimeout !== 'undefined') {
		var t = setTimeout(function() {
			clearTimeout(t);
			return callback();
		}, time);
	}
}

// anim('.foo','opacity',0,0,1,1000)
function anim(selector, style, unit, from, to, time) {
  var self = document.querySelector(selector);
	if (!self) return;
		var start = new Date().getTime(),
		timer = setInterval(function() {
		var step = Math.min(1, (new Date().getTime() - start) / time);
		self.style[style] = (from + step * (to - from)) + unit;
		if (step == 1) clearInterval(timer);
	}, 25);
	self.style[style] = from + unit;
}



function myFunction(){
	
    
    setTimeout(function () {
    	$('.t2').removeClass('animated fadeOutUp');;
     $('div.t2').fadeIn('slow');
     $('.t2').addClass('animated fadeInDown');
 	},500)

    setTimeout(function () {
    	$('.t1').removeClass('animated fadeOut');
     $('div.t1').fadeIn('slow');
     $('.t1').addClass('animated fadeIn');
 	},1400)

     

      setTimeout(function () {
      	$('.t4').removeClass('animated fadeOutRight');
     $('div.t4').fadeIn('slow');
     $('.t4').addClass('animated fadeInRight');
 	},1900)

       setTimeout(function () {
       	$('.t3').removeClass('animated fadeOutDown');
     $('div.t3').fadeIn('slow');
     $('.t3').addClass('animated fadeInUp');
 	},2300)


    $("a.ss").click(function(){



    	setTimeout(function () {
     $('.t1').removeClass('animated fadeIn');
     $('.t1').addClass('animated fadeOut');
 	},100)

    	setTimeout(function () {
     $('.t2').removeClass('animated fadeInDown');
     $('.t2').addClass('animated fadeOutUp');;
 	},300)

    	setTimeout(function () {
     $('.t3').removeClass('animated fadeInUp');
     $('.t3').addClass('animated fadeOutDown');
 	},500)


    	setTimeout(function () {
       $('.t4').removeClass('animated fadeInRight');
     $('.t4').addClass('animated fadeOutRight');
 	},800)

    	myFunction2();


	
    
   
	});


   
}


function myFunction2(){
	
    
    setTimeout(function () {
    	$('.tt2').removeClass('animated fadeOutUp');;
     $('div.tt2').fadeIn('slow');
     $('.tt2').addClass('animated fadeInDown');
 	},500)

    setTimeout(function () {
    	$('.tt1').removeClass('animated fadeOut');
     $('div.tt1').fadeIn('slow');
     $('.tt1').addClass('animated fadeIn');
 	},1400)

     

      setTimeout(function () {
      	$('.tt4').removeClass('animated fadeOutRight');
     $('div.tt4').fadeIn('slow');
     $('.tt4').addClass('animated fadeInRight');
 	},1900)

       setTimeout(function () {
       	$('.tt3').removeClass('animated fadeOutDown');
     $('div.tt3').fadeIn('slow');
     $('.tt3').addClass('animated fadeInUp');
 	},2300)


    $("a.ss1").click(function(){



    	setTimeout(function () {
     $('.tt1').removeClass('animated fadeIn');
     $('.tt1').addClass('animated fadeOut');
 	},100)

    	setTimeout(function () {
     $('.tt2').removeClass('animated fadeInDown');
     $('.tt2').addClass('animated fadeOutUp');;
 	},300)

    	setTimeout(function () {
     $('.tt3').removeClass('animated fadeInUp');
     $('.tt3').addClass('animated fadeOutDown');
 	},500)


    	setTimeout(function () {
       $('.tt4').removeClass('animated fadeInRight');
     $('.tt4').addClass('animated fadeOutRight');
 	},800)

    	myFunction();
 
	});


    $("a.ss2").click(function(){


    	setTimeout(function () {
     $('.tt1').removeClass('animated fadeIn');
     $('.tt1').addClass('animated fadeOut');
 	},100)

    	setTimeout(function () {
     $('.tt2').removeClass('animated fadeInDown');
     $('.tt2').addClass('animated fadeOutUp');;
 	},300)

    	setTimeout(function () {
     $('.tt3').removeClass('animated fadeInUp');
     $('.tt3').addClass('animated fadeOutDown');
 	},500)


    	setTimeout(function () {
       $('.tt4').removeClass('animated fadeInRight');
     $('.tt4').addClass('animated fadeOutRight');
 	},800)

    	myFunction3();
    	
		
    });


	
   
}

function myFunction3()
{
	setTimeout(function () {
     $('div.bgimg').removeClass('animated fadeOut');
     $('div.bgimg').fadeIn('slow');
     $('div.bgimg').addClass('animated fadeIn');
 	},1000)

	setTimeout(function () {
     $('div.zx1').removeClass('animated fadeOutRight');
     $('div.zx1').fadeIn('slow');
     $('div.zx1').addClass('animated fadeInLeft');
 	},1200)



    	setTimeout(function () {
     $('p.p1').removeClass('animated fadeOutUp');
     $('p.p1').fadeIn('slow');
     $('p.p1').addClass('animated fadeInUp');
 	},1500)

    	setTimeout(function () {
     $('hr.p2').removeClass('animated fadeOutRight');
     $('hr.p2').fadeIn('slow');
     $('hr.p2').addClass('animated fadeInRight');
 	},2000)

    	setTimeout(function () {
     $('p.p3').removeClass('animated fadeOutUp');
     $('p.p3').fadeIn('slow');
     $('p.p3').addClass('animated fadeInUp');
 	},2500)

    	setTimeout(function () {
     $('p.p4').removeClass('animated fadeOutRight');
     $('p.p4').fadeIn('slow');
     $('p.p4').addClass('animated fadeInRight');
 	},3000)

    	setTimeout(function () {
     $('hr.p5').removeClass('animated fadeOutUp');
     $('hr.p5').fadeIn('slow');
     $('hr.p5').addClass('animated fadeInUp');
 	},3500)

    	setTimeout(function () {
     $('img.dd1').removeClass('animated fadeOutUp');
     $('img.dd1').fadeIn('slow');
     $('img.dd1').addClass('animated fadeInUp');
 	},4000)

    	setTimeout(function () {
     $('img.dd2').removeClass('animated fadeOutDown');
     $('img.dd2').fadeIn('slow');
     $('img.dd2').addClass('animated fadeInDown');
 	},4500)

    	setTimeout(function () {
     $('img.dd3').removeClass('animated fadeOutLeft');
     $('img.dd3').fadeIn('slow');
     $('img.dd3').addClass('animated fadeInLeft');
 	},5000)

    	setTimeout(function () {
     $('img.dd4').removeClass('animated fadeOut');
     $('img.dd4').fadeIn('slow');
     $('img.dd4').addClass('animated fadeIn');
 	},5500)

	setTimeout(function () {
     $('div.qq1').removeClass('animated fadeOut');
     $('div.qq1').fadeIn('slow');
     $('div.qq1').addClass('animated fadeIn');
 	},5500)

	setTimeout(function () {
     $('div.qq2').removeClass('animated fadeOut');
     $('div.qq2').fadeIn('slow');
     $('div.qq2').addClass('animated fadeIn');
 	},6000)

	$("div.qq1").click(function(){

		


    	

    	setTimeout(function () {
     $('p.p1').removeClass('animated fadeInUp');
     $('p.p1').fadeOut('slow');
     $('p.p1').addClass('animated fadeOuUp');
 	},500)

    	setTimeout(function () {
     $('hr.p2').removeClass('animated fadeInRight');
     $('hr.p2').fadeOut('slow');
     $('hr.p2').addClass('animated fadeOutRight');
 	},1000)

    	setTimeout(function () {
     $('p.p3').removeClass('animated fadeInUp');
     $('p.p3').fadeOut('slow');
     $('p.p3').addClass('animated fadeOutUp');
 	},1500)

    	setTimeout(function () {
     $('p.p4').removeClass('animated fadeInRight');
     $('p.p4').fadeOut('slow');
     $('p.p4').addClass('animated fadeOutRight');
 	},2000)

    	setTimeout(function () {
     $('hr.p5').removeClass('animated fadeInUp');
     $('hr.p5').fadeOut('slow');
     $('hr.p5').addClass('animated fadeOutUp');
 	},2500)

    	setTimeout(function () {
     $('img.dd1').removeClass('animated fadeInUp');
     $('img.dd1').fadeOut('slow');
     $('img.dd1').addClass('animated fadeOutUp');
 	},3000)

    	setTimeout(function () {
     $('img.dd2').removeClass('animated fadeInDown');
     $('img.dd2').fadeOut('slow');
     $('img.dd2').addClass('animated fadeOutDown');
 	},3500)

    	setTimeout(function () {
     $('img.dd3').removeClass('animated fadeInLeft');
     $('img.dd3').fadeOut('slow');
     $('img.dd3').addClass('animated fadeOutLeft');
 	},4000)

    	setTimeout(function () {
     $('img.dd4').removeClass('animated fadeIn');
     $('img.dd4').fadeOut('slow');
     $('img.dd4').addClass('animated fadeOut');
 	},4500)

	setTimeout(function () {
     $('div.qq1').removeClass('animated fadeIn');
     $('div.qq1').fadeOut('slow');
     $('div.qq1').addClass('animated fadeOut');
 	},5000)

	setTimeout(function () {
     $('div.qq2').removeClass('animated fadeIn');
     $('div.qq2').fadeOut('slow');
     $('div.qq2').addClass('animated fadeOut');
 	},5000)

	setTimeout(function () {
     $('div.zx1').removeClass('animated fadeInLeft');
     $('div.zx1').fadeOut('slow');
     $('div.zx1').addClass('animated fadeOutRight');
 	},5200)

	setTimeout(function () {
     $('div.bgimg').removeClass('animated fadeIn');
     $('div.bgimg').fadeOut('slow');
     $('div.bgimg').addClass('animated fadeOut');
 	},5500)
	
	setTimeout(function () {
    myFunction2();
 	},6000)
	

	});
}
