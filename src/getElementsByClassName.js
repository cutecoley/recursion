// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

  // your code here
  var getElementsByClassName = function(className) {
 /* first get the html inclu. head and body store it in a variable x
 loop through x to find if it has any child
 if there is no child then check for className
 if it matches return the tag */
 var x = document.body;
 var result = [];
 function traverse(element, result) {
   var children = element.children;
   var multiple = element.className.split(" ");
   if (multiple.indexOf(className) >= 0) {
     result.push(element);
  }

  for (var i = 0; i < children.length; i++) {
       traverse(children[i], result);
     }
  }


 traverse(x, result);
 return result;

};




