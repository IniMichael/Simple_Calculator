let calculation = document.getElementById("display");
function calculate(num){
    calculation.value += num;
}

function result(){
    try{
        calculation.value = eval (calculation.value);
    }

    catch(error){
        calculation.value = ("Syntax Error!");
    }
}

function clr(){
    calculation.value = "";
}

function del(){
    calculation.value = calculation.value.slice (0, -1);
}