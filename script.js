// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('show');
});

// Form Submission
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value || 'Not provided';
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const subject = `New Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ALocation: ${city}, ${state}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:gizmotechcomputerservice@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    alert('Thank you for your inquiry! A mail window should open for you to send your message.');
    
    // Reset form
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (document.getElementById('nav-menu').classList.contains('show')) {
            document.getElementById('nav-menu').classList.remove('show');
        }
    });
});