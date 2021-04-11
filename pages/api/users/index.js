import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';

export default async (req, res) => {
  const { method } = req;
  await dbConnect();
  if (method === 'GET') {
    User.find({}, (err, users) => {
      if (err)
        res.status(500).json({
          err,
          message: 'server could not parse collection to an array',
        });
      res.status(200).json(users);
    });
  } else {
    res.status(400).json({
      message: `${method} Is either not allowed or not a valid request method.`,
    });
  }
};
