import dbConnect from "../../../util/dbConnect";

export default async (req, res) => {
  const db = await dbConnect();
  if (req.method === "GET") {
    db.collection("users", (err, col) =>
      col.find({}).toArray((err, users) => {
        res.status(200).json(users);
      })
    );
  }
};
