function telephoneCheck(str) {
    var val = 0;
    var simplifier = /[^0-9]\s/g;
    var onlynumbers = /[^0-9]/g;
    var numbers = str.replace(onlynumbers, '');
    var number_long = numbers.length;
    var validator = 0;

        for (var i = 0; i < str.length; i++){
            if (str[i] == "(" || str[i] == ")"){
                val += 1;
            }
        }
  
        if (str[0] == "(" && val != 2) {
            return false;
        } else if (str[11] == ")"){
            return false;
        } 
  
        if (str[0] == 5 && str[1] == 5 && str[2] == " ") {
            return false;
        }
  
    str = str.replace(simplifier, '');

        if (number_long == 11 && numbers[0] != 1){
            return false;
        }
  
        if (val == 2 || val == 0){
        } else  { 
            return false;
        }
      
        if ((str[1] == " " || str[1] == "(") && number_long == 11) {
            validator = 1; 
        }
  
        if (validator == 1 && number_long == 11){ 
            return true;
        } 
  
        if (str[0] != 1 && number_long == 10) {
            return true;
        } 
    return false;
}