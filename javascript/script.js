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

window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('cardsFrame');
  
    const resizeIframe = () => {
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    };
  
    iframe.addEventListener('load', resizeIframe);
    window.addEventListener('resize', resizeIframe);
  });
  

  var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navItems.forEach(function(navItem) {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });