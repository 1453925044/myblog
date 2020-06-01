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
    // 获取当前日期，并将其格式化为YYYY-MM-DD
    getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
}
export default new handleTemp()