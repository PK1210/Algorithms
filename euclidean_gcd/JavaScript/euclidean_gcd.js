function euclidean_gcd (a,b) {
    if(!b)
        return a;
    return euclidean_gcd(b,a%b);
}

function main () {
    let a = 69; //first number
    let b = input();//second number
    if(a===b && a===0)
        console.log("Error gcd of 0,0 not defined");
    else if (a===0)
        console.log("Gcd of "+ a +"," + b +" is "+euclidean_gcd(b,a));
    else
        console.log("Gcd of "+ a +"," + b +" is "+euclidean_gcd(a,b));
}

main();
