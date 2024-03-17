// pages/api/upload.js

import multer from 'multer';

// Multer configuration
const upload = multer({
  storage: multer.diskStorage({
    destination: './app/scripts/videos', // Destination folder for uploaded files
    filename: function (req, file, cb) {
      cb(null, `input.mp4`); // File naming scheme
    }
  })
});

// API route handler
export const config = {
  api: {
    bodyParser: false, // Disabling body parsing to handle multipart/form-data directly
  },
};

export default async function handler(req, res) {
  // 'upload.single' middleware is used to handle a single file upload
  upload.single('file')(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return res.status(500).json({ success: false, message: 'File upload error' });
    } else if (err) {
      // An unknown error occurred when uploading.
      return res.status(500).json({ success: false, message: 'Unknown error' });
    }

    // File uploaded successfully
    return res.status(200).json({ success: true, message: 'File uploaded successfully' });
  });
}
