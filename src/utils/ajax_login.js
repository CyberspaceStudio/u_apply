const ajax_login = function(url,data={}){
    console.log(url,data)
    return new Promise((resolve,reject)=>{
        wx.request({
            url, 
            method:'POST',
            data:data,
            header:{'Content-Type': 'application/x-www-form-urlencoded'},
            success (res) {
                if(res.data.errCode !== 0){
                    reject(res.data.msg)
                }
                else{
                    resolve(res)
                }
            },
            fail(err){
                reject(err)
            }
        })
    })
}
export default ajax_login