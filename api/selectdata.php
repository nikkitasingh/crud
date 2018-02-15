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

  $name = $_POST['uname'];
  $password = $_POST['upass'];



$sql = "SELECT * FROM login where name = '$name' and passwordd = '$password' ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $output[] = $row;
    }
   echo  json_encode ($output);
   
    
} else {
    echo "failed";
}

$conn->close();

?>
