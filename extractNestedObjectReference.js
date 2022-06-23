// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
    var obj = this;
    string.split('.').
        forEach(function(ele){
                try{
                  obj = obj[ele];
                }catch(ex){
                  obj = undefined;
                }
    });
    return obj;
  }