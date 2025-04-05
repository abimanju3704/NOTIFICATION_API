let button = document.querySelector('button');
button.addEventListener('click',() =>{
    if(!window.Notification) return;
   
    Notification
    .requestPermission()
    .then(showNotification)
});

function showNotification(Permission){
    if(Permission !== 'granted') return;

    let notification = new Notification('My Title',{
        body:"hi,how are you today?",
        icon:'icon.png'
    })

    notification.onclick = () =>{
       // window.open('https://google.com')

           window.location.href="https://www.google.com"
        }
    }