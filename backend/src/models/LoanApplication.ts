import mongoose, { Schema, Document } from 'mongoose';

interface ILoanApplication extends Document {
  fullName: string;
  loanAmount: number;
  loanTenure: number;
  reason: string;
  employmentStatus: string;
  employmentAddress: string;
  appliedAt: Date;
}

const LoanApplicationSchema: Schema = new mongoose.Schema({
  fullName: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  loanTenure: { type: Number, required: true },
  reason: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  employmentAddress: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now }, // Timestamp
});

const LoanApplication = mongoose.model<ILoanApplication>('LoanApplication', LoanApplicationSchema);
export default LoanApplication;
