import  jwt  from "jsonwebtoken";

const isAuthenticated=(req,res)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Please login to access this resource"
            });
        }
        const decoded=jwt.verify(token,process.env.SECRET_KEY);
        if(!decoded){
            return res.status(401).json({
                success:false,
                message:"Invalid token"
            });
        }


    } catch (error) {
        
    }
}