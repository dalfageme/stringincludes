function includesAny(str, ...args){
    const found = args.find(a => {
        if(str.includes(a)){
            return true;
        }
        return false;
    });

    return !!found;
}

function includesAll(str, ...args){
    const found = args.filter(a => {
        if(str.includes(a)){
            return true;
        }
        return false;
    });

    return found.length === args.length;
}

module.exports = {
    includesAll,
    includesAny
}