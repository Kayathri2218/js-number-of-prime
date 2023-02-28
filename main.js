 //n of number prime 

        let enter = parseInt(prompt("enter the number : "));
        for (let i = 1; i <= enter; i++){
            let isPrime = true;
            for(let j = 2; j <= Math.sqrt(i);j++){
                if(i%j==0){
                    isPrime=false;
                    break;
                }
            }
            if(isPrime){
                console.log(i);
            }
        }
