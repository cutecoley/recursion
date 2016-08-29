// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = result || [];
  if  (obj === null){
    return 'null';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean' ){
    return obj.toString();
  }
  if (typeof obj === 'string'){
      return '"' + obj.toString() + '"'
  }
  if (Array.isArray(obj))
  {
     return "[" + obj.map(function(el) { return stringifyJSON(el); }).join() + "]";
  }
  if (typeof obj === 'object') {
      _.each(obj, function(value,key){
        if(value !== undefined && typeof(value) !== 'function'){
          result.push(stringifyJSON(key) + ':' + stringifyJSON(value));
        }
      })
    return "{" + result.join() + "}";
  } ;

};




