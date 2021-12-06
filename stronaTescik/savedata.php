<?php 

session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$user_name = $_POST['user_name'];

		if(!empty($user_name))
		{

			//read from database
			$query = "select * from usersdata where user_name = '$user_name' limit 1";
			$result = mysqli_query($conn, $query);
            
			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{
                    mysqli_query($conn, "UPDATE usersdata set event1code ='" . $_POST['event1code'] . "',
                     event2code =' " .$_POST['event2code'] . " ',
                     event3code =' " .$_POST['event3code'] . " ',
                     event4code =' " .$_POST['event4code'] . " ',
                     event5code =' " .$_POST['event5code'] . " '");
					$user_data = mysqli_fetch_assoc($result);
                    echo 1;
                    die;
				}
			}
		}
        echo 0;
		die;
	}

?>
