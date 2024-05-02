$(document).ready(function () {
    $('#phone-button').on('click', function () {
        $('header').toggleClass('active');
        $('.btn-default').toggleClass('active');
        var iconName = $('#phone-button ion-icon').attr('name');
        if (iconName === 'menu-outline') {
            $('#phone-button ion-icon').attr('name', 'close-outline');
        } else {
            $('#phone-button ion-icon').attr('name', 'menu-outline');
        }
    });
    
});