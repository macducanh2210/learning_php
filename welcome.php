<?php
session_start(); // Bắt đầu session

// Kiểm tra nếu user đã đăng nhập
if (!isset($_SESSION["username"])) {
   // header("Location: login.php"); // Chuyển hướng về trang đăng nhập nếu chưa đăng nhập
   echo "chua co session"; 
   exit();

}
else{
    echo "da co session ".$_SESSION["username"];
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chào mừng</title>
</head>
<body>
    <h2>Xin chào, <?php echo $_SESSION["username"]; ?>!</h2>
    <p>Chào mừng bạn đã đăng nhập.</p>
    <a href="logout.php">Đăng xuất</a>
</body>
</html>