document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio automático do formulário

        // Valida se todos os campos estão preenchidos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Se todos os campos estiverem preenchidos, exibe a mensagem de sucesso
            successMessage.style.display = 'block';

            // Limpa o formulário
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos antes de enviar.');
        }
    });
});