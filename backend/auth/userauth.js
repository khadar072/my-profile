import jwt from 'jsonwebtoken'


export const userAuth = async (req , res ,next) => {
   try {
     const {atoken} = req.headers

    if (!atoken) {
        return res.send({success: false,message: "there is no token"})
    }

    const decoded_token = await jwt.verify(atoken,process.env.JWT_SECRET_KEY);

    req.admin = decoded_token
     next()
   } catch (error) {
        console.log(error)
        res.send({success:false,message:error.message})
   }
}