import { data } from "../data";

function getName(aData) {
    const result = [];
    const queue = aData.slice();

    while (queue.length) {
        queue.forEach(item => {
            queue.shift();
            result.push(item.name);
            if (item.children && item.children.length) {
                queue.push(...item.children);
            }
        });
    }
    return result;
}

console.log(getName(data));
