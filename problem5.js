function hasNestedProperty(obj, path) {
    if (typeof obj != 'object' || typeof path != 'string') {
        throw new Error('Invalid inputs');
    }
    
    let props = path.split('.');
    let keys = Object.keys(obj);

    if (props.length == 1) {
        if (keys.includes(path)) {
            return true;
        } else { 
            return false; 
        }
    }

    if (!keys.includes(props[0])) {
        return false;
    }

    for (let key of keys) {
        if (typeof obj[key] == 'object' && obj[key] !== null) {
            props.shift();
            if(hasNestedProperty(obj[key], props.join('.'))) {
                return true;
            }

        }
  
    }

    return false;
}

const user = { name: "Alice", address: { city: "Wonderland", zip: "12345", block: { number: 2, lane: 14, } } };
console.log(hasNestedProperty(user, "name")); // true
console.log(hasNestedProperty(user, "address.block.number")); // true
console.log(hasNestedProperty(user, "address.state")); // false
