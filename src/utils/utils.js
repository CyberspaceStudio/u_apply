//函数防抖
const throttle = (method,delay,that)=>{
    var last = 0;
    return function (){
        var now = +new Date();
        if(now - last > delay){
            method.apply(that,arguments);
            last = now;
        }
    }
}