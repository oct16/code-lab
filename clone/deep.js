function clone(obj) {
    if (obj === null || typeof obj !== "object" || "isActiveClone" in obj) {
        return obj;
    }
    var temp;
    if (obj instanceof Date) {
        temp = new obj.constructor();
        //or new Date(obj);
    } else {
        temp = obj.constructor();
    }

    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj["isActiveClone"] = null;
            temp[key] = clone(obj[key]);
            delete obj["isActiveClone"];
        }
    }
    return temp;
}

var a = { a: { b: { c: { d: "d" } } } };

console.log(clone(a) === a);

/**
 *
 * Way-2
 */
function cloneDeep(obj, c) {
    c = c || {};
    for (var i in obj) {
        if (typeof obj[i] === "object") {
            if (!Array.isArray(obj[i])) {
                c[i] = {};
            } else {
                c[i] = [];
            }
            cloneDeep(obj[i], c[i]);
        } else {
            c[i] = obj[i];
        }
    }
    return c;
}

console.log(clone(a) === a);
