import { data } from "../data";

function getName(aData) {
    const result = [];

    aData.forEach(item => {
        result.push(item.name);

        if (item.children) {
            result.push(...getName(item.children));
        }
    });
    return result;
}

console.log(getName(data));
