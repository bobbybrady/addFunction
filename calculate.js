const add = (arg1, arg2) => {
    const result = arg1 + arg2
    console.log(result)
}
add(13, 45)

const multFunction = (num1, num2) => console.log(num1 * num2)

multFunction(6, 56)

const calculate = (num1, num2, func) => {
    func(num1, num2)
}

calculate(20, 14, multFunction)

