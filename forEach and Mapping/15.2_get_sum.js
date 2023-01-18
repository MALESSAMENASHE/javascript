// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

function findSmallest(a, b, c){
if (a >c && b > c){
return c;
} else if (b >a && c > a) {
return a;
} else {
return b;
}
}
console.log (findSmallest(52,66, 2))


// line 10 -findSmalest is not defined--missing "l"

// running the code and debug tool on vscode

// the debugger stopped running immidiately after the first breakpoint (line 10) because the function was called 

// 4. Fix the code and submit it all.