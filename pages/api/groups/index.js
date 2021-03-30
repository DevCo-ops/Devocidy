import dbConnect from "../../../utils/dbConnect";
import Group from "../../../models/Group";

export default async (req, res) => {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      Group.aggregate(
        [
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
        ],
        (err, groups) => {
          if (err)
            res
              .staus(500)
              .json({ err, message: "server unable to aggregate properly" });

          res.status(200).json(groups);
        }
      );
    case "POST":
      break;
    default:
      res.status(400).json({
        message: `${method} Is either not allowed or not a valid request method.`,
      });
      break;
  }
};
