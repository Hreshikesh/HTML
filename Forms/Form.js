

function onSubmit() {
   
    
    let inpName=document.formName.nameName.value;
    let noName=document.formName.numberName.value;
    let emaName=document.formName.emailName.value;
    let gendName=document.formName.genderName.value;
    let passName=document.formName.passwordName.value;
    

    alert(inpName+" "+noName+" "+emaName+" "+passName+" "+passName+" "+gendName);

    return true;
}