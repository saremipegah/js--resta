// function sendMail(event){
//     event.preventDefault();
//     var params = {
//         email: document.getElementById("email").value,
//         firstname : document.getElementById("firstname").value,
//         lastname : document.getElementById("lastname").value,
//         phonenumber : document.getElementById("phonenumber").value,
//         birthdaytime : document.getElementById("birthdaytime").value,
//         address : document.getElementById("address").value,
//         city : document.getElementById("city").value,
//         country : document.getElementById("country").value,
//         citizenship : document.getElementById("citizenship").value,
//         education : document.getElementById("education").value,
//         major : document.getElementById("major").value,
//         university : document.getElementById("university").value,
//         work : document.getElementById("work").value,
//         IeltsExam: document.getElementById("ieltsexam").value,
//         ielttest: document.getElementById("ielttest").value,
//         reading: document.getElementById("reading").value,
//         listening: document.getElementById("listening").value,
//         writing: document.getElementById("writing").value,
//         speaking: document.getElementById("speaking").value,
//         tef : document.getElementById("tef").value,
//         maritalStatus: document.getElementById("marital").value,
//     };
//     const serviceID="service_7h9o9fw";
//     const templateID="template_h568uh8";
    
//     emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//             document.getElementById("email").value ="";
//             document.getElementById("firstname").value ="";
//             document.getElementById("lastname").value ="";
//             document.getElementById("phonenumber").value ="";
//             document.getElementById("birthdaytime").value ="";
//             document.getElementById("address").value ="";
//             document.getElementById("city").value ="";
//             document.getElementById("citizenship").value ="";
//             document.getElementById("education").value ="";
//             document.getElementById("major").value ="";
//             document.getElementById("university").value ="";
//             document.getElementById("work").value ="";
//             document.getElementById("ieltsexam").value ="";
//             document.getElementById("ielttest").value ="";
//             document.getElementById("reading").value ="";
//             document.getElementById("listening").value ="";
//             document.getElementById("writing").value ="";
//             document.getElementById("speaking").value ="";
//             document.getElementById("tef").value ="";
//             document.getElementById("marital").value ="";
//             console.log(res);
//             alert("your form sent successfully");
//          })
//           .catch((err) => console.log(err)); 
// }


    





