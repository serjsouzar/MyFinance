import {Schema, model, models} from "mongoose";

const FinanceSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  desc: {
    type: String,
    required: [true, 'Description is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Value is required'],
  },
  outcome: {
    type: Boolean,
    required: [true, 'Type must be outcome or income']
  }
}, {timestamps: true});

const Finance = models.Finance || model('Finance', FinanceSchema)

export default Finance