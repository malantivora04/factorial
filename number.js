function factorial(){
    var n = Number(document.getElementById("t1").value);
    var output = document.getElementById("p1");
    var fact = 1;

    for(var i=1; i<=n; i++){
        fact = fact*i;
    }

    output.innerHTML = fact + " " + "is the factorial of " + n;
    return false;
        
    
        

    

    
}