// VFX Tech Lab Interactive Script
document.addEventListener('DOMContentLoaded', function() {
    
    // Terminal Feed System
    const terminalContent = document.getElementById('terminalContent');
    const terminalMessages = [
        { type: 'success', text: '[{time}] Intrusion attempt blocked - IP: 192.168.1.***' },
        { type: 'info', text: '[{time}] Deploying security patch...' },
        { type: 'success', text: '[{time}] Patch deployment complete' },
        { type: 'warning', text: '[{time}] Anomalous traffic detected - investigating' },
        { type: 'success', text: '[{time}] All nodes stabilized' },
        { type: 'info', text: '[{time}] Backup verification in progress...' },
        { type: 'success', text: '[{time}] System integrity: 100%' },
        { type: 'warning', text: '[{time}] Firewall configuration updated' },
        { type: 'info', text: '[{time}] Scanning for vulnerabilities...' },
        { type: 'success', text: '[{time}] Network optimization complete' },
        { type: 'error', text: '[{time}] Critical alert: Unauthorized access attempt' },
        { type: 'success', text: '[{time}] Threat neutralized - System secure' },
        { type: 'info', text: '[{time}] Initializing quantum encryption...' },
        { type: 'success', text: '[{time}] Encryption protocols active' },
        { type: 'warning', text: '[{time}] Elevated threat level detected' },
        { type: 'success', text: '[{time}] Counter-measures deployed' }
    ];

    function addTerminalLine() {
        const now = new Date();
        const timeStr = now.toTimeString().slice(0, 8);
        const randomMessage = terminalMessages[Math.floor(Math.random() * terminalMessages.length)];
        const messageText = randomMessage.text.replace('{time}', timeStr);
        
        const newLine = document.createElement('div');
        newLine.className = `terminal-line ${randomMessage.type}`;
        newLine.textContent = messageText;
        
        terminalContent.appendChild(newLine);
        
        // Remove old lines to prevent overflow
        if (terminalContent.children.length > 8) {
            terminalContent.removeChild(terminalContent.firstChild);
        }
        
        // Auto scroll to bottom
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }

    // Add terminal line every 3-5 seconds
    setInterval(addTerminalLine, 3000 + Math.random() * 2000);

    // Threat Map Canvas
    const canvas = document.getElementById('threatMap');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const nodes = [];
        const connections = [];

        // Create network nodes
        for (let i = 0; i < 20; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 2,
                color: ['#00ff41', '#ff6b35', '#00d4ff'][Math.floor(Math.random() * 3)],
                pulse: Math.random() * Math.PI * 2,
                speed: 0.02 + Math.random() * 0.03
            });
        }

        // Create connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(nodes[i].x - nodes[j].x, 2) + 
                    Math.pow(nodes[i].y - nodes[j].y, 2)
                );
                
                if (distance < 150) {
                    connections.push({
                        from: i,
                        to: j,
                        opacity: Math.max(0.1, 1 - distance / 150)
                    });
                }
            }
        }

        function animateMap() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw connections
            connections.forEach(conn => {
                const fromNode = nodes[conn.from];
                const toNode = nodes[conn.to];
                
                ctx.strokeStyle = `rgba(0, 255, 65, ${conn.opacity * 0.3})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(fromNode.x, fromNode.y);
                ctx.lineTo(toNode.x, toNode.y);
                ctx.stroke();
            });
            
            // Draw nodes
            nodes.forEach(node => {
                node.pulse += node.speed;
                const pulseSize = Math.sin(node.pulse) * 0.5 + 1;
                
                ctx.shadowBlur = 15;
                ctx.shadowColor = node.color;
                ctx.fillStyle = node.color;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * pulseSize, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            
            requestAnimationFrame(animateMap);
        }

        animateMap();
    }

    // Emergency Modal
    const emergencyModal = document.getElementById('emergencyModal');
    const initiateChatBtn = document.getElementById('initiateChatBtn');
    const modalCloseButtons = document.querySelectorAll('.modal-close, #modalClose2');

    if (initiateChatBtn) {
        initiateChatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Show system alert for secure connection
            const alertDiv = document.createElement('div');
            alertDiv.className = 'system-alert';
            alertDiv.textContent = '🔒 Establishing secure communication channel...';
            alertDiv.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: rgba(0, 255, 65, 0.1);
                border: 1px solid #00ff41;
                color: #00ff41;
                padding: 1rem;
                border-radius: 5px;
                z-index: 3000;
                animation: slideInRight 0.5s ease-out;
                font-family: 'Courier New', monospace;
                backdrop-filter: blur(5px);
            `;
            document.body.appendChild(alertDiv);
            
            // Add secure connection effect to contact form
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.classList.add('secure-connection-active');
                    
                    // Temporarily update form title to show secure connection
                    const formTitle = contactSection.querySelector('h3');
                    if (formTitle && formTitle.textContent === 'REQUEST TACTICAL ASSESSMENT') {
                        const originalTitle = formTitle.textContent;
                        formTitle.textContent = '🔒 SECURE CHANNEL ESTABLISHED';
                        formTitle.style.color = '#00ff41';
                        
                        setTimeout(() => {
                            formTitle.textContent = originalTitle;
                            formTitle.style.color = '';
                        }, 3000);
                    }
                    
                    setTimeout(() => {
                        contactSection.classList.remove('secure-connection-active');
                    }, 2000);
                }
            }, 800);
            
            // Remove alert after scroll
            setTimeout(() => {
                if (alertDiv.parentNode) {
                    alertDiv.style.animation = 'slideOutRight 0.5s ease-out';
                    setTimeout(() => {
                        document.body.removeChild(alertDiv);
                    }, 500);
                }
            }, 2000);
        });
    }

    modalCloseButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            emergencyModal.style.display = 'none';
        });
    });

    // Close modal on background click
    emergencyModal.addEventListener('click', function(e) {
        if (e.target === emergencyModal) {
            emergencyModal.style.display = 'none';
        }
    });

    // Contact Form Handling
    const contactForm = document.querySelector('.cyber-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !phone || !message) {
                alert('🚨 TRANSMISSION FAILED: All fields required for secure communication');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('⚠️ INVALID COMM CHANNEL: Please enter a valid email address');
                return;
            }
            
            // Success message
            alert('✅ MESSAGE TRANSMITTED: Your tactical assessment request has been received. Response incoming within 24 hours.');
            this.reset();
        });
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // System stats animation
    const statBars = document.querySelectorAll('.stat-fill');
    statBars.forEach(bar => {
        const originalWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 2s ease-in-out';
            bar.style.width = originalWidth;
        }, 1000);
    });

    // Progress bars animation for operation cards
    const progressBars = document.querySelectorAll('.progress-fill');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const currentWidth = parseInt(bar.style.width);
            const variation = Math.random() * 6 - 3; // -3 to +3
            const newWidth = Math.max(70, Math.min(100, currentWidth + variation));
            bar.style.width = newWidth + '%';
        });
    }

    setInterval(animateProgressBars, 5000);

    // Keyboard shortcuts for terminal
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            addTerminalLine();
        }
    });

    // Status indicators blinking
    const statusIndicators = document.querySelectorAll('.status-indicator');
    statusIndicators.forEach((indicator, index) => {
        setInterval(() => {
            indicator.style.opacity = indicator.style.opacity === '0.3' ? '1' : '0.3';
        }, 1000 + index * 200);
    });

    // Mobile menu toggle (if needed)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Auto-trigger emergency modal after 15 seconds (like the old popup)
    setTimeout(() => {
        if (!sessionStorage.getItem('emergencyShown')) {
            emergencyModal.style.display = 'flex';
            sessionStorage.setItem('emergencyShown', 'true');
        }
    }, 15000);

    // Add some random system alerts
    const alerts = [
        'Network optimization in progress...',
        'Quantum firewall activated',
        'Threat analysis complete',
        'System diagnostics running...',
        'Backup protocols engaged'
    ];

    function showSystemAlert() {
        const alert = alerts[Math.floor(Math.random() * alerts.length)];
        const alertDiv = document.createElement('div');
        alertDiv.className = 'system-alert';
        alertDiv.textContent = '⚡ ' + alert;
        alertDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: rgba(0, 255, 65, 0.1);
            border: 1px solid #00ff41;
            color: #00ff41;
            padding: 1rem;
            border-radius: 5px;
            z-index: 3000;
            animation: slideInRight 0.5s ease-out;
            font-family: 'Courier New', monospace;
        `;

        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.style.animation = 'slideOutRight 0.5s ease-out';
            setTimeout(() => {
                document.body.removeChild(alertDiv);
            }, 500);
        }, 3000);
    }

    // Show random alerts every 10-20 seconds
    setInterval(showSystemAlert, 10000 + Math.random() * 10000);

    // Add CSS animations for alerts
    const alertStyles = document.createElement('style');
    alertStyles.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(alertStyles);

    // Background rotation system
    const backgrounds = [
        'url("images/bg-cyberpunk.jpg")',
        'url("images/bg-danger.jpg")',
        'url("images/bg-hightech.jpg")'
    ];
    
    let currentBg = 0;
    
    // Optional: Rotate hero background every 30 seconds
    function rotateBackground() {
        const hero = document.querySelector('.hero');
        if (hero) {
            currentBg = (currentBg + 1) % backgrounds.length;
            const newGradient = currentBg === 0 ? 
                'linear-gradient(135deg, rgba(0,10,20,0.8) 0%, rgba(0,0,0,0.9) 100%)' :
                currentBg === 1 ? 
                'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(0,0,0,0.8) 100%)' :
                'linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(0,0,0,0.8) 100%)';
            
            hero.style.background = `${newGradient}, ${backgrounds[currentBg]} center/cover`;
        }
    }
    
    // Uncomment to enable background rotation
    // setInterval(rotateBackground, 30000);
    
    // Enhanced glitch effects
    function createGlitchEffect() {
        const glitchElements = document.querySelectorAll('.glitch-effect');
        glitchElements.forEach(element => {
            if (Math.random() < 0.1) { // 10% chance every call
                element.style.opacity = Math.random() * 0.5 + 0.1;
                element.style.transform = `translateX(${Math.random() * 20 - 10}px)`;
                
                setTimeout(() => {
                    element.style.opacity = '';
                    element.style.transform = '';
                }, 100);
            }
        });
    }
    
    setInterval(createGlitchEffect, 200);
    
    // Dynamic color shifting for circuit overlays
    function shiftCircuitColors() {
        const circuits = document.querySelectorAll('.circuit-overlay');
        circuits.forEach(circuit => {
            const hue = Math.random() * 120; // Green to cyan range
            circuit.style.filter = `hue-rotate(${hue}deg) brightness(${0.8 + Math.random() * 0.4})`;
        });
    }
    
    setInterval(shiftCircuitColors, 3000);

    console.log('🚀 VFX Tech Lab systems initialized');
    console.log('🛡️ Security protocols active');
    console.log('📡 Global monitoring online');
    console.log('🎨 Dynamic backgrounds loaded');
    console.log('✨ Visual effects systems online');
});