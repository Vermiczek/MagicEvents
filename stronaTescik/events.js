var username = '';
var event1;
var event2;
var event3;
var event4;
var event5;
var eventstable;
var loggedin = 0;
var user;

class Event {
    constructor(name, startdate, enddate, thumbnail) {
      this.name = name;
      this.enddate = enddate;
      this.startdate = startdate;
      this.thumbnail = thumbnail;
    }
  }

class User {
    constructor(name) {
      this.name = name;
      this.eventcodes=[0,0,0,0,0];
    }
  }

function makeEvents(){
  var event1= new Event("Magic Forest Party", "02.07.2021", "06.07.2021","./pictures/thumbnail1.jpg");
  var  event2= new Event("Desert Race", "06.07.2021", "10.07.2021","./pictures/thumbnail2.jpg");
  var event3= new Event("Sailing on the Magic Sea", "09.07.2021", "23.08.2021","./pictures/thumbnail3.jpg");
  var event4= new Event("Crystal Cave Disco", "05.07.2021", "06.07.2021","./pictures/thumbnail4.jpg");
  var event5= new Event("Rave in Hell", "06.07.2021", "09.07.2021","./pictures/thumbnail5.jpg");
  events = [event1, event2, event3, event4, event5];
  return events;
}

function setEvent(number){
    var tempnumb = number +1;
   var tbl = "thumbnail" + tempnumb;
    var eventname = "eventname" + tempnumb;
    var enddate = "endDate" + tempnumb;    var startingdate = "startingDate" + tempnumb;
     document.getElementById(tbl).src = eventstable[number]["thumbnail"];
    console.log(eventstable[number].thumbnail);

    document.getElementById(eventname).innerText = eventstable[number]["name"];
   
    document.getElementById(enddate).innerText = eventstable[number]["enddate"];
 
     document.getElementById(startingdate).innerText = eventstable[number]["startdate"];
    
 }

function setvariables(){
    if(loggedin == 1)
    {
        document.getElementById("box").style.display="none";
        eventstable = makeEvents();
        for (let number = 0; number < 5; number++) {
                            setEvent(number);    
             }
        console.log(eventstable[0]["thumbnail"]);
        document.getElementById("eventBox").style.display="block";
        username = user_name;
    }
}

function loginEvents()
{       
        var user_name = document.getElementById("login").value;
        var password = document.getElementById("password").value;

        if( user_name != "" && password != "" ){
            $.ajax({
                url:'loginEvents.php',
                type:'post',
                data:{user_name:user_name,password:password},
                success:function(response){
                    var msg = "";
                    if(response == 1){
                        user = new User(user_name);
                        msg = "Login succesful!";
                        loggedin = 1;
                        document.getElementById("box").style.display="none";
                        eventstable = makeEvents();
                      

                        
                        for (let number = 0; number < 5; number++) {
                                            setEvent(number);    
                             }
                        console.log(eventstable[0]["thumbnail"]);
                        document.getElementById("eventBox").style.display="block";
                        console.log(msg);
                    }
                    if(response == 0)
                    {  
                        msg = "Invalid username or password!";
                        console.log(msg);
                    }
                    document.getElementById("info").innerText = msg;
                }})}}
        
                
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


function addEventCodes(event1code,event2code,event3code,event4code,event5code)
{       
        console.log("sending...");
        var user_name = user.name;
        if( user_name ){
            $.ajax({
                url:'xd.php',
                type:'post',
                data:{event1code:event1code,event2code:event2code,event3code:event3code,event4code:event4code,event5code:event5code},
                success:function(response){
                    var msg = "";
                    if(response == 1){
                        user = new User(user_name);
                        msg = "Adding code succesful!";
                        console.log(msg);
                    }
                    if(response == 0)
                    {  
                        msg = "Error!";
                        console.log(msg);
                    }
                    document.getElementById("info").innerText = msg;
                }})}}

function signForEvent(eventnumber)
{   
   var newid = makeid(15);
   if(user.eventcodes[eventnumber-1]==0){
    user.eventcodes[eventnumber-1] = newid;
    document.getElementById("info"+eventnumber).innerText = "Your code: " + newid;}
   else{
    document.getElementById("info"+eventnumber).innerText = "Code already generated";
   }


   console.log(user.eventcodes[0]);
}

function removeReservation(eventnumber)
{   
   var code = document.getElementById("ev"+eventnumber).value;
   if(code == user.eventcodes[eventnumber-1])
   {
    user.eventcodes[eventnumber-1] = 0;
    document.getElementById("info"+eventnumber).innerText = "Reservation removed";
   }
   else if(user.eventcodes[eventnumber-1]==0)
   {
    document.getElementById("info"+eventnumber).innerText = "Reservation not made";
   }
   else
   {
    document.getElementById("info"+eventnumber).innerText = "Wrong code";
   }
}