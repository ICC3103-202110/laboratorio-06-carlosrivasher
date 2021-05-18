function update(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return {
        ...model,
        leftValue: 0,
        leftUnit: "Celcius",
        rightValue: 32,
        rightUnit: "Fahrenheit"
    }
}

module.exports = {
    update
}