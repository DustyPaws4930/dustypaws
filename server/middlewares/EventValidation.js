export let CheckFormFields = (req, res, next) => {
  if (
    req.body.title === "" ||
    req.body.description === "" ||
    req.body.Image === ""
  ) {
    return res.status(400).json({ message: "Field(s) cannot be left blank" });
  }
  next();
};
