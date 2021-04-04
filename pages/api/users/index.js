import dbConnect from "../../../utils/dbConnect";

export default async (req, res) => {
  const { method } = req;
  const db = await dbConnect();
  if (method === "GET") {
    db.collection("users", (err, col) => {
      if (err)
        res.status(500).json({
          err,
          message: "server could not return the users collection",
        });

      col.find({}).toArray((err, users) => {
        if (err)
          res.status(500).json({
            err,
            message: "server could not parse collection to an array",
          });
        res.status(200).json(users);
      });
    });
  } else {
    res.status(400).json({
      message: `${method} Is either not allowed or not a valid request method.`,
    });
  }
};
