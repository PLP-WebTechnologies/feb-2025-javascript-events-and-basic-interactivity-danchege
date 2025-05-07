// Event Handling Section
document.addEventListener('DOMContentLoaded', function() {
    // Click Event
    const clickBtn = document.getElementById('click-btn');
    clickBtn.addEventListener('click', function() {
        alert('Button clicked! 🎉');
    });

    // Hover Effect (via JavaScript for demonstration)
    const hoverBtn = document.getElementById('hover-btn');
    hoverBtn.addEventListener('mouseenter', function() {
        this.textContent = 'Hovering!';
    });
    hoverBtn.addEventListener('mouseleave', function() {
        this.textContent = 'Hover Over Me';
    });

    // Keypress Event
    const jumpEmoji = document.getElementById('jump-emoji');
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') {
            jumpEmoji.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                jumpEmoji.style.transform = 'translateY(0)';
            }, 200);
        }
    });

    // Interactive Elements
    // Dynamic Button
    const dynamicBtn = document.getElementById('dynamic-btn');
    let isLoggedIn = false;
    dynamicBtn.addEventListener('click', function() {
        isLoggedIn = !isLoggedIn;
        this.textContent = isLoggedIn ? 'Logout' : 'Login';
        this.style.backgroundColor = isLoggedIn ? '#e74c3c' : '#2ecc71';
    });

    // Slideshow
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[n].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    setInterval(nextSlide, 3000);

    // Tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form Validation
    const form = document.getElementById('validation-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strength-bar');

    // Real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    function validateName() {
        const feedback = document.getElementById('name-feedback');
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
            nameInput.classList.remove('success');
            feedback.textContent = 'Name is required';
            feedback.className = 'feedback error-text';
            return false;
        } else {
            nameInput.classList.remove('error');
            nameInput.classList.add('success');
            feedback.textContent = '✓ Valid';
            feedback.className = 'feedback success-text';
            return true;
        }
    }

    function validateEmail() {
        const feedback = document.getElementById('email-feedback');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailInput.value === '') {
            emailInput.classList.remove('error', 'success');
            feedback.textContent = '';
            return false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('error');
            emailInput.classList.remove('success');
            feedback.textContent = 'Please enter a valid email';
            feedback.className = 'feedback error-text';
            return false;
        } else {
            emailInput.classList.remove('error');
            emailInput.classList.add('success');
            feedback.textContent = '✓ Valid';
            feedback.className = 'feedback success-text';
            return true;
        }
    }

    function validatePassword() {
        const feedback = document.getElementById('password-feedback');
        const password = passwordInput.value;
        
        if (password === '') {
            passwordInput.classList.remove('error', 'success');
            strengthBar.style.width = '0%';
            strengthBar.style.backgroundColor = '';
            feedback.textContent = '';
            return false;
        } else if (password.length < 8) {
            passwordInput.classList.add('error');
            passwordInput.classList.remove('success');
            strengthBar.style.width = '30%';
            strengthBar.style.backgroundColor = '#e74c3c';
            feedback.textContent = 'Password must be at least 8 characters';
            feedback.className = 'feedback error-text';
            return false;
        } else {
            passwordInput.classList.remove('error');
            passwordInput.classList.add('success');
            
            // Simple strength meter
            if (password.length < 12) {
                strengthBar.style.width = '60%';
                strengthBar.style.backgroundColor = '#f39c12';
            } else {
                strengthBar.style.width = '100%';
                strengthBar.style.backgroundColor = '#2ecc71';
            }
            
            feedback.textContent = '✓ Valid';
            feedback.className = 'feedback success-text';
            return true;
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        if (isNameValid && isEmailValid && isPasswordValid) {
            alert('Form submitted successfully!');
            form.reset();
            strengthBar.style.width = '0%';
            document.querySelectorAll('.feedback').forEach(fb => fb.textContent = '');
        } else {
            alert('Please fix the errors before submitting.');
        }
    });

    // Secret Action (Double Click)
    const secretTrigger = document.getElementById('secret-trigger');
    const secretMessage = document.getElementById('secret-message');
    
    let clickCount = 0;
    secretTrigger.addEventListener('dblclick', function() {
        secretMessage.style.display = 'block';
        setTimeout(() => {
            secretMessage.style.display = 'none';
        }, 3000);
    });
});