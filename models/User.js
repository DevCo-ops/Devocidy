import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    lowercase: true,
    required: [true, "Can't be blank"],
  },
  lastName: {
    type: String,
    lowercase: true,
    required: [true, "Can't be blank"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  password: { type: String, required: true },
});

UserSchema.plugin(uniqueValidator, { message: "is already taken." });

UserSchema.pre("save", (next) => {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      this.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export default mongoose.models.User || mongoose.model("User", UserSchema);
