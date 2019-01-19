$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


//LOGIN FORM
$(document).ready(function(){

   //LOGIN BUTTON
   $('#LoginButton').click(function(){

    //if(username.length !=0 && password.length !=0){
    $.ajax({
       type: 'POST',
       data: JSON.stringify({
         username: $("#username2").val(),
         password: $("#password2").val()
       }),
       dataType: 'json',
       url: "http://147.83.7.204:8080/dsaApp/authentication/login",
       success: function(data, status) {
          console.log("Succesful");
          console.log(data);
       },

       error: function(error){
          console.log('ERROR');
          console.log(error);
          }
         })
      });
}); 

//})


   //REGISTER BUTTON
   $('#RegisterButton').click(function(){

   //if(username.length !=0 && password.length !=0){
   $.ajax({
      type: 'POST',
      data: JSON.stringify({
         nombre: $("#username1").val(),
         password: $("#password1").val(),
      }),
      dataType: 'json',
      url: "http://147.83.7.204:8080/dsaApp/authentication/signin",
   
     success: function (data, status) {
         alert("OK");
     },

     error: function(data, status){
         alert("Error");
     }
      })
   }
}); 

