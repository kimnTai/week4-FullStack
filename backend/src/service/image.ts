import express from "express";
import multer from "multer";
import axios from "axios";
import FormData from "form-data";

const router = express.Router();

const upload = multer({
    limits: {
        // 限制上傳檔案的大小為 10 MB
        fileSize: 10 * 1024 ** 2,
    },
    fileFilter: (req, file, callback) => {
        // 只接受三種圖片格式
        if (!file.mimetype.match(/\.(jpg|jpeg|png)$/)) {
            console.log(123);
            callback(new Error("請上傳正確的檔案格式"));
            return;
        }

        // 若接受該檔案，呼叫 cb() 並帶入 true
        callback(null, true);
    },
});

router.post("/", upload.single("image"), async (req, res) => {
    const encode_image = req.file?.buffer.toString("base64") as string;
    const data = new FormData();
    data.append("image", encode_image);
    const result = await axios.post("https://api.imgur.com/3/image", data, {
        headers: { Authorization: "Client-ID 62004dc8f2239f1" },
    });
    res.send({ status: "success", result: JSON.stringify(result.data) });
});

export default router;
