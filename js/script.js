//页面加载完毕后触发
window.onload=function(){
	var obtn=document.getElementById("btn");
	//获取界面可视区高度
	var clientHeight=document.documentElement.clientHeight;
	var timer=null;
	var isTop=true;
	
	window.onscroll=function(){
		var osTop=document.documentElement.scrollTop || document.body.scrollTop;
		//隐藏或者显示
		if(osTop>=clientHeight){
			obtn.style.display='block';
		}else{
			obtn.style.display='none';
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop=false;
	}
	obtn.onclick=function(){
       //创建定时器
       timer=setInterval(function(){  
       	//创建滚动条高度变量    ie  || guge
        var osTop=document.documentElement.scrollTop || document.body.scrollTop;
        //创建函数
        var ispeed= Math.floor(-osTop/5);
       	//获取滚动条到顶部的高度
       	document.documentElement.scrollTop=document.body.scrollTop = osTop + ispeed;
       	isTop=true;
       	//判断当滚动条高度为0时，清除定时器。
       	if(osTop==0){
       		clearInterval(timer);
       	}
       	
       },30);
       
//     alert(osTop);

	}
}
