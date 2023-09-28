<?php

$allowed_origin = "https://ehouse-six.vercel.app";

if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $allowed_origin) {
    header('Access-Control-Allow-Origin: ' . $allowed_origin);
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');

    $servername = "localhost";
    $username = "piwnrbcd_admin";
    $password = "k;{htb?%@Uo+";
    $dbname = "piwnrbcd_ehouse";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $contactNo = $_POST['contactNo'];
    $selectedCourse = $_POST['selectedCourse'];

    $checkQuery = "SELECT id FROM registeration_requests WHERE email = '$email' AND selectedCourse = '$selectedCourse'";
    $result = $conn->query($checkQuery);

    if ($result->num_rows > 0) {
        http_response_code(409);
    } else {
        $insertQuery = "INSERT INTO registeration_requests (firstName, lastName, email, contactNo, selectedCourse)
                        VALUES ('$firstName', '$lastName', '$email', '$contactNo', '$selectedCourse')";

        if ($conn->query($insertQuery) === TRUE) {
            http_response_code(201);
        } else {
            http_response_code(500);
        }
    }

    $conn->close();
} else {
    http_response_code(403);
}
?>