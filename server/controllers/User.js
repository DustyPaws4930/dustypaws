import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const SignUp = async (req, res) => {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let password = req.body.password;
  let email = req.body.email;
  let file = req.body.file;
  let Dob = req.body.Dob;
  let phoneNumber = req.body.phoneNumber;
  let role = req.body.isNgo ? "ngo" : "user";
  let address = { street: req.body.street, city: req.body.city };

  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  password = await bcrypt.hash(password, salt);
  let userObj = new User({
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    file: file,
    Dob: Dob,
    role: role,
    phoneNumber: phoneNumber,
    address: address,
  });
  console.log(`User obj: ${userObj}`);
  try {
    User.find({ email: email }, async (err, user) => {
      if (user.length > 0) {
        res.status(401).json(`User with email already exists`);
      } else {
        let savedUser = await userObj.save();
        const token = jwt.sign(
          {
            savedUser,
          },
          "Langara123"
        );

        res.status(200).json({ user: token });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

export const Login = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  // Todo: Move the SECRET KEY To .env file
  try {
    User.findOne({ email: email }, async (err, user) => {
      if (user === null) {
        console.log("No registered User not found with email: " + email);
        res.status(400).json({
          message: `User not found`,
        });
      } else if (!err) {
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign(
            {
              user,
            },
            "Langara123"
          );
          console.log("User found with the associated Email");
          res.status(200).json({ user: token });
        } else {
          console.log("User's password associated with email does not match.");
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
  } catch (err) {
    console.log("Error Occured while login.");
  }
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

// // SV:
// ToDo: This code here work perfect in the error handling.
// try {
//   let user = await User.findOne({ email: email });
//   if (!user) {
//     throw new Error("No User Found");
//   } else if (user.password == password) {
//     const token = jwt.sign(
//       {
//         user,
//       },
//       "Langara123"
//     );

//     res.status(200).json({ user: token });
//   } else {
//     res.status(400).json({
//       message: `User's password associated with email does not match.`,
//     });
//   }
// } catch (error) {
//   res.status(400).json({
//     message: `No User Found`,
//   });
//   console.log(`findOne error--> ${error}`);
//   return error;
// }
