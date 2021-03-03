var graphica_Nav = document.getElementsByClassName('back')



var res_Name= document.getElementById('response_Name')
var res_Email=document.getElementById('response_Email')
var res_Message=document.getElementById('response_Msg')





document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.navbar-brand',
        translateX: [-400, 0],
        // easing: 'easeOutExpo',
        duration: 4000,
        delay: 100,
        opacity: [0, 1],
    })
    anime({
        targets: '.nav-item a',
        translateY: [-50, 0],
        duration: 1500,
        delay: (el, i) => {
            return 1000 + 400 * i;
        },
        opacity: [0, 1],
    })
})