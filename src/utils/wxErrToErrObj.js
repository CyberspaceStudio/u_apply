export default wxErr => {
    const {errMsg, errCode} = wxErr;
    let str = errMsg;

    if(errCode){
        str += `| code: ${errCode}`
    }
    return new Error(str);
}