import dbConnect from "../../../utils/dbConnect";
import mongoose from "mongoose";
import Group from "../../../models/Group";

export default async (req, res) => {
  const { method, body } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      Group.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "users",
            foreignField: "_id",
            as: "users",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "owner",
            foreignField: "_id",
            as: "owner",
          },
        },
        { $unwind: "$owner" },
      ])
        .then((group) => {
          res.status(200).json(group);
        })
        .catch((err) => {
          res
            .status(500)
            .json({ err, message: "server unable to aggregate properly" });
        });
      break;
    case "POST":
      let newGroup = await new Group({
        name: body.name,
        owner: [body.ownerId],
        image: body.image,
        projectDescription: body.projectDescription,
      });
      newGroup.users.push(body.ownerId);
      await newGroup.save();
      Group.aggregate([
        { $match: { _id: mongoose.Types.ObjectId(newGroup._id) } },
        {
          $lookup: {
            from: "users",
            localField: "users",
            foreignField: "_id",
            as: "users",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "owner",
            foreignField: "_id",
            as: "owner",
          },
        },
        { $unwind: "$owner" },
      ])
        .then((group) => {
          res.status(200).json(group);
        })
        .catch((err) => {
          res
            .status(500)
            .json({ err, message: "server unable to aggregate properly" });
        });
      break;
    default:
      res.status(400).json({
        message: `'${method}' Is either not allowed or not a valid request method.`,
      });
      break;
  }
};
