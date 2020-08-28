function fizzBuzz(i) {
    let result = i
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz"
    } else if (i % 3 === 0) {
          result = "Fizz"
    } else if (i % 5 === 0){
          result = "Buzz"
    }
    console.log(result)
}
let i = 1
do {
    fizzBuzz(i)
    i++
} while (i < 101)