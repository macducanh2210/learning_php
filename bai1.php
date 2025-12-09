<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>tai lieu hoc tap cho lap trinh web</h1>
    <?php
        echo"<hr>";
    ?>
    <p>tai lieu hoc html</p>
    <p>tai lieu hoc css</p>
    <?php
        echo "<h2>tai lieu hoc javascript</h2>";
        echo "<h3>tai lieu hoc mysql</h3>";
        echo "<h4>tai lieiu hoc php</h4>";
    ?>
    <hr>
    <?php
        $text ="tu co ban"." "."den nang cao";
        echo $text;
    ?>
    <?php 
        echo "<hr>";
    ?>
    <?php
        function showvalue(){
            $a=5;
            echo $a;
        }
        showvalue();
        echo $a;
    ?>
    <?php 
    $a=1;
    $b=2;
    function Sum(){
        global $a, $b;
        $b=$a+$b;
    }
    Sum();
    echo $b;//in ra 3
    ?>
     <?php
        $name = "Nguyễn Minh Đức";
        $year = 2000;
        $city = "Hà Nội";

        echo "<p>Giá trị của biến name là chuỗi: $name</p>";
        echo "<p>Giá trị của biến year là số: $year</p>";
        echo "<p>Giá trị của biến city là chuỗi: $city</p>";
    ?>

    <?php
        define("PI", 3.14);
        echo "Giá trị của hằng số PI là: " . PI;
    ?>

    <?php
        echo "<h1> Tiêu đề lớn</h1>";
        echo "<p style ='color:red' >Dòng chữ này có màu gì</p>";
    ?>

    <?php
        for ($i = 1; $i <= 10; $i++) {
            if ($i == 5) {
                break; 
            }
            echo " $i<br>";
        }
    ?>

    <?php
        for ($i = 1; $i <= 5; $i++) {
            if ($i == 3) {
                continue; // bỏ qua vòng lặp hiện tại và sang vòng tiếp theo
            }
            echo "Giá trị của i bo qua 3 la: $i<br>";
        }
    ?>
</body>
</html>