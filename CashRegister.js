function checkCashRegister(price, cash, cid){
    let money = [
     ["PENNY", 0.01],
     ["NICKEL", 0.05],
     ["DIME", 0.10],
     ["QUARTER", 0.25],
     ["ONE", 1],
     ["FIVE", 5],
     ["TEN", 10],
     ["TWENTY", 20],
     ["ONE HUNDRED", 100]
   ]; 

   let result = {
       status: "",
       change: []
   }
  
   let change = [
     [" ", 0],
     [" ", 0],
     [" ", 0],
     [" ", 0],
     [" ", 0],
     [" ", 0],
     [" ", 0],
     [" ", 0],
     [" ", 0]
   ];
  
   let diff = (cash - price).toFixed(2);
   let total = 0;
   let unit = 0;
   
    for(let j = 0; j < cid.length; j++){
        total += cid[j][1];
    }
  
    if(total < diff){
        result.status = "INSUFFICIENT_FUNDS";
        return result;
    } 
  
    if(total == diff){
        result.status = "CLOSED";
        result.change = cid;
        return result;
    } else{
        result.status = "OPEN";
    }
  
    for(let i = 7; i >= 0; i--){
        let k = [["last", 0]];
            if (diff >= money[i][1] && cid[i][1] > 0){
                k[0][1] = money[i][1]; 
                    while(cid[i][1] > 0.01 && k[0][1] <= diff){
                        change[i][0] = cid[i][0]; 
                        change[i][1] += k[0][1];
                        cid[i][1] -= k[0][1];
                        diff -= k[0][1];
                        unit = 1;
                    }
            }
    }
  
    if(change[0][1] >= 0.005){
       change[0][1] += 0.01;
    }
  
    const filter = change.filter(chang => chang[0][0] != " ");
    result.change = filter.reverse();
  
    if(unit == 0){
    
    result.status = "INSUFFICIENT_FUNDS";
    }
  return result;
}