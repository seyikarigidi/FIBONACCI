let array =[];
let n=10;
for(let i=0;i<n;i++){
    array[0] = 0;
if(i==1)  {
array[i]=1;
} 
  else{  array[i]=array[i-1]+array[i-2];
    array.push(array[i]);
}
}
console.log(array)