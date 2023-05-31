const successResponse = (req, res, data = {}) => {
    res.send({
      error: false,
      success: true,
      data: {
        successResult: data
      },
    });
  };

const failResponse = (req, res, data = {},extra) => {
    res.send({
        error: false,
        success: false,
        data: {
            errorResult: data,
            data:extra                       
        },
    })
}

const errorResponse = (req, res, errorDesc, errorKey, resCode = 500) => {
    console.log(">>>>>>>>>>>>>   ERROR\n",errorDesc)
    try{
    }
    catch(error){
        console.log(error)
    }
    res.status(resCode).send({
        error: true,
        errorKey,
        errorDesc: errorDesc,
        errorMessage:errorDesc.message,
        errorStack:errorDesc.stack
    })
}