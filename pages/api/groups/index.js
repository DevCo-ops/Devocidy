import dbConnect from "../../../util/dbConnect";

export default async (req, res) => {
  const db = await dbConnect();
  if (req.method === "GET") {
    db.collection("groups", (err, col) =>
      col
        .aggregate([
          {
            $lookup: {
              from: "users",
              localField: "users",
              foreignField: "_id",
              as: "users",
            },
          },
          { $unwind: "$users" },
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
            },
          },
        ])
        .toArray((err, groups) => {
          res.status(200).json(groups);
        })
    );
  }
};
