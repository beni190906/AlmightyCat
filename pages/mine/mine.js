// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      nickName:'',
      avatarUrl:'',
      gender:'',
      province:'',
      city:'',
      country:''
    },
    serviceList:[
      {
        url:'../mine_forward/forward',icon:'',title:'分享程序'
      },
      {
        url:'../mine_help/help',icon:'',title:'使用帮助'
      },
      {
        url: '../mine_contactus/contactus', icon:'',title: '联系我们'
      }
    ],
    gtUrl:'./images/gt.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    const that = this;
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
     
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          that.setData({
            userInfo: wx.getStorageSync("userInfo")
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 授权
   */
  getUserInfo: function (e) {
    // 拒绝授权情况
    if (!e.detail.userInfo) {
      wx.showToast({
        title: '取消授权',
        icon: 'none'
      })
      return
    }
    const app = getApp()
    let beni = app.globalData.beni
    let that = this
    // Call SCF
    beni.callFunction({
      name: 'getUserInfo',
      success: function (res) {
        e.detail.userInfo.openid = res.result.openid
        app.globalData.userInfo = e.detail.userInfo
        that.setData({
          userInfo: e.detail.userInfo
        })
        wx.setStorageSync('userInfo', e.detail.userInfo)  
      },
      fail: console.error
    })
  }
});
