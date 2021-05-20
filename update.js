function cTo(unit,value){
    if(unit === 'Fahrenheit'){
        return Number(value*(9/5)+32)
    }
    else{
        return Number(value+273.15)
    }
}

function kTo(unit,value){
    if(unit === 'Celcius'){
        return Number(value-273.15)
    }
    else{
        return Number((value-273.15)*(9/5)+32)
    }
}

function fTo(unit,value){
    if(unit === 'Celcius'){
        return Number((value-32)*(5/9))
    }
    else{
        return Number((value-32)*(5/9)+273.15)
    }
}

function update(from,to,unit,model){
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