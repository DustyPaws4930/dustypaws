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
      req.body.fname === "" ||
      req.body.lname === "" ||
      req.body.email === "" ||
      req.body.address === "" ||
      req.body.phoneNumber === "" ||
      req.body.password === ""
    ) {
      return res.status(400).json({ message: "Field(s) cannot be left blank" });
    }
    next();
  };
  