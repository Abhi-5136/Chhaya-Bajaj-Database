// Authentication credentials (in a real app, this would be handled server-side)
const validCredentials = {
    username: 'Chhaya',
    password: 'bajaj'
};



// Check if user is already authenticated
function checkAuth() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const currentPage = window.location.pathname.split('/').pop();
    
    if (isAuthenticated === 'true' && currentPage === 'index.html') {
        window.location.href = 'home.html';
    } else if (isAuthenticated !== 'true' && currentPage === 'home.html') {
        window.location.href = 'index.html';
    }
}

// Login functionality
function handleLogin() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Clear previous error messages
            errorMessage.textContent = '';
            
            // Validate credentials
            if (username === validCredentials.username && password === validCredentials.password) {
                // Store authentication status
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('username', username);
                
                // Add success animation
                loginForm.style.transform = 'scale(0.95)';
                loginForm.style.opacity = '0.7';
                
                // Redirect to home page after brief delay
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 300);
            } else {
                // Show error message
                errorMessage.textContent = 'Invalid username or password. Please try again.';
                
                // Add shake animation to form
                loginForm.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    loginForm.style.animation = '';
                }, 500);
                
                // Clear password field
                document.getElementById('password').value = '';
            }
        });
    }
}



// Home page functionality
function handleHomePage() {
    const navButtons = document.querySelectorAll('.nav-button');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Handle navigation buttons
    if (navButtons.length > 0) {
        navButtons.forEach(button => {
            button.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                
                if (url) {
                    // Add click animation
                    this.style.transform = 'scale(0.95)';
                    
                    // Open link in new tab after a short delay for the animation
                    setTimeout(() => {
                        this.style.transform = '';
                        window.open(url, '_blank');
                    }, 150);
                }
            });
            
            // Add hover sound effect (optional)
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Clear authentication
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('username');
            
            // Add logout animation
            document.body.style.opacity = '0.7';
            
            // Redirect to login page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 300);
        });
    }
    
    // Display welcome message with username
    const username = localStorage.getItem('username');
    /*if (username) {
        const welcomeHeader = document.querySelector('.home-main h2');
        if (welcomeHeader) {
            welcomeHeader.textContent = `Welcome, ${username}!`;
        }
    }*/
}

// Add CSS for shake animation
function addShakeAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize the application
function init() {
    // Add shake animation CSS
    addShakeAnimation();
    
    // Check authentication status
    checkAuth();
    
    // Initialize page-specific functionality
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        handleLogin();
    } else if (currentPage === 'home.html') {
        handleHomePage();
    }
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
}

// Enhanced button interactions
function enhanceButtonInteractions() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .nav-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    init();
    enhanceButtonInteractions();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    checkAuth();
});

// Prevent unauthorized access by checking auth on page visibility change
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        checkAuth();
    }
});

