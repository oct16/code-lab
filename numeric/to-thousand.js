function toS(num) {
    let reg = /(?=(\B\d{3})+$)/g; ///B表示匹配非单词边界的元字符，而/b表示匹配单词边界
    return num.replace(reg, ",");
}
var result = toS("1003000400");

console.log(result);

function toS2(num) {
    return num.split("").reverse().reduceRight((acc, cur, i) => {
        return acc + (i !== 0 && i % 3 === 0 ? cur + "," : cur);
    }, "");
}

console.log(toS2("1003000400"));
