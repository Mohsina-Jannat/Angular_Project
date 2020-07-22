<?php

session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST)) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == 'admin' && $password == 'admin') {
        $_SESSION['user'] = 'admin';
        ?>

{
    "success": true,
    "secret": "This is the secret no one knows but he admin"
}
     <?php
    }else {
        ?>
{
    "success": false,
    "message": "Invalid credential"
}
   <?php
    }
} else {
    ?>

{
    "success": false,
    "message": "Only post access accepted"
}
  <?php
}
  ?>