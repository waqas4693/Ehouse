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

// Check if the email and selected course already exist in the database
$checkQuery = "SELECT id FROM registeration_requests WHERE email = '$email' AND selectedCourse = '$selectedCourse'";
$result = $conn->query($checkQuery);

if ($result->num_rows > 0) {
    // Email and selected course combination already exists
    http_response_code(409); // Conflict
} else {
    // Insert data into the table
    $insertQuery = "INSERT INTO registeration_requests (firstName, lastName, email, contactNo, selectedCourse)
                    VALUES ('$firstName', '$lastName', '$email', '$contactNo', '$selectedCourse')";

    if ($conn->query($insertQuery) === TRUE) {
        http_response_code(201); // Created
    } else {
        http_response_code(500); // Internal Server Error
    }
}

$conn->close();
?>