import mongoose from "mongoose";

const deviceschema= new mongoose.Schema(

  {
    userId:   { type: Schema.Types.ObjectId, ref: "User", required: true },
    deviceId: { type: String, required: true },           // uuid v4
    refreshHash: { type: String, required: true },        // sha256(refreshToken)
    expiresAt: { type: Date, required: true },
    agent:    { type: String },                           // optional: "Pixel 8 / Android 14"
    lastSeen: { type: Date, default: Date.now },
  },
  { timestamps: true }
)
// auto‑cleanup
deviceschema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default Device=model("Device",deviceschema)