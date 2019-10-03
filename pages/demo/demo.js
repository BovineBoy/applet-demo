// pages/demo/demo.js
var util = require("../../utils/util.js");
Page({
    // Page()构造器注册页面
    /**
     * 页面的初始数据
     */
    data: {
        time: '12:01'
    },
    formSubmit: function(e) {
        var date = new Date()
        console.log(util.formatTime(date))
        console.log(`form发生了submit事件，携带数据为：`, e.detail.value)
    },
    bindTimeChange: function(e) {
        console.log(e)
        this.setData({
            time: e.detail.value
        })
    },
    formReset: function(e) {
        console.log(e)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.showModal({
            title: 'aaa',
            content: 'bbb',
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
        return {
            title: "自定义分享标题",
            path: "/page/user?id=112"
        }
    },

    /**
     * 页面滚动时执行
     */
    onPageScroll: function() {

    },

    /**
     * 页面尺寸变化时执行
     */
    onResize: function(e) {
        console.log(e)
    }
})