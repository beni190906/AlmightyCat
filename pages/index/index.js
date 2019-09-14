//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

      imgUrls: [
          'https://images.unsplash.com/photo-1568280078491-6b7449ce3b46?w=640',
          'http://images.unsplash.com/photo-1568262262114-ea68746d20b6?w=640',
          'https://images.unsplash.com/photo-1568293949816-25feeb97570b?w=640',
      ],
      // backgroundImages:"./images/background.jpg",
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 500,
      swiperCurrentIndex:0,
      serviceList: [{
        title:"快递代拿",
        icon:'./images/1.png'
      }, 
      {
        title: "闲置转让",
        icon: './images/2.png'
      }, 
      {
        title: "一键拼车",
        icon: './images/3.png'
        }, 
        {
          title: "课表查询",
        icon: './images/4.png'
        },
        {
          title: "学习库",
          icon: './images/5.png'
        },
        {
          title: "待办事项",
          icon: './images/6.png'
        }],
    },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  swiperChange(e){
    this.setData({
      swiperCurrentIndex:e.detail.current
    })
  }
})