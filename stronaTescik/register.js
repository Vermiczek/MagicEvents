function register()
{
        var user_name = document.getElementById("login").value;
        var password = document.getElementById("password").value;

        if( user_name != "" && password != "" ){
            $.ajax({
                url:'register.php',
                type:'post',
                data:{user_name:user_name,password:password},
                success:function(response){
                    var msg = "";
                    if(response == 1){
                        msg = "Account created.";
                        console.log(msg);
                    }
                    if(response == 0)
                    {
                        msg = "Username taken!";
                        console.log(msg);
                    }
                    if(response == 2)
                    {
                        msg = "Invalid username or password!";
                        console.log(msg);
                    }
                    document.getElementById("info").innerText = msg;
                }})}}
    