//LOCAL STORAGE
const navLinks = document.querySelectorAll('ul a');
const windowPathname = window.location.pathname;
console.log("windowPathname", windowPathname);
navLinks.forEach(navLink =>{
    const navLinkPathName = new URL(navLink.href).pathname;
    if((windowPathname == navLinkPathName) || (windowPathname === '../views/index.html' && navLinkPathName === './')){
        navLink.classList.add('active');
    }
    console.log("navLink", navLink);
})

/**
 * B1. Tạo bảng bên HTML.
 * B2. Đẩy nội dung ra ngoài dùng transform, dùng overflow hidden để ẩn.
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

//NÚT NHẤN.
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

// KHI TẢI TRANG.
btn1.style.background = "#3a86ff",
btn2.style.background = "white",
btn3.style.background = "white",
btn4.style.background = "white",
btn5.style.background = "white",
btn6.style.background = "white"

//THỰC HIỆN ẤN NÚT.
const openShirt = () => (
    content1.style.transform = "translateX(0px)", content2.style.transform = "translateX(120%)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(240%)",
    btn1.style.background = "#3a86ff",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "white",
    btn1.style.background = "#3a86ff",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "white"
    );
const openSkirt = () => (
    content1.style.transform = "translateX(100%)", content2.style.transform = "translateX(0px)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(240%)",
    btn1.style.background = "white",
    btn2.style.background = "#3a86ff",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "white"
    );
const openShoe = () => (
    content1.style.transform = "translateX(100%)", content2.style.transform = "translateX(120%)", content3.style.transform = "translateX(0px)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(240%)",
    btn1.style.background = "white",
    btn2.style.background = "white",
    btn3.style.background = "#3a86ff",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "white"
    );
const openHbag = () => (
    content1.style.transform = "translateX(100%)", content2.style.transform = "translateX(120%)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(0px)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(240%)",
    btn1.style.background = "white",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "#3a86ff",
    btn5.style.background = "white",
    btn6.style.background = "white"
    );
const openNeckplace = () => (
    content1.style.transform = "translateX(100%)", content2.style.transform = "translateX(120%)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(0px)", content6.style.transform = "translateX(240%)",
    btn1.style.background = "white",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "#3a86ff",
    btn6.style.background = "white"
    );
const onHairStyle = () => (
    content1.style.transform = "translateX(100%)", content2.style.transform = "translateX(120%)", content3.style.transform = "translateX(120%)", content4.style.transform = "translateX(190%)", content5.style.transform = "translateX(190%)", content6.style.transform = "translateX(0px)",
    btn1.style.background = "white",
    btn2.style.background = "white",
    btn3.style.background = "white",
    btn4.style.background = "white",
    btn5.style.background = "white",
    btn6.style.background = "#3a86ff"
    );

//MẶC THỬ KHI CLICK.
// const bot1 = document.getElementById('bot1');
// bot1.src = '../assets/images/clothes/botcloth1_show.jpg';
const clickShirt1 = () =>(
    body = document.getElementById('body'),
    body.src = '../assets/images/clothes/topcloth1.png');
const clickShirt2 = ()=>(
    body = document.getElementById('body'),
    body.src = '../assets/images/clothes/topcloth2.png');