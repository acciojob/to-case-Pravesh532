function toCase(str) {
  // write your code here  
	return str.toLowerCase() + "-" + str.toUpperCase();
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
