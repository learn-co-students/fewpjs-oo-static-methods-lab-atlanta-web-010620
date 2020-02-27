class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static  sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let sentence = string.split(" "); 
    let badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    let newSentence = sentence.map(function(word){
      if (!badWords.includes(word)){
        // Formatter.capitalize(word); 
        return word = word.charAt(0).toUpperCase() + word.slice(1)
      }else{
        return word
      }
    })
    newSentence[0] = newSentence[0].charAt(0).toUpperCase() + newSentence[0].slice(1)
    return newSentence.join(" ")
  }
  // let myString = "this is my string a and but" 
  // titleize(myString); 
}