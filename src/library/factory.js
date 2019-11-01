class handleTemp {
    constructor(arg) {
        this.arg = arg;
    }
    // 单位换算，以万为单位
    conversion(num) {
        if (10000 < num && num < 100000000) {
            num = (Math.round((num / 10000) * 100) / 100).toFixed(0);
            num = num + '万'
            return num
        } else {
            num = (Math.round((num / 100000000) * 100) / 100).toFixed(1);
            num = num + '亿'
            return num
        }
    }
}
export default new handleTemp()