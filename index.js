function check(){
    let a = false;
    let b = false;
    let c = false;

    let x = document.querySelector("#x1").value;  
    let regx1 = /^[a-zA-Z ]+$/; 
    if(regx1.test(x)){
        a = true;
    }else{
        document.querySelector("#p1").innerText = "Please enter valid name.";
        document.querySelector("#x1").style = "border : 1px solid red";
    }
    
    let y = document.querySelector("#x2").value;
    let regx2 = /^[6-9][0-9]{9}$/;
    if(regx2.test(y)){
        b = true;
    }else{
        document.querySelector("#p2").innerHTML = "Please enter valid number."
        document.querySelector("#x2").style = "border : 1px solid red";
    }
    
    let z = document.querySelector("#x3").value;
    let regx3 = /^[A-Za-z0-9_.]+[@][a-zA-Z]+[.][a-zA-Z]+$/;
    if(regx3.test(z)){
        c = true;
    }else{
        document.querySelector("#x3").style = "border : 1px solid red";
        document.querySelector("#p3").innerHTML = "Please enter valid email."
    }
    
    if(a==true && b==true && c==true){
        alert("Your form has been submitted successfully.")
    }
    
}