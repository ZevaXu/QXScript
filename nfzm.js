var body = $response.body;
var obj = JSON.parse(body);
var url = $request.url;

if (/\/mobile\/user/.test(url) && obj.data){
    obj.data.menber_type = 5;
    obj.data.expire_time = "2030-05-05";
}

if (/\/mobile\/contens/.test(url) && obj.data.user){
    obj.data.user.menber_type = 5;
    obj.data.user.expire_time = "2030-05-05";
    obj.data.user.islogin = true;
    obj.data.user.isview = true;
    obj.data.user.isNewsStand = 2;
    obj.data.user.isdigg = true;
    obj.data.user.isfav = true;
}

body = JSON.stringify(obj);
$done({body});
