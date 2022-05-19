import User from "../models/User.js";
export const SignUp = (req, res) => {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let password = req.body.password;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;
  let address = req.body.address;

  let userObj = new User({
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    address: address,
  });

  try {
    User.find({ email: email }, async (err, user) => {
      if (user.length > 0) {
        res.status(401).json(`User with email already exists`);
      } else {
        await userObj.save();
        res.status(201).json(userObj);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

export const Login = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  User.find({ email: email }, (err, user) => {
    if (!err) {
      if (user.length <= 0) {
        res.status(400).json({
          message: `User not found`,
        });
      } else if (user[0].password == password) {
        res.status(200).json(user);
      } else {
        res.status(400).json({
          message: `User's password associated with email does not match.`,
        });
      }
    } else {
      res.status(400).json({
        message: `Error occured while login: ${err}`,
      });
    }
  });
};

export const GetUser = (req, res) => {
  let id = req.params.id;
  User.find({ id: id }, (err, user) => {
    if (!err) {
      res.status(200).json(user);
    } else {
      res.status(400).json("Error occured while getting user: " + err);
    }
  });
};
