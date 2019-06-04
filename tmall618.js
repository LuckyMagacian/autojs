var width=334;
var height=115;

var checkPoints=[{x:725,y:1047},{x:725,y:1187}];
var clickPoints=[{x:1007,y:1104},{x:1007,y:1244}];
toast("点击领喵币,等待1秒");
click(913,1638);
sleep(1000);
toast("点击逛店铺,等待2秒");
click(924,1071);
sleep(2000);

toast("检查屏幕,等待1秒");
sleep(1000);
if(!requestScreenCapture()){
    toast("无权截图,等待1秒")
    sleep(1000);
}
var img=captureScreen();
toast("检查完成,等待1秒");
sleep(1000);
for(var i=0;i<checkPoints.length;i++){
    var  target= findColorEquals(img,0xffeebb,checkPoints[i].x,checkPoints[i].y,width,height);
    if(target){
        toast("发现目标,等待1秒");
        sleep(1000);
        toast("等待6秒");
        sleep(6000);
        var clickPoint=clickPoints[i];
        toast("点击目标点:"+clickPoint.x+","+clickPoint.y+"等待2秒");
        click(clickPoint.x,clickPoint.y);
        sleep(1000);
        toast("点击收下,等待1秒");
        click(565,1367);
        sleep(1000);
        break;
    }else{
        toast("未在"+i==0?"高处":"低处"+"找到目标点!等待1秒");
        sleep(1000);
    }
}
toast("返回,等待1秒");
back();
sleep(1000);
