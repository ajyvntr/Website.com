const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');

btnBack.addEventListener('click',()=>{
    window.location = "/MainPage/enrollment.html"
});
btnNext.addEventListener('click',()=>{
    window.location = "/MainPage/application.html"
});