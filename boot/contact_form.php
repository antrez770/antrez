<?php

$email = $_POST['parameter'];

$date = new DateTime();
$date = $date->format("y:m:d h:i:s");


if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

echo "<span class='green'>email validated</span>";

$list = array (
    array($date, $email, 'true')
    );
    
    $fp = fopen('file.csv', 'a');

		foreach ($list as $fields) 
		{
		    fputcsv($fp, $fields);
		}

	fclose($fp);

 } 
  else 
  {	

echo "<span class='red'>email is not valid</span>";

$list = array (
    array($email, $date, 'false')
    );

if ($email != ' '){
	$fp = fopen('file.csv', 'a');

	foreach ($list as $fields) {
	    fputcsv($fp, $fields);
	}	

	fclose($fp);
  }
}

?>