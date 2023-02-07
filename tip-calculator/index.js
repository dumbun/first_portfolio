

const billInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")

let numberOfPeople = Number(numberOfPeopleDiv.innerText)


// ** Calculate the total bill per person **

const calculateBill = () => {

    const bill = Number(billInput.value)


    const tipPercentage = Number(tipInput.value) / 100 //tip percentage


    const totalTip = bill * tipPercentage // total tip Amount


    let total = bill + totalTip

    let perPersonTotal = total / numberOfPeople

    perPersonTotalDiv.innerText = `$ ${perPersonTotal.toFixed(2)}`

}

// ** Splits the bill between more people **
const increasePeople = () => {

    numberOfPeople += 1


    numberOfPeopleDiv.innerText = numberOfPeople


    calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {

    if (numberOfPeople > 1) {
        numberOfPeople--
        numberOfPeopleDiv.innerText = numberOfPeople
        calculateBill();
    }
    if (numberOfPeople < 1) {
        alert("hey you cannot have less that 1 person")
        return
    }


}