var slide=document.querySelector(".slide");
var listImages=document.querySelectorAll(".hinh2");
var btnleft=document.querySelector(".btn-left");
var btnright=document.querySelector(".btn-right");
var index=0;
var widthOfImage = listImages[0].offsetWidth;

var handlechangeslide=()=>{
    if(index>=listImages.length) index=0;
    slide.style.transform=`translateX(${widthOfImage*-1*index++}px)`;
}



btnright.addEventListener('click',()=>{
    if(index==listImages.length-1) index=-1;
    slide.style.transform=`translateX(${widthOfImage*-1*++index}px)`;
})
btnleft.addEventListener('click',()=>{
    if(index==0) index=listImages.length;
    slide.style.transform=`translateX(${widthOfImage*-1*--index}px)`;
})
//ok
//call mess
document.addEventListener("DOMContentLoaded", function() {
    var messengerButton = document.getElementById("messengerButton");
    if (messengerButton) {
        messengerButton.addEventListener("click", function(event) {
            event.preventDefault(); // Ngăn chặn chuyển hướng mặc định khi nhấp vào liên kết

            // Gửi yêu cầu API
            fetch('https://api.example.com/messages', {
                method: 'POST', // Phương thức gửi yêu cầu
                headers: {
                    'Content-Type': 'application/json' // Loại dữ liệu gửi đi
                },
                body: JSON.stringify({ message: 'Hello, world!' }) // Chuyển đổi dữ liệu thành chuỗi JSON
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Có lỗi xảy ra khi gửi yêu cầu.');
                }
                return response.json(); // Chuyển đổi phản hồi thành JSON
            })
            .then(data => {
                // Xử lý dữ liệu phản hồi từ API nếu cần
                console.log(data);
                alert('Tin nhắn đã được gửi thành công!');
            })
            .catch(error => {
                // Xử lý lỗi nếu có
                console.error('Error:', error);
                alert('Có lỗi xảy ra khi gửi tin nhắn.');
            });
        });
    }
});
//lienhe
function guiThongTin() {
    // Lấy giá trị từ các trường input
    var hoTen = document.getElementById("hoTen").value;
    var dienThoai = document.getElementById("dienThoai").value;
    var email = document.getElementById("email").value;
    var noiDung = document.getElementById("noiDung").value;

    // Kiểm tra các trường input có rỗng không
    if (hoTen === '' || dienThoai === '' || email === '' || noiDung === '') {
        alert("Vui lòng điền đầy đủ thông tin liên hệ.");
        return;
    }

    // Thực hiện xử lý gửi thông tin (có thể là gửi yêu cầu đến máy chủ)

    // Hiển thị thông báo gửi thông tin thành công
    alert("Thông tin đã được gửi thành công!");

    // Đặt lại form nếu cần
    document.getElementById("contactForm").reset();
}
///nhuongquyentrongdamohinh
function dangKy() {
    // Lấy giá trị từ các trường input
    var hoTen = document.getElementById("hoTen").value;
    var soDienThoai = document.getElementById("soDienThoai").value;

    // Kiểm tra các trường input có rỗng không
    if (hoTen === '' || soDienThoai === '') {
        alert("Vui lòng điền đầy đủ thông tin đăng ký nhượng quyền.");
        return;
    }

    // Thực hiện xử lý đăng ký nhượng quyền (có thể là gửi yêu cầu đến máy chủ)

    // Hiển thị thông báo đăng ký thành công
    alert("Đăng ký nhượng quyền thành công!");

    // Đặt lại form nếu cần
    document.getElementById("registrationForm").reset();
}


