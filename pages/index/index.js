//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      backgroundImages:"./images/background.jpg",
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 500,
      serviceList: [{
        title:"快递代拿",
        icon:'./images/icon1.png'
      }, 
      {
        title: "快递代拿",
        icon: './images/icon2.png'
      }, 
      {
        title: "快递代拿",
        icon: './images/icon3.png'
        }, {
          title: "快递代拿",
        icon: './images/icon3.png'
        },
        {
          title: "快递代拿",
          icon: './images/shield.png'
        },
        {
          title: "快递代拿",
          icon: './images/shield.png'
        }],
    }
  
})