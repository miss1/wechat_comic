//index.js
//获取应用实例
const app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    comicItemList: [],
    currentPage: 1,
    inputPage: 1
  },
  onLoad: function(options){
    this.getComicList(1);
  },

  pageInput: function(e){
    this.setData({
      inputPage: e.detail.value
    });
  },

  //下一页
  nextPage: function(){
    var page = this.data.currentPage;
    page++;
    this.getComicList(page);
  },

  //上一页
  upPage: function(){
    var page = this.data.currentPage;
    page--;
    if (page <= 0) {
      return false;
    }
    this.getComicList(page);
  },

  //跳页
  jumpPage: function(){
    var page = this.data.inputPage;
    this.getComicList(page);
  },

  //获取漫画列表
  getComicList: function(page){
    var _this = this;

    var params = {
      page: page,
      showapi_appid: util.configData.showapi_appid,
      showapi_test_draft: false,
      type: '/category/weimanhua/kbmh',
      showapi_sign: util.configData.showapi_sign
    }
    util.request('/958-1', params, function (res) {
      _this.setData({
        comicItemList: res.data.showapi_res_body.pagebean.contentlist,
        currentPage: page
      });
    }, null);
  }
})
