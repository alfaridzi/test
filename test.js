//1. a
function noOdds(values){
  return values.filter(function (num) {
    return num % 2 === 0;
  });
}

//1. b
function noString(values) {
return values.filter(function(string) {
	return !isNan(string);
});
}


// 2.
function checkPalindrome(string) {
  var reverseString = string.split("").reverse().join("");
  if(string == reverseString) {
   console.log('its palindrome!');
   } else {
  console.log('its not palindrome!');
   }
}

// 3.
function ulangkata(num) {
	var string = 'gredug';
    var str = '';
    for(i = 1;i<=num;i++) {
        if(i == 1) {
          str += string;
        } else {
          if(i % 2 === 0) {
              string = string.substr(1);
              str += string;
          } else {
              string = string.substr(0, string.length - 1);
              str += string;
          }
        }
    }
console.log(str);
}


// 5
//Limiting session IPs
//not allowing someone to dynamically store and execute arbitrary JavaScript on your site
//handling user input correctly.

//in node you can write:
app.get('/', function(req,res) {
	
res.writeHead(200, 'OK', {
    'Content-Length': content.length,
    'Content-Type': 'text/plain'
});

});
//or in javascript you can write:
xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// you can use source code scanners to identifying security gaps in a code during development. 

//6.
//because you passing parameter with arnold!
//the function will check if the name is arnold?
//if the name is arnold the function will return 'hey arnold'.
//if you want result amy, you must to passing parameter with anything..
//because the function always return 'hey amy' if the parameter not 'arnold'
