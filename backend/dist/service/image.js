"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var form_data_1 = __importDefault(require("form-data"));
var multer_1 = __importDefault(require("multer"));
var ImageService = /** @class */ (function () {
    function ImageService() {
        var _this = this;
        /**
         * @description 處理上傳圖片，將 image 放入 body
         * @param {Request} req
         * @param {Response} res
         * @param {NextFunction} next
         * @return {*}  {Promise<void>}
         * @memberof ImageService
         */
        this.handle = function (req, res, next) {
            var upload = (0, multer_1.default)({
                // 限制上傳檔案的大小為 10 MB
                limits: { fileSize: 10 * Math.pow(1024, 2) },
                fileFilter: function (req, file, callback) {
                    // 只接受三種圖片格式
                    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
                        callback(new Error("請上傳正確的檔案格式"));
                        return;
                    }
                    // 若接受該檔案，呼叫 cb() 並帶入 true
                    callback(null, true);
                },
            });
            upload.single("image")(req, res, function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = req.body;
                            return [4 /*yield*/, this.getImageUrl(req)];
                        case 1:
                            _a.image = _b.sent();
                            next();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        /**
         * @description 獲得圖片連結
         * @param {Request} req
         * @return {*}  {Promise<string>}
         * @memberof ImageService
         */
        this.getImageUrl = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var formData, data, error_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formData = new form_data_1.default();
                        formData.append("image", (_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer);
                        return [4 /*yield*/, axios_1.default.post("https://api.imgur.com/3/image", formData, {
                                headers: { Authorization: "Client-ID 62004dc8f2239f1" },
                            })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data.data.link];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return ImageService;
}());
exports.default = new ImageService();
