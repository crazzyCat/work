/**
 * Created by hxsd on 2017/1/17.
 */

documentReady(function () {
    var box1=document.getElementById('box1');//大图
    var img0=box1.getElementsByTagName("img")[0];
    var box2=document.getElementById('box2');//大镜子
    var span=document.getElementById('move');//小镜子
    var img=box2.getElementsByTagName("img")[0];
    var row=document.getElementsByClassName('row')[0];
    var li=row.getElementsByTagName('li');//6小图
    var size=document.getElementById('size').children;//选择尺码用
    var tex=document.getElementsByClassName('tex')[0];//数字
    var ad=document.getElementsByClassName('ad')[0];//加
    var sub=document.getElementById('sub');//减
    var good=document.getElementById('good').children;//选项卡
    var good_=document.getElementById('shadow').children;
    var price=document.getElementById('price');
    //放大镜
    box1.onmousemove= function (ev) {
        ev=ev||event;
        span.style.display="block";
        box2.style.display="block";
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var maxh=box1.offsetHeight-span.offsetHeight;//spanY轴最大偏移量
        var maxw=box1.offsetWidth-span.offsetWidth;//spanX轴最大偏移量
        var maxx=img.offsetWidth-box2.offsetWidth;//图片X轴最大偏移量
        var maxy=img.offsetHeight-box2.offsetHeight;//图片Y轴最大偏移量
        var w=ev.clientX-box1.offsetParent.offsetLeft-span.offsetWidth/2;//span的X轴偏移量
        var h=ev.clientY-2*span.offsetHeight+scrollTop;//span的Y轴偏移量
        if(w<0){w=0}//span左限制
        if(h<0){h=0}//span上限制
        if(w>maxw){w=maxw}//span右限制
        if(h>maxh){h=maxh}//span下限制
        span.style.top=h+"px";
        span.style.left=w+"px";

        var y=maxy*h/maxh;//图片的Y轴偏移量
        var x=maxx*w/maxw;//图片的X轴偏移量
        if(x<0){x=0}//图片左限制
        if(y<0){y=0}//图片上限制
        if(x>maxx){x=maxx}//图片右限制
        if(y>maxy){y=maxy}//图片下限制
        img.style.top=-y+"px";
        img.style.left=-x+"px";
    };
    box1.onmouseleave=function(){
        span.style.display="none";
        box2.style.display="none";
        document.onmousemove=null;
    };
    //换图
    for(var i=0;i<li.length;i++){
        li[i].onmouseenter= function () {
            var img2=this.getElementsByTagName('img')[0];
            img.src=img0.src=img2.src;
        }
    }
//选择尺码
    for( var j=0;j<size.length;j++){
        size[j].onclick= function () {
            tex.innerHTML='1';
            price.innerHTML='$199.00';

            for(var i=0;i<size.length;i++){
                size[i].className='';
            }
            this.className='red'
        }
    }
    //加减数量
    var num=0;
    ad.onclick= function () {
        num=tex.innerHTML;
        num++;
        tex.innerHTML=num;
        price.innerHTML='$'+199*tex.innerHTML+'.00';
    };//加数
    sub.onclick= function () {
        num--;
        if(num<0){num=0}
            tex.innerHTML=num;
        price.innerHTML='$'+199*tex.innerHTML+'.00';
    };//减数
    //选项卡
    for(var i=0;i<good_.length;i++){
        good_[i].index=i;
        good_[i].onmouseenter= function () {
                for(var k=0;k<good_.length;k++){
                    good_[k].className='';
                    good[k].className='';
                }
                this.className='shadow';
                good[this.index].className='hidden';
        }
    }
});