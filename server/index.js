const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/maroonFormDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

// Schema and Model
const formSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    contactNumber: String,
    companyName: String,
    service: String,
    projectDetails: String,
    submittedAt: { type: Date, default: Date.now }
});

const Form = mongoose.model('Form', formSchema);

// POST Route to Handle Form Submission
app.post('/submit-form', async (req, res) => {
    const { fullName, email, contactNumber, companyName, service, projectDetails } = req.body;

    if (!fullName || !email || !contactNumber || !companyName || !service || !projectDetails) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newFormEntry = new Form({
            fullName,
            email,
            contactNumber,
            companyName,
            service,
            projectDetails
        });
        await newFormEntry.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
