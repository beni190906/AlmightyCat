Component({
  data: {
    selected: 1,
    color: "#e6e6e6",
    backgroundColor: "#FFFCFDFF",
    selectedColor: "#363636",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "/images/index.png",
        selectedIconPath: "/images/index_sel.png"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "我的",
        iconPath: "/images/mine.png",
        selectedIconPath: "/images/mine_sel.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(data.index);
      this.setData({
        selected: data.index
      })
      wx.switchTab({ url })
    }
  }
})