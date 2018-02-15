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

$username = $_POST['username'];
$useremail = $_POST['emailid'];
$userpass = $_POST['password'];


$sql = "SELECT * FROM login where email = '$useremail' ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
echo "email id already exist";
   
    
}
else {
    
    $sql = "INSERT INTO login (name, email, passwordd)
VALUES ('$username', '$useremail', '$userpass')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "false";
}

        
}




$conn->close();

?>