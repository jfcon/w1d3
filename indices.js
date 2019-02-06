function countLetters(phrase) {
    var oneString = phrase;
    // console.log('oneString ', oneString);
    var library = {};

    for (let i = 0; i < oneString.length; i++) {
        // if (library[oneString[i]] == " "){

        // it's already in the library then push to an array

        if(library[oneString[i]]){
            library[oneString[i]].push(i+1);
        } else {
            library[oneString[i]] = [(i+1)];
        }
    }
    console.log(library);
    console.log(library.h[3])
}

var result = countLetters("lighthouse in the house");
