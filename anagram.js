function anagram(s1,s2) {
    var c1 = createArrayList();
    var c2 = createArrayList();
    var unicodeForA = "a".charCodeAt();

    for(var i=0; i < s1.length; i++) {
        var pos = (s1[i].charCodeAt()) - (unicodeForA);
        c1[pos] = c1[pos] + 1;
    }

    for(var j=0; j < s2.length; j++) {
        var pos = (s2[j].charCodeAt()) - unicodeForA;
        c2[pos] = c2[pos] + 1;
    }

    var k = 0;
    isAnagram = true
    while (k < 26 && isAnagram) {
        if(c1[k] == c2[k]){
            k = k+1;
        }else {
            isAnagram = false;
        }
    }
    return isAnagram;
}

function createArrayList(){
    var alphabet = [];
    for (var i = 0; i < 26; i ++) {
        alphabet.push(0)
    }
    return alphabet;
}

console.log(anagram("abc", "ba"));