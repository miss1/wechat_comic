// pages/comicdetail/comicdetail.js
const app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    title: '',
    time: '',
    imgList: []
  },

  onLoad: function (options) {
    var _this = this;

    var params = {
      id:options.id,
      showapi_appid: util.configData.showapi_appid,
      showapi_test_draft: false,
      showapi_sign: util.configData.showapi_sign
    };
    util.request('/958-2', params, function (res) {
      var item = res.data.showapi_res_body.item;
      _this.setData({
        title: item.title,
        time: item.time,
        imgList: item.imgList
      });
    }, null);
  },

  onShareAppMessage: function () {
  
  }
})