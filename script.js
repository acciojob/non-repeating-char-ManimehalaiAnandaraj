function firstNonRepeatedChar(str) {
 // Write your code here
	if(!str)
	{
		return null;
	}
	const char_counts={};
	for(let char of str)
		{
			char_counts[char] = (char_counts[char] || 0) + 1;
		}
	for(let char of str)
		{
		if(char_counts[char] === 1)
		{
			return char;
		}
		}
	return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
