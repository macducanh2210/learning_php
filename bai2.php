<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form method="GET" action="bai2.php">
        <input type="text" name="search"/>
        <button type="submit">tim kiem</button>
    </form>

    <form method="POST" action="bai2.php">
        <input type="text" name="search"/>
        <button type="submit">gui</button>
    </form>
    <?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    if (isset($_POST['search'])) {
        $noidung = $_POST['search'];
        echo "<h1>Bạn đã gửi dữ liệu qua POST</h1>";
        echo "Nội dung là: " . htmlspecialchars($noidung);
    }
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['search'])) {
        $noidung = $_GET['search'];
        echo "<h1>Bạn đang tìm kiếm qua GET</h1>";
        echo "Từ khóa tìm kiếm: " . htmlspecialchars($noidung);
    }
}
?>

</body>
</html>