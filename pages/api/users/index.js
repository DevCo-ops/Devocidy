import dbConnect from "../../../util/dbConnect";

export default async (req, res) => {
  let users;
  const db = await dbConnect();
  if (req.method === "GET") {
    db.collection("users", (err, col) =>
      col.find({}).toArray((err, data) => {
        users = data;
        res.status(200).json(users);
      })
    );
  }
};
