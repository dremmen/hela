//微信支付方法（点击按键调用）
import wx from 'weixin-js-sdk'
/*
微信支付方法
获取微信加签信息
@param{data}:获取的微信加签
@param{cb}:成功回调
*/
export function wexinPay (data,cb,errorCb) {
  console.log(data)
  let debug = data.debug || '' 
  let appId = data.appId
  let timestamp = data.timestamp
  let nonceStr = data.nonceStr
  let signature = data.signature
  let jsApiList = data.jsApiList
  wx.config({
    debug: debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名，见附录1
    jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })
  wx.ready(function(){
    wx.chooseCard({
      cardId: '', // 卡券Id
      timestamp: timestamp, // 卡券签名时间戳
      nonceStr: nonceStr, // 卡券签名随机串
      signType: '', // 签名方式，默认'SHA1'
      cardSign: '', // 卡券签名
      success: function (res) {
      	console.log(res)
        var cardList= res.cardList; // 用户选中的卡券列表信息
      }
    });
  })
  wx.error(function(res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    /*alert("config信息验证失败")*/
  })
}