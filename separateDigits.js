var separateDigits = function(nums){
    var list = []
    var str = ""
    for (var i = 0; i < nums.length; i++) {
        str += nums[i].toString()
    }
    
    for (var i = 0; i < str.length; i++) {
        list.push(Number(str[i]))
    }
    return list
}

