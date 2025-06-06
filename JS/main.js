function setError(id,message)
{
    document.getElementById(id).innerText=message;

}

function clearError(){
    setError("nameError","")
    setError("ageError","")
    setError("confirmError","")
}





function onSubmit(){
    clearError();

    let val=true;
    let names=document.getElementById("nameId").value;
    let ages=document.getElementById("ageId").value;
    let password=document.getElementById("passwordId").value;
    let confirmPassword=document.getElementById("confirmId").value
    if(names.length>20 ){
        val=false;
        setError("nameError","Name is too long");
    }
    if(ages<18){
        val=false;
        setError("ageError","Age above 18")
    }
    if(password!=confirmPassword){
        val=false;
        setError("confirmError","Password not matching")
    }
    else
        alert('Form Submitted')
    return val;
}


