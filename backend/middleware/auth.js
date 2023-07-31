const JWTService = require("../services/JWTService");
const User = require("../models/user");
const UserDTO = require("../DTO/user");

const auth = async (req, res, next) => {
  try {
    const { refreshToken, accessToken } = req.cookies;
    if (!refreshToken || !accessToken) {
      const error = {
        status: 401,
        message: "unauthorized",
      };
      return next(error);
    }
    let _id;
    let user;
    _id = JWTService.verifyAccessToken(accessToken);
    JWTService.verifyRefreshToken(refreshToken);

    user = await User.findOne({ _id });
    const userDto = new UserDTO(user);
    req.user = userDto;
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = auth;
