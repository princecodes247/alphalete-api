const upload = require("../multer");

async function addPathToBody(req, res, next) {

  if (req.files) {
    req.body["files"] = req.files.map((file) => file);
  }

  if (req.file) {
    req.body["file"] = req.file;
  }

  next();
}

module.exports = (field) => {
  return [upload.single(field), addPathToBody];
};
