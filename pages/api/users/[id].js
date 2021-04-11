import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
    body,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      await User.findById(id, (err, user) => {
        if (err)
          res.status(500).json({
            err,
            message: 'server could not find user by id',
          });
        res.status(200).json(user);
      });
      break;

    case 'PUT':
      await User.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true },
        (err, user) => {
          if (err)
            res.status(500).json({
              err,
              message: 'server could not find user by id',
            });
          res.status(200).json(user);
        }
      );
      break;

    case 'DELETE':
      const user = await User.deleteOne({ _id: id });
      if (!user)
        res
          .status(500)
          .json({ message: 'server was unable to find or delete the user' });
      res.status(200).json({ success: true, id: user._id });
      break;

    default:
      res.status(400).json({
        message: `${method} Is either not allowed or not a valid request method.`,
      });
      break;
  }
}
