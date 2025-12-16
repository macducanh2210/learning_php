<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD CSDL KHOA</title>
<style>
    h2 {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 300;
        text-align: center;
        color: #444;
    }

    table {
        width: 70%;
        margin: 0 auto;
        border-collapse: collapse;
        font-family: sans-serif;
    }

    th {
        text-align: left;
        padding: 16px;
        background-color: white;
        border-bottom: 2px solid #333; /* Đường kẻ đậm dưới tiêu đề */
        color: #333;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.9em;
    }

    td {
        padding: 16px;
        border-bottom: 1px solid #ddd; /* Chỉ kẻ ngang */
        color: #666;
    }

    /* Bỏ đường viền của hàng cuối cùng */
    tr:last-child td {
        border-bottom: none;
    }

    tr:hover {
        background-color: #fafafa; /* Màu nền rất nhẹ khi hover */
    }
</style>
</head>
<body>
    <h2>Danh sách khoa</h2>
    <?php 
    $conn = mysqli_connect("localhost", "root", "", "testdb");

    // Kiểm tra kết nối
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }


    //
    //tạo câu truy vấn Read database Khoa trong 'testdb'
    //
    $sql = "Select Makhoa, Tenkhoa, Ghichu from khoa";
    //thực thi câu lệnh truy vấn 
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) >0) 
    {
        echo "<table border ='1' cellpadding='10' cellspacing='0'>";
        echo "<tr>
                <th>Mã Khoa</th>
                <th>Tên Khoa</th>
                <th>Ghi Chú</th>
             </tr>";

        while($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>" .$row["Makhoa"] ."</td>";
            echo "<td>" .$row["Tenkhoa"] ."</td>";
            echo "<td>" .$row["Ghichu"] ."</td>";
            echo "</tr>";
        }
       echo  "</table>";
    }
    else {
        echo " Không có dữ liệu nào !";
    }



    //
    //test chuc năng ADD database với câu lệnh nhập sẵn DL
    //
    // Lệnh 1: Thêm Khoa Cơ Khí
    $sql1 = "INSERT INTO khoa (Tenkhoa, Ghichu) 
             VALUES ('Khoa Co Khi', 'Khoa Co khi - Truong UTT')";

    if(mysqli_query($conn, $sql1)) {
        echo "Thêm Khoa thành công<br>";
    } else {
        echo "Lỗi  " . mysqli_error($conn) . "<br>";
    }

    // Lệnh 2: Thêm Khoa HTTT
    $sql2 = "INSERT INTO khoa (Tenkhoa, Ghichu) 
             VALUES ('Khoa HTTT', 'Khoa HTTT - Truong UTT')";
             
    if(mysqli_query($conn, $sql2)) {
        echo "Thêm Khoa thành công<br>";
    } else {
        echo "Lỗi " . mysqli_error($conn) . "<br>";
    }



/*
    //
    //test chuc năng update database với câu lệnh nhập sẵn DL
    //

    $sql2 ="update khoa set Tenkhoa = 'UTT-CNTT', Ghichu = 'Truong DH Cong Nghe GTVT' where Makhoa = 1";
    if(mysqli_query($conn, $sql2)) {
        echo "Cập nhật dữ liệu thành công !!";
    } else {
        echo "Lỗi: " .$sql2 . "<br>" .mysqli_error($conn);
    }

*/

/*
    //
    //chuc năng delete 
    //
    $sql3 ="delete from khoa where Makhoa = 1";
    if(mysqli_query($conn, $sql3)) {
        echo "Xóa dữ liệu thành công !!";
    } else {
        echo "Lỗi: " .$sql3 . "<br>" .mysqli_error($conn);
    }

*/

    //ngắt kế nối
    mysqli_close($conn);
    
    ?>
</body>
</html>