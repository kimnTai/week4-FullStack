const path = require("path");
const ghpages = require("gh-pages");

const options = {
    branch: "gh-pages",
    repo: "https://github.com/kimnTai/week4-FullStack.git",
};

const callback = (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("佈署成功");
    }
};

/**
 * 此任務推送到配置的 `repo` 的 `master` 分支。
 */
ghpages.publish(path.resolve(__dirname, "../dist"), options, callback);
