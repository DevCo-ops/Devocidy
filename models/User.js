import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    img: {
      type: String,
    },
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groups',
      },
    ],
    ownedGroups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groups',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
