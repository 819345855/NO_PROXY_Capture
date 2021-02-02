Java.perform(function() {
  
    //okhttp3 过 proxy(Proxy.NO_PROXY)  
    var okHttp = Java.use("okhttp3.OkHttpClient$Builder");
    var jproxy = Java.use("java.net.Proxy");
    var type = Java.use("java.net.Proxy$Type");
    var isa = Java.use("java.net.InetSocketAddress");
    okHttp.proxy.overload("java.net.Proxy").implementation = function() {
        var sa = isa.$new("ip", 端口); //此处为 自己代理的IP和端口号
        console.log("设置代理："+sa);
        var myproxy = jproxy.$new(type.HTTP.value, sa);
        arguments[0] = myproxy;
        var ret = this.proxy.apply(this, arguments);
        return ret;
    }


  

});