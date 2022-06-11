import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, "user_upload_" + Date.now() + path.extname(file.originalname));
  },
});

const filerFilter = (req, file, cb) => {
  cb(null, true);
};

let upload = multer({
  storage: storage,
  fileFilter: filerFilter,
});

export default upload.single("Image");
