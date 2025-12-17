// PWA Installation Prompt Handler
class PWAInstaller {
    constructor() {
        this.deferredPrompt = null;
        this.installButton = null;
        this.init();
    }

    init() {
        // Listen for the beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('PWA: beforeinstallprompt event fired');
            
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            
            // Stash the event so it can be triggered later
            this.deferredPrompt = e;
            
            // Show the install button
            this.showInstallButton();
        });

        // Listen for the app being installed
        window.addEventListener('appinstalled', (e) => {
            console.log('PWA: App was installed');
            this.hideInstallButton();
            this.showToast('App installed successfully! 🎉');
        });

        // Check if app is already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log('PWA: App is running in standalone mode');
            this.hideInstallButton();
        }

        // iOS Safari detection
        if (this.isIOSSafari() && !this.isInStandaloneMode()) {
            this.showIOSInstallInstructions();
        }
    }

    showInstallButton() {
        // Create install button if it doesn't exist
        if (!this.installButton) {
            this.installButton = document.createElement('button');
            this.installButton.innerHTML = `
                <i class="fas fa-download"></i>
                Install App
            `;
            this.installButton.className = 'btn btn-install';
            this.installButton.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: #48bb78;
                color: white;
                border: none;
                padding: 14px 22px;
                border-radius: 25px;
                font-weight: 600;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s ease;
                min-height: 48px;
                -webkit-tap-highlight-color: transparent;
                animation: installButtonPulse 2s ease-in-out infinite;
            `;

            this.installButton.addEventListener('click', () => {
                this.promptInstall();
                // Haptic feedback
                if (navigator.vibrate) {
                    navigator.vibrate(20);
                }
            });

            this.installButton.addEventListener('mouseenter', () => {
                this.installButton.style.transform = 'translateY(-2px)';
                this.installButton.style.boxShadow = '0 6px 16px rgba(72, 187, 120, 0.4)';
            });

            this.installButton.addEventListener('mouseleave', () => {
                this.installButton.style.transform = 'translateY(0)';
                this.installButton.style.boxShadow = '0 4px 12px rgba(72, 187, 120, 0.3)';
            });

            // Add CSS animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes installButtonPulse {
                    0%, 100% { box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3); }
                    50% { box-shadow: 0 6px 20px rgba(72, 187, 120, 0.5); }
                }
            `;
            document.head.appendChild(style);

            document.body.appendChild(this.installButton);
        }

        this.installButton.style.display = 'flex';
    }

    hideInstallButton() {
        if (this.installButton) {
            this.installButton.style.display = 'none';
        }
    }

    async promptInstall() {
        if (!this.deferredPrompt) {
            console.log('PWA: No deferred prompt available');
            return;
        }

        // Show the install prompt
        this.deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await this.deferredPrompt.userChoice;
        
        console.log(`PWA: User response to the install prompt: ${outcome}`);

        if (outcome === 'accepted') {
            this.showToast('Installing app... 📱');
        } else {
            this.showToast('Installation cancelled');
        }

        // Clear the deferred prompt
        this.deferredPrompt = null;
        this.hideInstallButton();
    }

    isIOSSafari() {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent) && /safari/.test(userAgent) && !/crios|fxios/.test(userAgent);
    }

    isInStandaloneMode() {
        return window.matchMedia('(display-mode: standalone)').matches || 
               window.navigator.standalone === true;
    }

    showIOSInstallInstructions() {
        // Show iOS-specific install instructions after a delay
        setTimeout(() => {
            if (!this.isInStandaloneMode()) {
                this.showIOSInstallModal();
            }
        }, 3000);
    }

    showIOSInstallModal() {
        const modal = document.createElement('div');
        modal.className = 'ios-install-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 10000;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        `;

        modal.innerHTML = `
            <div class="ios-install-content" style="
                background: white;
                border-radius: 20px 20px 0 0;
                padding: 25px;
                width: 100%;
                max-width: 500px;
                text-align: center;
                position: relative;
                animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            ">
                <div style="width: 40px; height: 4px; background: #cbd5e0; border-radius: 2px; margin: -10px auto 20px;"></div>
                
                <div style="font-size: 48px; margin-bottom: 15px;">📱</div>
                <h3 style="margin-bottom: 15px; color: #4a5568; font-size: 1.35rem;">Install License Plate Spotter</h3>
                <p style="margin-bottom: 25px; color: #718096; line-height: 1.6; font-size: 1rem;">
                    Add this app to your home screen for the best experience!
                </p>
                
                <div style="text-align: left; margin-bottom: 25px; padding: 20px; background: #f7fafc; border-radius: 12px;">
                    <div style="margin-bottom: 15px; display: flex; align-items: center; gap: 12px;">
                        <div style="background: #667eea; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; flex-shrink: 0;">1</div>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; margin-bottom: 4px;">Tap the share button</div>
                            <div style="font-size: 0.9rem; color: #718096;">
                                <span style="display: inline-block; padding: 4px 8px; background: #667eea; color: white; border-radius: 4px; font-size: 0.85rem;">
                                    <i class="fas fa-share"></i> Share
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="background: #48bb78; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; flex-shrink: 0;">2</div>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; margin-bottom: 4px;">Add to Home Screen</div>
                            <div style="font-size: 0.9rem; color: #718096;">
                                <span style="display: inline-block; padding: 4px 8px; background: #48bb78; color: white; border-radius: 4px; font-size: 0.85rem;">
                                    <i class="fas fa-plus"></i> Add
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="ios-install-close-btn" style="
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 16px 32px;
                    border-radius: 12px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 1rem;
                    width: 100%;
                    min-height: 52px;
                    -webkit-tap-highlight-color: transparent;
                ">Got it!</button>
            </div>
        `;

        document.body.appendChild(modal);

        // Haptic feedback on iOS
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }

        // Close button handler
        const closeBtn = modal.querySelector('.ios-install-close-btn');
        closeBtn.addEventListener('click', () => {
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
            modal.style.animation = 'fadeOut 0.2s ease';
            setTimeout(() => modal.remove(), 200);
        });

        // Close on background tap
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.animation = 'fadeOut 0.2s ease';
                setTimeout(() => modal.remove(), 200);
            }
        });

        // Auto-hide after 15 seconds
        setTimeout(() => {
            if (modal.parentElement) {
                modal.style.animation = 'fadeOut 0.2s ease';
                setTimeout(() => modal.remove(), 200);
            }
        }, 15000);
    }

    showToast(message) {
        // Use existing toast system if available
        if (window.game && window.game.showToast) {
            window.game.showToast(message);
            return;
        }

        // Fallback toast
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: #48bb78;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1001;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        toast.textContent = message;

        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (toast.parentElement) {
                    toast.remove();
                }
            }, 300);
        }, 3000);
    }
}

// Initialize PWA installer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.pwaInstaller = new PWAInstaller();
    });
} else {
    window.pwaInstaller = new PWAInstaller();
}
