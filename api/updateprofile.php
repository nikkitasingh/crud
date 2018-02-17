<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nikita";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['updateusername'];
$useremail = $_POST['updateemail'];
$id = $_POST['userid'];


$sql = "UPDATE login SET name ='$username', email= '$useremail'  WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "false";
}


$conn->close();

?>