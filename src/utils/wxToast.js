const showModal = (msg,title="提示")=>{
    return new Promise((resolve,reject)=>{
        wx.showModal({
            title:title,
            content:msg,
            success(res){
                if(res.confirm){
                    resolve()
                }else{
                    reject()
                }
            }
        })
    })
}
const showToast = (title,icon='none',mask=false,duration=2000)=>{
    wx.showToast({
        icon:icon,
        title:title,
        duration: duration,
        mask:mask
    });
}

const showLoading = (title='加载中',mask=true)=>{
    wx.showLoading({
        title: title,
        mask:mask
    })
}

const hideLoading = ()=>{
    wx.hideLoading()
}

export{
    showModal,
    showToast,
    showLoading,
    hideLoading
}