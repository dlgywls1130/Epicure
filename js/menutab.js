

//Regular Javascript
const toggleBtn = document.querySelector('#toggle-button');
const menu = document.querySelector('.menu');

// 반응형 웹 햄버거 메뉴 클릭 시 메뉴 펼침, 숨김 처리
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});




//필터 클릭 팝업
//Regular Javascript
const filterBtn = document.querySelector('#popup');
const filter = document.querySelector('#box');

// 반응형 웹 햄버거 메뉴 클릭 시 메뉴 펼침, 숨김 처리
filterBtn.addEventListener('click', () => {
    filter.classList.toggle('active');
});


function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();



