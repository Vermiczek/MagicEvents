var event;

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function signForEvent(eventnumber)
{
   var newid = makeid(15);
   document.getElementById("info" + eventnumber).innerText = "Write down your code: " + newid;
   console.log(newid);
}