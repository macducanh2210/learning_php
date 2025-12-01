alert("hello world");
var x="lap trinh web";//string
x=10;//number

var y=20;
var z=x+y;
console.log(z);
var n=parseInt("50");

function add(a,b){
    return a+b;
}
console.log(add(10,20));

const sayHi=(name)=>{
    console.log("hi "+name);
};
sayHi("Mac");

//ham goi lai:la ham duoc truyen vao 1 khac nhu tham so
function process(x,callback){
    console.log("gia tri: "+x);
    callback();
}
function done(){
    console.log("xu ly xong!");
}
process(5,done);

//ham de quy
function factorial(n){
    if(n===0) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));

//cau lenh re nhanh if
let score=85;
if(score>=90){
    console.log("xep loai a");
}else if(score>=75){
    console.log("xep loai b");
}else{
    console.log("xep loai c");
}
for(let i=1;i<=10;i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}

//cau lenh switch case
let day=3;
switch(day){
    case 1:
        console.log("chu nhat");
        break;
    case 2:
        console.log("thu hai");
        break;
    case 3:
        console.log("thu ba");
        break;
    case 4:
        console.log("thu tu");
    default:
        console.log("khong hop le");     
}
//vong lap for
var danhsachNhom1=["Mạc Đức Anh","Nguyễn Đức Anh","Dũng","Long","Toàn"];

for(let i=0;i<danhsachNhom1.length;i++){
    console.log(danhsachNhom1[i]);
}

//lap xac dinh for in
let person={
    name:"name",
    age:25,
    job:"developer"
};

for(let key in person){
    console.log(key+": "+person[key]);
}

//lap khong xac dinh=duoc su dung khi khong biet trc so lan lap chi can cau dieu kien con dung

let i=1;
while(i<=5){
    console.log(i);
    i++;//tang i len 1 sau moi lan lap
}

//do...while:thuc hien trong do roi kiem tra dieu kien
let i1=1;

do{
    console.log(i);
    i++;
}while(i<=5);

//doi tuong cua javascript
// 1. Khai báo chuỗi
let text = " JavaScript là một ngôn ngữ lập trình tuyệt vời! ";

// 2. Lấy độ dài chuỗi
console.log("Độ dài chuỗi:", text.length);

// 3. Lấy ký tự trong chuỗi
console.log("Ký tự đầu tiên:", text.charAt(0));
console.log("Mã ASCII của ký tự đầu:", text.charCodeAt(0));
console.log("Dùng cú pháp []:", text[0]);

// 4. Cắt chuỗi
console.log("slice(2, 10):", text.slice(2, 10));
console.log("substring(2, 10):", text.substring(2, 10));
console.log("substr(2, 10):", text.substr(2, 10));

// 5. Chuyển đổi chữ hoa, chữ thường
console.log("Viết hoa:", text.toUpperCase());
console.log("Viết thường:", text.toLowerCase());

// 6. Nối chuỗi
let str1 = "Xin chào";
let str2 = "JavaScript";
console.log("Nối bằng concat():", str1.concat(" ", str2));
console.log("Nối bằng dấu + :", str1 + " " + str2);

// 7. Loại bỏ khoảng trắng
console.log("Chuỗi sau khi trim():", text.trim());
console.log("Chuỗi sau khi trimStart():", text.trimStart());
console.log("Chuỗi sau khi trimEnd():", text.trimEnd());

// 8. Kiểm tra chuỗi
console.log("Chuỗi có chứa 'JavaScript'?", text.includes("JavaScript"));
console.log("Chuỗi có bắt đầu bằng 'JavaScript'?", text.startsWith("JavaScript")); // Lưu ý: text gốc có khoảng trắng đầu nên kết quả có thể là false nếu không trim
console.log("Chuỗi có kết thúc bằng 'vời!'?", text.endsWith("vời! "));

// 9. Tìm kiếm chuỗi
console.log("Vị trí đầu tiên của 'a':", text.indexOf("a"));
console.log("Vị trí cuối cùng của 'a':", text.lastIndexOf("a"));
console.log("Vị trí của 'lập trình':", text.search("lập trình"));

// 10. Thay thế chuỗi
console.log("Thay thế 'JavaScript' thành 'JS':", text.replace("JavaScript", "JS"));
console.log("Thay thế tất cả 'a' bằng 'A':", text.replaceAll("a", "A"));

// 11. Tách chuỗi
let words = "HTML, CSS, JavaScript, React";
console.log("Tách chuỗi thành mảng:", words.split(", "));

// 12. Sử dụng Template Literals:tron lan van ban va bien 1 cach de dang khong can dung dau +
//cu phap ${ten bien}
let name = "Alice";
let age = 25;
let message = `Tên: ${name}, Tuổi: ${age}, đang học ${str2}`;
console.log("Template Literals:", message);

// 13. Chuỗi nhiều dòng với Template Literals:dung de xuong dong
//binh thuong dong1\ndong2\ndong3
let multiline = `Dòng 1
Dòng 2
Dòng 3`;
console.log("Chuỗi nhiều dòng:\n", multiline);




// 1. Tạo đối tượng ngày giờ mới
let myDate = new Date();
console.log("Thời gian hiện tại:", myDate);

// 2. Lấy năm, tháng, ngày
console.log("Năm:", myDate.getFullYear());
console.log("Tháng:", myDate.getMonth() + 1); // Tháng bắt đầu từ 0 (Tháng 1 là 0)
console.log("Ngày:", myDate.getDate());

// 3. Lấy giờ, phút, giây
console.log("Giờ:", myDate.getHours());
console.log("Phút:", myDate.getMinutes());
console.log("Giây:", myDate.getSeconds());

// 4. Chỉnh sửa ngày tháng
myDate.setFullYear(2025);
myDate.setMonth(5); // Tháng 6 (do tháng bắt đầu từ 0)
myDate.setDate(15);
console.log("Sau khi chỉnh sửa:", myDate);

// 5. Định dạng ngày giờ
console.log("Chuỗi ngày đơn giản:", myDate.toDateString());
console.log("ISO format:", myDate.toISOString());
console.log("Định dạng theo ngôn ngữ:", myDate.toLocaleDateString('vi-VN'));

// 6. Lấy timestamp
console.log("Timestamp:", myDate.getTime());

// 7. Tính khoảng cách giữa hai ngày
let startDate = new Date("2024-03-01");
let endDate = new Date("2024-03-05");
let diffTime = endDate - startDate;
// Chuyển từ mili giây sang ngày: (1000ms * 60s * 60m * 24h)
let diffDays = diffTime / (1000 * 60 * 60 * 24);
console.log(`Khoảng cách giữa ${startDate.toDateString()} và ${endDate.toDateString()} là: ${diffDays} ngày`);

// 8. Cộng/trừ ngày tháng
let newDate = new Date();

// Cộng 7 ngày
newDate.setDate(newDate.getDate() + 7); // Cộng thêm 7 ngày
console.log("7 ngày sau:", newDate);

// Trừ 14 ngày
newDate.setDate(newDate.getDate() - 14); // Trừ đi 14 ngày
console.log("14 ngày trước:", newDate);


//doi tuong math
// 1. Các hằng số toán học
console.log("Số PI:", Math.PI);
console.log("Số Euler (e):", Math.E);
console.log("Căn bậc hai của 2:", Math.SQRT2);

// 2. Giá trị tuyệt đối
console.log("Giá trị tuyệt đối của -10:", Math.abs(-10));

// 3. Làm tròn số
console.log("Làm tròn xuống 4.7:", Math.floor(4.7));
console.log("Làm tròn lên 4.3:", Math.ceil(4.3));
console.log("Làm tròn gần nhất 4.5:", Math.round(4.5));

// 4. Lũy thừa và căn bậc hai
console.log("2^3 =", Math.pow(2, 3));
console.log("Căn bậc hai của 16:", Math.sqrt(16));

// 5. Tìm số lớn nhất, nhỏ nhất
console.log("Số lớn nhất trong (10, 20, 5, 40):", Math.max(10, 20, 5, 40));
console.log("Số nhỏ nhất trong (10, 20, 5, 40):", Math.min(10, 20, 5, 40));

// 6. Hàm lượng giác
// Lưu ý: Các hàm lượng giác trong JS nhận giá trị đầu vào là Radian, không phải độ.
console.log("Sin(90 độ):", Math.sin(90 * Math.PI / 180));
console.log("Cos(0 độ):", Math.cos(0 * Math.PI / 180));

// 7. Sinh số ngẫu nhiên
console.log("Số ngẫu nhiên từ 0 đến 1:", Math.random());
// Công thức tạo số nguyên ngẫu nhiên từ 1 đến 100
console.log("Số ngẫu nhiên từ 1 đến 100:", Math.floor(Math.random() * 100) + 1);

// 8. Logarit
console.log("Logarit tự nhiên của 10:", Math.log(10));
console.log("Logarit cơ số 10 của 100:", Math.log10(100));

let fruits = ["Táo", "Chuối", "Cam", "Dâu"];
console.log("Mảng ban đầu:", fruits);

// 1. length - Lấy độ dài mảng
console.log("Độ dài của mảng:", fruits.length);

// 2. push - Thêm phần tử vào cuối mảng
fruits.push("Xoài");
console.log("Sau khi thêm Xoài:", fruits);

// 3. pop - Xóa phần tử cuối cùng
fruits.pop();
console.log("Sau khi xóa phần tử cuối:", fruits);

// 4. unshift - Thêm phần tử vào đầu mảng
fruits.unshift("Nho");
console.log("Sau khi thêm Nho vào đầu:", fruits);

// 5. shift - Xóa phần tử đầu tiên
fruits.shift();
console.log("Sau khi xóa phần tử đầu tiên:", fruits);

// 6. slice - Cắt một phần của mảng
let citrus = fruits.slice(1, 3);
console.log("Mảng citrus (cắt từ index 1 đến 2):", citrus);

// 7. concat - Nối hai mảng
let moreFruits = fruits.concat(["Xoài", "Dưa hấu"]);
console.log("Mảng sau khi nối:", moreFruits);

// 8. indexOf - Tìm vị trí phần tử
console.log("Vị trí của 'Cam':", fruits.indexOf("Cam"));

// 9. includes - Kiểm tra phần tử có trong mảng không
console.log("'Dưa hấu' có trong mảng không?", fruits.includes("Dưa hấu"));


// 9. includes - Kiểm tra phần tử có trong mảng không (đã có ở phần trước, lặp lại)
console.log("'Dưa hấu' có trong mảng không?", fruits.includes("Dưa hấu"));

// 10. sort() - Sắp xếp mảng
fruits.sort();
console.log("Mảng sau khi sắp xếp:", fruits);

// 11. reverse() - Đảo ngược mảng
fruits.reverse();
console.log("Mảng sau khi đảo ngược:", fruits);

// 12. forEach() - Lặp qua từng phần tử
console.log("Duyệt mảng bằng forEach:");
fruits.forEach(fruit => console.log(fruit));

// 13. map() - Tạo mảng mới từ mảng cũ
let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Mảng chữ in hoa:", uppercaseFruits);

// 14. filter() - Lọc phần tử theo điều kiện
let shortNames = fruits.filter(fruit => fruit.length <= 3);
console.log("Tên trái cây có 3 ký tự trở xuống:", shortNames);

// 15. reduce() - Tính toán tổng hợp trên mảng
let numbers = [10, 20, 30, 40];
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Tổng các số trong mảng:", total);