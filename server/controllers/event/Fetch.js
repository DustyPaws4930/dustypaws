import EventModel from "../../models/Event.js";

export const GetEvents = (req, res) => {
  EventModel.find({}, (err, events) => {
    if (!err) {
      res.status(200).json(events);
    } else {
      res.status(400).json("Error occured while getting events: " + err);
    }
  });
};

export const GetEventById = (req, res) => {
  let eventId = req.params.id;
  EventModel.findById(eventId, (err, event) => {
    if (!err) {
      res.status(200).json(event);
    } else {
      res.status(400).json("Error occured while getting events: " + err);
    }
  });
};
