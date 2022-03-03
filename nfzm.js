var body = $response.body;
var obj = JSON.parse(body);

obj.menber_type = 5;
obj.expire_time = "2030-05-05";
obj.islogin = true;
obj.isview = true;
obj.isNewsStand = 2;
obj.isdigg = true;
obj.isfav = true;
obj.isfree = 1;
obj.isbuy = true;

body = JSON.stringify(obj);
$done({body});
