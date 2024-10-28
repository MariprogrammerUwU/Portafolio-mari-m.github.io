document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) { 
        function validateName(name) {
            const nameRegex = /^[A-Za-z\s]+$/;
            return nameRegex.test(name);
        }

        function validateEmail(email) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        }

        function handleSubmit(event) {
            const name = contactForm.querySelector('[name="name"]').value;
            const email = contactForm.querySelector('[name="email"]').value;
            const message = contactForm.querySelector('[name="message"]').value;

            if (!name || !email || !message) {
                alert('Todos los campos son obligatorios.');
                event.preventDefault();
                return;
            }

            if (!validateName(name)) {
                alert('El nombre no puede contener números y solo debe incluir letras.');
                event.preventDefault();
                return;
            }

            if (!validateEmail(email)) {
                alert('Por favor, ingresa un email válido que contenga @.');
                event.preventDefault();
                return;
            }

            contactForm.submit();
        }

        contactForm.addEventListener('submit', handleSubmit);

        window.addEventListener('beforeunload', () => {
            contactForm.reset();
        });
    } else {
        console.error('El formulario con ID "contact-form" no se encontró.');
    }
});
