 
//  is  prime  *****************************************************************************
let a = 30;
let flag = 0;
// conditon can be  i<= a/2  or i<a but optimal is i*i <= a (means factor of number can be less than or equal to the square root of number)
for (let i = 2; i*i <= a; i++){     
    if (a % i == 0) {
        flag = 1;
    }
}

if (flag == 0) {
    console.log("prime");
} else {
    console.log("not prime")
}

//********************************************************************************************************** */