//PROBLEM #242 - LEETCODE
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 




var isAnagram = function(s, t) {
 
    if(s.length !== t.length) return false

    let sLetters = {}
    let tLetters = {}

    //count all letters
    for(let i=0; i<s.length; i++) {
        //Count letter in string s
        if(!sLetters[s.charAt(i)] && !tLetters[t.charAt(i)]) {
            sLetters[s.charAt(i)] = 1, tLetters[t.charAt(1)] = 1
        } else {
            sLetters[s.charAt(i)] = sLetters[s.charAt(i)] +1
            tLetters[t.charAt(i)] = tLetters[t.charAt(i)] +1
        }

        
    }

        Object.keys(s).forEach(key => {
            if(s[key] !== t[key]) {
                return false
            } 
                
            
        })
        return true

    }
    console.log(isAnagram("cars", "rats"))
    console.log(isAnagram("tar", "rat"))
    console.log(isAnagram("tar", "ratt"))