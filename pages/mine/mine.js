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
        url:'../mine_forward/forward',icon:'images/share.png',title:'分享程序'
      },
      {
        url: '../mine_help/help', icon:'images/help.png',title:'使用帮助'
      },
      {
        url: '../mine_contactus/contactus', icon:'images/contact.png',title: '联系我们'
      }
    ],
    gtUrl:'./images/gt.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh()
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
    let that = this
    const app = getApp()
    // 更新用户信息
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              res.userInfo.openid = wx.getStorageSync("userInfo").openid
              that.setData({
                userInfo: res.userInfo
              })
              wx.setStorageSync('userInfo', res.userInfo)
            }
          })
        }
      }
    })
    this.onLoad();
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
        icon: 'none',
        duration: 600
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
        that.setData({
          userInfo: e.detail.userInfo
        })
        wx.setStorageSync('userInfo', e.detail.userInfo)  
      },
      fail: console.error
    })
  }
});
