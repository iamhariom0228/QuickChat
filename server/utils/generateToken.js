import jwt from 'jsonwebtoken';
const generateTokenAndSetCookies = (id, res) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '10d',
    });

    res.cookie("jwt", token, {
        httpOnly: true, //prevent cookie access from javascript
        sameSite: "strict", //Cross-site forgery attacks protection
        secure: process.env.NODE_ENV === "production" ? true : false, //cookie will only be set on HTTPS
        maxAge: 10 * 24 * 60 * 60 * 1000,
    });
};

export default generateTokenAndSetCookies;