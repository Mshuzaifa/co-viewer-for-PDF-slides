# Co-Viewer for PDF Slides

## 🎯Overview

This project enables real-time synchronization of PDF slides across multiple viewers, allowing an admin (presenter or teacher) to control the viewing experience. As users join a page, they will see the same PDF page as the admin, with all slides synchronized automatically. It's perfect for remote presentations, online classes, or group viewings where multiple users need to follow along with a shared PDF.

**Key Features:**
- Real-time synchronization of PDF slides for multiple viewers using **Socket.io**.
- Admin controls the slide navigation, and all viewers follow the same page.
- Users can upload PDF files through an intuitive interface using **Multer**.
- Backend built with **Express.js** to serve static HTML files and handle PDF uploads.
- Seamless, responsive experience for both the admin and viewers.

## 💻Technologies Used

- **Frontend:**
  - **HTML5** & **CSS3** for the user interface.
  - **JavaScript** for dynamic functionality.
  - **Socket.io** for real-time communication and synchronization between users.
  
- **Backend:**
  - **Express.js** for server-side API and serving static files.
  - **Multer** for handling PDF file uploads.
  
- **Others:**
  - **Socket.io-client** for frontend real-time communication.
  - **PDF.js** for rendering and displaying PDFs on the client side.
-**Hosted link:**
  -https://co-viewer-for-pdf-slides.onrender.com


## 📜 Features & Functionality

### Admin (Presenter/Teacher)
- **Control the PDF Slide**: Admin can navigate through the PDF slides, and the view will automatically update for all viewers in real-time.
- **Viewers Sync**: All viewers on the same page will stay in sync with the admin's current slide.

### Viewer (Student/Attendee)
- **Synchronized PDF Viewing**: Viewers automatically follow the admin's slide changes.
- **PDF Navigation**: Viewers can interact with the slides, but they will only see the admin's slide selection.

### File Upload
- **Upload PDF Files**: Admin can upload a PDF file to the server, which will then be accessible for all users to view.

## ⚙ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pdf-co-viewer.git
cd pdf-co-viewer
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Run the Application

To start the server, run:

```bash
npm run start
```

To start the server in development mode(using nodemon library), run:

```bash
npm run dev
```

This will start the server on [http://localhost:3000](http://localhost:3000).

### 4. Accessing the App
- **Admin**: Visit the URL to upload the PDF file and begin the presentation.
- **Viewers**: Viewers can access the same URL and will automatically sync with the admin's current slide.

## 📝 Usage

### Uploading a PDF
1. As an admin, navigate to the upload page.
2. Choose your PDF file and upload it.
3. Once uploaded, the PDF will be displayed, and you can start navigating through the slides.
   
### Real-Time Synchronization
- Whenever you change slides, all connected viewers will see the same slide in real-time.
- Viewers can also navigate to the PDF, but the admin's slide choice will override them.

### Socket.io Communication
- **`/syncSlide`**: When the admin changes the slide, a socket event is emitted to all connected users, notifying them to update their current slide.
- **`/joinSession`**: When viewers join the session, they are synced with the admin's current slide.


## ✍ Code Structure

```
.
├── public/
│   ├── index.html          # Main HTML page for the app
│   ├── upload.html         # Upload HTML page for the admin to update the pdf file
│   ├── user.html           # User HTML page for user to view the pdf
│   ├── app.js              # Main JS(client side) page for the app
│   ├── test.pdf            # Actual pdf file which will render
│   └── style.css           # Styling for the app
|-- index.js                # Main server file with Express and Socket.io setup
├── package.json            # Project dependencies
└── README.md               # Project documentation
```


## 🎓 Acknowledgments

- **Socket.io** - For enabling real-time communication.
- **Multer** - For handling file uploads efficiently.
- **PDF.js** - For rendering and displaying PDFs in the browser.
