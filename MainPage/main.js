const btnCourse = document.getElementById('btnCourse');
const btnAbout = document.getElementById('btnAbout');
const btnContact = document.getElementById('btnContact');
const btnEnroll = document.getElementById('Enroll');

btnCourse.addEventListener('click', ()=>{
    window.location = "/MainPage/course.html"
});
btnAbout.addEventListener('click', ()=>{
    window.location = "/MainPage/aboutUs.html"
});
btnContact.addEventListener('click', ()=>{
    window.location = "/MainPage/contactUs.html"
});
btnEnroll.addEventListener('click',()=>{
    window.location = "/MainPage/enrollment.html"
});