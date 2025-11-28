
let input=document.querySelector('input');
function addValue(elementVal){
input.value += elementVal
}
function clearVal(){

    input.value = ""
}
function deleteLastCharacter(){
    input.value = input.value.slice(0,-1)
}
function evaluateVal(){
    input.value = eval(input.value)
}









