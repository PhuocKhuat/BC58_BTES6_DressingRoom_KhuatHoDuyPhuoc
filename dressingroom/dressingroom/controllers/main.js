// const navLinks = document.querySelectorAll('ul a');
// const windowPathname = window.location.pathname;
// console.log("windowPathname", windowPathname);
// navLinks.forEach(navLink =>{
//     const navLinkPathName = new URL(navLink.href).pathname;
//     if((windowPathname == navLinkPathName) || (windowPathname === '../views/index.html' && navLinkPathName === './')){
//         navLink.classList.add('active');
//     }
//     console.log("navLink", navLink);
// })

/**
 * B1. Tạo bảng bên HTML.
 position: relative !important;
 * B2. Đẩy nội dung ra ngoài dùng transform, cho conten làm con (absolute), dùng overflow hidden để ẩn.
 * B3. Dùng transform để quay trở lại (xem bên style css, #btn1, #btn2).
 * B4. dom tới lấy nội dung, dom tới lấy nút.
 * B5. Khi ấn nút áo thì nội dung áo ở lại, nội dung quần bị đẩy ra dùng transform (tương ứng với các nút còn lại).
 */
//BẢNG NỘI DUNG.
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
const content4 = document.getElementById('content4');
const content5 = document.getElementById('content5');
const content6 = document.getElementById('content6');
const content7 = document.getElementById('content7');
const content8 = document.getElementById('content8');

//NÚT NHẤN.
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');

// KHI TẢI TRANG (MẶC ĐỊNH)
btn1.style.background = "#3a86ff";
btn2.style.background = "white";
btn3.style.background = "white";
btn4.style.background = "white";
btn5.style.background = "white";
btn6.style.background = "white";
btn7.style.background = "white";
btn8.style.background = "white";

//THỰC HIỆN ẤN NÚT.
const openShirt = () => (
    content1.style.transform = "translateX(0px)", content2.style.transform = "translateX(200%)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(240%)",
    content7.style.transform = "translateX(240%)", content8.style.transform = "translateX(240%)",
    btn1.style.background = "#3a86ff",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "white",
    btn7.style.background = "white",
    btn8.style.background = "white"
    );
const openSkirt = () => (
    content1.style.transform = "translateX(140%)", content2.style.transform = "translateX(0px)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(240%)",
    content7.style.transform = "translateX(240%)", content8.style.transform = "translateX(240%)",
    btn1.style.background = "white",
    btn2.style.background = "#3a86ff",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "white",
    btn7.style.background = "white",
    btn8.style.background = "white"
    );
const openShoe = () => (
    content1.style.transform = "translateX(150%)", content2.style.transform = "translateX(150%)", content3.style.transform = "translateX(0px)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(240%)",
    btn1.style.background = "white",
    btn2.style.background = "white",
    btn3.style.background = "#3a86ff",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "white",
    btn7.style.background = "white"
    );
const openHbag = () => (
    content1.style.transform = "translateX(140%)", content2.style.transform = "translateX(140%)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(0px)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(240%)", content8.style.transform = "translateX(240%)",
    content7.style.transform = "translateX(240%)",
    btn1.style.background = "white",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "#3a86ff",
    btn5.style.background = "white",
    btn6.style.background = "white",
    btn7.style.background = "white",
    btn8.style.background = "white"
    );
const openNeckplace = () => (
    content1.style.transform = "translateX(140%)", content2.style.transform = "translateX(140%)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(0px)", content6.style.transform = "translateX(240%)", content8.style.transform = "translateX(240%)",
    content7.style.transform = "translateX(240%)",
    btn1.style.background = "white",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "#3a86ff",
    btn6.style.background = "white",
    btn7.style.background = "white",
    btn8.style.background = "white"
    );
const onHairStyle = () => (
    content1.style.transform = "translateX(140%)", content2.style.transform = "translateX(140%)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(0px)", content8.style.transform = "translateX(240%)",
    content7.style.transform = "translateX(240%)",
    btn1.style.background = "white",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "#3a86ff",
    btn7.style.background = "white",
    btn8.style.background = "white"
    );
const onBackground = () => (
    content1.style.transform = "translateX(140%)", content2.style.transform = "translateX(140%)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(240%)", 
    content7.style.transform = "translateX(0px)", content8.style.transform = "translateX(240%)",
    btn1.style.background = "white",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "white",
    btn7.style.background = "#3a86ff",
    btn8.style.background = "#white"
)
const onModel = () => (
    content1.style.transform = "translateX(140%)", content2.style.transform = "translateX(140%)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(240%)",
    content7.style.transform = "translateX(240%)", content8.style.transform = "translateX(0px)",
    btn1.style.background = "white",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "white",
    btn7.style.background = "white",
    btn8.style.background = "#3a86ff"
)

//MẶC THỬ KHI CLICK.
/**
 * B1. Khai báo nút nhấn onclick hiện đồ lên mẫu thử.
 * B2. dom tới từng id (id này phải của hình ảnh, vì sẽ thay bằng hình ảnh khác).
 * B3. Gán thuộc tính src, thay bằng hình ảnh mới.
 */
// ÁO.
const bikinitop = document.getElementById('bikinitop');
const clickShirt1 = () => 
bikinitop.src = '../assets/images/clothes/topcloth1.png';
const clickShirt2 = () =>
bikinitop.src = '../assets/images/clothes/topcloth2.png';
const clickShirt3 = () =>
bikinitop.src = '../assets/images/clothes/topcloth3.png';
const clickShirt4 = () =>
bikinitop.src = '../assets/images/clothes/topcloth4.png';
const clickShirt5 = () =>
bikinitop.src = '../assets/images/clothes/topcloth5.png';
const clickShirt6 = () => 
bikinitop.src = '../assets/images/clothes/topcloth6.png';
//VÁY
const bikinibottom = document.getElementById('bikinibottom');
const clickSkirt1 = () =>
bikinibottom.src = '../assets/images/clothes/botcloth1.png';
const clickSkirt2 = () => 
bikinibottom.src = '../assets/images/clothes/botcloth2.png';
const clickSkirt3 = () =>
bikinibottom.src = '../assets/images/clothes/botcloth3.png';
const clickSkirt4 = () =>
bikinibottom.src = '../assets/images/clothes/botcloth4.png';
const clickSkirt5 = () =>
bikinibottom.src = '../assets/images/clothes/botcloth5.png';
//GIÀY
const feet = document.getElementById('feet');
const clickShoe1 = () =>
feet.src = '../assets/images/shoes/shoes1.png';
const clickShoe2 = () =>
feet.src = '../assets/images/shoes/shoes2.png';
const clickShoe3 = () =>
feet.src = '../assets/images/shoes/shoes3.png';
const clickShoe4 = () =>
feet.src = '../assets/images/shoes/shoes4.png';
const clickShoe5 = () =>
feet.src = '../assets/images/shoes/shoes5.png';
//TÚI XÁCH
const handbag = document.getElementById('handbag');
const clickHbag1 = () => 
handbag.src = '../assets/images/handbags/handbag1.png';
const clickHbag2 = () => 
handbag.src = '../assets/images/handbags/handbag2.png';
const clickHbag3 = () => 
handbag.src = '../assets/images/handbags/handbag3.png';
//DÂY CHUYỀN
const necklace = document.getElementById('necklace');
const clickNelace1 = () =>
necklace.src = '../assets/images/necklaces/necklace1.png';
const clickNelace2 = () =>
necklace.src = '../assets/images/necklaces/necklace2.png';
const clickNelace3 = () =>
necklace.src = '../assets/images/necklaces/necklace3.png';
//KIỂU TÓC
const hairstyle = document.getElementById('hairstyle');
const clickHStyle1 = () =>
hairstyle.src = '../assets/images/hairstyle/hairstyle1.png';
const clickHStyle2 = () =>
hairstyle.src = '../assets/images/hairstyle/hairstyle2.png';
const clickHStyle3 = () =>
hairstyle.src = '../assets/images/hairstyle/hairstyle3.png';
//HÌNH NỀN
const background = document.getElementById('background');
const clickBground1 = () =>
background.src = '../assets/images/background/background1.jpg';
const clickBground2 = () =>
background.src = '../assets/images/background/background2.jpg';
const clickBground3 = () =>
background.src = '../assets/images/background/background3.jpg';
const clickBground4 = () =>
background.src = '../assets/images/background/background4.jpg';
const clickBground5 = () =>
background.src = '../assets/images/background/background5.jpg';
const clickBground6 = () =>
background.src = '../assets/images/background/background6.jpg';
const clickBground7 = () =>
background.src = '../assets/images/background/background7.jpg';
//KHUÔN MẶT
const model = document.getElementById('model');
const clickModel1 = () => model.src = '../assets/images/model/1000.png';
const clickModel2 = () => model.src = '../assets/images/model/1003.png';
const clickModel3 = () => model.src = '../assets/images/model/999.png';