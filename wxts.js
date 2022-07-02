var body = $response.body;
var url = $request.url;


const path1 = '/mine';
const path2 = '/pay/memberinfo?forceRefresh';
const path3 = '/timewallet'


if (url.indexOf(path1) != -1){
    let obj = JSON.parse(body);

    obj.subscriptionInfo.desc = "您已是会员";
    obj.subscriptionInfo.buttonText = "";
    obj.timeWalletInfo.label = "你是会员 · 拥有无限时长";
    obj.timeWalletInfo.remainSeconds = 0;
    delete obj.activities[0].buttonDesc;

    body = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1){
    let obj = JSON.parse(body);

    obj.isMember = 1;
    obj.startTime = 1646540603;
    obj.endTime = 1741237583;
    obj.expiresIn = 94696920;
    obj.subscriptionDesc = "已加入会员";
    obj.subscriptionButtonLabel = "";

    body = JSON.stringify(obj);
}

if (url.indexOf(path3) != -1){
    let obj = JSON.parse(body);

    obj.remainSeconds = 999999;
    obj.freeMember.freeMemberType = 0

    body = JSON.stringify(obj);
}

$done({body});

/*
^https?:\/\/i\.at\.qq\.com\/(mine|pay\/memberinfo\?forceRefresh|timewallet)


*/

