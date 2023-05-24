let calculation = document.getElementById("display");
function calculate(num){
    calculation.value += num;
}

function result(){
    try{
        calculation.value = eval (calculation.value);
    }

    catch(error){
        alert("Error!");
    }
}

function Clear(){
    calculation.value = "";
}

function Del(){
    calculation.value = calculation.value.slice (0, -1);
}