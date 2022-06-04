import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, res, cb) {
    cb(null, "Image_Upload" + Date.now() + path.extname(file.orgiginalname));
  },
});

const filerFilter = (req, res, cb) => {
  cb(null, true);
};
let upload = multer({
  storage: storage,
  fileFilter: filerFilter,
});

export default upload.single("Image");
