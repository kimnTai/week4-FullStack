import { Request, Response, NextFunction } from "express";
import axios from "axios";
import FormData from "form-data";
import multer from "multer";

class ImageService {
    _multer: multer.Multer;

    constructor() {
        this._multer = multer({
            // 限制上傳檔案的大小為 10 MB
            limits: { fileSize: 10 * 1024 ** 2 },
            fileFilter: (req, file, callback) => {
                // 只接受三種圖片格式
                if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
                    callback(new Error("請上傳正確的檔案格式"));
                    return;
                }
                // 若接受該檔案，呼叫 cb() 並帶入 true
                callback(null, true);
            },
        });
    }

    /**
     * @description 處理上傳圖片，並放入 image
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @return {*}  {Promise<void>}
     * @memberof ImageService
     */
    handle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await new Promise<void>((resolve) => this._multer.single("image")(req, res, () => resolve()));
        req.body.image = await this.getImageUrl(req);
        next();
    };

    /**
     * @description 獲得圖片連結
     * @param {Request} req
     * @return {*}  {Promise<string>}
     * @memberof ImageService
     */
    getImageUrl = async (req: Request): Promise<string> => {
        const formData = new FormData();
        formData.append("image", req.file?.buffer);
        const { data } = await axios.post("https://api.imgur.com/3/image", formData, {
            headers: { Authorization: "Client-ID 62004dc8f2239f1" },
        });
        return data.data.link;
    };
}

export default new ImageService();
