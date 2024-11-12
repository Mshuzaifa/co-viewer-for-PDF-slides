const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        const uploadDir = './public';


        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {

        cb(null, 'test.pdf');
    }
});


const upload = multer({ storage });


app.post('/upload-file', upload.single('file'), (req, res) => {

    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    res.redirect('/');
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'user.html'));
});

app.use(express.static('public'));


let currentPage = 1;


io.on('connection', (socket) => {
    console.log('New user connected');
    socket.emit('sync', currentPage);


    socket.on('pageChanged', (pageNumber) => {
        currentPage = pageNumber;
        io.emit('sync', currentPage);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
