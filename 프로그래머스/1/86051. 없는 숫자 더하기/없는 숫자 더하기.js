function solution(numbers) {
    let result = 0
    let a = numbers

  
   for(let i=0 ; i< 10 ; i++){
       if(!a.includes(i)){result += i}
   }return(result)  
}