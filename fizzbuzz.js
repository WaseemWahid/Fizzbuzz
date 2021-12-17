//Write code that will go through each number from 1 to 100 and:
for (var i = 1; i < 101; i++) {
    //For each number that is a multiple of 3, print "Fizz
    if(i % 3 ==0) {
        console.log("Fizz")
    }
    //For each number that is a multiple of 5, print "Buzz"
    
    if (i%5 ==0) {
        console.log("Buzz")
    
    //For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
    
    if(i%3==0 && i%5==0)
    console.log("FizzBuzz")
    
    } else {
        console.log(i)
    }
}
