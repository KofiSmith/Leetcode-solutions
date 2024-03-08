var alternateDigitSum = function(n){
    var str = n.toString()
    var sum = 0

    for(let i=0;i<str.length;++i){

      if(i%2==0){
        
        sum += Number(str[i])
        
    }else{
    sum -= Number(str[i])
}
      }
    return sum
}
