//app.js
App({
  onLaunch: function () {
    let beni =  this.globalData.beni
    // init Serverless
    beni.init({
      traceUser: true
    })
    // get authenticated user info
    const userInfo = wx.getStorageSync("userInfo")
    if (userInfo) {
      this.globalData.userInfo = userInfo
    }
  },
  globalData: {
    userInfo: null,
    beni: wx.cloud
  }
})