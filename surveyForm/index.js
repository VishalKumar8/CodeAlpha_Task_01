const formEl=document.forms.surveyForm;
 // call by name
// const fullNameEl=formEl.elements.fName;
// const collegeNameEl=formEl.elements.cName;
// const mailId=formEl.elements.mailId;
// const contactEl=formEl.elements.contactNo;  
// console.log(fullNameEl , collegeNameEl, mailId, contactEl);
formEl.addEventListener("click",(event)=>{
    const {Name,emailid,age,collegeName,contactNo}=formEl.elements;
    console.log("Form Submited");
})
