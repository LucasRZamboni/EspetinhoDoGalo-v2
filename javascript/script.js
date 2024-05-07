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

    // Adiciona um ouvinte de evento de clique a cada item de navegação
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove a classe 'active' de todos os itens de navegação
            navItems.forEach(function(navItem) {
                navItem.classList.remove('active');
            });

            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');
        });
    });