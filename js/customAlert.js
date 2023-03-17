(($) => {
    const dialogOverlay = $('#dialogoverlay');
    const dialogBoxHead = $('#dialogboxhead');
    const dialogBoxBody = $('#dialogboxbody');
    const dialogBoxFoot = $('#dialogboxfoot');
    export const alertFadeIn = () => { dialogOverlay.fadeIn(); }
    export const alertFadeOut = () => { dialogOverlay.fadeOut(); }
    export const customAlert = (message, title) => {
        dialogBoxHead.css('display', 'block');
        if (typeof title === 'undefined') dialogBoxHead.css('display', 'none');
        else dialogBoxHead.html(`<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${ title }`);

        dialogBoxBody.html(message);
        dialogBoxFoot.html('<button class="pure-material-button-contained active border-radius">OK</button>');
        alertFadeIn();
    }
})(jQuery)