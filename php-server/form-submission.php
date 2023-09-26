<?php
$servername = "localhost";
$username = "piwnrbcd_admin";
$password = "k;{htb?%@Uo+";
$dbname = "piwnrbcd_ehouse";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$contactNo = $_POST['contactNo'];
$selectedCourse = $_POST['selectedCourse'];

$sql = "INSERT INTO registeration_requests (firstName, lastName, email, contactNo, selectedCourse)
        VALUES ('$firstName', '$lastName', '$email', '$contactNo', '$selectedCourse')";

if ($conn->query($sql) === TRUE) {
    echo "Student data has been successfully saved!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>