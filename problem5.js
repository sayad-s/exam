function hasNestedProperty(obj, path) {
    if (typeof obj != 'object' || typeof path != 'string') {
        throw new error('Invalid inputs');
    }
    
    const props = path.split('.');
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


    for (let i = 0; i < keys.length; ++i) {
        if (typeof keys[i] == 'object' && keys[i] !== null) {
            hasNestedProperty(obj[i], props.shift().join('.'));
            break;
        }
  
    }

    return false;
}

const user = { name: "Alice", address: { city: "Wonderland", zip: "12345" } };
console.log(hasNestedProperty(user, "name")); // true
console.log(hasNestedProperty(user, "address.city")); // true
console.log(hasNestedProperty(user, "address.state")); // false