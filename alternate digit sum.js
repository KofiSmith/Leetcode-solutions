var alternateDigitSum = function(n){
    var str = n.toString()
    var sign = -1
    var sum = 0
    for(let i=str.length-1;i>=0;--i){
        sign *= -1
        sum += sign * Number(str[i])
    }
    return sum
}