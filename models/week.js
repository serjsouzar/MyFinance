import { Schema, model, models } from "mongoose";

const WeekSchema = new Schema({
  week: [
    {
      finance: {
        type: Schema.Types.ObjectId,
        ref: "Finance",
      },
    },
  ],
});

const Week = models.Week || model("Week", WeekSchema);

export default Week;
