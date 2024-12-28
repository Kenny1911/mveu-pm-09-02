const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const {CalcForm} = require('./models/CalcForm')
const {ContactForm} = require('./models/ContactForm')

// Function for run server
module.exports = (settings) => {
    // Init settings
    const APP_HOST = settings.APP_HOST || '127.0.0.1';
    const APP_PORT = settings.APP_PORT || 9000;
    const MONGO_URL = settings.MONGO_URL || 'mongodb://root:toor@127.0.0.1:27017';

    const app = express()

    app.use(cors())
    app.use(express.json())

    app.post('/calc-form', async (req, res) => {
        const calcForm = new CalcForm({...req.body, timestamp: new Date()})
        await calcForm.save() // Save in Mongo

        res.status(204)
        res.send()
    })

    app.post('/contact-form', async (req, res) => {
        const {fullName, email, question} = req.body;

        const contactForm = new ContactForm({
            fullName,
            email,
            question,
            timestamp: new Date(),
        });

        await contactForm.save(); // Save in Mongo

        res.status(204)
        res.send()
    })

    // Async function to start server
    const start = async () => {
        try {
            console.log('Start server')

            console.log('Try connect to Mongo')
            await mongoose.connect(MONGO_URL, {authSource: "admin"})
            console.log('Connected')

            app.listen(APP_PORT, APP_HOST, () => console.log(`Server listen ${APP_HOST}:${APP_PORT}`))
        } catch (e) {
            console.log(e)
        }
    }

    start()
}
