import multer from "multer";
const upload=multer({dest:"uploads/"})

export default upload;
// This code sets up a multer instance to handle file uploads, storing them in the "uploads/" directory.
// You can use this in your routes to handle file uploads, for example:
//
// import upload from './utils/multer.js';
