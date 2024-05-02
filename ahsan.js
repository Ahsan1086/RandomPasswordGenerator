const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet ="~!@#$%^&*()|}{";


//Selectors
const upperinput = document.getElementById("upper-case");
const lowerinput = document.getElementById("lower-case");
const numberinput = document.getElementById("numbers");
const symbolinput = document.getElementById("symbols");

const totalChar = document.getElementById("total-char");
const passBox = document.getElementById("pass-box");




const getRandomSymbol = (dataSet) =>{
    return dataSet[Math.floor(Math.random() * dataSet.length )]
}

const generatePassword =(password ="") =>{
if(upperinput.checked){
    password += getRandomSymbol(upperSet);
}
if(lowerinput.checked){
    password += getRandomSymbol(lowerSet);
}
if(numberinput.checked){
    password += getRandomSymbol(numberSet);
}
if(symbolinput.checked){
    password += getRandomSymbol(symbolSet);
}
if(password.length < totalChar.value){

    return generatePassword(password);
}

passBox.innerText = truncate(password, totalChar.value);
}
generatePassword();


function truncate(str,num){
    if(str.lenght > num){
        let subStr= str.subStr(0,num);
    return subStr;
    }
    else{
        return str;
    }
}
document.getElementById("btn").addEventListener(
    "click",
    function(){
    generatePassword();
})