//LEETCODE # 20 - https://javascript.plainenglish.io/how-to-solve-valid-parentheses-in-javascript-18c1316aa7a8
var isValid = function(s) {
    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['}; //Example of a dictionary
    
    for(const char of s) {
        if(!characters[char]){   //(is this a key?  no ok )
            stack.push(char);
        }
        else if(stack.pop() != characters[char]){
            return false;
        }
    }
    console.log(stack.length === 0)
    return stack.length === 0;
};

let s = "()[]{}"
isValid(s)

