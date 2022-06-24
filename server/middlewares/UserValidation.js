export const LoginValidation = (req, res, next) => {
  if (req.body.email === "" || req.body.password === "") {
    return res
      .status(400)
      .json({ message: "Email or password cannot be left blank" });
  }
  next();
};

export const SignUpValidation = (req, res, next) => {
  if (
    req.body.username === "" ||
    req.body.email === "" ||
    req.body.password === ""
  ) {
    return res.status(400).json({ message: "Field(s) cannot be left blank" });
  }
  next();
};
