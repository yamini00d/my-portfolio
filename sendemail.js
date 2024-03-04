function sendEmail() {
    const recipient = 'yamini2000d@gmail.com'; 
    const sender = document.getElementById('sender').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    const emailLink = `mailto:${recipient}?cc=${sender}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  
    window.location.href = emailLink;
    const success = window.open(emailLink);
    
    if (success) {
        // Email sent successfully
        window.alert('Email sent!');
    } else {
        window.alert('Failed to send email. Please check your email client settings.');
    }
  }
  