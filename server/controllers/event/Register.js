import EventModel from "../../models/Event.js";
import fs from "fs";

export const Register = (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let createdBy = req.body.createdBy;
  let address = req.body.address;
  let date = req.body.Date;
  let price = req.body.price;
  let img = req.body.Image;

  let eventObj = new EventModel({
    title: title,
    description: description,
    createdBy: createdBy,
    Image: img,
    address: address,
    date: date,
    price: price,
  });

  console.log("Event object: " + eventObj);
  eventObj.save((err, savedEvent) => {
    if (!err) {
      let resMsg = "Event Registered.";
      console.log(resMsg);
      return res.status(200).json({ Event: savedEvent, message: resMsg });
    } else {
      console.log(`Unable to create Event with ${eventObj} due to ${err}`);
      return res.status(400).json({
        message: `Error occured while registering a event ${err}`,
      });
    }
  });
};
