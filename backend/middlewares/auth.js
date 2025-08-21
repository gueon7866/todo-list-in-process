const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.cookies?.auth//req.cookies.auth에서 토큰 추출

    if (!token) return res.status(401).json({ message: '인증 필요 (토큰 없음)' })

    try {
        const playload = jwt.verify(token, process.env.JWT_SECRET)//jwt.verify(token, JWT_SECRET)로 유효성 검증
        req.user = playload;
        next()
    } catch (error) {
        return res.status(401).json({ message: '유효하지 않은 토큰' })
    }

}