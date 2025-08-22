// Add some interactive features to the sticker
document.addEventListener('DOMContentLoaded', function() {
    const sticker = document.querySelector('.sticker');
    const angelImage = document.querySelector('.angel-image');
    const stars = document.querySelectorAll('.star');
    const praiseText = document.querySelector('.praise-text');
    
    // Array of encouraging messages
    const encouragingMessages = [
        "You did amazing! 💖",
        "So brave and strong! 🌟",
        "Angel is proud of you! 💝",
        "You're a superhero! 🦸‍♀️",
        "What a brave patient! 🎉",
        "You handled that perfectly! ✨",
        "Amazing job today! 🏆"
    ];
    
    // Click interaction for the sticker
    sticker.addEventListener('click', function() {
        // Add a celebration effect
        sticker.style.animation = 'none';
        sticker.offsetHeight; // Trigger reflow
        sticker.style.animation = 'gentle-bounce 0.6s ease-in-out';
        
        // Change the praise text
        const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
        praiseText.textContent = randomMessage;
        
        // Create floating hearts effect
        createFloatingHearts();
        
        // Make stars sparkle more
        stars.forEach((star, index) => {
            setTimeout(() => {
                star.style.animation = 'twinkle 0.3s ease-in-out';
                setTimeout(() => {
                    star.style.animation = 'twinkle 1.5s ease-in-out infinite';
                    star.style.animationDelay = `${index * 0.5}s`;
                }, 300);
            }, index * 100);
        });
    });
    
    // Hover effect for Angel's image
    if (angelImage) {
        angelImage.addEventListener('mouseenter', function() {
            angelImage.style.transform = 'scale(1.15) rotate(5deg)';
            angelImage.style.filter = 'drop-shadow(0 8px 20px rgba(255, 105, 180, 0.6)) brightness(1.1)';
        });
        
        angelImage.addEventListener('mouseleave', function() {
            angelImage.style.transform = 'scale(1)';
            angelImage.style.filter = 'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2))';
        });
    }
    
    // Function to create floating hearts
    function createFloatingHearts() {
        const heartsContainer = document.createElement('div');
        heartsContainer.style.position = 'fixed';
        heartsContainer.style.top = '0';
        heartsContainer.style.left = '0';
        heartsContainer.style.width = '100%';
        heartsContainer.style.height = '100%';
        heartsContainer.style.pointerEvents = 'none';
        heartsContainer.style.zIndex = '1000';
        document.body.appendChild(heartsContainer);
        
        // Create multiple hearts
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = '💖';
                heart.style.position = 'absolute';
                heart.style.fontSize = '24px';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '100%';
                heart.style.animation = 'float-up 3s ease-out forwards';
                heart.style.opacity = '0';
                
                heartsContainer.appendChild(heart);
                
                // Animate the heart
                setTimeout(() => {
                    heart.style.opacity = '1';
                    heart.style.transform = `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
                    heart.style.transition = 'all 3s ease-out';
                }, 50);
                
                // Remove heart after animation
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 3000);
            }, i * 200);
        }
        
        // Remove container after all hearts are done
        setTimeout(() => {
            if (heartsContainer.parentNode) {
                heartsContainer.parentNode.removeChild(heartsContainer);
            }
        }, 5000);
    }
    
    // Add CSS for floating hearts animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0);
            }
            10% {
                opacity: 1;
                transform: translateY(-50px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-400px) scale(0.5) rotate(360deg);
            }
        }
        
        @keyframes heart-rain {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0) rotate(0deg);
            }
            10% {
                opacity: 1;
                transform: translateY(0px) scale(1) rotate(30deg);
            }
            100% {
                opacity: 0;
                transform: translateY(calc(100vh + 50px)) scale(0.8) rotate(360deg);
            }
        }
        
        .heart-rain-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 999;
        }
        
        .rain-heart {
            position: absolute;
            font-size: 20px;
            animation: heart-rain 6s linear infinite;
        }
    `;
    document.head.appendChild(style);
    
    // Create continuous heart rain
    function startHeartRain() {
        const heartsContainer = document.createElement('div');
        heartsContainer.className = 'heart-rain-container';
        document.body.appendChild(heartsContainer);
        
        function createRainHeart() {
            const heart = document.createElement('div');
            heart.className = 'rain-heart';
            heart.textContent = Math.random() > 0.5 ? '💖' : '💕';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            
            heartsContainer.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 8000);
        }
        
        // Create hearts at regular intervals
        setInterval(createRainHeart, 800);
        
        // Create initial hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(createRainHeart, i * 200);
        }
    }
    
    // Start heart rain immediately
    startHeartRain();
    
    // Welcome animation on page load
    setTimeout(() => {
        sticker.style.opacity = '0';
        sticker.style.transform = 'scale(0.5)';
        sticker.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            sticker.style.opacity = '1';
            sticker.style.transform = 'scale(1)';
        }, 100);
    }, 100);
    
    // Add a gentle pulsing glow effect
    setInterval(() => {
        const randomDelay = Math.random() * 3000 + 2000; // 2-5 seconds
        setTimeout(() => {
            sticker.style.boxShadow = `
                0 20px 40px rgba(0, 0, 0, 0.2),
                inset 0 2px 10px rgba(255, 255, 255, 0.8),
                0 0 30px rgba(255, 105, 180, 0.6)
            `;
            
            setTimeout(() => {
                sticker.style.boxShadow = `
                    0 20px 40px rgba(0, 0, 0, 0.2),
                    inset 0 2px 10px rgba(255, 255, 255, 0.8)
                `;
            }, 1000);
        }, randomDelay);
    }, 5000);
});

// Add some sound effects (optional - only works with user interaction)
function playCheerSound() {
    // This is a simple way to add sound - you could replace with actual audio files
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create a simple cheerful beep
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Add click sound to sticker (with try-catch for browser compatibility)
document.addEventListener('DOMContentLoaded', function() {
    const sticker = document.querySelector('.sticker');
    
    sticker.addEventListener('click', function() {
        try {
            playCheerSound();
        } catch (e) {
            // Silently fail if audio context is not supported
            console.log('Audio not supported in this browser');
        }
    });
});
