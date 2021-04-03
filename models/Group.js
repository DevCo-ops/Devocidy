import mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    image: {
      type: String,
      default: '',
    },
    projectDescription: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Group || mongoose.model('Group', GroupSchema);
