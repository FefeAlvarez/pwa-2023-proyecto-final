const errorHandler=(res, message ='ocurrio un error', code = 403)=>{
    res.status(code)
    res.send({error: message})
}

module.exports={errorHandler}