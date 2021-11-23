const multer = require("multer");
const config = require('config');
const {GridFsStorage} = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: config.get('MongoURI'),
    options: {useNewUrlParser: true, useUnifiedTopology: true},
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOc(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    },
});

module.exports = multer({ storage });