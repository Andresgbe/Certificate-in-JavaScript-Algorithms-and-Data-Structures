function palindrome(str) {
    const word = [];
    const aux = []
    var simplifier = /[^a-z0-9]/ig;
    str = str.replace(simplifier, '').toLowerCase();
    var long = str.length;
    var x = 0;
    
       for(var j = long - 1; j >= 0 ; j--){
               word[j] = str[j]; 
        }

        for(var i = long - 1; i >= 0 ; i--){
               aux[x] = word[i];
               x++;   
        }
    
        for (var y = long - 1; y >= 0; y--){
            if (word[y] != aux[y]){
                return false;
            }
        }
    
    return true;
}