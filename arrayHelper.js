// TODO
function checkValidity(arr){
return Array.isArray(arr) || Object.prototype.toString.call(arr) == '[object Array]';
}


Array.prototype.square = function() {
if(checkValidity(this)){
    return this.map((item) =>{
    return Math.pow(item,2);
    })
}else {
    throw 'params must be a array';
}
}

Array.prototype.cube = function (){
if(checkValidity(this)){
    return this.map((item) =>{
    return Math.pow(item,3);
    })
}else {
    throw 'params must be a array';
}
}

Array.prototype.sum = function(){
if(checkValidity(this)){
    return this.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    },0);
} else {
    throw 'params must be a array';
}
};

Array.prototype.average = function(){
if(checkValidity(this)){
    return this.sum() / this.length;
} else {
    throw 'params must be a array';
}
};

Array.prototype.even = function(){
    if(checkValidity(this)){
    return this.filter((item) => {
        return item % 2 === 0;
    });
} else {
    throw 'params must be a array';
}
};

Array.prototype.odd = function(){
    if(checkValidity(this)){
    return this.filter((item) => {
        return item % 2 !== 0;
    });
} else {
    throw 'params must be a array';
}
};
