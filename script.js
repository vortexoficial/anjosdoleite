document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DO LOADER ---
    const loaderWrapper = document.getElementById('loader-wrapper');
    if (loaderWrapper) {
        // Atraso para garantir que a animação seja vista
        setTimeout(() => {
            loaderWrapper.classList.add('hidden');
        }, 500); // 0.5 segundos
    }

    // --- LÓGICA DO MENU HAMBURGUER (MOBILE) ---
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navList = document.getElementById('nav-list');

    if (navToggle && mainNav && navList) {
        navToggle.addEventListener('click', function() {
            // Alterna a classe 'active' no botão e no menu
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Alterna a visibilidade para acessibilidade
            const isExpanded = navList.getAttribute('aria-expanded') === 'true';
            navList.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // --- LÓGICA DO LINK ATIVO NA NAVEGAÇÃO ---
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.main-nav .nav-list a');
    const footerNavLinks = document.querySelectorAll('.footer-nav ul a');

    // Função para marcar links ativos
    const setActiveLink = (links) => {
        links.forEach(link => {
            const linkHref = link.getAttribute('href').split("/").pop();
            link.classList.remove('active'); // Limpa todos
            
            if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    };

    setActiveLink(navLinks);
    setActiveLink(footerNavLinks);

});

// --- LÓGICA DO ACORDEÃO (FAQ) ---
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = question.classList.contains('active');
            
            // Fecha todos os outros itens (opcional, mas recomendado)
           faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                   otherItem.querySelector('.faq-question').classList.remove('active');
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                     otherItem.querySelector('.faq-answer').style.maxHeight = 0;
                 }
             });

            // Abre ou fecha o item clicado
            if (isOpen) {
                // Fecha
                question.classList.remove('active');
                question.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = 0;
            } else {
                // Abre
                question.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
                // Define a altura máxima para a altura total do conteúdo
                answer.style.maxHeight = answer.scrollHeight + 'px'; 
            }
        });
    });
}
if (document.querySelector('.curiosity-swiper')) {
    
    const swiper = new Swiper('.curiosity-swiper', {
        
        loop: true, // Loop infinito (agora estável com 10 slides)
        
        // AUTOPLAY:
        // Pausa 3s, depois desliza (sem "saltos")
        autoplay: {
            delay: 2000, // 3 segundos
            disableOnInteraction: false, // Continua tocando mesmo depois do usuário mexer
        },
        
        // Velocidade da transição (0.8s)
        speed: 800, 
        
        slidesPerView: 'auto', // Pega o tamanho que definimos no CSS
        
        // Slides ficam centralizados
        centeredSlides: true, 
        
        spaceBetween: 25, // O gap entre os cards
        
        grabCursor: true, // Mãozinha ao invés de seta
        
        // Removemos as propriedades de loop extras,
        // pois os slides duplicados no HTML corrigem o bug.
        
        // Sem bolinhas, Sem setas
        pagination: false,
        navigation: false,
    });
}

/* ==============================================
   CARROSSEL DEPOIMENTOS (Layout Google)
   ============================================== */
if (document.querySelector('.testimonials-swiper')) {
    
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        
        loop: true, // Loop infinito
        
        spaceBetween: 25, // Espaço entre os slides
        
        // Paginação (bolinhas)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navegação (setas)
        navigation: {
            nextEl: '.testimonials-nav-next',
            prevEl: '.testimonials-nav-prev',
        },
        
        // Define quantos slides aparecem por vez
        // (Responsivo)
        slidesPerView: 1, // Mobile
        
        breakpoints: {
            // A partir de 768px (Tablet)
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // A partir de 1024px (Desktop)
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
}

/* ==============================================
   CARROSSEL DEPOIMENTOS (Layout Google)
   ============================================== */
if (document.querySelector('.testimonials-swiper')) {
    
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        
        loop: true, // Loop infinito
        
        spaceBetween: 25, // Espaço entre os slides

        /* --- CÓDIGO NOVO (AUTOPLAY) --- */
        autoplay: {
            delay: 2500, /* 3000ms = 3 segundos */
            disableOnInteraction: false, /* Continua tocando mesmo se o usuário mexer */
        },
        /* --- FIM DO CÓDIGO NOVO --- */
        
        // Paginação (bolinhas)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navegação (agora escondida pelo CSS, mas o JS ainda aponta para ela)
        navigation: {
            nextEl: '.testimonials-nav-next',
            prevEl: '.testimonials-nav-prev',
        },
        
        // Define quantos slides aparecem por vez
        // (Responsivo)
        slidesPerView: 1, // Mobile
        
        breakpoints: {
            // A partir de 768px (Tablet)
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // A partir de 1024px (Desktop)
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
}