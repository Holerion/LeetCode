/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

 var longestCommonPrefix = function(strs) {

    b=false
    
    if(!strs.length) 
        return '';
    
    for(let i=0;i<strs[0].length;i++){
        for(let e of strs){    
            if(e[i]!=strs[0][i]) 
                return strs[0].slice(0,i);
                
        }}
    
    return strs[0]
    };