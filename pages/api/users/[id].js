import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
    body,
  } = req;

  const db = await dbConnect();

  const userCollection = await db.collection("users", (err, col) => {
    if (err) {
      res.status(500).json({
        err,
        message: "server could not return the users collection",
      });
    } else return col;
  });

  switch (method) {
    case "GET":
      await userCollection.findById(id, (err, user) => {
        if (err)
          res.status(500).json({
            err,
            message: "server could not find user by id",
          });
        res.status(200).json(user);
      });
      break;

    case "PUT":
      await userCollection.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true },
        (err, user) => {
          if (err)
            res.status(500).json({
              err,
              message: "server could not find user by id",
            });
          res.status(200).json(user);
        }
      );
      break;

    case "DELETE":
      const user = await userCollection.deleteOne({ _id: id });
      if (!user)
        res
          .status(500)
          .json({ message: "server was unable to find or delete the user" });
      res.status(200).json({ success: true, user });
      break;

    default:
      res.status(400).json({
        message: `${method} Is either not allowed or not a valid request method.`,
      });
      break;
  }
}
