import jwt from "jsonwebtoken";

const sendCookie = (user, res, message, statusCode) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 15 * 60 * 1000),
      secure: process.env.NODE_ENV !== "Development",
      sameSite: process.env.NODE_ENV !== "Development" ? "none" : "lax",
    })
    .json({ success: true, message: message });
};

const removeCookie = (res) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: process.env.NODE_ENV !== "Development",
      sameSite: process.env.NODE_ENV !== "Development" ? "none" : "lax",
    })
    .json({ success: true, message: "Logged out successfully" });
};

export { sendCookie, removeCookie };
