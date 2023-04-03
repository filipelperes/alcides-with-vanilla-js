const dialogBoxHead = document.querySelector('#dialogboxhead');
const dialogBoxBody = document.querySelector('#dialogboxbody');
const dialogBoxFoot = document.querySelector('#dialogboxfoot');
export const customAlert = (message, title) => {
    if (typeof title !== 'undefined') {
        dialogBoxHead.style.display = 'block';
        dialogBoxHead.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${title}`;
    }
    dialogBoxBody.innerHTML = message;
    dialogBoxFoot.innerHTML = '<button class="pure-material-button-contained active border-radius">OK</button>';
};