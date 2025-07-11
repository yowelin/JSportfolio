"use strict";
var xpNeeded = +prompt("Enter needed amount of experience:"),
  xpGained = 0,
  ingots = 0,
  shavings = 0,
  i = 0,
  j = 0,
  k = 0;
cycle: for (i = 2; xpGained < xpNeeded; i += 1) {
  j = 0;
  k = 0;
  ingots = i;
  while (ingots + k != 1) {
    ingots += k;
    k = ingots % 2;
    shavings = (ingots - k) * 2;
    xpGained = xpGained + shavings/4 * 8;
    if (checkResult(xpGained, xpNeeded, i) === true) {break cycle;}
    
    ingots = shavings / 4;
    xpGained = xpGained + ingots * 8; 
    if (checkResult(xpGained, xpNeeded, i) === true) {break cycle;}
    
  }
  if (xpGained < xpNeeded) {
    xpGained = 0;
  }
}
function checkResult (xp1, xp2, ing) {
  if (xp1 >= xp2) {
    console.log("xpGained = " + xp1);
    console.log("ingots/boards/leather = " + ing);
    console.log("ore/wood/hides = " + ing * 2);
    return true;
    }
}