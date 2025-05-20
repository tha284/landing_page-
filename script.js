// Evento load - quando a página termina de carregar
window.addEventListener('load', function() {
    console.log('Página totalmente carregada');
    
    // Eventos para os cards de projetos
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      // Evento mouseover - quando o mouse entra no card
      card.addEventListener('mouseover', function() {
        console.log('Mouse sobre o card:', this.querySelector('img').alt);
      });
      
      // Evento mouseout - quando o mouse sai do card
      card.addEventListener('mouseout', function() {
        console.log('Mouse saiu do card:', this.querySelector('img').alt);
      });
      
      // Evento click - clique simples no card
      card.addEventListener('click', function() {
        console.log('Card clicado:', this.querySelector('h3').textContent);
      });
      
      // Evento dblclick - duplo clique no card
      card.addEventListener('dblclick', function() {
        console.log('Duplo clique no card:', this.querySelector('h3').textContent);
        // Abre o link do projeto em nova aba
        const link = this.querySelector('a');
        if (link) {
          window.open(link.href, '_blank');
        }
      });
    });
  
    // Eventos para o formulário (se estiver na página do formulário)
    if (document.getElementById('fjuForm')) {
      const form = document.getElementById('fjuForm');
      
      // Evento submit - envio do formulário
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulário enviado');
        alert('Formulário enviado com sucesso!');
        this.reset();
      });
      
      // Eventos para os campos do formulário
      const campos = form.querySelectorAll('input, select, textarea');
      
      campos.forEach(campo => {
        // Evento focus - quando o campo recebe foco
        campo.addEventListener('focus', function() {
          console.log('Campo em foco:', this.id);
          this.style.borderColor = '#0c1f3f';
        });
        
        // Evento blur - quando o campo perde o foco
        campo.addEventListener('blur', function() {
          console.log('Campo perdeu foco:', this.id);
          this.style.borderColor = '#ddd';
        });
        
        // Evento input - quando o valor muda (para campos de texto)
        if (campo.type !== 'submit') {
          campo.addEventListener('input', function() {
            console.log('Input alterado:', this.id, this.value);
          });
        }
        
        // Evento change - quando o valor muda e perde o foco (para selects)
        if (campo.tagName === 'SELECT') {
          campo.addEventListener('change', function() {
            console.log('Seleção alterada:', this.id, this.value);
          });
        }
      });
    }
  
    // Eventos de teclado globais
    // Evento keydown - quando uma tecla é pressionada
    document.addEventListener('keydown', function(e) {
      console.log('Tecla pressionada:', e.key);
    });
    
    // Evento keyup - quando uma tecla é liberada
    document.addEventListener('keyup', function(e) {
      console.log('Tecla liberada:', e.key);
    });
  
    // Evento resize - quando a janela é redimensionada
    window.addEventListener('resize', function() {
      console.log('Janela redimensionada:', window.innerWidth, 'x', window.innerHeight);
    });
  
    // Eventos para os botões "Participe"
    const botoesParticipe = document.querySelectorAll('.summary-content button, .project-btn');
    botoesParticipe.forEach(botao => {
      botao.addEventListener('click', function(e) {
        if (!this.href) { // Se não for um link
          e.preventDefault();
          console.log('Botão Participe clicado');
          window.location.href = 'formulario.html';
        }
      });
    });
  
    // Evento para o botão CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('click', function(e) {
        console.log('Botão CTA clicado');
        // O comportamento padrão do link já redireciona para o formulário
      });
    }
  });