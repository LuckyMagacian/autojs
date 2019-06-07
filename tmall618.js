//等待时间 短 中 长
var shortWait = 700;
var mediumWait = 1000;
var longWait = 1000;
//按键尺寸
var width = 334;
var height = 50;
//按键颜色
var color = 0xffeebb;
//检查点
var checkPoints = [{ x: 725, y: 1047 }, { x: 725, y: 1187 }];
//确认点
var clickPoints = [{ x: 1007, y: 1104 }, { x: 1007, y: 1244 }];
//初始查找结果
toast("点击领喵币");
click(913, 1638);
sleep(shortWait);
toast("点击逛店铺");
click(924, 1071);
sleep(mediumWait);

toast("检查屏幕");
sleep(shortWait);
if (!requestScreenCapture()) {
    toast("无权截图");
    sleep(shortWait);
} else {
    //截屏
    var img = captureScreen();
    //检查2个点
    var findUp = findColorEquals(img, color, checkPoints[0].x, checkPoints[0].y, width, height);
    var findDown = findColorEquals(img, color, checkPoints[1].x, checkPoints[1].y, width, height);
    if (findDown&&findUp) { //两个地方都有,判定有问题
        toast("同时在2处找到目标,页面存在多处"+color+"元素,放弃当前页面!");
        sleep(shortWait);
    } else if (findUp||findDown) { //一个地方有,符合预期
        var clickPoint = findUp?clickPoints[0]:clickPoints[1];
        //等10秒
        toast("发现目标");
        sleep(longWait);
        //点击
        toast("点击领喵币");
        click(clickPoint.x, clickPoint.y);
        sleep(mediumWait);
        //手下
        toast("点击收下");
        click(565, 1367);
        sleep(shortWait);
    }else{//都没有对应颜色的元素
        toast("未在页面找到" + color + "元素!");
        sleep(shortWait)
    }
    toast("返回");//返回
    back();
    sleep(shortWait)
}

