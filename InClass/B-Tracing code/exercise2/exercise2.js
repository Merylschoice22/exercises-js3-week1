function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  const vowels = "aeiou";

  characters.forEach((character) => {
    if (vowels.includes(character.toLowerCase())) {
      result.push("_");
    } else {
      result.push(character);
    }

    // if (
    //   character.toLowerCase() === "a" ||
    //   character.toLowerCase() === "o" ||
    //   character.toLowerCase() === "i" ||
    //   character.toLowerCase() === "e" ||
    //   character.toLowerCase() === "u"
    // ) {
    //   result.push("_");
    // } else {
    //   result.push(character);
    // }
  });

  return result.join("");
}

function removeVowelsForWords(words) {
  var result = words.map((word) => {
    return removeVowels(word);
  });

  return result;
}

/*
  Task 1
  Let's trace this piece of code - what is the value of result with this input
  */
var result = removeVowels("samuel");

console.log(result);

/*
	Task 2
	Trace what happens if we call the function removeVowelsForWords with this input: ["Irina", "Etza", "Daniel"]
    expected output?:
*/

var names = removeVowelsForWords(["Irina", "Etza", "Daniel"]);
console.log(names);
