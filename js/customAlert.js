const dialogOverlay = document.querySelector('#dialogoverlay');
const dialogBoxHead = document.querySelector('#dialogboxhead');
const dialogBoxBody = document.querySelector('#dialogboxbody');
const dialogBoxFoot = document.querySelector('#dialogboxfoot');
export const alertFadeOut = () => { dialogOverlay.fadeOut(); };
export const customAlert = (message, title) => {
    if (typeof title !== 'undefined') {
        displayJ(dialogBoxHead, 'block');
        dialogBoxHead.html(`<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${title}`);
    }
    dialogBoxBody.html(message);
    dialogBoxFoot.html('<button class="pure-material-button-contained active border-radius">OK</button>');
    dialogOverlay.fadeIn();
};