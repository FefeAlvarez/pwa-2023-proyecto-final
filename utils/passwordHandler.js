const bcryptjs = require("bcryptjs")


const encriptarPass = async(password)=>{
const hash = await bcryptjs.hash(password, 10)
return hash
}

const compararHash=async(password, hash)=>{
return await bcryptjs.compare(password,hash)
}


module.exports={encriptarPass, compararHash}