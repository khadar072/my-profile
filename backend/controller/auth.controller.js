import jwt from 'jsonwebtoken'

export const adminLogin = async (req , res) =>{
    try {
        const {email, password}=req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
            const atoken = await jwt.sign(email+password,process.env.JWT_SECRET_KEY)
            return res.status(200).send({success: true,message: "login successfully",atoken})
        }else{
            return res.status(400).send({success: false,message: "your are not credintial"})
        }
    }catch (error) {
        console.log(error)
        res.status(400).send({success:false,message:error.message})
   }
}


