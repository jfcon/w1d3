function countLetters(phrase) {
    var oneString = phrase.split(" ").join("");
    // console.log('oneString ', oneString);
    var library = {};

    for(let i=0; i < oneString.length; i++) {
        // console.log("char ", oneString[i]);
        if(library[oneString[i]]) {
            library[oneString[i]]++;
        } else {
            library[oneString[i]] = 1;
        }
    }
    return library;
}
var result = countLetters("lighthouse in the house");

function format(result){
    var str = "{ "
    for(let key in result) {
        // key
        // result[key]
        //str += "\n" + key + ": " + result[key] + ", \n" 
        str += `\n${key}: ${result[key]}, \n` 
    }
    str += "}"
    return str;
}

console.log(format(result))
// console.log(result);