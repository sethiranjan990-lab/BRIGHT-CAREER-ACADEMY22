function submitForm(){
const data={
name:document.getElementById("name").value,
course:document.getElementById("course").value,
stream:document.getElementById("stream").value,
mobile:document.getElementById("mobile").value,
address:document.getElementById("address").value,
school:document.getElementById("school").value,
mode:document.getElementById("mode").value
};
fetch("PASTE_YOUR_GOOGLE_SCRIPT_URL",{method:"POST",body:JSON.stringify(data)})
.then(()=>{document.getElementById("msg").innerText="✅ Admission Submitted Successfully!";})
.catch(()=>{document.getElementById("msg").innerText="❌ Error! Try again.";});
}
function whatsappChat(){
const number="91XXXXXXXXXX";
const text=encodeURIComponent("Hello BrightCareer Academy! I want to enquire about admission.");
window.open(`https://wa.me/${number}?text=${text}`,"_blank");
}
