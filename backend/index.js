const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData');
const Appraisal = require('./models/appraisal'); // new import

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://rishabh26bc050:N6mq4ITXsKdMZqjg@cluster0.hwzypci.mongodb.net/');

//mongodb://localhost:27017/practice_mern
//mongodb+srv://rj1609:1234567896321@cluster0.3bpzk.mongodb.net/
// Login/Register APIs (unchanged)
app.post('/register', (req, res) => {
    const { email } = req.body;
    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already registered");
            } else {
                FormDataModel.create(req.body)
                    .then(log_reg_form => res.json(log_reg_form))
                    .catch(err => res.json(err));
            }
        });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Wrong password");
                }
            } else {
                res.json("No records found!");
            }
        });
});

// 🆕 POST appraisal form
app.post('/submit-appraisal', async (req, res) => {
    try {
        const newAppraisal = new Appraisal(req.body);
        await newAppraisal.save();
        res.status(201).json({ message: "Appraisal submitted successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🆕 Optional: Get all submitted forms
app.get('/appraisals', async (req, res) => {
    try {
        const forms = await Appraisal.find();
        res.status(200).json(forms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");
});
