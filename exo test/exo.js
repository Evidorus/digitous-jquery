function cumulotator(n){
    var cumul = 0;
    for( var i = 0; i <= n; i++){
        cumul += i;
    }
    console.log(cumul);
} 
cumulotator(5)