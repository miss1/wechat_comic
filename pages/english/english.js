//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    englishList: []
  },
  onLoad: function(opions){
    var _this = this;

    var params = {
      count: "10",
      showapi_appid: util.configData.showapi_appid,
      showapi_test_draft: false,
      showapi_sign: util.configData.showapi_sign
    };
    util.request('/1211-1', params, function (res) {
      _this.setData({
        englishList: res.data.showapi_res_body.data
      });
    }, null);
  }
})