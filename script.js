/**
 * ECLIPSE KITCHEN & BATH - MASTER JAVASCRIPT
 * Handles navigation, form validation, and interactive elements
 */

// ============================================
// MOBILE NAVIGATION - COMPLETELY REWRITTEN
// ============================================

(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navActions = document.querySelector('.nav-actions');
        const body = document.body;
        
        console.log('Mobile menu elements found:', {
            toggle: !!mobileToggle,
            menu: !!navMenu,
            actions: !!navActions
        });
        
        if (!mobileToggle || !navMenu || !navActions) {
            console.error('Mobile menu elements not found!');
            return;
        }
        
        // Toggle menu function
        function toggleMenu() {
            const isActive = navMenu.classList.contains('active');
            
            if (isActive) {
                // Close menu
                navMenu.classList.remove('active');
                navActions.classList.remove('active');
                mobileToggle.classList.remove('active');
                body.style.overflow = '';
                console.log('Menu closed');
            } else {
                // Open menu
                navMenu.classList.add('active');
                navActions.classList.add('active');
                mobileToggle.classList.add('active');
                body.style.overflow = 'hidden';
                console.log('Menu opened');
            }
        }
        
        // Close menu function
        function closeMenu() {
            navMenu.classList.remove('active');
            navActions.classList.remove('active');
            mobileToggle.classList.remove('active');
            body.style.overflow = '';
            console.log('Menu closed via closeMenu()');
        }
        
        // Click on hamburger
        mobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
        
        // Click on menu items
        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });
        
        // Click outside to close
        document.addEventListener('click', function(e) {
            const isClickInside = mobileToggle.contains(e.target) || 
                                 navMenu.contains(e.target) || 
                                 navActions.contains(e.target);
            
            if (!isClickInside && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Escape key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    });
})();

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// MULTI-STEP FORM FUNCTIONALITY
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    let currentStep = 1;
    const totalSteps = 5;
    
    // Get all form elements
    const formSteps = contactForm.querySelectorAll('.form-step');
    const progressSteps = contactForm.querySelectorAll('.progress-step');
    const progressLines = contactForm.querySelectorAll('.progress-line');
    const continueButtons = contactForm.querySelectorAll('.btn-continue');
    const backButtons = contactForm.querySelectorAll('.btn-back');
    
    // Navigation functions
    function showStep(stepNumber) {
        // Hide all steps
        formSteps.forEach(step => step.classList.remove('active'));
        
        // Show target step
        const targetStep = contactForm.querySelector('.form-step[data-step="' + stepNumber + '"]');
        if (targetStep) {
            targetStep.classList.add('active');
        }
        
        // Update progress indicator
        updateProgress(stepNumber);
        
        // Scroll to top of form
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    function updateProgress(stepNumber) {
        progressSteps.forEach(function(step, index) {
            var stepNum = index + 1;
            if (stepNum < stepNumber) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (stepNum === stepNumber) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active');
                step.classList.remove('completed');
            }
        });
        
        progressLines.forEach(function(line, index) {
            if (index < stepNumber - 1) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        });
    }
    
    function validateStep(stepNumber) {
        var currentStepElement = contactForm.querySelector('.form-step[data-step="' + stepNumber + '"]');
        if (!currentStepElement) return true;
        var isValid = true;
        
        // Steps 1, 2, 3 have radio groups — validate the specific group for this step
        if (stepNumber === 1 || stepNumber === 2 || stepNumber === 3) {
            var radioGroup = currentStepElement.querySelector('input[type="radio"]');
            if (radioGroup) {
                var groupName = radioGroup.name;
                var checked = currentStepElement.querySelector('input[name="' + groupName + '"]:checked');
                if (!checked) {
                    isValid = false;
                    // Show inline error
                    var existing = currentStepElement.querySelector('.radio-error');
                    if (!existing) {
                        var err = document.createElement('p');
                        err.className = 'radio-error';
                        err.style.color = '#d32f2f';
                        err.style.fontSize = '14px';
                        err.style.marginTop = '-24px';
                        err.style.marginBottom = '24px';
                        err.textContent = 'Please select an option to continue.';
                        var radioGrid = currentStepElement.querySelector('.radio-grid');
                        radioGrid.parentNode.insertBefore(err, radioGrid.nextSibling);
                    }
                }
            }
        }
        
        // Step 4: validate contact fields
        if (stepNumber === 4) {
            var nameInput = document.getElementById('name');
            var emailInput = document.getElementById('email');
            var phoneInput = document.getElementById('phone');
            
            // Reset errors
            currentStepElement.querySelectorAll('.form-group').forEach(function(group) {
                group.classList.remove('error');
            });
            
            if (nameInput && !nameInput.value.trim()) {
                nameInput.closest('.form-group').classList.add('error');
                isValid = false;
            }
            
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && !emailRegex.test(emailInput.value)) {
                emailInput.closest('.form-group').classList.add('error');
                isValid = false;
            }
            
            var phoneRegex = /^[\d\s\-\(\)]+$/;
            if (phoneInput && (!phoneRegex.test(phoneInput.value) || phoneInput.value.replace(/\D/g, '').length < 10)) {
                phoneInput.closest('.form-group').classList.add('error');
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    // Continue button handlers
    continueButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var nextStep = parseInt(this.getAttribute('data-next'), 10);
            if (isNaN(nextStep)) return;
            
            if (validateStep(currentStep)) {
                // Clear any radio error on success
                var currentStepEl = contactForm.querySelector('.form-step[data-step="' + currentStep + '"]');
                if (currentStepEl) {
                    var radioErr = currentStepEl.querySelector('.radio-error');
                    if (radioErr) radioErr.remove();
                }
                currentStep = nextStep;
                showStep(currentStep);
            }
        });
    });
    
    // Back button handlers
    backButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var prevStep = parseInt(this.getAttribute('data-prev'), 10);
            if (isNaN(prevStep)) return;
            // Clear radio error when going back
            var currentStepEl = contactForm.querySelector('.form-step[data-step="' + currentStep + '"]');
            if (currentStepEl) {
                var radioErr = currentStepEl.querySelector('.radio-error');
                if (radioErr) radioErr.remove();
            }
            currentStep = prevStep;
            showStep(currentStep);
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Hide all steps by removing active class
        formSteps.forEach(function(step) {
            step.classList.remove('active');
        });
        
        // Hide progress bar
        var progressBar = contactForm.querySelector('.form-progress');
        if (progressBar) progressBar.style.display = 'none';
        
        // Show success message
        var successMessage = contactForm.querySelector('.form-success');
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    // Clear errors on input change
    var inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            if (this.closest('.form-group')) {
                this.closest('.form-group').classList.remove('error');
            }
        });
        // Also clear radio error when a radio is selected
        if (input.type === 'radio') {
            input.addEventListener('change', function() {
                var step = this.closest('.form-step');
                if (step) {
                    var radioErr = step.querySelector('.radio-error');
                    if (radioErr) radioErr.remove();
                }
            });
        }
    });
}

// ============================================
// PROJECT CARD HOVER EFFECTS
// ============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .testimonial-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// PHONE NUMBER FORMATTING
// ============================================

const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 3) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }
        
        e.target.value = value;
    });
}

// ============================================
// LOADING STATE FOR BUTTONS
// ============================================

function addLoadingState(button) {
    button.disabled = true;
    const originalText = button.innerHTML;
    button.innerHTML = '<span style="display: inline-block; width: 16px; height: 16px; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; animation: spin 0.6s linear infinite;"></span>';
    
    return () => {
        button.disabled = false;
        button.innerHTML = originalText;
    };
}

// Add spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================

console.log('%c✨ Eclipse Kitchen & Bath', 'font-size: 24px; font-weight: bold; color: #C4A962;');
console.log('%cBuilt efficiently. Designed with intention.', 'font-size: 14px; color: #666;');
console.log('%c👋 Interested in working with us? Visit https://eclipsekitchenandbath.ca', 'font-size: 12px; color: #999;');
