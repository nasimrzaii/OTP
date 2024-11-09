// script.js

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.otp-input');
    const messageContainer = document.querySelector('.otp-message');
    
    let otpValue = '';

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const value = input.value;
            
            // Remove non-numeric characters
            if (value.match(/[^0-9]/)) {
                input.value = value.replace(/[^0-9]/g, '');
            }
            
            otpValue = Array.from(inputs).map(input => input.value).join('');
            
            if (index < inputs.length - 1 && value) {
                inputs[index + 1].focus();
            }

            if (index > 0 && !value) {
                inputs[index - 1].focus();
            }

            if (otpValue.length === inputs.length) {
                if (otpValue === '00000') {
                    inputs.forEach(input => input.classList.add('error'));
                    messageContainer.textContent = 'The entered number is incorrect';
                } else {
                    alert(`your number is: ${otpValue}`);
                }
            }
        });
    });
});
