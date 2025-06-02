import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
    const token = jwt.sign({
        userId: user._id
    }, process.env.SECRET_KEY, {
        expiresIn: '1d'
    });
    
    // Remove the 'this' keyword - it's causing the error
    return res.status(200).cookie("token", token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    }).json({
        success: true,
        message: message,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            roll: user.roll,
            enrolledCourses: user.enrolledCourses,
            photouRL: user.photouRL
        }
    });
}