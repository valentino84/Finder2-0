import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

const userAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ success: false, message: "Authorization token required" });
        }

        // ✅ Extract token from header
        const token = authorization.startsWith("Bearer ")
            ? authorization.split(" ")[1]
            : authorization;

        // ✅ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // ✅ Attach user info to req
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid user" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("User Auth Error:", error);
        res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

export default userAuth;
