initializeForm();
document.addEventListener('astro:after-swap', initializeForm);

function initializeForm() {
    const form = document.querySelector('form');
    const sendMailButton = document.querySelector('button');

    let isLoading = false;
    const formData = {};

    const isFormValid = () => ['name', 'email', 'subject', 'message']
        .every(field => formData[field]?.trim() !== '');

    const sendMail = async (e) => {
        e.preventDefault();
        if (!isFormValid() || isLoading) return;
        toggleLoading(true);

        try {
            const response = await fetch('/api/sendMail.json', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    from: `Acme <onboarding@resend.dev>`,
                    to: ['todelanoivan13@gmail.com'],
                    subject: formData.subject,
                    html: `
                        <h1>Nombre: ${formData.name}</h1>
                        <h3>E-mail: ${formData.email}</h3>
                        <strong>Asunto: ${formData.subject}</strong>
                        <p>Mensaje: ${formData.message}</p>
                    `,
                    text: formData.message,
                })
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            resetForm();
            toggleLoading(false);
        }
    };

    const toggleLoading = (state) => {
        isLoading = state;
        sendMailButton.disabled = state;
        sendMailButton.classList.toggle('loading', state);
    };

    const resetForm = () => {
        form.reset();
        Object.keys(formData).forEach(key => formData[key] = '');
    };

    form.addEventListener('input', ({ target: { name, value } }) => {
        if (name) formData[name] = value;
    });

    form.addEventListener('submit', sendMail);
}
