//app.js
App({
  onLaunch: function () {
    let beni =  this.globalData.beni
    // init Serverless
    beni.init({
      traceUser: true
    })
  },
  globalData: {
    beni: wx.cloud
  }
})