import promisify from './promisify'


export const scanCode = async ()=>{
    return promisify(wx.scanCode)()
}
export const authorizeConfig = async ()=>{
    return promisify(wx.getSetting)()
}
export const save = async (filepPath)=>{
    return promisify(wx.saveFile)({tempFilePath:filepPath,})
}

//微信小程序扫码
// export const scanCode = async ()=>{
//     return new Promise((resolve,reject)=>{
//         wx.scanCode({
//             success(res) {
//                 resolve(res)
//             },
//             fail(res) {
//                 reject(res)
//             }
//         })
//     })
// }

//像本地文件中存储文件
// export const save = async (filepPath)=>{
//     return new Promise((resolve,reject)=>{
//         wx.saveFile({
//             tempFilePath:filepPath,
//             success(res) {
//                 resolve(res)
//             },
//             fail(res){
//                 reject(res)
//             }
//         })
//     })
// }

//获取微信小程序的授权情况
// export const authorizeConfig = async ()=>{
//     return new Promise((resolve,reject)=>{
//         wx.getSetting({
//             success(res) {
//                 resolve(res)
//             },
//             fail(err) {
//                 reject(err)
//             }
//         })
//     })
// }
