function addCommas(num) {

  if (isNaN(num) || typeof num === "undefined") {
    console.log("Error: Input must be valid number");
    return("Error: Input must be a number");
  }

  let wholeNumStr = null;
  let decimalNumStr = null;
  let strNumArray = null;

  // Track if number is negative
  let negativeNum = false;
  if (num < 0) {
    negativeNum = true;
    num = Math.abs(num)
  }
  
  // Convert number to a string for further processing
  strNum = num.toString();
  
  // Separate number into whole and fractional components
  // Check if decimal place is present in the number
  if (strNum.indexOf(".") !== -1) {
    // Save wholenumber and fractional parts into two separate strings
    strNumArray = strNum.split(".");
    wholeNumStr = strNumArray[0];
    decimalNumStr = strNumArray[1];
  } else {  // The input number has no decimals
    wholeNumStr = strNum;
  }

  // Place that will store the 
  newStrNumArray = [];
  newStrNumArrayIndex = 0;
  // Used to track the number of digits that have proccessed in the original number
  digitCount = 1;

  // Loop through the input number in reverse order and build the solution in newStrNumArray with commas inserted
  for (i = wholeNumStr.length - 1; i >= 0; i--) {
    newStrNumArray[newStrNumArrayIndex] = wholeNumStr[i]

    // Add a comma after every 3 numbers if there is at least one additional number (e.g., no comma needed for num 123)
    if ((digitCount < wholeNumStr.length) && (digitCount) % 3 === 0) {
      newStrNumArray[newStrNumArrayIndex + 1] = ",";
      newStrNumArrayIndex++
    }

    digitCount++
    newStrNumArrayIndex++
  }

	// If originl number was negative add back in the negative sign
  if (negativeNum) {
    newStrNumArray[newStrNumArrayIndex + 1] = "-";
  }

	// Solution was stored in an array in reverse order so we must reverse
	// the array and then join the elements together into a single string.
  numWithCommas = newStrNumArray.reverse().join("")
  
  // Add back in original decimal values (if present) into the string that were previously separated
  if (decimalNumStr) {
    numWithCommas = numWithCommas + "." + decimalNumStr;
  }

  return(numWithCommas);
}

module.exports = addCommas;