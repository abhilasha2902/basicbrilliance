# 🌟 BasicBrilliance 🌟

> Unveiling the Natural Beauty of photos... 📸✨

Welcome to **BasicBrilliance**, a simple yet powerful web application designed to help you discover the magic of photo editing! This application allows you to effortlessly upload your photos, automatically apply stunning edits to enhance their natural beauty, and learn the basics of editing with Adobe Lightroom.

---

## 🚀 Features

- **📸 Image Upload & Magic Editing:** Upload any photo and let our custom magic filters (powered by Jimp) adjust brightness, contrast, normalize colors, and apply a clean background to instantly enhance your image.
- **💾 Cloud Database Storage:** All edited images are securely stored with timestamps using MongoDB, creating a permanent record of your beautiful creations.
- **🎓 LearnToEdit Lightroom Guide:** An interactive, step-by-step guide on how to edit photos in Adobe Lightroom, covering everything from importing and basic adjustments to exporting.
- **🖼️ Custom Photo Galleries:** Beautifully styled web interface featuring custom photo galleries and easy navigation.
- **🎨 Responsive UI:** A clean, visually appealing, and user-friendly interface with CSS animations and great typography.

---

## 🛠️ Tech Stack

BasicBrilliance is built using a modern and robust technology stack:

- **Backend:** Node.js, Express.js
- **Image Processing:** [Jimp](https://www.npmjs.com/package/jimp)
- **File Uploads:** [Multer](https://www.npmjs.com/package/multer)
- **Database:** MongoDB (with Mongoose/MongoDB native driver)
- **Frontend:** HTML5, CSS3, Vanilla JavaScript

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or a local MongoDB server)

---

## ⚙️ Installation

Follow these steps to get your development environment set up:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/BasicBrilliance.git
   cd BasicBrilliance
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB:**
   - Open `index.cjs`.
   - Locate the MongoDB connection URI:
     ```javascript
     const uri = 'mongodb+srv://<username>:<password>@cluster...';
     ```
   - Replace it with your own MongoDB connection string if you wish to use your own database. *Note: Ensure you never commit your real database credentials to version control in a production environment.*

4. **Prepare the necessary directories:**
   Make sure the following directories exist in the root of your project so Multer can handle uploads properly:
   ```bash
   mkdir -p public/uploads
   ```

---

## 🏃‍♂️ How to Run the Project

1. **Start the Express server:**
   ```bash
   node index.cjs
   ```
   *(Or run `npm start` if a start script is defined in `package.json`)*

2. **Open the application:**
   Open your favorite web browser and navigate to:
   ```
   http://localhost:5555
   ```
   *(Check the console output for the exact port if it differs.)*

3. **Try it out!**
   - Click **"Upload and Magic"** to upload a photo and see the magic happen!
   - Navigate to the **"LearnToEdit"** page via the navbar to read the comprehensive Lightroom editing tutorial.

---

## 📁 Project Structure

```text
BasicBrilliance/
├── navbar/
│   ├── contact.html       # Personalize/Contact page
│   ├── edit.html          # LearnToEdit tutorial page
│   ├── login.html         # Login page
│   ├── lr.html            # MyEdits gallery page
│   └── signup.html        # Signup page
├── public/
│   ├── uploads/           # Directory for user-uploaded images
│   ├── edited.jpg         # Temporary storage for the last edited image
│   └── index.html         # Main application landing page
├── index.cjs              # Main application entry point (Express server)
├── package.json           # Node.js dependencies and scripts
└── README.md              # You are here!
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

*“To me, photography is an art of observation. It’s about finding something interesting in an ordinary place.”* 📸✨
