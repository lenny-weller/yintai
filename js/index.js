window.onload=function(){
     var wechat=$(".wechat");
	 var ewm=$(".ewmchat");
	 for(i=0;i<ewm.length;i++){
	 	wechat[i].index=i;
	 	wechat[i].onmouseover=function(){
	 		ewm[this.index].style.display="block";
	 	}
	 	wechat[i].onmouseout=function(){
	 		ewm[this.index].style.display="none";
	 	}
	 }


     var ph=$(".phapp");
	 var app=$(".appphone");
	 for(i=0;i<app.length;i++){
	 	ph[i].index=i;
	 	ph[i].onmouseover=function(){
	 		app[this.index].style.display="block";
	 	}
	 	ph[i].onmouseout=function(){
	 		app[this.index].style.display="none";
	 	}
	 }




     var my=$(".my");
	 var xx=$(".xx");
	 for(i=0;i<xx.length;i++){
	 	my[i].index=i;
	 	my[i].onmouseover=function(){
	 		xx[this.index].style.display="block";
	 	}
	 	my[i].onmouseout=function(){
	 		xx[this.index].style.display="none";
	 	}
	 }

     
    var teimaitop=$(".teimaitop")[0];
	var teimaileft=$(".teimaileft");
	// var tms=$("tm",tmtop);
	var xiatus=$("ul",$(".temaibot")[0]);
	var tms=gc("fl");
	
	tms[0].className="fl hot";
	for(var i=0;i<tms.length;i++){
		tms[i].index=i;
		tms[i].onmouseover=function(){
			for(var j=0;j<tms.length;j++){
				tms[j].className="fl";
				xiatus[j].style.display="none";
			}
			tms[this.index].className="fl hot";
			xiatus[this.index].style.display="block";
		}		
	}



    var xbttop=$(".xbttop")[0];
	var xbtright=$(".xbtright");
	// var tms=$("tm",tmtop);
	var xbtus=$(".xbtu",$(".xbtbot")[0]);
	var lms=gc("lm");
	
	lms[0].className="lm hot";
	for(var i=0;i<lms.length;i++){
		lms[i].index=i;
		lms[i].onmouseover=function(){
			for(var j=0;j<lms.length;j++){
				lms[j].className="lm";
				xbtus[j].style.display="none";
			}
			lms[this.index].className="lm hot";
			xbtus[this.index].style.display="block";
		}		
	}


// banner处的选项卡
   var banxxk1=$(".banxxk1");
	 var banbox=$(".banbox");
	 for(i=0;i<banbox.length;i++){
	 	banxxk1[i].index=i;
	 	banxxk1[i].onmouseover=function(){
	 		banbox[this.index].style.display="block";
	 	}
	 	banxxk1[i].onmouseout=function(){
	 		banbox[this.index].style.display="none";
	 	}
	 }



   var banxxk2=$(".banxxk2");
	 var banboxa=$(".banboxa");
	 for(i=0;i<banboxa.length;i++){
	 	banxxk2[i].index=i;
	 	banxxk2[i].onmouseover=function(){
	 		banboxa[this.index].style.display="block";
	 	}
	 	banxxk2[i].onmouseout=function(){
	 		banboxa[this.index].style.display="none";
	 	}
	 }


    var banxxk3=$(".banxxk3");
	 var banboxb=$(".banboxb");
	 for(i=0;i<banboxb.length;i++){
	 	banxxk3[i].index=i;
	 	banxxk3[i].onmouseover=function(){
	 		banboxb[this.index].style.display="block";
	 	}
	 	banxxk3[i].onmouseout=function(){
	 		banboxb[this.index].style.display="none";
	 	}
	 }



    var banxxk4=$(".banxxk4");
	 var banboxc=$(".banboxc");
	 for(i=0;i<banboxc.length;i++){
	 	banxxk4[i].index=i;
	 	banxxk4[i].onmouseover=function(){
	 		banboxc[this.index].style.display="block";
	 	}
	 	banxxk4[i].onmouseout=function(){
	 		banboxc[this.index].style.display="none";
	 	}
	 }


    var banxxk5=$(".banxxk5");
	 var banboxd=$(".banboxd");
	 for(i=0;i<banboxd.length;i++){
	 	banxxk5[i].index=i;
	 	banxxk5[i].onmouseover=function(){
	 		banboxd[this.index].style.display="block";
	 	}
	 	banxxk5[i].onmouseout=function(){
	 		banboxd[this.index].style.display="none";
	 	}
	 }



    var banxxk6=$(".banxxk6");
	 var banboxe=$(".banboxe");
	 for(i=0;i<banboxe.length;i++){
	 	banxxk6[i].index=i;
	 	banxxk6[i].onmouseover=function(){
	 		banboxe[this.index].style.display="block";
	 	}
	 	banxxk6[i].onmouseout=function(){
	 		banboxe[this.index].style.display="none";
	 	}
	 }


    var banxxk7=$(".banxxk7");
	 var banboxf=$(".banboxf");
	 for(i=0;i<banboxf.length;i++){
	 	banxxk7[i].index=i;
	 	banxxk7[i].onmouseover=function(){
	 		banboxf[this.index].style.display="block";
	 	}
	 	banxxk7[i].onmouseout=function(){
	 		banboxf[this.index].style.display="none";
	 	}
	 }



     var banxxk8=$(".banxxk8");
	 var banboxg=$(".banboxg");
	 for(i=0;i<banboxg.length;i++){
	 	banxxk8[i].index=i;
	 	banxxk8[i].onmouseover=function(){
	 		banboxg[this.index].style.display="block";
	 	}
	 	banxxk8[i].onmouseout=function(){
	 		banboxg[this.index].style.display="none";
	 	}
	 }


     var banxxk9=$(".banxxk9");
	 var banboxh=$(".banboxh");
	 for(i=0;i<banboxh.length;i++){
	 	banxxk9[i].index=i;
	 	banxxk9[i].onmouseover=function(){
	 		banboxh[this.index].style.display="block";
	 	}
	 	banxxk9[i].onmouseout=function(){
	 		banboxh[this.index].style.display="none";
	 	}
	 }



    var banxxk10=$(".banxxk10");
	 var banboxi=$(".banboxi");
	 for(i=0;i<banboxi.length;i++){
	 	banxxk10[i].index=i;
	 	banxxk10[i].onmouseover=function(){
	 		banboxi[this.index].style.display="block";
	 	}
	 	banxxk10[i].onmouseout=function(){
	 		banboxi[this.index].style.display="none";
	 	}
	 }









// banner轮播
	var middle=$(".bannertu")[0];
	var imgs=$("a",$(".imgbox")[0]);
	var lis=$("li",$(".imglist")[0]);
	var btnr=$(".btnr")[0];
	var btnl=$(".btnl")[0];
	//页面初始化
	imgs[0].style.zIndex=10;
	lis[0].style.background="red";
	//自动轮播
	//记录当前图片下标
	var now=0;
	var t=setInterval(move,2000);
	//鼠标移入停  移出轮播
	middle.onmouseover=function(){
		clearInterval(t);
		btnl.style.display="block";
      	btnr.style.display="block";
	}
	middle.onmouseout=function(){
		t=setInterval(move,2000);
		btnl.style.display="none";
      	btnr.style.display="none";
	}


	for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
        	for(var i=0;i<imgs.length;i++){
        		// imgs[i].style.zIndex=5;
                animate(imgs[i],{opacity:0});
        		lis[i].style.background="";
        	}
        lis[this.index].style.background="red";
		// imgs[this.index].style.zIndex=10;
        animate(imgs[this.index],{opacity:1});
		now=this.index;
        }
	}
	

	function move(){
		now++;
		if(now==imgs.length){
			now=0;
		}
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.zIndex=5;
            animate(imgs[i],{opacity:0});
			lis[i].style.background="";
		}
		lis[now].style.background="red";
		// imgs[now].style.zIndex=10;
        animate(imgs[now],{opacity:1});
	}

    function movel(){
		now--;
		if(now<0){
			now=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.zIndex=5;
            animate(imgs[i],{opacity:0});
			lis[i].style.background="";
		}
		lis[now].style.background="red";
		// imgs[now].style.zIndex=10;
        animate(imgs[now],{opacity:1});
	}

 btnr.onclick=function(){
  	move()
  }
  btnl.onclick=function(){
  	movel()
  }



var fix=$(".fix")
var navnr=$(".navnr")
for (var i = 0; i < fix.length; i++) {
  fix[i].tt=i;
  fix[i].onmouseover=function(){
    navnr[this.tt].style.display="block";
  }
  fix[i].onmouseout=function(){
    navnr[this.tt].style.display="none";
  }
};



// 边界导航
document.documentElement.scrollTop=1;
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
var biankuang=$(".biankuang")[0];
// var navnr=$(".navnr");
var nr=$(".nr")
var flagtop=1
var flagdown=true
var nowl=0
window.onscroll=function  () {
  if(obj.scrollTop>=900){
    if (flagtop==1) {
      biankuang.style.display="block"
      flagtop=2
      flagdown=true
    }
  }
  else{
    if (flagdown==true) {
      biankuang.style.display="none"
      flagtop=1
      flagdown=false
    }
  }
  for (var i = 0; i < nr.length; i++) {
    if(nr[i].offsetTop<=obj.scrollTop+150){
      for (var j = 0; j < navnr.length; j++) {
        navnr[j].style.display="none"
      }
      navnr[i].style.display="block"
      nowl=i
    }
  };
}
for (var k=0;k<navnr.length;k++) {
  navnr[k].tt=k;
  navnr[k].onclick=function(){
    animate(obj,{scrollTop:nr[this.tt].offsetTop-150},600);
      navnr[this.tt].style.display="block";
      nowl=this.tt;
  }
  }





// 中间轮播
// 1
      var nrmid=$("a",$(".nrmid")[0]);
      var btnl2=$(".btnl2")[0];
      var btnr2=$(".btnr2")[0];
      var dd=$(".yuan1");
      var shi=$(".nrmid")[0];
      var mw=parseInt(getStyle(nrmid[0],"width"));
      nrmid[0].style.zIndex=10;
      dd[0].style.background="red";
      var now1=0;
      var next1=0;
      shi.onmouseover=function(){
      	btnl2.style.display="block";
      	btnr2.style.display="block";
      }
      shi.onmouseout=function(){
      	btnl2.style.display="none";
      	btnr2.style.display="none";
      }
      for (var i = 0; i < dd.length; i++) {
      	dd[i].index=i;
      	dd[i].onclick=function(){
      		if (now1>this.index) {
      			nrmid[this.index].style.left=-mw+"px";
      			animate(nrmid[now1],{left:mw});
      			animate(nrmid[this.index],{left:0});
      		}else if (now1<this.index) {
      			nrmid[this.index].style.left=mw+"px";
      			animate(nrmid[now1],{left:-mw});
      			animate(nrmid[this.index],{left:0});
      		}else{
      			 return;
      		}
      		dd[now1].style.background="#ccc";
      		dd[this.index].style.background="red";
      		now1=this.index;
      		next1=this.index;
      	}
      }
     
     
     
    btnl2.onclick=function(){
     	dd[0].style.background="red";
     	dd[1].style.background="";
     	animate(nrmid[1],{left:mw});
     	animate(nrmid[0],{left:0});
        
    }	
    
     btnr2.onclick=function(){
     dd[0].style.backgroundColor="";
     dd[1].style.backgroundColor="red";
     animate(nrmid[0],{left:-mw});
     animate(nrmid[1],{left:0})
    }



// 2
      var nrmid1=$("a",$(".nrmid1")[0]);
      var btnl3=$(".btnl3")[0];
      var btnr3=$(".btnr3")[0];
      var dd2=$(".yuan2");
      var shi2=$(".nrmid1")[0];
      var mw=parseInt(getStyle(nrmid1[0],"width"));
      nrmid1[0].style.zIndex=10;
      dd2[0].style.background="red";
      var now2=0;
      var next2=0;
      shi2.onmouseover=function(){
      	btnl3.style.display="block";
      	btnr3.style.display="block";
      }
      shi2.onmouseout=function(){
      	btnl3.style.display="none";
      	btnr3.style.display="none";
      }
      for (var i = 0; i < dd2.length; i++) {
      	dd2[i].index=i;
      	dd2[i].onclick=function(){
      		if (now2>this.index) {
      			nrmid1[this.index].style.left=-mw+"px";
      			animate(nrmid1[now2],{left:mw});
      			animate(nrmid1[this.index],{left:0});
      		}else if (now2<this.index) {
      			nrmid1[this.index].style.left=mw+"px";
      			animate(nrmid1[now2],{left:-mw});
      			animate(nrmid1[this.index],{left:0});
      		}else{
      			 return;
      		}
      		dd2[now2].style.background="#ccc";
      		dd2[this.index].style.background="red";
      		now2=this.index;
      		next2=this.index;
      	}
      }
     
     
     
    btnl3.onclick=function(){
     	dd2[0].style.background="red";
     	dd2[1].style.background="";
     	animate(nrmid1[1],{left:mw});
     	animate(nrmid1[0],{left:0});
        
    }	
    
     btnr3.onclick=function(){
     dd2[0].style.backgroundColor="";
     dd2[1].style.backgroundColor="red";
     animate(nrmid1[0],{left:-mw});
     animate(nrmid1[1],{left:0})
    }


// 3
      var nrmid2=$("a",$(".nrmid2")[0]);
      var btnl4=$(".btnl4")[0];
      var btnr4=$(".btnr4")[0];
      var dd3=$(".yuan3");
      var shi3=$(".nrmid2")[0];
      var mw=parseInt(getStyle(nrmid2[0],"width"));
      nrmid2[0].style.zIndex=10;
      dd3[0].style.background="red";
      var now3=0;
      var next3=0;
      shi3.onmouseover=function(){
      	btnl4.style.display="block";
      	btnr4.style.display="block";
      }
      shi3.onmouseout=function(){
      	btnl4.style.display="none";
      	btnr4.style.display="none";
      }
      for (var i = 0; i < dd3.length; i++) {
      	dd3[i].index=i;
      	dd3[i].onclick=function(){
      		if (now3>this.index) {
      			nrmid2[this.index].style.left=-mw+"px";
      			animate(nrmid2[now3],{left:mw});
      			animate(nrmid2[this.index],{left:0});
      		}else if (now3<this.index) {
      			nrmid2[this.index].style.left=mw+"px";
      			animate(nrmid2[now3],{left:-mw});
      			animate(nrmid2[this.index],{left:0});
      		}else{
      			 return;
      		}
      		dd3[now3].style.background="#ccc";
      		dd3[this.index].style.background="red";
      		now3=this.index;
      		next3=this.index;
      	}
      }
     
     
     
    btnl4.onclick=function(){
     	dd3[0].style.background="red";
     	dd3[1].style.background="";
     	animate(nrmid2[1],{left:mw});
     	animate(nrmid2[0],{left:0});
        
    }	
    
     btnr4.onclick=function(){
     dd3[0].style.backgroundColor="";
     dd3[1].style.backgroundColor="red";
     animate(nrmid2[0],{left:-mw});
     animate(nrmid2[1],{left:0})
    }



// 4
      var nrmid3=$("a",$(".nrmid3")[0]);
      var btnl5=$(".btnl5")[0];
      var btnr5=$(".btnr5")[0];
      var dd4=$(".yuan4");
      var shi4=$(".nrmid3")[0];
      var mw=parseInt(getStyle(nrmid3[0],"width"));
      nrmid3[0].style.zIndex=10;
      dd4[0].style.background="red";
      var now4=0;
      var next4=0;
      shi4.onmouseover=function(){
      	btnl5.style.display="block";
      	btnr5.style.display="block";
      }
      shi4.onmouseout=function(){
      	btnl5.style.display="none";
      	btnr5.style.display="none";
      }
      for (var i = 0; i < dd4.length; i++) {
      	dd4[i].index=i;
      	dd4[i].onclick=function(){
      		if (now4>this.index) {
      			nrmid3[this.index].style.left=-mw+"px";
      			animate(nrmid3[now4],{left:mw});
      			animate(nrmid3[this.index],{left:0});
      		}else if (now4<this.index) {
      			nrmid3[this.index].style.left=mw+"px";
      			animate(nrmid3[now4],{left:-mw});
      			animate(nrmid3[this.index],{left:0});
      		}else{
      			 return;
      		}
      		dd4[now4].style.background="#ccc";
      		dd4[this.index].style.background="red";
      		now4=this.index;
      		next4=this.index;
      	}
      }
     
     
     
    btnl5.onclick=function(){
     	dd4[0].style.background="red";
     	dd4[1].style.background="";
     	animate(nrmid3[1],{left:mw});
     	animate(nrmid3[0],{left:0});
        
    }	
    
     btnr5.onclick=function(){
     dd4[0].style.backgroundColor="";
     dd4[1].style.backgroundColor="red";
     animate(nrmid3[0],{left:-mw});
     animate(nrmid3[1],{left:0})
    }


// 5
      var nrmid4=$("a",$(".nrmid4")[0]);
      var btnl6=$(".btnl6")[0];
      var btnr6=$(".btnr6")[0];
      var dd5=$(".yuan5");
      var shi5=$(".nrmid4")[0];
      var mw=parseInt(getStyle(nrmid4[0],"width"));
      nrmid4[0].style.zIndex=10;
      dd5[0].style.background="red";
      var now5=0;
      var next5=0;
      shi5.onmouseover=function(){
      	btnl6.style.display="block";
      	btnr6.style.display="block";
      }
      shi5.onmouseout=function(){
      	btnl6.style.display="none";
      	btnr6.style.display="none";
      }
      for (var i = 0; i < dd5.length; i++) {
      	dd5[i].index=i;
      	dd5[i].onclick=function(){
      		if (now5>this.index) {
      			nrmid4[this.index].style.left=-mw+"px";
      			animate(nrmid4[now5],{left:mw});
      			animate(nrmid4[this.index],{left:0});
      		}else if (now5<this.index) {
      			nrmid4[this.index].style.left=mw+"px";
      			animate(nrmid4[now5],{left:-mw});
      			animate(nrmid4[this.index],{left:0});
      		}else{
      			 return;
      		}
      		dd5[now5].style.background="#ccc";
      		dd5[this.index].style.background="red";
      		now5=this.index;
      		next5=this.index;
      	}
      }
     
     
     
    btnl6.onclick=function(){
     	dd5[0].style.background="red";
     	dd5[1].style.background="";
     	animate(nrmid4[1],{left:mw});
     	animate(nrmid4[0],{left:0});
        
    }	
    
     btnr6.onclick=function(){
     dd5[0].style.backgroundColor="";
     dd5[1].style.backgroundColor="red";
     animate(nrmid4[0],{left:-mw});
     animate(nrmid4[1],{left:0})
    }







// 小轮播

   // var ii=$(".kk");
   // var iil=$(".kk1")[0];
   // var iir=$(".kk2")[0];
   // var width=parseInt(getStyle(ii[0],"width"));
   // for (var i = 0; i < ii.length; i++) {
   // 	if (i==0) {
   // 		continue;
   // 	};
   // 	ii[i].style.left=width+"px";
   // };
   // var nowi=0;
   // var nexti=0;
   // function moveL(){
   // 	nexti++;
   // 	if (nexti>ii.length-1) {
   // 		nexti=0;
   // 	}
   // 	ii[nexti].style.left=width+"px";
   // 	animate(ii[nowi],{left:-width});
   // 	animate(ii[nexti],{left:0});
   // 	nowi=nexti;
   // }
   //  function moveR(){
   // 	nexti--;
   // 	if (nexti<0) {
   // 		nexti=ii.length-1;
   // 	}
   // 	ii[nexti].style.left=-width+"px";
   // 	animate(ii[nowi],{left:width});
   // 	animate(ii[nexti],{left:0});
   // 	nowi=nexti;
   // }
   // iil.onclick=function(){
   // 	   moveR();
   // }
   // iir.onclick=function(){
   // 	      moveL();
   // }




   
slunbotu(".nrbot",".kk",".kk1",".kk2");
slunbotu(".nrbot",".zz",".zz1",".zz2");
slunbotu(".nrbot",".ke",".ke1",".ke2");
slunbotu(".nrbot",".ze",".ze1",".ze2");
slunbotu(".nrbot",".ei",".ei1",".ei2");
slunbotu(".nrbot",".dg",".dg1",".dg2");
slunbotu(".nrbot",".mm",".mm1",".mm2");
slunbotu(".nrbot",".oi",".oi1",".oi2");
slunbotu(".nrbot",".nn",".nn1",".nn2");



/*最左边的小箭头*/
var zuo=$(".zuo");
var you=$(".you");
var zuom=$(".zuom");
var youm=$(".youm");
var zuoq=$(".zuoq");
var youq=$(".youq");
for (var i = 0; i < zuo.length; i++) {
	zuo[i].index=i;
	zuo[i].onmouseover=function(){
		zuom[this.index].style.display="block";
		zuoq[this.index].style.display="none";
	}
	zuo[i].onmouseout=function(){
		zuom[this.index].style.display="none";
		zuoq[this.index].style.display="block";
	}
}	
  for (var i = 0; i < you.length; i++) {
  	you[i].index=i;
  
	you[i].onmouseover=function(){
		youm[this.index].style.display="block";
		youq[this.index].style.display="none";
	}
	you[i].onmouseout=function(){
		youm[this.index].style.display="none";
		youq[this.index].style.display="block";
	}
}





// 黑色边框
var kuang=$(".kuang")
var tops=$(".topp")
var lefts=$(".leftt")
var rights=$(".right")
var bottom=$(".bottom")
for (var i = 0; i < kuang.length; i++) {
  kuang[i].aa=i
  kuang[i].onmouseover=function  () {
    var ow=this.offsetWidth
    var oh=this.offsetHeight
    animate(tops[this.aa],{width:ow},600)
    animate(bottom[this.aa],{width:ow},600)
    animate(lefts[this.aa],{height:oh},600)
    animate(rights[this.aa],{height:oh},600)
  }
  kuang[i].onmouseout=function  () {
    var ow=this.offsetWidth
    var oh=this.offsetHeight
    animate(tops[this.aa],{width:0},600)
    animate(bottom[this.aa],{width:0},600)
    animate(lefts[this.aa],{height:0},600)
    animate(rights[this.aa],{height:0},600)
  }
};





// $(document).ready(function(){
//            console.log($("img.lazy").length)
//             $("img.lazy").lazyload({
//           threshold : -100
//                 });
//           })

}