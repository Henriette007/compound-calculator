// compound interest calculator that prompts a user for some inputs, and finally calculates the compound interest value

const prompt = require('prompt-sync')()

//let initAmount = 20000
//let monthlyContribution = 400
//let numberOfYears = 30
//let interestRate = 10

//Step 1 - define a function we can use to calculate the final value of the compounded interest

function compundInterest(initAmount, monthlyContribution, numberOfYears, interestRate){
    let total = initAmount
    let annualContrib = monthlyContribution * 12

    for(let i =0; i< numberOfYears;i++){
        total = total + annualContrib
        total = total * ((100 + interestRate)/100)
    }
    return total.toFixed(2)
}

//step 2 - define a function that would calulate the difference(ie the effect that compounding has had)

function calculateRegularAmount(initAmount, monthlyContribution, numberOfYears)
{let regularValue = monthlyContribution*12*numberOfYears
   // console.log(regularValue)
    
    return regularValue.toFixed(2)
    }



//step 3 - to create a run function that then prompts the user for all the necessary inpots required to calculate the final amounts

function run(){
    let initAmount = parseInt(prompt('What is your initial investment?($)'))
    let monthlyContribution = parseInt(prompt('What is your monthly contribution?($)'))
    let numberOfYears = parseInt(prompt('What is the number of years you invest for?'))
    let interestRate = parseInt(prompt('What is the interest rate(%) for your investment?'))

    printOutput(initAmount, monthlyContribution, numberOfYears, interestRate)
}

//step 4 - inside of said function, make a nice pretty print statement using a template literal string that gives the finacial
function printOutput(initAmount, monthlyContribution, numberOfYears, interestRate){
    let finalAmount = compundInterest(initAmount, monthlyContribution, numberOfYears, interestRate)
    let amountWithoutInterest = calculateRegularAmount(initAmount, monthlyContribution, numberOfYears)

    let summary = `Initial amount: $ ${initAmount}\nMonthly Contribution: $ ${monthlyContribution} \nNumber of years: ${numberOfYears}\nInterest Rate: ${interestRate}%\n \nFinal compound value = $ ${finalAmount}\nRegular Value: $ ${amountWithoutInterest}\nThe diference: $ ${finalAmount-amountWithoutInterest}`
    console.log(summary)
}

run()