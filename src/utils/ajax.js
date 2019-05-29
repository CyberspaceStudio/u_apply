const ajax = function(url,data={},method='GET',headers = {'Content-Type': 'application/json'}){
    return new Promise((resolve,reject)=>{
        let cookies = wx.getStorageSync('cookie');  
        if(cookies !== ''){
            data={...data,session:cookies};
        }
        if(method==='POST' || method==='PUT' || method==='DELETE'){
            headers={'Content-Type': 'application/x-www-form-urlencoded'};
        }
        wx.request({
            url, 
            method,
            data,
            header:headers,
            success (res) {
                if(res.data.errCode === -1){
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