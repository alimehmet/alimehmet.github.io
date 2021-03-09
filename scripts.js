 function makeEditable(div) {
   div.style.border = "1px solid #000";
   div.style.padding = "20px";
   div.contentEditable = true;
 }

 function makeReadOnly(div) {
   div.style.border = "none";
   div.style.padding = "0px";
   div.contentEditable = false;
   alert("Başarıyla kaydedildi.");
 }

 var formcontrol = 0;

 function control(inputtxt, inputtxt1, inputtxt2, inputtxt3, inputtxt4, inputtxt5) {
   var userInput = inputtxt.value;
   if (/^[a-zA-Z()]+$/.test(userInput) == true && userInput.length != 0) {
     formcontrol = formcontrol + 1;

   } else {
     alert("Ad alanı boş olmamalı ve yalnızca alfabetik karakterlere sahip olmalıdır.");
     return false;
   }

   var userInput = inputtxt1.value;
   if (/^[a-zA-Z()]+$/.test(userInput) == true && userInput.length != 0) {
     formcontrol = formcontrol + 1;

   } else {
     alert("Soyad alanı boş olmamalı ve yalnızca alfabetik karakterlere sahip olmalıdır.");
     return false;
   }
   var userInput = inputtxt2.value;
   if (/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(userInput) == true && userInput.length != 0) {
     formcontrol = formcontrol + 1;

   } else {
     alert("Tarih alanı boş olmamalı ve GG/AA/YYYY formatına uygun olmalıdır.");
     return false;
   }

   var userInput = inputtxt3.value;
   if (/^(0)([0-9]{3})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/.test(userInput) == true && userInput.length != 0) {
     formcontrol = formcontrol + 1;

   } else {
     alert("Telefon numarası alanı boş olmamalı ve 01231231212 veya 0123 123 12 12 formatına uygun olmalıdır.");
     return false;
   }

   var userInput = inputtxt4.value;
   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userInput) == true && userInput.length != 0) {
     formcontrol = formcontrol + 1;

   } else {
     alert("Geçersiz e-mail adresi girdiniz");
     return false;
   }

   var userInput = inputtxt5.value;
   if (userInput.length != 0) {
     formcontrol = formcontrol + 1;
     if (formcontrol == 6) {
       alert("Form başarıyla gönderildi!");
     }
     return true;
     clear();
   } else {
     alert("Mesaj alanını doldurunuz.");
     return false;
   }
 }

 function vidplay() {
   var video = document.getElementById("Video1");
   var button = document.getElementById("play");
   if (video.paused) {
     video.play();
     button.textContent = "||";
   } else {
     video.pause();
     button.textContent = ">";
   }
 }

 function restart() {
   var video = document.getElementById("Video1");
   video.currentTime = 0;
 }

 function skip(value) {
   var video = document.getElementById("Video1");
   video.currentTime += value;
 }
