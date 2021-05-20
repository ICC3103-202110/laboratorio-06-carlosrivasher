const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
        'Unit Converter App',
        {
            horizontalLayout: 'full',
            font: 'speed'
        }
        )
    )
}

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [
        {'leftValue': leftValue,
        'leftUnit': leftUnit,
        'rightValue': rightValue,
        'rightUnit': rightUnit
        }
    ]
}

function inputValues(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt([
        {
            name: 'Left',
            type: 'confirm',
            message: 'Left temperature is source?',
            default: Boolean
        },
        {
            name: 'Value',
            type: 'number',
            message: 'Temperature value to convert?',
            default: 0
        },
        {
            name: 'From',
            type: 'list',
            message: 'From?',
            choices: choices
        },
        {
            name: 'To',
            type: 'list',
            message: 'To?',
            choices: choices
        }
    ])
}

function view(model){
    return {
        tittle: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputValues
}