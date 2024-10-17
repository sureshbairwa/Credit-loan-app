import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import LoanApplication from './models/LoanApplication';

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json()); 


const MONGO_URI = process.env.MONGO_URI || '';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

app.get('/', (req: Request, res: Response) => {
  res.send('Server running on port 5000');
});


app.post('/api/apply-loan', async (req: Request, res: Response) => {
  const loanData = req.body;

  try {
   
    const newLoan = new LoanApplication(loanData);
    await newLoan.save(); 

    res.status(200).json({ message: 'Loan application saved', loan: newLoan });
    console.log('Loan application saved to MongoDB:', newLoan);
  } catch (error) {
    console.error('Error saving loan application:', error);
    res.status(500).json({ message: 'Error saving loan application' });
  }
});

app.get('/api/loans', async (req: Request, res: Response) => {
  try {
    console.log('Fetching loan applications...');
    const loans = await LoanApplication.find(); 
    console.log('Loans fetched:', loans);
    res.status(200).json(loans);
  } catch (error) {
    console.error('Error fetching loan applications:', error);
    res.status(500).json({ message: 'Error fetching loan applications' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
