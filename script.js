// This particular project was'nt fully excuted due to an authentication issues from google preventing third party providers from hacking into user's gmail prior from 2024




const form = document.querySelector('form');
const fullName = document.querySelector('name');
const email = document.querySelector('email');
const phone = document.querySelector('phone');
const subject = document.querySelector('subject');
const mess = document.querySelector('message');


// function sendEmail(){
//     Email.send({
        

//         Host : "smtp.elasticemail.com",
//         Username : "charlesegbe23@gmail.com",
//         Password : "pD9904977B4E5953C9495C94E8E468818994D",
//         To : 'regulartopup23@gmail.com',
//         From : "charlesegbe23@gmail.com",
//         Subject : subject.value,
//         Body : "And this is the body"
//     }).then(
//       message => {
//         if(message =='Ok'){
//             Swal.fire({
//                 title: "Good job!",
//                 text: "You clicked the button!",
//                 icon: "success"
//               });
//         }
//       }
//     );
// }


function checkInputs() {
    const items = document.querySelectorAll('.item');

    for(const item of items) {
        if(item.value == ''){
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        item.addEventListener('keyup', ()=>{
            if (item.value != ''){
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            }
        });
    }
}




form.addEventListener('submit', (event)=> {
    event.preventDefault();
    checkInputs();
});

