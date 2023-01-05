// to find the primenumber
function primenumber(n){
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            return undefined;
        }
            
         
        }
        return n;   
}

let pnumber=[];
for(let i=2;i<=100;i++){
    if(primenumber(i))
    pnumber.push(primenumber(i))
}
console.log(pnumber)