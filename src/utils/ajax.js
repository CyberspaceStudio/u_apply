const ajax = function(url,methods='GET',data={},headers = {'Content-Type': 'application/json'}){
    return new Promise((resolve,reject)=>{
        var cookies = getStorageSync('cookie')  
        if(cookies != ''){
            //已经得到了
            headers['cookie'] = cookies
        }
        wx.request({
            url: url, 
            method:methods,
            data: data,
            header:headers,
            success (res) {
                if(res.data.code != 0){
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
export default ajax