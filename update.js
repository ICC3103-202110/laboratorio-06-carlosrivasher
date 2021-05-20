function cTo(unit,value){
    if(unit === 'Fahrenheit'){
        return Number(value*(9/5)+32)
    }
    else{
        return Number(value+273.15)
    }
}

function kTo(unit,value){
    if(unit === 'Celsius'){
        return Number(value-273.15)
    }
    else{
        return Number((value-273.15)*(9/5)+32)
    }
}

function fTo(unit,value){
    if(unit === 'Celsius'){
        return Number((value-32)*(5/9))
    }
    else{
        return Number((value-32)*(5/9)+273.15)
    }
}

function update(left, from, to, value, model){
    if(left === true){
        if(from === 'Celsius'){
            return {
                ...model,
                leftValue: value,
                leftUnit: "Celsius",
                rightValue: cTo(to, value),
                rightUnit: to
            }
        }
        if(from === 'Fahrenheit'){
            return {
                ...model,
                leftValue: value,
                leftUnit: 'Fahrenheit',
                rightValue: fTo(to, value),
                rightUnit: to
            }
        }
        else{
            return {
                ...model,
                leftValue: value,
                leftUnit: "Kelvin",
                rightValue: kTo(to, value),
                rightUnit: to
            }
        }
    }
    else{
        if(from === 'Celsius'){
            return {
                ...model,
                leftValue: cTo(to, value),
                leftUnit: to,
                rightValue: value,
                rightUnit: "Celsius"
            }
        }
        if(from === 'Fahrenheit'){
            return {
                ...model,
                leftValue: fTo(to, value),
                leftUnit: to,
                rightValue: value,
                rightUnit: 'Fahrenheit'
            }
        }
        else{
            return {
                ...model,
                leftValue: kTo(to, value),
                leftUnit: to,
                rightValue: value,
                rightUnit: "Kelvin"
            }
        }
    }
}

module.exports = {
    update
}