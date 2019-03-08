import wxErrToErrObj from './wxErrToErrObj'
export default func => obj => {
    return new Promise((resolve,reject)=>{
        func({
            ...obj,
            success(res) {
                resolve(res)
            },
            fail(err) {
                reject(wxErrToErrObj(err))
            }
        })
    })
}