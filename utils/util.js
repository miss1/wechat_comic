const hosturl = 'https://route.showapi.com';
const configData = {
  showapi_appid: '33013',
  showapi_sign: '3d1eec5870f24ffc9c0270852e7b69ff'
}

/**
 * 网络请求
 * url:请求地址
 * params：请求参数
 * callback1：请求成功时的回调函数
 * callback2：请求失败时的回调函数
 */
function request(url, params, callback1, callback2){
  wx.showLoading({
    title: '加载中',
  });
  wx.request({
    url: hosturl+url,
    data: params,
    header: {
      'content-type': 'application/json' // 默认值
    },
    //method: 'POST',
    success: function(res) {
      wx.hideLoading();
      if(typeof callback1 === 'function'){
        callback1(res);
      }
    },
    fail: function(res) {
      wx.hideLoading();
      if(typeof callback2 === 'function'){
        callback2(res);
      }     
    }
  })
}

module.exports = {
  request: request,
  configData: configData
}
