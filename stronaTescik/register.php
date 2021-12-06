<?php 
session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{   
		//something was posted
		$user_name = $_POST['user_name'];
		$password = $_POST['password'];
        $query = "select * from usersdata where user_name = '$user_name' limit 1";
		$result = mysqli_query($con, $query);

        if(!mysqli_num_rows($result)==0)
        {
            echo 0;
            die;
        }
		else if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//save to database
			$user_id = random_num(20);
			$query = "insert into usersdata (user_id,user_name,password) values ('$user_id','$user_name','$password')";
            $event1code = 0;
            $event2code = 0;
            $event3code = 0;
            $event4code = 0;
            $event5code = 0;

			mysqli_query($con, $query);
            echo 1;

			// header("Location: login.php");
			die;
		}
        echo 2;
	}
?>