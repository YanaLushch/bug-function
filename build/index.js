"use strict";
function summ(object, result = 0) {
    for (let i = 0; i < Object.keys(object).length; i++) {
        const field = Object.keys(object)[i];
        const value = object[field];
        if (typeof (value === null || value === void 0 ? void 0 : value.cvalue) === "string") {
            if (isNaN(parseInt(value.cvalue))) {
                return 2021;
            }
            else {
                result += parseInt(value.cvalue);
            }
        }
        if (typeof (value === null || value === void 0 ? void 0 : value.cvalue) === "number")
            return (result += value.cvalue);
        if (typeof (value === null || value === void 0 ? void 0 : value.cvalue) === "object")
            return (result = summ(value.cvalue, result));
        if (typeof (value === null || value === void 0 ? void 0 : value.cvalue) === "undefined")
            return 2021;
    }
    return result;
}
const obj = {
    hello: { cvalue: undefined },
    world: { cvalue: { yay: { cvalue: 19 } } },
};
console.log(summ(obj));
//# sourceMappingURL=index.js.map