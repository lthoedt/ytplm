String.prototype.numbers = function () {
    let value = this.toString();
    let result = value.match(/\d+/);
    return (result) ? parseInt(result[0]) : 0;
}

Number.prototype.shorten = function (digits=0) {
    let num = this;
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "mln" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

Number.prototype.parseToTime = function () {
    let seconds = this;
    let result = ``;

    let h = Math.floor(seconds/3600);
    if (h > 0) {
      seconds -= h*3600;
      result += `${h}:`;
    }
    let m = Math.floor(seconds/60);
    let s = Math.round(seconds % 60);
    s = (s < 10) ? ("0" + s) : s;

    result += `${m}:${s}`;

    return result;
}