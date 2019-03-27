

export const isObjectEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const objectToArray = (object) => {
    let array = [];
    for(const key in object) {
        array.push({
            key,
            value: object[key]
        })
    }

    return array;
}