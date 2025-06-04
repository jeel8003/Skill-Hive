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
        req.id=decoded.userId
        next();


    } catch (error) {
        //code please
        console.error("Authentication error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}
export default isAuthenticated;