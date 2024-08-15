document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Exibir uma mensagem de confirmação (apenas para exemplo)
    document.getElementById('formMessage').textContent = `Obrigado, ${name}! Sua mensagem foi enviada.`;

    // Limpar o formulário
    this.reset();
});
