<?php

$servername = "localhost";
$username = "piwnrbcd_admin";
$password = "k;{htb?%@Uo+";
$dbname = "piwnrbcd_ehouse";

$allowed_origin = "https://ehouse-six.vercel.app";

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: ' . $allowed_origin);
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Accept-Access-Control-Request-Headers, Content-Type, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true);

$firstName = $data['firstName'];
$lastName = $data['lastName'];
$email = $data['email'];
$contactNo = $data['contactNo'];
$selectedCourse = $data['selectedCourse'];

$checkQuery = "SELECT student_id FROM registeration_requests WHERE email = '$email' AND selectedCourse = '$selectedCourse'";
$result = $conn->query($checkQuery);

if ($result->num_rows > 0) {
    http_response_code(409);
} else {
    $insertQuery = "INSERT INTO registeration_requests (firstName, lastName, email, contactNo, selectedCourse) VALUES ('$firstName', '$lastName', '$email', '$contactNo', '$selectedCourse')";

    if ($conn->query($insertQuery) === TRUE) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
}

$conn->close();
?>