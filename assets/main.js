let newNotifications = document.querySelectorAll('.new'),
    counter = newNotifications.length,
    counterShow = document.querySelector('.counter'),
    markRead = document.querySelector('.mark-read')

    counterShow.innerText = counter

    markRead.addEventListener('click', function (){
        newNotifications.forEach(e => e.classList.remove('new'))
        counterShow.innerText = 0
    })



