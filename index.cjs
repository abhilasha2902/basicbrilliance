
// // import * as fs from 'fs';
// var jimp = require('jimp');

// //Using a ,middleware for handling file uploads
// const express = require('express');
// const multer = require('multer');
// const Jimp = require('jimp');
// const path = require('path');
// const app = express();

// app.use(express.static('public'));

// // Multer configuration for handling file uploads
// const upload = multer({ dest: 'uploads/' });
// app.get('/upload', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });


// app.post('/upload', upload.single('photo'), async (req, res) => {
//     try {
//         const uploadedImagePath = req.file.path; // Path to the uploaded image
//         const image = await Jimp.read(uploadedImagePath);
//         // Apply editing features using Jimp (example: resize)
//         image.resize(200, 200); // Resize the image to 200x200 pixels
//         const editedImagePath = path.join(__dirname, 'public', 'edited.jpg');
//         await image.writeAsync(editedImagePath); // Save edited image
//         res.sendFile(editedImagePath); // Send the edited image back to the client
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error processing the image.');
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// import * as fs from 'fs';
const jimp = require('jimp');
const express = require('express');
const multer = require('multer');
const Jimp = require('jimp');
const path = require('path');
const app = express();

app.use(express.static('public'));

// Multer configuration for handling file uploads
const upload = multer({ dest: 'uploads/' });

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.single('photo'), async (req, res) => {
    try {
        const uploadedImagePath = req.file.path; // Path to the uploaded image
        const image = await Jimp.read(uploadedImagePath);
        // Apply editing features using Jimp (example: resize)
        image.resize(200, 200); // Resize the image to 200x200 pixels
        image.grayscale();
        const editedImagePath = path.join(__dirname, 'public', 'edited.jpg');
        await image.writeAsync(editedImagePath); // Save edited image
        res.json({ url: '/edited.jpg' }); // Send the edited image URL back to the client
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing the image.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

