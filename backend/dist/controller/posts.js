"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var Model = __importStar(require("../model"));
var PostsController = /** @class */ (function () {
    function PostsController() {
        var _this = this;
        /**
         * @description 取得所有資料
         * @param {Request} req
         * @param {Response} res
         * @return {*}  {Promise<void>}
         * @memberof PostsController
         */
        this.getPosts = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, sort, keyword, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, sort = _a.sort, keyword = _a.keyword;
                        return [4 /*yield*/, Model.Posts.find(keyword ? { content: new RegExp("" + keyword) } : {})
                                .populate({ path: "user", select: "name photo" })
                                .sort((sort === "new" ? "-" : "") + "createdAt")];
                    case 1:
                        result = _b.sent();
                        res.send({ status: "success", result: result });
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * @description 新增單筆資料
         * @param {Request} req
         * @param {Response} res
         * @return {*}  {Promise<void>}
         * @memberof PostsController
         */
        this.createPosts = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, content, type, user, image, result, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, content = _a.content, type = _a.type, user = _a.user, image = _a.image;
                        return [4 /*yield*/, Model.Users.findById(user)];
                    case 1:
                        if (!(_b.sent())) {
                            throw new Error("無此 id");
                        }
                        return [4 /*yield*/, Model.Posts.create({ content: content, type: type, user: user, image: image })];
                    case 2:
                        result = _b.sent();
                        res.send({ status: "success", result: result });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        res.status(400).send({ status: "error", message: error_1.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /**
         * @description 刪除所有資料
         * @param {Request} req
         * @param {Response} res
         * @return {*}  {Promise<void>}
         * @memberof PostsController
         */
        this.deleteAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model.Posts.deleteMany({})];
                    case 1:
                        _a.sent();
                        res.send({ status: "success", message: "刪除成功" });
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * @description 編輯單筆資料
         * @param {Request} req
         * @param {Response} res
         * @return {*}  {Promise<void>}
         * @memberof PostsController
         */
        this.editPosts = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _id, _a, content, type, name, result, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _id = req.params.id;
                        _a = req.body, content = _a.content, type = _a.type, name = _a.name;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Model.Posts.findOneAndUpdate({ _id: _id }, { content: content, type: type, name: name }, { new: true })];
                    case 2:
                        result = _b.sent();
                        if (!result) {
                            throw new Error("無此貼文 id");
                        }
                        res.send({ status: "success", result: result });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        res.status(400).send({ status: "error", message: error_2.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /**
         * @description 刪除單筆資料
         * @param {Request} req
         * @param {Response} res
         * @return {*}  {Promise<void>}
         * @memberof PostsController
         */
        this.deleteById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, deleteResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Model.Posts.findByIdAndDelete(id)];
                    case 1:
                        deleteResult = _a.sent();
                        if (deleteResult) {
                            res.send({ status: "success", message: "刪除成功" });
                        }
                        else {
                            res.status(400).send({ status: "error", message: "無此 id" });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
    }
    return PostsController;
}());
exports.default = new PostsController();
