
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














// const jimp = require('jimp');
// const express = require('express');
// const multer = require('multer');
// const Jimp = require('jimp');
// const path = require('path');
// const app = express();

// app.use(express.static('public'));

// // Multer configuration for handling file uploads
// // const upload = multer({ dest: 'uploads/' });
// const upload = multer({ dest: 'public/uploads/' });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/upload', upload.single('photo'), async (req, res) => {
//     try {
//         const uploadedImagePath = req.file.path; // Path to the uploaded image
//         const image = await Jimp.read(uploadedImagePath);
//         // Apply editing features using Jimp (example: resize)
//         image.resize(200, 200); // Resize the image to 200x200 pixels
//         image.grayscale();
//         // image.brightness(-1);          // adjust the brighness by a value -1 to +1
//         // image.contrast(-1);            // adjust the contrast by a value -1 to +1
//         const editedImagePath = path.join(__dirname, 'public', 'edited.jpg');
//         await image.writeAsync(editedImagePath); // Save edited image
//         res.json({ url: '/edited.jpg' }); // Send the edited image URL back to the client
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error processing the image.');
//     }
// });

// app.post('/upload', upload.single('photo'), async (req, res) => {
//     try {
//         const uploadedImagePath = req.file.path; // Path to the uploaded image
//         const image = await Jimp.read(uploadedImagePath);
//         // Apply editing features using Jimp (example: resize)
//         image.resize(200, 200); // Resize the image to 200x200 pixels
//         image.grayscale(); // Convert the image to grayscale
//         // Save edited image
//         const editedImagePath = path.join(__dirname, 'public', 'edited.jpg');
//         await image.writeAsync(editedImagePath);
//         res.json({ url: '/edited.jpg' }); // Send the edited image URL back to the client
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error processing the image.');
//     }
// });


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public','index.html'));
// });

// // Route for the about page
// app.get('/LearnToEdit', (req, res) => {
//     res.sendFile(path.join(__dirname, '/navbar/edit.html'));
// });

// // Route for the contact page
// app.get('/MyEdits', (req, res) => {
//     res.sendFile(path.join(__dirname, '/navbar/lr.html'));
// });

// app.get('/Personalize', (req, res) => {
//     res.sendFile(path.join(__dirname, '/navbar/contact.html'));
// });

// app.get('/Login', (req, res) => {
//     res.sendFile(path.join(__dirname, '/navbar/login.html'));
// });

// app.get('/Signup', (req, res) => {
//     res.sendFile(path.join(__dirname, '/navbar/signup.html'));
// });




// const PORT = process.env.PORT || 1000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });






































// const express = require('express');
// const multer = require('multer');
// const Jimp = require('jimp');
// const path = require('path');
// const app = express();

// app.use(express.static('/public'));

// // Multer configuration for handling file uploads
// const upload = multer({ dest: 'public/uploads/' });

// // Route for the homepage
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Route for uploading and processing images
// app.post('/upload', upload.single('photo'), async (req, res) => {
//     try {
//         const uploadedImagePath = req.file.path; // Path to the uploaded image
//         const image = await Jimp.read(uploadedImagePath);
//         // Apply editing features using Jimp (example: resize and grayscale)
//         image.resize(200, 200); // Resize the image to 200x200 pixels
//         image.grayscale(); // Convert the image to grayscale
//         // Save edited image
//         const editedImagePath = path.join(__dirname, 'public', 'edited.jpg');
//         await image.writeAsync(editedImagePath);
//         res.json({url: editedImagePath}); // Send the edited image URL back to the client
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error processing the image.');
//     }
// });

// Routes for different pages
// app.get('/navbar/edit.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'navbar', 'edit.html'));
// });

// app.get('/lr.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'navbar', 'lr.html'));
// });

// app.get('/navbar/contact.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'navbar', 'contact.html'));
// });

// app.get('/navbar/login.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'navbar', 'login.html'));
// });

// app.get('/navbar/signup.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'navbar', 'signup.html'));
// });

// // Start the server
// const PORT = process.env.PORT || 1000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
// const express = require('express');
// const multer = require('multer');
// const Jimp = require('jimp');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// // Multer configuration for handling file uploads
// const upload = multer({ dest: 'public/uploads/' });

// // Route for the homepage
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Route for uploading and processing images
// app.post('/upload', upload.single('photo'), async (req, res) => {
//     try {
//         const uploadedImagePath = req.file.path; // Path to the uploaded image
//         const image = await Jimp.read(uploadedImagePath);
//         // Apply editing features using Jimp (example: resize and grayscale)
//         image.resize(200, 200); // Resize the image to 200x200 pixels
//         image.grayscale(); // Convert the image to grayscale
//         // Save edited image
//         const editedImagePath = path.join(__dirname, 'public', 'edited.jpg');
//         await image.writeAsync(editedImagePath);
//         res.json({ url: 'edited.jpg' }); // Send the edited image URL back to the client
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error processing the image.');
//     }
// });
// app.get('/navbar/edit.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'navbar', 'edit.html'));
// });

// app.get('/lr.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'navbar', 'lr.html'));
// });

// app.get('/navbar/contact.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'navbar', 'contact.html'));
// });

// app.get('/navbar/login.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'navbar', 'login.html'));
// });

// app.get('/navbar/signup.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'navbar', 'signup.html'));
// });

// // Start the server
// const PORT = process.env.PORT || 1000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



























// const express = require('express');
// const multer = require('multer');
// const Jimp = require('jimp');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, 'public'))); 
// app.use(express.static(path.join(__dirname, 'photos')));// Serve static files from the 'public' directory

// // Multer configuration for handling file uploads
// const upload = multer({ dest: 'public/uploads/' });

// // Route for the homepage
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Route for uploading and processing images
// app.post('/upload', upload.single('photo'), async (req, res) => {
//     try {
//         const uploadedImagePath = req.file.path; // Path to the uploaded image
//         const image = await Jimp.read(uploadedImagePath);
//         // Apply editing features using Jimp (example: resize and grayscale)
//         // image.resize(200, 200); // Resize the image to 200x200 pixels
//         // image.grayscale(); // Convert the image to grayscale
//         image.brightness(+1);          // adjust the brighness by a value -1 to +1
//         image.contrast(-1);            // adjust the contrast by a value -1 to +1


        


//         // Save edited image
//         const editedImagePath = path.join(__dirname, 'public', 'edited.jpg');
//         await image.writeAsync(editedImagePath);
//         res.json({ url: 'edited.jpg' }); // Send the edited image URL back to the client
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error processing the image.');
//     }
// });

// // Routes for different pages under 'navbar'
// app.get('/navbar/edit.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar', 'edit.html'));
// });

// app.get('/navbar/lr.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar', 'lr.html'));
// });

// app.get('/navbar/contact.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar', 'contact.html'));
// });

// app.get('/navbar/login.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar', 'login.html'));
// });

// app.get('/navbar/signup.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar', 'signup.html'));
// });

// // Start the server
// const PORT = process.env.PORT || 9999;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });





















// const express = require('express');
// const multer = require('multer');
// const Jimp = require('jimp');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, 'public'))); 
// app.use(express.static(path.join(__dirname, 'photos')));// Serve static files from the 'public' directory

// // Multer configuration for handling file uploads
// const upload = multer({ dest: 'public/uploads/' });

// // Route for the homepage
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Route for uploading and processing images
// app.post('/upload', upload.single('photo'), async (req, res) => {
//     try {
//         const uploadedImagePath = req.file.path; // Path to the uploaded image
//         const image = await Jimp.read(uploadedImagePath);
//         // Apply editing features using Jimp (example: resize and grayscale)
//         // image.resize(200, 200); // Resize the image to 200x200 pixels
//         // image.grayscale(); // Convert the image to grayscale
//         image.brightness(-0.2);          // adjust the brightness by a value -1 to +1
//         image.contrast(0.2);            // adjust the contrast by a value -1 to +1
//         image.normalize();  
//         image.background(0xFFFFFFFF);
//         // Save edited image
//         const editedImagePath = path.join(__dirname, 'public', 'edited.jpg');
//         await image.writeAsync(editedImagePath);
//         res.json({ url: 'edited.jpg' }); // Send the edited image URL back to the client
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error processing the image.');
//     }
// });

// // Routes for different pages under 'navbar'
// app.get('/navbar/edit.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar', 'edit.html'));
// });

// app.get('/navbar/lr.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar', 'lr.html'));
// });

// app.get('/navbar/contact.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar', 'contact.html'));
// });

// app.get('/navbar/login.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar', 'login.html'));
// });

// app.get('/navbar/signup.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar', 'signup.html'));
// });

// // Start the server
// const PORT = process.env.PORT || 5555;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


















const express = require('express');
const multer = require('multer');
const Jimp = require('jimp');
const path = require('path');
const { MongoClient } = require('mongodb'); // Import MongoDB client

const app = express();

// MongoDB connection URI
const uri = 'mongodb+srv://Kabhilasha:123@cluster0.qev4i95.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, 'photos')));

const upload = multer({ dest: 'public/uploads/' });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/upload', upload.single('photo'), async (req, res) => {
    try {
        const uploadedImagePath = req.file.path;
        const image = await Jimp.read(uploadedImagePath);
        
        image.brightness(-0.2);
        image.contrast(0.2);
        image.normalize();
        image.background(0xFFFFFFFF);
        
        const editedImagePath = path.join(__dirname, 'public', 'edited.jpg');
        await image.writeAsync(editedImagePath);
        
  



        // Save image data to MongoDB
        const db = client.db('yourDatabaseName'); // Update with your database name
        const collection = db.collection('editedImages'); // Collection name
        const result = await collection.insertOne({
            imagePath: editedImagePath,
            createdAt: new Date()
        });

        res.sendFile(editedImagePath);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing the image.');
    }
});

// Routes for different pages under 'navbar'...

      // Routes for different pages under 'navbar'
// Route for the about page
app.get('/navbar/edit.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'navbar','edit.html'));
});

// Route for the contact page
app.get('/navbar/lr.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'navbar','lr.html'));
});

app.get('/navbar/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'navbar','contact.html'));
});



const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
