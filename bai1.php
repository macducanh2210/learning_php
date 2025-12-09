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
        /*khai bao hang so pi co gia tri la 3.14*/
        define('pi',3.14);
        echo pi;
    ?>
</body>
</html>