class LicensePlateGame {
    constructor() {
        this.gameData = {
            usa: {},
            canada: {},
            mexico: {}
        };
        this.currentCountry = 'usa';
        this.licensePlateData = this.initializeLicensePlateData();
        this.longPressTimer = null;
        this.isPullingToRefresh = false;
        this.pullStartY = 0;
        this.contextMenuOpen = false;
        this.filteredPlate = null;
        this.isStatsSwitching = false;
        this.init();
    }

    initializeLicensePlateData() {
        return {
            usa: {
                'Alabama': { abbr: 'AL', count: 0, timestamp: null, location: null },
                'Alaska': { abbr: 'AK', count: 0, timestamp: null, location: null },
                'Arizona': { abbr: 'AZ', count: 0, timestamp: null, location: null },
                'Arkansas': { abbr: 'AR', count: 0, timestamp: null, location: null },
                'California': { abbr: 'CA', count: 0, timestamp: null, location: null },
                'Colorado': { abbr: 'CO', count: 0, timestamp: null, location: null },
                'Connecticut': { abbr: 'CT', count: 0, timestamp: null, location: null },
                'Delaware': { abbr: 'DE', count: 0, timestamp: null, location: null },
                'Florida': { abbr: 'FL', count: 0, timestamp: null, location: null },
                'Georgia': { abbr: 'GA', count: 0, timestamp: null, location: null },
                'Hawaii': { abbr: 'HI', count: 0, timestamp: null, location: null },
                'Idaho': { abbr: 'ID', count: 0, timestamp: null, location: null },
                'Illinois': { abbr: 'IL', count: 0, timestamp: null, location: null },
                'Indiana': { abbr: 'IN', count: 0, timestamp: null, location: null },
                'Iowa': { abbr: 'IA', count: 0, timestamp: null, location: null },
                'Kansas': { abbr: 'KS', count: 0, timestamp: null, location: null },
                'Kentucky': { abbr: 'KY', count: 0, timestamp: null, location: null },
                'Louisiana': { abbr: 'LA', count: 0, timestamp: null, location: null },
                'Maine': { abbr: 'ME', count: 0, timestamp: null, location: null },
                'Maryland': { abbr: 'MD', count: 0, timestamp: null, location: null },
                'Massachusetts': { abbr: 'MA', count: 0, timestamp: null, location: null },
                'Michigan': { abbr: 'MI', count: 0, timestamp: null, location: null },
                'Minnesota': { abbr: 'MN', count: 0, timestamp: null, location: null },
                'Mississippi': { abbr: 'MS', count: 0, timestamp: null, location: null },
                'Missouri': { abbr: 'MO', count: 0, timestamp: null, location: null },
                'Montana': { abbr: 'MT', count: 0, timestamp: null, location: null },
                'Nebraska': { abbr: 'NE', count: 0, timestamp: null, location: null },
                'Nevada': { abbr: 'NV', count: 0, timestamp: null, location: null },
                'New Hampshire': { abbr: 'NH', count: 0, timestamp: null, location: null },
                'New Jersey': { abbr: 'NJ', count: 0, timestamp: null, location: null },
                'New Mexico': { abbr: 'NM', count: 0, timestamp: null, location: null },
                'New York': { abbr: 'NY', count: 0, timestamp: null, location: null },
                'North Carolina': { abbr: 'NC', count: 0, timestamp: null, location: null },
                'North Dakota': { abbr: 'ND', count: 0, timestamp: null, location: null },
                'Ohio': { abbr: 'OH', count: 0, timestamp: null, location: null },
                'Oklahoma': { abbr: 'OK', count: 0, timestamp: null, location: null },
                'Oregon': { abbr: 'OR', count: 0, timestamp: null, location: null },
                'Pennsylvania': { abbr: 'PA', count: 0, timestamp: null, location: null },
                'Rhode Island': { abbr: 'RI', count: 0, timestamp: null, location: null },
                'South Carolina': { abbr: 'SC', count: 0, timestamp: null, location: null },
                'South Dakota': { abbr: 'SD', count: 0, timestamp: null, location: null },
                'Tennessee': { abbr: 'TN', count: 0, timestamp: null, location: null },
                'Texas': { abbr: 'TX', count: 0, timestamp: null, location: null },
                'Utah': { abbr: 'UT', count: 0, timestamp: null, location: null },
                'Vermont': { abbr: 'VT', count: 0, timestamp: null, location: null },
                'Virginia': { abbr: 'VA', count: 0, timestamp: null, location: null },
                'Washington': { abbr: 'WA', count: 0, timestamp: null, location: null },
                'West Virginia': { abbr: 'WV', count: 0, timestamp: null, location: null },
                'Wisconsin': { abbr: 'WI', count: 0, timestamp: null, location: null },
                'Wyoming': { abbr: 'WY', count: 0, timestamp: null, location: null },
                'Washington D.C.': { abbr: 'DC', count: 0, timestamp: null, location: null }
            },
            canada: {
                'Alberta': { abbr: 'AB', count: 0, timestamp: null, location: null },
                'British Columbia': { abbr: 'BC', count: 0, timestamp: null, location: null },
                'Manitoba': { abbr: 'MB', count: 0, timestamp: null, location: null },
                'New Brunswick': { abbr: 'NB', count: 0, timestamp: null, location: null },
                'Newfoundland and Labrador': { abbr: 'NL', count: 0, timestamp: null, location: null },
                'Northwest Territories': { abbr: 'NT', count: 0, timestamp: null, location: null },
                'Nova Scotia': { abbr: 'NS', count: 0, timestamp: null, location: null },
                'Nunavut': { abbr: 'NU', count: 0, timestamp: null, location: null },
                'Ontario': { abbr: 'ON', count: 0, timestamp: null, location: null },
                'Prince Edward Island': { abbr: 'PE', count: 0, timestamp: null, location: null },
                'Quebec': { abbr: 'QC', count: 0, timestamp: null, location: null },
                'Saskatchewan': { abbr: 'SK', count: 0, timestamp: null, location: null },
                'Yukon': { abbr: 'YT', count: 0, timestamp: null, location: null }
            },
            mexico: {
                'Aguascalientes': { abbr: 'AGS', count: 0, timestamp: null, location: null },
                'Baja California': { abbr: 'BC', count: 0, timestamp: null, location: null },
                'Baja California Sur': { abbr: 'BCS', count: 0, timestamp: null, location: null },
                'Campeche': { abbr: 'CAM', count: 0, timestamp: null, location: null },
                'Chiapas': { abbr: 'CHIS', count: 0, timestamp: null, location: null },
                'Chihuahua': { abbr: 'CHIH', count: 0, timestamp: null, location: null },
                'Coahuila': { abbr: 'COAH', count: 0, timestamp: null, location: null },
                'Colima': { abbr: 'COL', count: 0, timestamp: null, location: null },
                'Durango': { abbr: 'DGO', count: 0, timestamp: null, location: null },
                'Guanajuato': { abbr: 'GTO', count: 0, timestamp: null, location: null },
                'Guerrero': { abbr: 'GRO', count: 0, timestamp: null, location: null },
                'Hidalgo': { abbr: 'HGO', count: 0, timestamp: null, location: null },
                'Jalisco': { abbr: 'JAL', count: 0, timestamp: null, location: null },
                'Mexico': { abbr: 'MEX', count: 0, timestamp: null, location: null },
                'Michoacán': { abbr: 'MICH', count: 0, timestamp: null, location: null },
                'Morelos': { abbr: 'MOR', count: 0, timestamp: null, location: null },
                'Nayarit': { abbr: 'NAY', count: 0, timestamp: null, location: null },
                'Nuevo León': { abbr: 'NL', count: 0, timestamp: null, location: null },
                'Oaxaca': { abbr: 'OAX', count: 0, timestamp: null, location: null },
                'Puebla': { abbr: 'PUE', count: 0, timestamp: null, location: null },
                'Querétaro': { abbr: 'QRO', count: 0, timestamp: null, location: null },
                'Quintana Roo': { abbr: 'QROO', count: 0, timestamp: null, location: null },
                'San Luis Potosí': { abbr: 'SLP', count: 0, timestamp: null, location: null },
                'Sinaloa': { abbr: 'SIN', count: 0, timestamp: null, location: null },
                'Sonora': { abbr: 'SON', count: 0, timestamp: null, location: null },
                'Tabasco': { abbr: 'TAB', count: 0, timestamp: null, location: null },
                'Tamaulipas': { abbr: 'TAMPS', count: 0, timestamp: null, location: null },
                'Tlaxcala': { abbr: 'TLAX', count: 0, timestamp: null, location: null },
                'Veracruz': { abbr: 'VER', count: 0, timestamp: null, location: null },
                'Yucatán': { abbr: 'YUC', count: 0, timestamp: null, location: null },
                'Zacatecas': { abbr: 'ZAC', count: 0, timestamp: null, location: null },
                'Mexico City': { abbr: 'CDMX', count: 0, timestamp: null, location: null }
            }
        };
    }

    init() {
        this.loadGameData();
        this.bindEvents();
        this.syncTabUI(); // Ensure tab UI matches the loaded country
        this.renderLicensePlates();
        this.updateStats();
        this.setupScrollHeader();
        this.setupPullToRefresh();
        this.lazyLoadImages();
    }

    bindEvents() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchCountry(e.currentTarget.dataset.country);
            });
        });

        // Plate selector
        document.getElementById('plateSelector').addEventListener('change', (e) => {
            this.jumpToPlate(e.target.value);
        });

        // Control buttons
        document.getElementById('saveGame').addEventListener('click', () => this.saveGame());
        document.getElementById('loadGame').addEventListener('click', () => this.loadGameFromFile());
        document.getElementById('statsBtn').addEventListener('click', () => this.openStatistics());
        document.getElementById('newGame').addEventListener('click', () => this.newGame());
        
        // Map toggle
        document.getElementById('mapToggle').addEventListener('click', () => this.toggleMap());
        
        // Statistics modal close
        document.getElementById('statsCloseBtn').addEventListener('click', () => this.closeStatistics());
        document.getElementById('statsModal').addEventListener('click', (e) => {
            if (e.target.id === 'statsModal') {
                this.closeStatistics();
            }
        });
    }

    syncTabUI() {
        // Update tab buttons to match the current country
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeTab = document.querySelector(`[data-country="${this.currentCountry}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }

    setupScrollHeader() {
        let lastScrollTop = 0;
        const header = document.querySelector('.header');
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Show/hide back to top button
            if (scrollTop > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
            
            lastScrollTop = scrollTop;
        });
        
        // Back to top functionality
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    switchCountry(country) {
        this.currentCountry = country;
        
        // Clear any active filter when switching countries
        this.clearPlateFilter();
        
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-country="${country}"]`).classList.add('active');
        
        this.renderLicensePlates();
        this.updateStats();
        this.updatePlateSelector();
        this.renderMap();
    }

    updatePlateSelector() {
        const selector = document.getElementById('plateSelector');
        const data = this.licensePlateData[this.currentCountry];
        
        // Clear existing options
        selector.innerHTML = '<option value="">Jump to a plate...</option>';
        
        // Add all states/provinces as options
        Object.entries(data).sort((a, b) => a[0].localeCompare(b[0])).forEach(([state, info]) => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = `${state} (${info.abbr})`;
            selector.appendChild(option);
        });
    }

    jumpToPlate(stateName) {
        if (!stateName) {
            // Clear filter if no state selected
            this.clearPlateFilter();
            return;
        }
        
        this.filteredPlate = stateName;
        
        // Hide all plates except the selected one
        const plates = document.querySelectorAll('.license-plate');
        let targetPlate = null;
        
        plates.forEach(plate => {
            if (plate.dataset.state === stateName) {
                targetPlate = plate;
                plate.style.display = 'block';
                plate.classList.add('filtered-plate');
            } else {
                plate.style.display = 'none';
            }
        });
        
        // Scroll to top to see the filtered plate
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Show filter banner
        this.showFilterBanner(stateName);
        
        // Highlight the plate
        if (targetPlate) {
            targetPlate.classList.add('highlight');
        }
    }

    showFilterBanner(stateName) {
        // Remove any existing banner
        const existingBanner = document.querySelector('.filter-banner');
        if (existingBanner) {
            existingBanner.remove();
        }
        
        // Create new banner
        const banner = document.createElement('div');
        banner.className = 'filter-banner';
        banner.innerHTML = `
            <div class="filter-banner-content">
                <span><i class="fas fa-filter"></i> Showing: <strong>${stateName}</strong></span>
                <button class="filter-clear-btn" id="clearFilterBtn">
                    <i class="fas fa-times"></i> Show All
                </button>
            </div>
        `;
        
        // Append to body (it's position fixed, so location doesn't matter)
        document.body.appendChild(banner);
        
        // Bind clear button
        document.getElementById('clearFilterBtn').addEventListener('click', () => {
            this.clearPlateFilter();
        });
        
        this.triggerHapticFeedback('light');
    }

    clearPlateFilter() {
        this.filteredPlate = null;
        
        // Show all plates
        const plates = document.querySelectorAll('.license-plate');
        plates.forEach(plate => {
            plate.style.display = 'block';
            plate.classList.remove('filtered-plate', 'highlight');
        });
        
        // Remove filter banner
        const banner = document.querySelector('.filter-banner');
        if (banner) {
            banner.remove();
        }
        
        // Reset selector
        document.getElementById('plateSelector').value = '';
        
        this.triggerHapticFeedback('light');
    }

    renderLicensePlates() {
        const grid = document.getElementById('licensePlateGrid');
        const data = this.licensePlateData[this.currentCountry];
        
        grid.innerHTML = '';
        
        Object.entries(data).forEach(([state, info]) => {
            const plateElement = this.createPlateElement(state, info);
            grid.appendChild(plateElement);
        });
        
        this.updatePlateSelector();
        
        // Re-observe images for lazy loading
        if (this.imageObserver) {
            setTimeout(() => {
                document.querySelectorAll('img[data-src]').forEach(img => {
                    this.imageObserver.observe(img);
                });
            }, 100);
        }
        
        // Reapply filter if one is active
        if (this.filteredPlate) {
            const plates = document.querySelectorAll('.license-plate');
            plates.forEach(plate => {
                if (plate.dataset.state === this.filteredPlate) {
                    plate.style.display = 'block';
                    plate.classList.add('filtered-plate', 'highlight');
                } else {
                    plate.style.display = 'none';
                }
            });
        }
    }

    createPlateElement(state, info) {
        const plateDiv = document.createElement('div');
        const isSpotted = info.count > 0;
        plateDiv.className = `license-plate ${isSpotted ? 'spotted' : ''}`;
        plateDiv.dataset.state = state;
        
        // Format timestamp if it exists
        let timestampHTML = '';
        if (isSpotted && info.timestamp) {
            const date = new Date(info.timestamp);
            const formatted = this.formatTimestamp(date);
            timestampHTML = `<div class="plate-timestamp"><i class="fas fa-clock"></i> ${formatted}</div>`;
        }
        
        // Format location if it exists
        let locationHTML = '';
        if (isSpotted && info.location) {
            const lat = info.location.lat.toFixed(4);
            const lng = info.location.lng.toFixed(4);
            // Use Apple Maps on iOS, Google Maps otherwise
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            const mapUrl = isIOS 
                ? `maps://?q=${info.location.lat},${info.location.lng}`
                : `https://www.google.com/maps?q=${info.location.lat},${info.location.lng}`;
            locationHTML = `<div class="plate-location"><i class="fas fa-map-marker-alt"></i> <a href="${mapUrl}" target="_blank">${lat}, ${lng}</a></div>`;
        }
        
        // Get plate image URL
        const imageUrl = this.getPlateImageUrl(state, info.abbr);
        
        // Use lazy loading for images
        const imgAttr = this.imageObserver ? 'data-src' : 'src';
        
        plateDiv.innerHTML = `
            <div class="plate-header">
                <div class="plate-name">${state}</div>
            </div>
            <div class="plate-visual">
                <img ${imgAttr}="${imageUrl}" alt="${info.abbr}" class="plate-image" 
                     onload="console.log('✓ Image loaded:', '${imageUrl}');"
                     onerror="console.log('✗ Image failed:', '${imageUrl}'); this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="plate-abbr-fallback" style="display: none;">${info.abbr}</div>
            </div>
            ${timestampHTML}
            ${locationHTML}
            <div class="plate-action">${isSpotted ? 'Long press for options' : 'Tap to mark as spotted'}</div>
        `;
        
        // Click card to mark as spotted (only if not already spotted and menu not open)
        plateDiv.addEventListener('click', (e) => {
            // Don't mark if context menu is open or if already spotted
            if (!this.contextMenuOpen && !isSpotted) {
                this.markPlateAsSpotted(state);
            }
        });
        
        // Long press for context menu (mobile and desktop)
        let longPressTimer = null;
        let longPressTriggered = false;
        
        // Touch events (mobile)
        plateDiv.addEventListener('touchstart', (e) => {
            longPressTriggered = false;
            longPressTimer = setTimeout(() => {
                longPressTriggered = true;
                this.showPlateContextMenu(state, info, e.touches[0]);
            }, 500);
        }, { passive: true });
        
        plateDiv.addEventListener('touchend', () => {
            clearTimeout(longPressTimer);
        });
        
        plateDiv.addEventListener('touchmove', () => {
            clearTimeout(longPressTimer);
        });
        
        // Mouse events (desktop) - right click or long press
        plateDiv.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showPlateContextMenu(state, info, e);
        });
        
        plateDiv.addEventListener('mousedown', (e) => {
            // Only for left click
            if (e.button === 0) {
                longPressTimer = setTimeout(() => {
                    this.showPlateContextMenu(state, info, e);
                }, 500);
            }
        });
        
        plateDiv.addEventListener('mouseup', () => {
            clearTimeout(longPressTimer);
        });
        
        plateDiv.addEventListener('mouseleave', () => {
            clearTimeout(longPressTimer);
        });
        
        return plateDiv;
    }

    getPlateImageUrl(state, abbr) {
        // Normalize state name for filename (lowercase, replace spaces with hyphens)
        const fileName = state.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
        
        // Try common image extensions (jpg, png, svg)
        // The browser will load whichever exists
        const imagePath = `plates/${this.currentCountry}/${fileName}.jpg`;
        console.log(`Loading plate image: ${imagePath} for ${state}`);
        
        return imagePath;
    }

    formatTimestamp(date) {
        // Always show fixed date and time
        const options = { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    }

    async markPlateAsSpotted(state) {
        this.licensePlateData[this.currentCountry][state].count = 1;
        this.licensePlateData[this.currentCountry][state].timestamp = new Date().toISOString();
        
        // Try to capture location
        try {
            const location = await this.getCurrentLocation();
            this.licensePlateData[this.currentCountry][state].location = location;
        } catch (error) {
            console.log('Location not available:', error);
            // Location will remain null if not available
        }
        
        // Haptic feedback
        this.triggerHapticFeedback('success');
        
        this.showToast(`${state} spotted! ✓`);
        this.updateStats();
        this.renderLicensePlates();
        this.updateMapIfOpen();
        this.saveGameData();
        
        // Clear filter if this was the filtered plate
        if (this.filteredPlate === state) {
            setTimeout(() => {
                this.clearPlateFilter();
            }, 800);
        }
    }

    unmarkPlate(state) {
        this.licensePlateData[this.currentCountry][state].count = 0;
        this.licensePlateData[this.currentCountry][state].timestamp = null;
        this.licensePlateData[this.currentCountry][state].location = null;
        
        // Haptic feedback
        this.triggerHapticFeedback('light');
        
        this.showToast(`${state} unmarked`);
        this.updateStats();
        this.renderLicensePlates();
        this.updateMapIfOpen();
        this.saveGameData();
    }

    getCurrentLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation not supported'));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    });
                },
                (error) => {
                    reject(error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }
            );
        });
    }

    updateMapIfOpen() {
        const mapView = document.getElementById('mapView');
        if (mapView.classList.contains('open')) {
            this.renderMap();
        }
    }

    updateStats() {
        const data = this.licensePlateData[this.currentCountry];
        const totalPossible = Object.keys(data).length;
        const totalSeen = Object.values(data).filter(plate => plate.count > 0).length;
        const percentage = Math.round((totalSeen / totalPossible) * 100);
        
        document.getElementById('totalSeen').textContent = totalSeen;
        document.getElementById('totalPossible').textContent = totalPossible;
        document.getElementById('percentage').textContent = `${percentage}%`;
        
        // Update all country progress bars
        this.updateCountryProgressBars();
    }

    updateCountryProgressBars() {
        ['usa', 'canada', 'mexico'].forEach(country => {
            const data = this.licensePlateData[country];
            const totalPossible = Object.keys(data).length;
            const totalSeen = Object.values(data).filter(plate => plate.count > 0).length;
            const percentage = (totalSeen / totalPossible) * 100;
            
            const progressBar = document.getElementById(`progress-${country}`);
            if (progressBar) {
                progressBar.style.width = `${percentage}%`;
            }
        });
    }


    saveGame() {
        const gameState = {
            licensePlateData: this.licensePlateData,
            currentCountry: this.currentCountry,
            timestamp: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(gameState, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `license-plate-game-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        this.showToast('Game saved successfully!');
    }

    loadGameFromFile() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const gameState = JSON.parse(e.target.result);
                        this.licensePlateData = gameState.licensePlateData;
                        this.currentCountry = gameState.currentCountry || 'usa';
                        
                        this.switchCountry(this.currentCountry);
                        this.saveGameData();
                        this.showToast('Game loaded successfully!');
                    } catch (error) {
                        this.showToast('Error loading game file!', 'error');
                    }
                };
                reader.readAsText(file);
            }
        };
        
        input.click();
    }

    newGame() {
        this.showConfirmModal(
            'Start New Game?',
            'Are you sure you want to start a new game? This will reset all progress.',
            () => {
                this.licensePlateData = this.initializeLicensePlateData();
                this.renderLicensePlates();
                this.updateStats();
                this.saveGameData();
                this.showToast('New game started!');
            }
        );
    }

    showConfirmModal(title, message, onConfirm) {
        // Use mobile-optimized slide-up sheet on small screens
        const isMobile = window.innerWidth <= 768;
        
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0; 
            background: rgba(0,0,0,0.6); z-index: 10000; 
            display: flex; align-items: ${isMobile ? 'flex-end' : 'center'}; 
            justify-content: center; padding: ${isMobile ? '0' : '20px'};
            animation: fadeIn 0.3s ease;
        `;
        
        const slideUpClass = isMobile ? 'slide-up-enter' : '';
        modal.innerHTML = `
            <div class="modal-content ${slideUpClass}" style="
                background: white; 
                border-radius: ${isMobile ? '20px 20px 0 0' : '15px'}; 
                padding: 25px; 
                max-width: ${isMobile ? '100%' : '400px'}; 
                width: ${isMobile ? '100%' : 'auto'};
                text-align: center;
                ${isMobile ? 'animation: slideUp 0.3s ease;' : ''}
            ">
                ${isMobile ? '<div class="modal-handle"></div>' : ''}
                <h3 style="margin-bottom: 15px; color: #4a5568; font-size: 1.25rem;">${title}</h3>
                <p style="margin-bottom: 25px; color: #718096; line-height: 1.5;">${message}</p>
                <div style="display: flex; gap: 15px; justify-content: center; flex-direction: ${isMobile ? 'column' : 'row'};">
                    <button id="confirmBtn" style="padding: 16px 24px; background: #fc8181; color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; font-size: 1rem; min-height: 48px;">Reset Game</button>
                    <button id="cancelBtn" style="padding: 16px 24px; background: #e2e8f0; color: #4a5568; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; font-size: 1rem; min-height: 48px;">Cancel</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Trigger haptic feedback
        this.triggerHapticFeedback('light');
        
        modal.querySelector('#cancelBtn').onclick = () => {
            this.triggerHapticFeedback('light');
            modal.classList.add('fade-out');
            setTimeout(() => modal.remove(), 200);
        };
        
        modal.querySelector('#confirmBtn').onclick = () => {
            this.triggerHapticFeedback('medium');
            modal.classList.add('fade-out');
            setTimeout(() => {
                modal.remove();
                onConfirm();
            }, 200);
        };
        
        // Close on background click
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.classList.add('fade-out');
                setTimeout(() => modal.remove(), 200);
            }
        };
    }

    // Long Press Context Menu
    showPlateContextMenu(state, info, touch) {
        // Trigger haptic feedback
        this.triggerHapticFeedback('medium');
        
        // Set flag to prevent accidental clicks
        this.contextMenuOpen = true;
        
        // Remove any existing context menu
        const existingMenu = document.querySelector('.plate-context-menu');
        if (existingMenu) existingMenu.remove();
        
        const menu = document.createElement('div');
        menu.className = 'plate-context-menu';
        const isSpotted = info.count > 0;
        
        const menuItems = [];
        
        if (isSpotted) {
            menuItems.push(`<div class="context-menu-item" data-action="unmark"><i class="fas fa-times-circle"></i> Unmark Plate</div>`);
            if (info.location) {
                menuItems.push(`<div class="context-menu-item" data-action="viewLocation"><i class="fas fa-map-marker-alt"></i> View Location</div>`);
            }
        } else {
            menuItems.push(`<div class="context-menu-item" data-action="mark"><i class="fas fa-check-circle"></i> Mark as Spotted</div>`);
        }
        
        menuItems.push(`<div class="context-menu-item" data-action="cancel"><i class="fas fa-times"></i> Cancel</div>`);
        
        menu.innerHTML = `
            <div class="context-menu-header">${state}</div>
            ${menuItems.join('')}
        `;
        
        // Position menu
        menu.style.position = 'fixed';
        menu.style.left = '50%';
        menu.style.bottom = '20px';
        menu.style.transform = 'translateX(-50%)';
        
        document.body.appendChild(menu);
        
        // Animate in
        requestAnimationFrame(() => {
            menu.classList.add('active');
        });
        
        const closeMenu = () => {
            menu.classList.remove('active');
            setTimeout(() => {
                if (menu.parentElement) menu.remove();
                // Reset flag after animation completes and add small delay to prevent accidental clicks
                setTimeout(() => {
                    this.contextMenuOpen = false;
                }, 100);
            }, 200);
        };
        
        // Add event listeners to menu items
        menu.querySelectorAll('.context-menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = item.getAttribute('data-action');
                this.handleContextMenuAction(action, state, info);
                this.triggerHapticFeedback('light');
                closeMenu();
            });
        });
        
        // Remove menu after 8 seconds
        setTimeout(() => {
            if (menu.parentElement) {
                closeMenu();
            }
        }, 8000);
        
        // Close on background touch/click
        const closeHandler = (e) => {
            if (!menu.contains(e.target)) {
                closeMenu();
                document.removeEventListener('touchstart', closeHandler);
                document.removeEventListener('click', closeHandler);
            }
        };
        
        // Add listeners after a short delay to prevent immediate closing
        setTimeout(() => {
            document.addEventListener('touchstart', closeHandler);
            document.addEventListener('click', closeHandler);
        }, 100);
    }

    handleContextMenuAction(action, state, info) {
        switch (action) {
            case 'mark':
                this.markPlateAsSpotted(state);
                break;
            case 'unmark':
                this.unmarkPlate(state);
                break;
            case 'viewLocation':
                if (info.location) {
                    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                    const mapUrl = isIOS 
                        ? `maps://?q=${info.location.lat},${info.location.lng}`
                        : `https://www.google.com/maps?q=${info.location.lat},${info.location.lng}`;
                    window.open(mapUrl, '_blank');
                }
                break;
            case 'cancel':
                // Just close the menu
                break;
        }
    }

    // Statistics & Analytics
    openStatistics() {
        const modal = document.getElementById('statsModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.renderStatistics();
        this.triggerHapticFeedback('light');
    }

    closeStatistics() {
        const modal = document.getElementById('statsModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        this.triggerHapticFeedback('light');
    }

    renderStatistics() {
        const body = document.getElementById('statsModalBody');
        const stats = this.calculateStatistics();
        
        body.innerHTML = `
            <div class="stats-tabs">
                <button class="stats-tab active" data-tab="overview">
                    <i class="fas fa-chart-pie"></i> Overview
                </button>
                <button class="stats-tab" data-tab="timeline">
                    <i class="fas fa-calendar-alt"></i> Timeline
                </button>
                <button class="stats-tab" data-tab="route">
                    <i class="fas fa-route"></i> Route
                </button>
            </div>
            
            <div class="stats-content">
                <div class="stats-tab-content active" id="stats-overview">
                    ${this.renderOverviewStats(stats)}
                </div>
                <div class="stats-tab-content" id="stats-timeline">
                    ${this.renderTimelineStats(stats)}
                </div>
                <div class="stats-tab-content" id="stats-route">
                    ${this.renderRouteStats(stats)}
                </div>
            </div>
        `;
        
        // Bind tab switching with both click and touch events
        body.querySelectorAll('.stats-tab').forEach(tab => {
            const handleTabClick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const tabName = tab.dataset.tab;
                if (tabName) {
                    this.switchStatsTab(tabName);
                }
            };
            
            // Use both click and touchend for maximum reliability
            tab.addEventListener('click', handleTabClick);
            tab.addEventListener('touchend', (e) => {
                // Only handle if not scrolling
                if (e.cancelable) {
                    handleTabClick(e);
                }
            }, { passive: false });
        });
        
        // Bind trip controls (if they exist)
        setTimeout(() => {
            const setStartBtn = document.getElementById('setTripStartBtn');
            const setEndBtn = document.getElementById('setTripEndBtn');
            const clearTripBtn = document.getElementById('clearTripBtn');
            
            if (setStartBtn) {
                setStartBtn.addEventListener('click', () => this.setTripLocation('start'));
            }
            if (setEndBtn) {
                setEndBtn.addEventListener('click', () => this.setTripLocation('end'));
            }
            if (clearTripBtn) {
                clearTripBtn.addEventListener('click', () => this.clearTripOverride());
            }
            
            // Bind long press to "Most in One Area" card
            const mostPlatesCard = document.getElementById('mostPlatesCard');
            if (mostPlatesCard) {
                this.setupLongPressForStatsCard(mostPlatesCard);
                
                // Load the location address for "Most in One Area"
                const lat = parseFloat(mostPlatesCard.dataset.lat);
                const lng = parseFloat(mostPlatesCard.dataset.lng);
                if (!isNaN(lat) && !isNaN(lng)) {
                    this.loadLocationAddressForElement('mostPlatesLocation', lat, lng);
                }
            }
        }, 100);
    }

    setupLongPressForStatsCard(card) {
        let longPressTimer = null;
        
        card.addEventListener('touchstart', (e) => {
            longPressTimer = setTimeout(() => {
                const states = JSON.parse(card.getAttribute('data-states') || '[]');
                const lat = parseFloat(card.getAttribute('data-lat'));
                const lng = parseFloat(card.getAttribute('data-lng'));
                if (states.length > 0) {
                    this.showStateListPopup(states, lat, lng);
                }
            }, 500);
        }, { passive: true });
        
        card.addEventListener('touchend', () => {
            clearTimeout(longPressTimer);
        });
        
        card.addEventListener('touchmove', () => {
            clearTimeout(longPressTimer);
        });
        
        // Also support desktop long press
        card.addEventListener('mousedown', () => {
            longPressTimer = setTimeout(() => {
                const states = JSON.parse(card.getAttribute('data-states') || '[]');
                const lat = parseFloat(card.getAttribute('data-lat'));
                const lng = parseFloat(card.getAttribute('data-lng'));
                if (states.length > 0) {
                    this.showStateListPopup(states, lat, lng);
                }
            }, 500);
        });
        
        card.addEventListener('mouseup', () => {
            clearTimeout(longPressTimer);
        });
        
        card.addEventListener('mouseleave', () => {
            clearTimeout(longPressTimer);
        });
    }

    showStateListPopup(states, lat, lng) {
        this.triggerHapticFeedback('medium');
        
        // Remove any existing popup
        const existingPopup = document.querySelector('.state-list-popup');
        if (existingPopup) {
            existingPopup.remove();
        }
        
        const popup = document.createElement('div');
        popup.className = 'state-list-popup';
        popup.innerHTML = `
            <div class="state-list-popup-header">
                <div style="flex: 1;">
                    <h3><i class="fas fa-map-marked-alt"></i> States Found in This Area</h3>
                    <div class="state-list-popup-location" id="popupLocation" style="font-size: 0.85rem; color: #d1d5db; margin-top: 5px;">
                        <i class="fas fa-spinner fa-spin"></i> Loading location...
                    </div>
                </div>
                <button class="state-list-popup-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="state-list-popup-content">
                <button class="btn btn-primary" id="seeOnMapBtn" style="width: 100%; margin-bottom: 15px;">
                    <i class="fas fa-map"></i> See on Map
                </button>
                ${states.map(state => `
                    <div class="state-list-popup-item">
                        <i class="fas fa-map-pin"></i>
                        ${state}
                    </div>
                `).join('')}
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // Animate in
        requestAnimationFrame(() => {
            popup.classList.add('active');
        });
        
        // Load location address
        if (!isNaN(lat) && !isNaN(lng)) {
            this.geocodeLocation(lat, lng).then(address => {
                const locationElement = document.getElementById('popupLocation');
                if (locationElement) {
                    locationElement.innerHTML = `<i class="fas fa-location-dot"></i> ${address}`;
                }
            }).catch(error => {
                console.error('Failed to load address:', error);
                const locationElement = document.getElementById('popupLocation');
                if (locationElement) {
                    locationElement.innerHTML = `<i class="fas fa-location-dot"></i> Unknown location`;
                }
            });
        }
        
        // Bind "See on Map" button - use arrow function to preserve 'this' context
        const seeOnMapBtn = popup.querySelector('#seeOnMapBtn');
        if (seeOnMapBtn) {
            seeOnMapBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('See on Map clicked', lat, lng, states);
                this.closeStateListPopup();
                setTimeout(() => {
                    this.showInteractiveMap(lat, lng, states);
                }, 350);
            });
        }
        
        // Bind close button
        popup.querySelector('.state-list-popup-close').addEventListener('click', () => {
            this.closeStateListPopup();
        });
        
        // Close on background click
        const closeHandler = (e) => {
            if (!popup.contains(e.target)) {
                this.closeStateListPopup();
                document.removeEventListener('click', closeHandler);
                document.removeEventListener('touchstart', closeHandler);
            }
        };
        
        setTimeout(() => {
            document.addEventListener('click', closeHandler);
            document.addEventListener('touchstart', closeHandler);
        }, 100);
    }

    closeStateListPopup() {
        const popup = document.querySelector('.state-list-popup');
        if (popup) {
            popup.classList.remove('active');
            setTimeout(() => popup.remove(), 300);
            this.triggerHapticFeedback('light');
        }
    }

    showInteractiveMap(lat, lng, states) {
        console.log('showInteractiveMap called with:', lat, lng, states);
        this.triggerHapticFeedback('medium');
        
        // Remove any existing map modal
        const existingModal = document.querySelector('.map-modal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Create map modal
        const modal = document.createElement('div');
        modal.className = 'map-modal';
        
        const statesList = Array.isArray(states) ? states.join(', ') : states;
        
        modal.innerHTML = `
            <div class="map-modal-content">
                <div class="map-modal-header">
                    <h3>
                        <i class="fas fa-map-marked-alt"></i>
                        Location Map
                    </h3>
                    <button class="map-modal-close" id="mapModalCloseBtn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="map-modal-body">
                    <iframe 
                        class="map-iframe" 
                        src="https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.1},${lat - 0.1},${lng + 0.1},${lat + 0.1}&layer=mapnik&marker=${lat},${lng}"
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                    <div style="margin-top: 10px; text-align: center; color: #d1d5db; font-size: 0.85rem;">
                        <strong>States found here:</strong> ${statesList}
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        console.log('Map modal added to DOM');
        
        // Animate in
        requestAnimationFrame(() => {
            modal.classList.add('active');
            console.log('Map modal activated');
        });
        
        // Bind close button
        const closeBtn = modal.querySelector('#mapModalCloseBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.closeInteractiveMap();
            });
        }
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeInteractiveMap();
            }
        });
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }

    closeInteractiveMap() {
        const modal = document.querySelector('.map-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
            this.triggerHapticFeedback('light');
        }
    }

    switchStatsTab(tabName) {
        // Prevent rapid switching
        if (this.isStatsSwitching) {
            return;
        }
        this.isStatsSwitching = true;
        
        // Get all stats tabs within the modal
        const statsModal = document.getElementById('statsModal');
        if (!statsModal) {
            this.isStatsSwitching = false;
            return;
        }
        
        const tabs = statsModal.querySelectorAll('.stats-tab');
        
        // Update active tab
        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.tab === tabName) {
                tab.classList.add('active');
            }
        });
        
        // Update active content
        const allContent = statsModal.querySelectorAll('.stats-tab-content');
        allContent.forEach(content => {
            content.classList.remove('active');
        });
        
        const activeContent = document.getElementById(`stats-${tabName}`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
        
        this.triggerHapticFeedback('light');
        
        // Re-enable switching after a short delay
        setTimeout(() => {
            this.isStatsSwitching = false;
        }, 150);
    }

    calculateStatistics() {
        const stats = {
            total: { spotted: 0, possible: 0, percentage: 0 },
            byCountry: {},
            timeline: [],
            streaks: { current: 0, longest: 0 },
            firstSpotted: null,
            lastSpotted: null,
            averageTimeBetweenPlates: 0,
            mostPlatesState: null,
            spottedByHour: {},
            locations: []
        };
        
        // Calculate totals and by country
        Object.keys(this.licensePlateData).forEach(country => {
            const data = this.licensePlateData[country];
            const possible = Object.keys(data).length;
            const spotted = Object.values(data).filter(p => p.count > 0).length;
            const percentage = Math.round((spotted / possible) * 100);
            
            stats.byCountry[country] = { spotted, possible, percentage };
            stats.total.spotted += spotted;
            stats.total.possible += possible;
        });
        
        stats.total.percentage = Math.round((stats.total.spotted / stats.total.possible) * 100);
        
        // Build timeline and collect locations
        const allSpotted = [];
        Object.keys(this.licensePlateData).forEach(country => {
            Object.entries(this.licensePlateData[country]).forEach(([state, info]) => {
                if (info.count > 0 && info.timestamp) {
                    allSpotted.push({
                        country,
                        state,
                        timestamp: new Date(info.timestamp),
                        location: info.location
                    });
                    
                    if (info.location) {
                        stats.locations.push({
                            state,
                            country,
                            ...info.location,
                            timestamp: info.timestamp
                        });
                    }
                }
            });
        });
        
        // Sort by timestamp
        allSpotted.sort((a, b) => a.timestamp - b.timestamp);
        stats.timeline = allSpotted;
        
        if (allSpotted.length > 0) {
            stats.firstSpotted = allSpotted[0];
            stats.lastSpotted = allSpotted[allSpotted.length - 1];
            
            // Calculate average time between plates
            if (allSpotted.length > 1) {
                let totalTimeDiff = 0;
                for (let i = 1; i < allSpotted.length; i++) {
                    totalTimeDiff += allSpotted[i].timestamp - allSpotted[i - 1].timestamp;
                }
                const avgMilliseconds = totalTimeDiff / (allSpotted.length - 1);
                const avgMinutes = Math.round(avgMilliseconds / (1000 * 60));
                stats.averageTimeBetweenPlates = avgMinutes;
            }
            
            // Find location (lat/lng area) where most plates were found
            // Group by approximate location (rounded to 2 decimal places for ~1km accuracy)
            const locationCount = {};
            allSpotted.forEach(item => {
                if (item.location) {
                    const latRounded = Math.round(item.location.lat * 100) / 100;
                    const lngRounded = Math.round(item.location.lng * 100) / 100;
                    const locationKey = `${latRounded},${lngRounded}`;
                    
                    if (!locationCount[locationKey]) {
                        locationCount[locationKey] = {
                            count: 0,
                            states: new Set(),
                            lat: latRounded,
                            lng: lngRounded
                        };
                    }
                    locationCount[locationKey].count++;
                    locationCount[locationKey].states.add(`${item.state}, ${item.country.toUpperCase()}`);
                }
            });
            
            if (Object.keys(locationCount).length > 0) {
                const maxLocation = Object.entries(locationCount).reduce((a, b) => a[1].count > b[1].count ? a : b);
                const locationData = maxLocation[1];
                const allStates = Array.from(locationData.states);
                stats.mostPlatesState = { 
                    name: 'Loading location...', 
                    count: locationData.count,
                    allStates: allStates, // Store all states for long press
                    lat: locationData.lat,
                    lng: locationData.lng
                };
            }
            
            // Group by hour of day
            allSpotted.forEach(item => {
                const hour = item.timestamp.getHours();
                stats.spottedByHour[hour] = (stats.spottedByHour[hour] || 0) + 1;
            });
        }
        
        // Group by date for streak calculation
        const byDate = {};
        allSpotted.forEach(item => {
            const dateKey = item.timestamp.toISOString().split('T')[0];
            byDate[dateKey] = (byDate[dateKey] || 0) + 1;
        });
        
        // Calculate streaks
        const dates = Object.keys(byDate).sort();
        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 1;
        
        for (let i = 1; i < dates.length; i++) {
            const prevDate = new Date(dates[i - 1]);
            const currDate = new Date(dates[i]);
            const dayDiff = Math.round((currDate - prevDate) / (1000 * 60 * 60 * 24));
            
            if (dayDiff === 1) {
                tempStreak++;
            } else {
                longestStreak = Math.max(longestStreak, tempStreak);
                tempStreak = 1;
            }
        }
        longestStreak = Math.max(longestStreak, tempStreak);
        
        // Check if current streak is active
        if (dates.length > 0) {
            const lastDate = new Date(dates[dates.length - 1]);
            const today = new Date();
            const daysSinceLastSpot = Math.round((today - lastDate) / (1000 * 60 * 60 * 24));
            currentStreak = daysSinceLastSpot <= 1 ? tempStreak : 0;
        }
        
        stats.streaks = { current: currentStreak, longest: longestStreak };
        
        return stats;
    }

    renderOverviewStats(stats) {
        const countryNames = { usa: 'USA', canada: 'Canada', mexico: 'Mexico' };
        
        return `
            <div class="stats-overview">
                <div class="stats-hero">
                    <div class="stats-hero-item">
                        <div class="stats-hero-number">${stats.total.spotted}</div>
                        <div class="stats-hero-label">Total Plates Spotted</div>
                    </div>
                    <div class="stats-hero-item">
                        <div class="stats-hero-number">${stats.total.percentage}%</div>
                        <div class="stats-hero-label">Overall Progress</div>
                    </div>
                    <div class="stats-hero-item">
                        <div class="stats-hero-number">${stats.averageTimeBetweenPlates > 0 ? stats.averageTimeBetweenPlates : 0}</div>
                        <div class="stats-hero-label">Avg Minutes Between Plates</div>
                    </div>
                </div>
                
                <div class="stats-section">
                    <h3><i class="fas fa-flag"></i> By Country</h3>
                    <div class="stats-country-grid">
                        ${Object.entries(stats.byCountry).map(([country, data]) => `
                            <div class="stats-country-card">
                                <h4>${countryNames[country]}</h4>
                                <div class="stats-country-progress">
                                    <div class="stats-country-bar">
                                        <div class="stats-country-fill" style="width: ${data.percentage}%"></div>
                                    </div>
                                    <div class="stats-country-numbers">
                                        ${data.spotted} / ${data.possible} (${data.percentage}%)
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="stats-section">
                    <h3><i class="fas fa-fire"></i> Trip Session Stats</h3>
                    <div class="stats-grid">
                        ${stats.firstSpotted ? `
                            <div class="stats-card">
                                <div class="stats-card-icon"><i class="fas fa-flag"></i></div>
                                <div class="stats-card-value">${stats.firstSpotted.state}</div>
                                <div class="stats-card-label">First Plate</div>
                                <div class="stats-card-sublabel">${stats.firstSpotted.timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
                            </div>
                        ` : ''}
                        ${stats.mostPlatesState ? `
                            <div class="stats-card has-long-press" id="mostPlatesCard" data-states='${JSON.stringify(stats.mostPlatesState.allStates || [])}' data-lat="${stats.mostPlatesState.lat}" data-lng="${stats.mostPlatesState.lng}">
                                <div class="stats-card-icon"><i class="fas fa-map-pin"></i></div>
                                <div class="stats-card-value">${stats.mostPlatesState.count}</div>
                                <div class="stats-card-label">Most in One Area</div>
                                <div class="stats-card-sublabel" id="mostPlatesLocation">
                                    <i class="fas fa-spinner fa-spin"></i> Loading...
                                </div>
                            </div>
                        ` : ''}
                        ${Object.keys(stats.spottedByHour).length > 0 ? `
                            <div class="stats-card">
                                <div class="stats-card-icon"><i class="fas fa-clock"></i></div>
                                <div class="stats-card-value">${this.getMostActiveHour(stats.spottedByHour)}</div>
                                <div class="stats-card-label">Most Active Hour</div>
                                <div class="stats-card-sublabel">of the day</div>
                            </div>
                        ` : ''}
                        ${stats.timeline.length > 1 ? `
                            <div class="stats-card">
                                <div class="stats-card-icon"><i class="fas fa-stopwatch"></i></div>
                                <div class="stats-card-value">${this.formatDuration(stats.lastSpotted.timestamp - stats.firstSpotted.timestamp)}</div>
                                <div class="stats-card-label">Trip Duration</div>
                                <div class="stats-card-sublabel">first to last plate</div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    getMostActiveHour(spottedByHour) {
        const entries = Object.entries(spottedByHour);
        if (entries.length === 0) return 'N/A';
        
        const maxEntry = entries.reduce((a, b) => a[1] > b[1] ? a : b);
        const hour = parseInt(maxEntry[0]);
        
        // Format hour as 12-hour time
        if (hour === 0) return '12 AM';
        if (hour < 12) return `${hour} AM`;
        if (hour === 12) return '12 PM';
        return `${hour - 12} PM`;
    }

    formatDuration(milliseconds) {
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
    }

    renderTimelineStats(stats) {
        if (stats.timeline.length === 0) {
            return `
                <div class="stats-empty">
                    <i class="fas fa-calendar-times"></i>
                    <p>No plates spotted yet. Start your journey!</p>
                </div>
            `;
        }
        
        const recentPlates = stats.timeline.slice().reverse();
        
        return `
            <div class="stats-timeline">
                <div class="stats-section">
                    <h3><i class="fas fa-history"></i> Spotting Timeline (${stats.timeline.length} plates)</h3>
                    <div class="timeline-list">
                        ${recentPlates.map(item => `
                            <div class="timeline-item">
                                <div class="timeline-date">
                                    ${item.timestamp.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    <span class="timeline-time">${item.timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
                                </div>
                                <div class="timeline-content">
                                    <div class="timeline-state">${item.state}</div>
                                    <div class="timeline-country">${item.country.toUpperCase()}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                ${Object.keys(stats.spottedByHour).length > 0 ? `
                    <div class="stats-section">
                        <h3><i class="fas fa-chart-bar"></i> Activity by Hour of Day</h3>
                        <div class="hourly-chart">
                            ${Object.entries(stats.spottedByHour).sort((a, b) => parseInt(a[0]) - parseInt(b[0])).map(([hour, count]) => {
                                const maxCount = Math.max(...Object.values(stats.spottedByHour));
                                const heightPercent = (count / maxCount) * 100;
                                const hourNum = parseInt(hour);
                                const hourLabel = hourNum === 0 ? '12a' : hourNum < 12 ? `${hourNum}a` : hourNum === 12 ? '12p' : `${hourNum - 12}p`;
                                
                                return `
                                    <div class="hourly-bar">
                                        <div class="hourly-bar-fill" style="height: ${heightPercent}%">
                                            <span class="hourly-bar-count">${count}</span>
                                        </div>
                                        <div class="hourly-bar-label">${hourLabel}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderRouteStats(stats) {
        const tripData = this.loadTripData();
        
        if (stats.locations.length === 0) {
            return `
                <div class="stats-empty">
                    <i class="fas fa-map-marked-alt"></i>
                    <p>No location data available yet. Enable location services when spotting plates!</p>
                </div>
            `;
        }
        
        return `
            <div class="stats-route">
                <div class="stats-section">
                    <h3><i class="fas fa-map-marked"></i> Trip Overview</h3>
                    <div class="trip-controls">
                        <button class="btn btn-primary btn-small" id="setTripStartBtn">
                            <i class="fas fa-map-marker-alt"></i> Set Start Location
                        </button>
                        <button class="btn btn-primary btn-small" id="setTripEndBtn">
                            <i class="fas fa-flag-checkered"></i> Set End Location
                        </button>
                        <button class="btn btn-secondary btn-small" id="clearTripBtn">
                            <i class="fas fa-times"></i> Clear Override
                        </button>
                    </div>
                    
                    <div class="trip-info">
                        ${tripData.startAddress ? `
                            <div class="trip-info-item">
                                <i class="fas fa-location-dot"></i>
                                <div>
                                    <strong>Start:</strong>
                                    <span>${tripData.startAddress}</span>
                                    ${tripData.startOverride ? '<span class="trip-override-badge">Manual</span>' : '<span class="trip-auto-badge">Auto</span>'}
                                </div>
                            </div>
                        ` : `
                            <div class="trip-info-item">
                                <i class="fas fa-location-dot"></i>
                                <div>
                                    <strong>Start:</strong>
                                    <span>${stats.firstSpotted.state}, ${stats.firstSpotted.country.toUpperCase()}</span>
                                    <span class="trip-auto-badge">Auto (First Plate)</span>
                                </div>
                            </div>
                        `}
                        
                        ${tripData.endAddress ? `
                            <div class="trip-info-item">
                                <i class="fas fa-flag-checkered"></i>
                                <div>
                                    <strong>End:</strong>
                                    <span>${tripData.endAddress}</span>
                                    ${tripData.endOverride ? '<span class="trip-override-badge">Manual</span>' : '<span class="trip-auto-badge">Auto</span>'}
                                </div>
                            </div>
                        ` : `
                            <div class="trip-info-item">
                                <i class="fas fa-flag-checkered"></i>
                                <div>
                                    <strong>End:</strong>
                                    <span>${stats.lastSpotted.state}, ${stats.lastSpotted.country.toUpperCase()}</span>
                                    <span class="trip-auto-badge">Auto (Last Plate)</span>
                                </div>
                            </div>
                        `}
                    </div>
                </div>
                
                <div class="stats-section">
                    <h3><i class="fas fa-location-dot"></i> Spotted Locations</h3>
                    <div class="location-list" id="locationListContainer">
                        ${stats.locations.map((loc, index) => `
                            <div class="location-item" id="location-${index}" data-lat="${loc.lat}" data-lng="${loc.lng}">
                                <div class="location-name">${loc.state}, ${loc.country.toUpperCase()}</div>
                                <a href="https://www.google.com/maps?q=${loc.lat},${loc.lng}" target="_blank" class="location-address-link" id="location-address-${index}">
                                    <i class="fas fa-spinner fa-spin"></i> Loading location...
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Load addresses for all locations
        setTimeout(() => {
            console.log(`Loading addresses for ${stats.locations.length} locations`);
            stats.locations.forEach((loc, index) => {
                this.loadLocationAddress(loc.lat, loc.lng, index);
            });
        }, 100);
    }

    // Reverse Geocoding - Generic function using BigDataCloud (free, no API key needed)
    async geocodeLocation(lat, lng, retries = 2) {
        try {
            console.log(`Geocoding: ${lat}, ${lng}`);
            
            // Use BigDataCloud reverse geocoding API (free, no API key required)
            const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
            );
            
            if (!response.ok) {
                console.error(`Geocoding HTTP error: ${response.status}`);
                throw new Error(`HTTP ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Geocoding response:', data);
            
            // Build a nice address string focusing on city/locality
            let displayAddress = '';
            
            // Try to get city/town
            if (data.city) {
                displayAddress = data.city;
            } else if (data.locality) {
                displayAddress = data.locality;
            } else if (data.localityInfo && data.localityInfo.administrative && data.localityInfo.administrative.length > 0) {
                // Try to find a city-level administrative area
                const cityLevel = data.localityInfo.administrative.find(a => a.order >= 6 && a.order <= 8);
                if (cityLevel) {
                    displayAddress = cityLevel.name;
                }
            }
            
            // Add state/province if available
            if (data.principalSubdivision) {
                displayAddress += displayAddress ? `, ${data.principalSubdivision}` : data.principalSubdivision;
            }
            
            // If still no address, fall back to county
            if (!displayAddress && data.localityInfo && data.localityInfo.administrative) {
                const countyLevel = data.localityInfo.administrative.find(a => a.order >= 4 && a.order <= 6);
                if (countyLevel) {
                    displayAddress = countyLevel.name;
                    if (data.principalSubdivision) {
                        displayAddress += `, ${data.principalSubdivision}`;
                    }
                }
            }
            
            if (!displayAddress) {
                displayAddress = 'Unknown location';
            }
            
            console.log(`Geocoded address: ${displayAddress}`);
            return displayAddress;
            
        } catch (error) {
            console.error('Geocoding error:', error);
            
            // Retry if we have retries left
            if (retries > 0) {
                console.log(`Retrying geocoding... (${retries} retries left)`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                return this.geocodeLocation(lat, lng, retries - 1);
            }
            
            // Fallback
            return 'Unknown location';
        }
    }

    // Load location address for a specific element
    async loadLocationAddressForElement(elementId, lat, lng, delay = 0) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.log(`Element ${elementId} not found`);
            return;
        }
        
        // Add delay if specified (for rate limiting)
        if (delay > 0) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        
        try {
            const address = await this.geocodeLocation(lat, lng);
            // Check if element still exists (user might have switched tabs)
            const checkElement = document.getElementById(elementId);
            if (checkElement) {
                // Don't show icon in the text, just the address
                checkElement.innerHTML = address;
                checkElement.setAttribute('data-address', address);
            }
        } catch (error) {
            console.error(`Error loading address for ${elementId}:`, error);
            const checkElement = document.getElementById(elementId);
            if (checkElement) {
                checkElement.innerHTML = 'Unknown location';
            }
        }
    }

    // Load location address for route list items
    async loadLocationAddress(lat, lng, index) {
        // Use 500ms delay between requests - BigDataCloud is more lenient than Nominatim
        await this.loadLocationAddressForElement(`location-address-${index}`, lat, lng, index * 500);
    }

    // Trip data management
    loadTripData() {
        const saved = localStorage.getItem('tripData');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            startAddress: null,
            startLat: null,
            startLng: null,
            startOverride: false,
            endAddress: null,
            endLat: null,
            endLng: null,
            endOverride: false
        };
    }

    saveTripData(tripData) {
        localStorage.setItem('tripData', JSON.stringify(tripData));
    }

    setTripLocation(type) {
        const promptMessage = type === 'start' 
            ? 'Enter trip start address (e.g., "San Francisco, CA"):' 
            : 'Enter trip end address (e.g., "New York, NY"):';
        
        const address = prompt(promptMessage);
        if (!address) return;
        
        const tripData = this.loadTripData();
        
        if (type === 'start') {
            tripData.startAddress = address;
            tripData.startOverride = true;
        } else {
            tripData.endAddress = address;
            tripData.endOverride = true;
        }
        
        this.saveTripData(tripData);
        this.showToast(`Trip ${type} location set!`);
        this.renderStatistics(); // Refresh the view
    }

    clearTripOverride() {
        if (confirm('Clear manual trip locations and use auto-detected from plates?')) {
            localStorage.removeItem('tripData');
            this.showToast('Trip override cleared');
            this.renderStatistics(); // Refresh the view
        }
    }

    saveGameData() {
        localStorage.setItem('licensePlateGameData', JSON.stringify(this.licensePlateData));
        // Don't save current country - always default to USA on page load
    }

    loadGameData() {
        const savedData = localStorage.getItem('licensePlateGameData');
        
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                
                // Migrate old data format (without timestamps/location) to new format
                Object.keys(parsed).forEach(country => {
                    Object.keys(parsed[country]).forEach(state => {
                        if (parsed[country][state].timestamp === undefined) {
                            parsed[country][state].timestamp = null;
                        }
                        if (parsed[country][state].location === undefined) {
                            parsed[country][state].location = null;
                        }
                    });
                });
                
                this.licensePlateData = parsed;
            } catch (error) {
                console.error('Error loading saved game data:', error);
            }
        }
        
        // Always default to 'usa' on page load - don't load saved country preference
        this.currentCountry = 'usa';
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        toastMessage.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    toggleMap() {
        const mapView = document.getElementById('mapView');
        const mapToggle = document.getElementById('mapToggle');
        const mapToggleText = document.getElementById('mapToggleText');
        const isOpen = mapView.classList.contains('open');
        
        if (isOpen) {
            mapView.classList.remove('open');
            mapToggle.classList.remove('active');
            mapToggleText.textContent = 'Show Map';
        } else {
            mapView.classList.add('open');
            mapToggle.classList.add('active');
            mapToggleText.textContent = 'Hide Map';
            this.renderMap();
        }
    }

    async renderMap() {
        const mapContent = document.getElementById('mapContent');
        const data = this.licensePlateData[this.currentCountry];
        
        mapContent.innerHTML = '';
        mapContent.className = 'map-container-view';
        
        // Try to load the high-quality SVG map file
        const mapFileName = `${this.currentCountry}-map.svg?v=${new Date().getTime()}`;
        
        try {
            const response = await fetch(mapFileName);
            if (!response.ok) throw new Error('Map not found');
            
            let svgText = await response.text();
            
            // Inject viewBox if missing based on country
            // Dimensions tuned based on actual SVG coordinate ranges (generous padding)
            const viewBoxes = {
                'usa': '-50 -50 1400 1000',
                'canada': '-50 -50 1400 1400',
                'mexico': '-50 -50 1200 1000'
            };
            
            const targetViewBox = viewBoxes[this.currentCountry] || '0 0 1000 600';

            // Robustly inject viewBox and sizing
            const svgOpenTagRegex = /<svg([^>]*)>/i;
            const match = svgText.match(svgOpenTagRegex);
            
            if (match) {
                let attributes = match[1];
                // Remove existing conflicting attributes (width, height, viewBox)
                attributes = attributes.replace(/\s+viewBox\s*=\s*["'][^"']*["']/gi, '');
                attributes = attributes.replace(/\s+width\s*=\s*["'][^"']*["']/gi, '');
                attributes = attributes.replace(/\s+height\s*=\s*["'][^"']*["']/gi, '');
                
                // Create new opening tag with our calculated viewBox
                const newTag = `<svg ${attributes} viewBox="${targetViewBox}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">`;
                svgText = svgText.replace(svgOpenTagRegex, newTag);
            }

            // Clean up the SVG to ensure it fills the container
            // We'll wrap it in a div that handles sizing
            const mapHTML = `
                <div class="map-image-wrapper">
                    <div class="svg-map-container" id="svgMapContainer">
                        ${svgText}
                    </div>
                </div>
            `;
            
            mapContent.innerHTML = mapHTML;
            this.attachSVGHandlers(data); // New handler for high-quality SVGs
            
        } catch (error) {
            console.log('Map SVG not found', error);
            mapContent.innerHTML = '<div class="map-fallback">Map loading failed. Please refresh.</div>';
        }
    }

    attachSVGHandlers(data) {
        // Find all paths and circles in the SVG
        const container = document.getElementById('svgMapContainer');
        const mapElements = container.querySelectorAll('path, circle, g');
        
        mapElements.forEach(element => {
            // Try to find state name from title attribute or title child
            let stateName = element.getAttribute('title');
            
            if (!stateName) {
                const titleElement = element.querySelector('title');
                if (titleElement) {
                    stateName = titleElement.textContent.trim();
                }
            }
            
            // Handle mappings and normalization
            if (stateName) {
                // Map specific names
                if (stateName === "Washington, DC" || stateName === "District of Columbia") stateName = "Washington D.C.";
                if (stateName === "Distrito Federal") stateName = "Mexico City";
                
                // Try direct match
                let stateInfo = data[stateName];
                
                // If not found, try normalizing accents (e.g. "México" -> "Mexico", "Yucatán" -> "Yucatan")
                if (!stateInfo) {
                    const normalizedName = stateName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    stateInfo = data[normalizedName];
                    
                    if (stateInfo) {
                        stateName = normalizedName; // Update stateName to use the data key
                    }
                    
                    // Also check if our data HAS the accent but the map doesn't (or vice versa)
                    if (!stateInfo) {
                        // Try to find a key in data that matches the normalized name
                        const dataKey = Object.keys(data).find(key => 
                            key.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === normalizedName
                        );
                        if (dataKey) {
                            stateInfo = data[dataKey];
                            stateName = dataKey; // Update stateName to match our data key for consistency
                        }
                    }
                }
                
                if (stateInfo) {
                    // Set initial style - ensure we override SVG internal styles
                element.style.cursor = 'pointer';
                element.style.transition = 'all 0.3s ease';
                element.style.stroke = '#ffffff';
                element.style.strokeWidth = '1px';
                
                // Set fill based on status
                if (stateInfo.count > 0) {
                    element.style.fill = '#48bb78'; // Green for spotted
                } else {
                    element.style.fill = '#e2e8f0'; // Gray for unspotted
                }
                
                // Add click handler
                element.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent bubbling
                    if (stateInfo.count > 0) {
                        this.unmarkPlate(stateName);
                    } else {
                        this.markPlateAsSpotted(stateName);
                    }
                });
                
                // Hover effects
                element.addEventListener('mouseenter', () => {
                    if (stateInfo.count > 0) {
                        element.style.fill = '#38a169'; // Darker green
                    } else {
                        element.style.fill = '#cbd5e0'; // Darker gray
                    }
                });
                
                element.addEventListener('mouseleave', () => {
                    if (stateInfo.count > 0) {
                        element.style.fill = '#48bb78';
                    } else {
                        element.style.fill = '#e2e8f0';
                    }
                });
            }
        }
    });
}

    // Haptic Feedback (works on Android, limited on iOS Safari)
    triggerHapticFeedback(style = 'medium') {
        // Android vibration API
        if (navigator.vibrate) {
            switch (style) {
                case 'light':
                    navigator.vibrate(10);
                    break;
                case 'medium':
                    navigator.vibrate(20);
                    break;
                case 'heavy':
                    navigator.vibrate(30);
                    break;
                case 'success':
                    navigator.vibrate([10, 50, 10]);
                    break;
                case 'error':
                    navigator.vibrate([20, 30, 20, 30, 20]);
                    break;
            }
            return;
        }
        
        // iOS doesn't support haptic feedback in web apps
        // As a fallback, we can provide audio feedback
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                const context = new AudioContext();
                const oscillator = context.createOscillator();
                const gainNode = context.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(context.destination);
                
                // Very subtle audio click as haptic replacement
                oscillator.frequency.value = style === 'success' ? 800 : 400;
                gainNode.gain.value = 0.01; // Very quiet
                
                oscillator.start(context.currentTime);
                oscillator.stop(context.currentTime + 0.01);
            }
        } catch (e) {
            // Haptic/audio feedback not available
            console.log('Haptic feedback not available');
        }
    }

    // Pull to Refresh
    setupPullToRefresh() {
        const mainContent = document.querySelector('.main-content');
        let pullIndicator = document.getElementById('pullRefreshIndicator');
        
        // Create pull indicator if it doesn't exist
        if (!pullIndicator) {
            pullIndicator = document.createElement('div');
            pullIndicator.id = 'pullRefreshIndicator';
            pullIndicator.className = 'pull-refresh-indicator';
            pullIndicator.innerHTML = '<i class="fas fa-sync-alt"></i>';
            document.querySelector('.container').insertBefore(pullIndicator, mainContent);
        }
        
        window.addEventListener('touchstart', (e) => {
            if (window.scrollY === 0) {
                this.pullStartY = e.touches[0].clientY;
            }
        }, { passive: true });
        
        window.addEventListener('touchmove', (e) => {
            if (!this.isPullingToRefresh && window.scrollY === 0 && this.pullStartY > 0) {
                const pullDistance = e.touches[0].clientY - this.pullStartY;
                
                if (pullDistance > 0 && pullDistance < 150) {
                    pullIndicator.style.transform = `translateY(${pullDistance}px)`;
                    pullIndicator.style.opacity = pullDistance / 100;
                    
                    if (pullDistance > 80) {
                        pullIndicator.classList.add('active');
                    } else {
                        pullIndicator.classList.remove('active');
                    }
                }
            }
        }, { passive: true });
        
        window.addEventListener('touchend', (e) => {
            const pullDistance = e.changedTouches[0].clientY - this.pullStartY;
            
            if (pullDistance > 80 && window.scrollY === 0) {
                this.isPullingToRefresh = true;
                pullIndicator.classList.add('refreshing');
                this.triggerHapticFeedback('medium');
                
                // Refresh the current view
                this.renderMap();
                this.renderLicensePlates();
                this.updateStats();
                
                setTimeout(() => {
                    pullIndicator.style.transform = 'translateY(0)';
                    pullIndicator.style.opacity = '0';
                    pullIndicator.classList.remove('active', 'refreshing');
                    this.isPullingToRefresh = false;
                    this.pullStartY = 0;
                }, 800);
            } else {
                pullIndicator.style.transform = 'translateY(0)';
                pullIndicator.style.opacity = '0';
                pullIndicator.classList.remove('active');
                this.pullStartY = 0;
            }
        }, { passive: true });
    }

    // Lazy Load Images for Performance
    lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        if (src) {
                            img.setAttribute('src', src);
                            img.removeAttribute('data-src');
                        }
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });
            
            // Observe all images with data-src
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
            
            // Store observer for future use
            this.imageObserver = imageObserver;
        }
    }

}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new LicensePlateGame();
});
