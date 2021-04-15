import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';
import Group from '@/models/Group';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
    body,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      Group.aggregate([
        { $match: { _id: mongoose.Types.ObjectId(id) } },
        {
          $lookup: {
            from: 'users',
            localField: 'users',
            foreignField: '_id',
            as: 'users',
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'owner',
            foreignField: '_id',
            as: 'owner',
          },
        },
        { $unwind: '$owner' },
      ])
        .then((group) => {
          res.status(200).json(group);
        })
        .catch((err) => {
          res
            .status(500)
            .json({ err, message: 'server unable to aggregate properly' });
        });
      break;

    case 'PUT':
      Group.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true },
        (err, group) => {
          if (err)
            res.status(500).json({
              err,
              message: 'server could not find/update group by id',
            });
          res.status(200).json(group);
        }
      );

      break;

    case 'DELETE':
      const group = await Group.deleteOne({ _id: id });
      if (!group)
        res
          .status(500)
          .json({ message: 'server was unable to find or delete the group' });

      res.status(200).json({ success: true, id: group._id });
      break;

    default:
      res.status(400).json({
        message: `${method} Is either not allowed or not a valid request method.`,
      });
      break;
  }
}
