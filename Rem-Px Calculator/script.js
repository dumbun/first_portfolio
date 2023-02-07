let inputPx = document.getElementById("px")
let inputRem = document.getElementById("rem")


function calculateRem() {

    let result1 = Number(inputPx.value) / 16

    inputRem.value = `${result1}`


}


function calculatePx() {

    let result2 = Number(inputRem.value) * 16

    inputPx.value = `${result2}`
}