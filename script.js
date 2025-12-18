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
            // Always use Google Maps for consistency
            const mapUrl = `https://www.google.com/maps?q=${info.location.lat},${info.location.lng}`;
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
                    // Always use Google Maps for consistency
                    const mapUrl = `https://www.google.com/maps?q=${info.location.lat},${info.location.lng}`;
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
            const clearTripBtn = document.getElementById('clearTripBtn');
            
            if (clearTripBtn) {
                clearTripBtn.addEventListener('click', () => this.clearTripOverride());
            }
            
            // Bind editable trip locations
            const tripStartEditable = document.getElementById('tripStartEditable');
            const tripEndEditable = document.getElementById('tripEndEditable');
            
            if (tripStartEditable) {
                tripStartEditable.addEventListener('click', () => {
                    this.editTripLocation('start');
                });
                tripStartEditable.style.cursor = 'pointer';
            }
            
            if (tripEndEditable) {
                tripEndEditable.addEventListener('click', () => {
                    this.editTripLocation('end');
                });
                tripEndEditable.style.cursor = 'pointer';
            }
            
            // Load start/end addresses if not manually set
            const tripStartEl = document.getElementById('tripStartLocation');
            const tripEndEl = document.getElementById('tripEndLocation');
            
            if (tripStartEl && stats.locations.length > 0) {
                const firstLoc = stats.locations[0];
                this.loadTripLocationAddress('tripStartLocation', firstLoc.lat, firstLoc.lng);
            }
            
            if (tripEndEl && stats.locations.length > 0) {
                const lastLoc = stats.locations[stats.locations.length - 1];
                this.loadTripLocationAddress('tripEndLocation', lastLoc.lat, lastLoc.lng);
            }
            
            // Bind route map toggle
            const routeMapToggle = document.getElementById('routeMapToggle');
            if (routeMapToggle) {
                routeMapToggle.addEventListener('click', () => {
                    // Get trip data for manual overrides
                    const tripData = this.loadTripData();
                    this.toggleRouteMap(stats, tripData);
                });
            }
            
            // Bind long press to "Most in One Area" card
            const mostPlatesCard = document.getElementById('mostPlatesCard');
            if (mostPlatesCard) {
                this.setupLongPressForStatsCard(mostPlatesCard);
                
                // Load the location address for "Most in One Area" with timeout protection
                const lat = parseFloat(mostPlatesCard.dataset.lat);
                const lng = parseFloat(mostPlatesCard.dataset.lng);
                if (!isNaN(lat) && !isNaN(lng)) {
                    const timeoutPromise = new Promise((resolve) => {
                        setTimeout(() => {
                            const element = document.getElementById('mostPlatesLocation');
                            if (element && element.innerHTML.includes('Loading')) {
                                element.innerHTML = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
                            }
                            resolve();
                        }, 15000);
                    });
                    
                    Promise.race([
                        this.loadLocationAddressForElement('mostPlatesLocation', lat, lng),
                        timeoutPromise
                    ]).catch(error => {
                        console.error('Error loading mostPlatesLocation:', error);
                        const element = document.getElementById('mostPlatesLocation');
                        if (element) {
                            element.innerHTML = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
                        }
                    });
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
        
        // Load location address with timeout protection
        if (!isNaN(lat) && !isNaN(lng)) {
            const timeoutPromise = new Promise((resolve) => {
                setTimeout(() => {
                    const locationElement = document.getElementById('popupLocation');
                    if (locationElement && locationElement.innerHTML.includes('Loading')) {
                        locationElement.innerHTML = `<i class="fas fa-location-dot"></i> ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
                    }
                    resolve();
                }, 15000);
            });
            
            Promise.race([
            this.geocodeLocation(lat, lng).then(address => {
                const locationElement = document.getElementById('popupLocation');
                if (locationElement) {
                    locationElement.innerHTML = `<i class="fas fa-location-dot"></i> ${address}`;
                    }
                }),
                timeoutPromise
            ]).catch(error => {
                console.error('Failed to load address:', error);
                const locationElement = document.getElementById('popupLocation');
                if (locationElement) {
                    locationElement.innerHTML = `<i class="fas fa-location-dot"></i> ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
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
        
        // Get addresses for first and last locations
        const firstLoc = stats.locations[0];
        const lastLoc = stats.locations[stats.locations.length - 1];
        
        return `
            <div class="stats-route">
                <div class="stats-section">
                    <h3><i class="fas fa-map-marked"></i> Trip Overview</h3>
                    
                    <div class="trip-info">
                        ${tripData.startAddress ? `
                            <div class="trip-info-item">
                                <i class="fas fa-location-dot"></i>
                                <div>
                                    <strong>Start:</strong>
                                    <span class="trip-location-editable" id="tripStartEditable" data-type="start" title="Click to change">
                                        ${tripData.startAddress}
                                        <i class="fas fa-edit" style="margin-left: 8px; font-size: 0.8em; color: #fbbf24;"></i>
                                    </span>
                                    ${tripData.startOverride ? '<span class="trip-override-badge">Manual</span>' : '<span class="trip-auto-badge">Auto</span>'}
                                </div>
                            </div>
                        ` : `
                            <div class="trip-info-item">
                                <i class="fas fa-location-dot"></i>
                                <div>
                                    <strong>Start:</strong>
                                    <span class="trip-location-editable" id="tripStartEditable" data-type="start" title="Click to change">
                                        <span id="tripStartLocation"><i class="fas fa-spinner fa-spin"></i> Loading location...</span>
                                        <i class="fas fa-edit" style="margin-left: 8px; font-size: 0.8em; color: #fbbf24;"></i>
                                    </span>
                                    <span class="trip-auto-badge">Auto (First Plate)</span>
                                </div>
                            </div>
                        `}
                        
                        ${tripData.endAddress ? `
                            <div class="trip-info-item">
                                <i class="fas fa-flag-checkered"></i>
                                <div>
                                    <strong>End:</strong>
                                    <span class="trip-location-editable" id="tripEndEditable" data-type="end" title="Click to change">
                                        ${tripData.endAddress}
                                        <i class="fas fa-edit" style="margin-left: 8px; font-size: 0.8em; color: #fbbf24;"></i>
                                    </span>
                                    ${tripData.endOverride ? '<span class="trip-override-badge">Manual</span>' : '<span class="trip-auto-badge">Auto</span>'}
                                </div>
                            </div>
                        ` : `
                            <div class="trip-info-item">
                                <i class="fas fa-flag-checkered"></i>
                                <div>
                                    <strong>End:</strong>
                                    <span class="trip-location-editable" id="tripEndEditable" data-type="end" title="Click to change">
                                        <span id="tripEndLocation"><i class="fas fa-spinner fa-spin"></i> Loading location...</span>
                                        <i class="fas fa-edit" style="margin-left: 8px; font-size: 0.8em; color: #fbbf24;"></i>
                                    </span>
                                    <span class="trip-auto-badge">Auto (Last Plate)</span>
                                </div>
                            </div>
                        `}
                        
                        ${tripData.startOverride || tripData.endOverride ? `
                            <div class="trip-info-item" style="border-bottom: none; padding-top: 15px;">
                                <i class="fas fa-times-circle" style="color: #ef4444;"></i>
                                <div style="flex: 1;">
                                    <button class="btn btn-secondary btn-small" id="clearTripBtn" style="width: 100%;">
                                        <i class="fas fa-undo"></i> Reset to Auto-Detect
                                    </button>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="stats-section">
                    <button class="route-map-toggle" id="routeMapToggle">
                        <i class="fas fa-route"></i>
                        <span id="routeMapToggleText">Show Route Map</span>
                        <i class="fas fa-chevron-down" id="routeMapToggleIcon"></i>
                    </button>
                    <div class="route-map-container" id="routeMapContainer">
                        <div class="route-map-view">
                            <iframe 
                                class="route-map-iframe" 
                                id="routeMapIframe"
                                loading="lazy">
                            </iframe>
                            <div class="route-map-info">
                                <strong>${stats.locations.length} locations</strong> tracked on your journey
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="stats-section">
                    <h3><i class="fas fa-location-dot"></i> Spotted Locations</h3>
                    <div class="location-list" id="locationListContainer">
                        ${stats.locations.map((loc, index) => `
                            <div class="location-item" id="location-${index}" data-lat="${loc.lat}" data-lng="${loc.lng}">
                                <div class="location-name">${loc.state}, ${loc.country.toUpperCase()}</div>
                                <a href="https://www.google.com/maps?q=${loc.lat},${loc.lng}" target="_blank" class="location-address-link" id="location-address-${index}">
                                    ${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Load addresses for all locations in background - start with coordinates showing
        setTimeout(() => {
            console.log(`Starting to load addresses for ${stats.locations.length} locations`);
            stats.locations.forEach((loc, index) => {
                console.log(`Queueing location ${index}: ${loc.state}, ${loc.lat}, ${loc.lng}`);
                
                // Call loadLocationAddress which has built-in timeout protection
                this.loadLocationAddress(loc.lat, loc.lng, index).catch(error => {
                    console.error(`Catch block - Failed to load address for location ${index}:`, error);
                    // This is a safety net - the function should handle its own errors
                });
            });
        }, 200);
    }

    // Reverse Geocoding - Generic function using BigDataCloud (free, no API key needed)
    async geocodeLocation(lat, lng, retries = 2) {
        try {
            console.log(`Geocoding: ${lat}, ${lng}`);
            
            // Use BigDataCloud reverse geocoding API (free, no API key required)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
            
            const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`,
                { signal: controller.signal }
            );
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                console.error(`Geocoding HTTP error: ${response.status}`);
                throw new Error(`HTTP ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Geocoding response for', lat, lng, ':', data);
            
            // Build a nice address string focusing on actual city/town names
            let displayAddress = '';
            let stateProvince = data.principalSubdivision || '';
            
            // Invalid patterns to filter out - be very aggressive
            const invalidPatterns = [
                /district/i,  // Any "district" mention at all
                /^east\s+\w+/i,  // Anything starting with "East X"
                /^west\s+\w+/i,  // Anything starting with "West X"
                /^north\s+\w+/i,  // Anything starting with "North X"
                /^south\s+\w+/i,  // Anything starting with "South X"
                /^county$/i,  // Just "county"
                /unincorporated/i,  // Unincorporated areas
                /township\s+\d+/i  // Generic townships
            ];
            
            const isInvalidName = (name) => {
                if (!name) {
                    console.log(`⊗ Rejecting: empty name`);
                    return true;
                }
                
                const trimmed = name.trim();
                const lower = trimmed.toLowerCase();
                
                // Explicit blocklist
                const blocklist = [
                    'east tennessee county',
                    'west tennessee county',
                    'north tennessee county',
                    'south tennessee county',
                    'district',
                    'county'
                ];
                
                if (blocklist.includes(lower)) {
                    console.log(`⊗ Rejecting: "${trimmed}" (in blocklist)`);
                    return true;
                }
                
                // Check each pattern
                for (const pattern of invalidPatterns) {
                    if (pattern.test(trimmed)) {
                        console.log(`⊗ Rejecting: "${trimmed}" (matched pattern: ${pattern})`);
                        return true;
                    }
                }
                
                // Additional check: if it contains "County" and a direction
                if (lower.includes('county')) {
                    const words = lower.split(/\s+/);
                    if (words.includes('east') || words.includes('west') || words.includes('north') || words.includes('south')) {
                        console.log(`⊗ Rejecting: "${trimmed}" (directional + county)`);
                        return true;
                    }
                }
                
                console.log(`✓ Accepting: "${trimmed}"`);
                return false;
            };
            
            // Priority 1: Try to get actual city/town name
            console.log('Priority 1: Checking data.city and data.locality');
            if (data.city) console.log(`  data.city = "${data.city}"`);
            if (data.locality) console.log(`  data.locality = "${data.locality}"`);
            
            if (data.city && !isInvalidName(data.city)) {
                displayAddress = data.city;
                console.log(`→ Using data.city: "${displayAddress}"`);
            } else if (data.locality && !isInvalidName(data.locality)) {
                displayAddress = data.locality;
                console.log(`→ Using data.locality: "${displayAddress}"`);
            }
            
            // Priority 2: Look through administrative levels for a city (order 8-9)
            if (!displayAddress && data.localityInfo && data.localityInfo.administrative) {
                console.log('Priority 2: Checking admin orders 8-9 (city/town level)');
                // Order 8-9 are typically city/town level
                for (let order = 9; order >= 8; order--) {
                    const admin = data.localityInfo.administrative.find(a => a.order === order);
                    if (admin) {
                        console.log(`  order ${order}: "${admin.name}"`);
                        if (!isInvalidName(admin.name)) {
                            displayAddress = admin.name;
                            console.log(`→ Using admin order ${order}: "${displayAddress}"`);
                            break;
                        }
                    }
                }
            }
            
            // Priority 3: Try smaller localities (villages, hamlets - order 10)
            if (!displayAddress && data.localityInfo && data.localityInfo.administrative) {
                console.log('Priority 3: Checking admin order 10 (villages/hamlets)');
                const village = data.localityInfo.administrative.find(a => a.order === 10);
                if (village) {
                    console.log(`  order 10: "${village.name}"`);
                    if (!isInvalidName(village.name)) {
                        displayAddress = village.name;
                        console.log(`→ Using admin order 10: "${displayAddress}"`);
                    }
                }
            }
            
            // Priority 4: Fall back to actual county name (order 6) - but validate it
            if (!displayAddress && data.localityInfo && data.localityInfo.administrative) {
                console.log('Priority 4: Checking admin order 6 (county level)');
                const county = data.localityInfo.administrative.find(a => a.order === 6);
                if (county) {
                    console.log(`  order 6: "${county.name}"`);
                    if (!isInvalidName(county.name)) {
                        // Only use if it looks like a real county name
                        if (county.name.toLowerCase().includes('county')) {
                            displayAddress = county.name;
                        } else {
                            displayAddress = county.name + ' County';
                        }
                        console.log(`→ Using admin order 6: "${displayAddress}"`);
                    }
                }
            }
            
            // Priority 5: Try order 7 (township/municipality)
            if (!displayAddress && data.localityInfo && data.localityInfo.administrative) {
                console.log('Priority 5: Checking admin order 7 (township/municipality)');
                const township = data.localityInfo.administrative.find(a => a.order === 7);
                if (township) {
                    console.log(`  order 7: "${township.name}"`);
                    if (!isInvalidName(township.name)) {
                        displayAddress = township.name;
                        console.log(`→ Using admin order 7: "${displayAddress}"`);
                    }
                }
            }
            
            // Priority 6: Use the most specific valid locality available
            if (!displayAddress && data.localityInfo && data.localityInfo.administrative) {
                console.log('Priority 6: Checking all admin levels (highest order first)');
                // Sort by order descending and find first valid name
                const sortedAdmins = [...data.localityInfo.administrative].sort((a, b) => b.order - a.order);
                for (const admin of sortedAdmins) {
                    console.log(`  order ${admin.order}: "${admin.name}"`);
                    if (!isInvalidName(admin.name)) {
                        displayAddress = admin.name;
                        console.log(`→ Using admin order ${admin.order}: "${displayAddress}"`);
                        break;
                    }
                }
            }
            
            // Add state/province if available
            if (stateProvince) {
                displayAddress = displayAddress ? `${displayAddress}, ${stateProvince}` : stateProvince;
            }
            
            // Final fallback
            if (!displayAddress) {
                throw new Error('No valid location data available');
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
            
            // Final fallback to coordinates
            console.log('All geocoding attempts failed, returning coordinates');
            return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        }
    }

    // Load location address for a specific element
    async loadLocationAddressForElement(elementId, lat, lng, delay = 0) {
        console.log(`loadLocationAddressForElement called: ${elementId}, ${lat}, ${lng}, delay: ${delay}ms`);
        
        const element = document.getElementById(elementId);
        if (!element) {
            console.log(`Element ${elementId} not found initially`);
            return;
        }
        
        // Add delay if specified (for rate limiting)
        if (delay > 0) {
            console.log(`Waiting ${delay}ms before geocoding ${elementId}...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            console.log(`Delay complete for ${elementId}, starting geocode...`);
        }
        
        try {
            console.log(`Starting geocode for ${elementId} at ${lat}, ${lng}`);
        const address = await this.geocodeLocation(lat, lng);
            console.log(`Geocode completed for ${elementId}: ${address}`);
            
            // Check if element still exists (user might have switched tabs)
            const checkElement = document.getElementById(elementId);
            if (checkElement) {
                // Don't show icon in the text, just the address
                checkElement.innerHTML = address;
                checkElement.setAttribute('data-address', address);
                console.log(`✓ Updated element ${elementId} with address: ${address}`);
            } else {
                console.log(`✗ Element ${elementId} no longer exists after geocoding`);
            }
        } catch (error) {
            console.error(`✗ Error loading address for ${elementId}:`, error);
            const checkElement = document.getElementById(elementId);
            if (checkElement) {
                // Show coordinates on error
                const fallback = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
                checkElement.innerHTML = fallback;
                console.log(`Set fallback for ${elementId}: ${fallback}`);
            }
        }
    }

    // Load location address for route list items
    async loadLocationAddress(lat, lng, index) {
        const elementId = `location-address-${index}`;
        console.log(`loadLocationAddress: Starting for ${elementId} at ${lat}, ${lng}`);
        
        // Start with a timeout that will ensure we don't stay on "Loading" forever
        const timeoutId = setTimeout(() => {
            console.log(`Timeout hit for ${elementId} - checking if still loading`);
            const element = document.getElementById(elementId);
            if (element) {
                const currentText = element.textContent || '';
                // If it's still showing coordinates (initial state), leave it
                // This means geocoding is taking too long but we already have a fallback
                console.log(`Element ${elementId} current state: ${currentText}`);
            }
        }, 12000);
        
        try {
            // Try to load the address with delay for rate limiting (400ms between requests)
            console.log(`Calling loadLocationAddressForElement for ${elementId}`);
            await this.loadLocationAddressForElement(elementId, lat, lng, index * 400);
            clearTimeout(timeoutId);
            console.log(`Successfully loaded address for ${elementId}`);
        } catch (error) {
            clearTimeout(timeoutId);
            console.error(`Error in loadLocationAddress for ${elementId}:`, error);
            // The loadLocationAddressForElement should handle fallback, but double-check
            const element = document.getElementById(elementId);
            if (element && element.textContent.includes('Loading')) {
                element.innerHTML = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
                console.log(`Set fallback coordinates for ${elementId}`);
            }
        }
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

    async editTripLocation(type) {
        const promptMessage = type === 'start' 
            ? 'Enter trip start address (e.g., "San Francisco, CA" or "Townsend, TN"):' 
            : 'Enter trip end address (e.g., "New York, NY" or "Glendale, AZ"):';
        
        const address = prompt(promptMessage);
        if (!address || address.trim() === '') {
            console.log('User cancelled or entered empty address');
            return;
        }
        
        const tripData = this.loadTripData();
        
        // Show loading toast
        this.showToast('Geocoding address... (this may take a moment)');
        
        try {
            console.log(`Attempting to geocode ${type} address: "${address}"`);
            
            // Geocode the address to get coordinates
            const coords = await this.geocodeAddress(address);
            
            console.log(`Successfully geocoded to: ${coords.lat}, ${coords.lng}`);
        
            if (type === 'start') {
                tripData.startAddress = coords.displayName || address;
                tripData.startOverride = true;
                tripData.startLat = coords.lat;
                tripData.startLng = coords.lng;
                console.log('Saved start location:', tripData.startAddress);
            } else {
                tripData.endAddress = coords.displayName || address;
                tripData.endOverride = true;
                tripData.endLat = coords.lat;
                tripData.endLng = coords.lng;
                console.log('Saved end location:', tripData.endAddress);
            }
        
            this.saveTripData(tripData);
            
            // Show success message with matched address if different from input
            let successMsg = `✓ Trip ${type} location set!`;
            if (coords.matchedAddress && coords.matchedAddress !== address) {
                successMsg += ` (matched: ${coords.matchedAddress})`;
            }
            this.showToast(successMsg);
            
            // Refresh ONLY the route tab content without switching tabs
            this.refreshRouteTab();
            
        } catch (error) {
            console.error(`✗ Failed to set trip ${type}:`, error);
            
            // Show user-friendly error message
            const errorMsg = error.message || 'Unknown error';
            alert(`Could not find address: "${address}"\n\n${errorMsg}\n\nTry:\n• "City, State" format (e.g., "Townsend, TN")\n• Removing street address\n• Using just city name`);
        }
    }

    async geocodeAddress(address) {
        // Use Nominatim (OpenStreetMap) to geocode the address to coordinates
        // Try progressively simpler versions if exact address doesn't work
        console.log(`Geocoding address: "${address}"`);
        
        // Generate fallback address variations
        const addressVariations = [address]; // Start with exact address
        
        // If it looks like a full address with zip code, create simpler versions
        const zipMatch = address.match(/\s+\d{5}(-\d{4})?$/);
        if (zipMatch) {
            // Version without zip: "610 Dry Valley Rd Townsend, TN 37882" -> "610 Dry Valley Rd Townsend, TN"
            addressVariations.push(address.replace(zipMatch[0], '').trim());
        }
        
        // Try to extract just street + city + state
        // Pattern: "123 Street Name City, ST" or "Street Name City, ST"
        const streetCityMatch = address.match(/^([^,]+),?\s+([A-Z]{2})/i);
        if (streetCityMatch) {
            // Get everything before the state
            const beforeState = streetCityMatch[1].trim();
            const state = streetCityMatch[2].trim();
            
            // Split on whitespace and try to find city (usually last 1-2 words before state)
            const parts = beforeState.split(/\s+/);
            if (parts.length >= 3) {
                // Try: "Street City, ST"
                const possibleCity = parts[parts.length - 1];
                const street = parts.slice(0, -1).join(' ');
                addressVariations.push(`${street}, ${possibleCity}, ${state}`);
                
                // Try: "City, ST"
                addressVariations.push(`${possibleCity}, ${state}`);
            }
        }
        
        // Try to extract just "City, State" as last resort
        const cityStateMatch = address.match(/([A-Za-z\s]+),?\s+([A-Z]{2})\s*\d*/);
        if (cityStateMatch) {
            const words = cityStateMatch[1].trim().split(/\s+/);
            const city = words[words.length - 1]; // Last word is usually the city
            const state = cityStateMatch[2];
            addressVariations.push(`${city}, ${state}`);
        }
        
        // Remove duplicates
        const uniqueVariations = [...new Set(addressVariations)];
        console.log(`Will try ${uniqueVariations.length} address variations:`, uniqueVariations);
        
        let lastError = null;
        
        // Try each variation
        for (let i = 0; i < uniqueVariations.length; i++) {
            const tryAddress = uniqueVariations[i];
            console.log(`Attempt ${i + 1}/${uniqueVariations.length}: "${tryAddress}"`);
            
            try {
                // Add a small delay to respect Nominatim's usage policy (max 1 request per second)
                if (i > 0) {
                    await new Promise(resolve => setTimeout(resolve, 1100));
                } else {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
                
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(tryAddress)}&format=json&limit=1`,
                    {
                        headers: {
                            'User-Agent': 'LicensePlateSpotterGame/1.0'
                        }
                    }
                );
                
                console.log(`  Response status: ${response.status}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                
                const data = await response.json();
                
                if (data && data.length > 0) {
                    const result = {
                        lat: parseFloat(data[0].lat),
                        lng: parseFloat(data[0].lon),
                        displayName: data[0].display_name,
                        matchedAddress: tryAddress
                    };
                    
                    console.log(`✓ SUCCESS! Matched: "${tryAddress}"`);
                    console.log(`  Coords: ${result.lat}, ${result.lng}`);
                    console.log(`  Full: ${result.displayName}`);
                    
                    return result;
                } else {
                    console.log(`  ✗ No results for this variation`);
                }
                
            } catch (error) {
                console.log(`  ✗ Error: ${error.message}`);
                lastError = error;
            }
        }
        
        // If we get here, none of the variations worked
        console.error('✗ All address variations failed');
        throw new Error(`Could not find any location matching "${address}". Try just the city and state (e.g., "Townsend, TN")`);
    }

    refreshRouteTab() {
        // Get current stats
        const stats = this.calculateStatistics();
        
        // Find the route tab content
        const routeTabContent = document.getElementById('stats-route');
        if (routeTabContent) {
            // Re-render just the route content
            routeTabContent.innerHTML = this.renderRouteStats(stats);
            
            // Re-bind the event handlers
            this.bindRouteTabHandlers(stats);
            
            // If the route map was open, re-open it with updated data
            const container = document.getElementById('routeMapContainer');
            if (container && container.classList.contains('open')) {
                const tripData = this.loadTripData();
                setTimeout(() => {
                    const iframe = document.getElementById('routeMapIframe');
                    if (iframe && stats.locations.length > 0) {
                        this.renderRouteMap(iframe, stats.locations, tripData);
                    }
                }, 100);
            }
        }
    }

    bindRouteTabHandlers(stats) {
        // Re-bind all the route tab event handlers
        const clearTripBtn = document.getElementById('clearTripBtn');
        
        if (clearTripBtn) {
            clearTripBtn.addEventListener('click', () => this.clearTripOverride());
        }
        
        // Bind editable trip locations
        const tripStartEditable = document.getElementById('tripStartEditable');
        const tripEndEditable = document.getElementById('tripEndEditable');
        
        if (tripStartEditable) {
            tripStartEditable.addEventListener('click', () => {
                this.editTripLocation('start');
            });
            tripStartEditable.style.cursor = 'pointer';
        }
        
        if (tripEndEditable) {
            tripEndEditable.addEventListener('click', () => {
                this.editTripLocation('end');
            });
            tripEndEditable.style.cursor = 'pointer';
        }
        
        // Load start/end addresses if not manually set
        const tripStartEl = document.getElementById('tripStartLocation');
        const tripEndEl = document.getElementById('tripEndLocation');
        
        if (tripStartEl && stats.locations.length > 0) {
            const firstLoc = stats.locations[0];
            this.loadTripLocationAddress('tripStartLocation', firstLoc.lat, firstLoc.lng);
        }
        
        if (tripEndEl && stats.locations.length > 0) {
            const lastLoc = stats.locations[stats.locations.length - 1];
            this.loadTripLocationAddress('tripEndLocation', lastLoc.lat, lastLoc.lng);
        }
        
        // Bind route map toggle
        const routeMapToggle = document.getElementById('routeMapToggle');
        if (routeMapToggle) {
            routeMapToggle.addEventListener('click', () => {
                const tripData = this.loadTripData();
                this.toggleRouteMap(stats, tripData);
            });
        }
        
        // Load addresses for spotted locations
        setTimeout(() => {
            console.log(`Starting to load addresses for ${stats.locations.length} locations`);
            stats.locations.forEach((loc, index) => {
                console.log(`Queueing location ${index}: ${loc.state}, ${loc.lat}, ${loc.lng}`);
                
                this.loadLocationAddress(loc.lat, loc.lng, index).catch(error => {
                    console.error(`Catch block - Failed to load address for location ${index}:`, error);
                });
            });
        }, 200);
    }

    setTripLocation(type) {
        // This method is deprecated - use editTripLocation instead
        this.editTripLocation(type);
    }

    clearTripOverride() {
        if (confirm('Reset trip locations to auto-detected from plates?')) {
            localStorage.removeItem('tripData');
            this.showToast('Trip reset to auto-detect');
            
            // Refresh ONLY the route tab content without switching tabs
            this.refreshRouteTab();
        }
    }

    async loadTripLocationAddress(elementId, lat, lng) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        try {
            const address = await this.geocodeLocation(lat, lng);
            const checkElement = document.getElementById(elementId);
            if (checkElement) {
                checkElement.innerHTML = address;
            }
        } catch (error) {
            console.error('Error loading trip location:', error);
            const checkElement = document.getElementById(elementId);
            if (checkElement) {
                checkElement.innerHTML = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
            }
        }
    }

    toggleRouteMap(stats, tripData) {
        const container = document.getElementById('routeMapContainer');
        const toggle = document.getElementById('routeMapToggle');
        const toggleText = document.getElementById('routeMapToggleText');
        const toggleIcon = document.getElementById('routeMapToggleIcon');
        const iframe = document.getElementById('routeMapIframe');
        
        if (!container || !toggle) return;
        
        const isOpen = container.classList.contains('open');
        
        if (isOpen) {
            container.classList.remove('open');
            toggle.classList.remove('active');
            toggleText.textContent = 'Show Route Map';
            toggleIcon.style.transform = '';
        } else {
            container.classList.add('open');
            toggle.classList.add('active');
            toggleText.textContent = 'Hide Route Map';
            toggleIcon.style.transform = 'rotate(180deg)';
            
            // Generate the map with all markers and consider manual overrides
            if (iframe && stats.locations.length > 0) {
                this.renderRouteMap(iframe, stats.locations, tripData);
            }
        }
        
        this.triggerHapticFeedback('light');
    }

    renderRouteMap(iframe, locations, tripData = {}) {
        // Use manual override locations if set, otherwise use first/last plate locations
        let startLabel = 'START';
        let endLabel = 'END';
        let startCoords = null;
        let endCoords = null;
        
        // Check for manual overrides
        if (tripData.startOverride && tripData.startLat && tripData.startLng) {
            startCoords = { lat: tripData.startLat, lng: tripData.startLng };
            startLabel = `START: ${tripData.startAddress || 'Manual Location'}`;
        } else if (locations.length > 0) {
            startCoords = { lat: locations[0].lat, lng: locations[0].lng };
            startLabel = `START: ${locations[0].state}`;
        }
        
        if (tripData.endOverride && tripData.endLat && tripData.endLng) {
            endCoords = { lat: tripData.endLat, lng: tripData.endLng };
            endLabel = `END: ${tripData.endAddress || 'Manual Location'}`;
        } else if (locations.length > 0) {
            endCoords = { lat: locations[locations.length - 1].lat, lng: locations[locations.length - 1].lng };
            endLabel = `END: ${locations[locations.length - 1].state}`;
        }
        
        // Calculate bounds for the map including manual override points
        const allLats = locations.map(loc => loc.lat);
        const allLngs = locations.map(loc => loc.lng);
        
        if (startCoords) {
            allLats.push(startCoords.lat);
            allLngs.push(startCoords.lng);
        }
        if (endCoords) {
            allLats.push(endCoords.lat);
            allLngs.push(endCoords.lng);
        }
        
        const minLat = Math.min(...allLats);
        const maxLat = Math.max(...allLats);
        const minLng = Math.min(...allLngs);
        const maxLng = Math.max(...allLngs);
        
        const centerLat = (minLat + maxLat) / 2;
        const centerLng = (minLng + maxLng) / 2;
        
        // Build route coordinates for polyline
        let routeCoords = [];
        if (startCoords) routeCoords.push(`[${startCoords.lat}, ${startCoords.lng}]`);
        routeCoords = routeCoords.concat(locations.map(loc => `[${loc.lat}, ${loc.lng}]`));
        if (endCoords && (!locations.length || endCoords.lat !== locations[locations.length - 1].lat)) {
            routeCoords.push(`[${endCoords.lat}, ${endCoords.lng}]`);
        }
        
        // Create markers HTML for plate locations
        const plateMarkersJS = locations.map((loc, index) => {
            return `L.marker([${loc.lat}, ${loc.lng}], {
                icon: L.divIcon({
                    className: 'custom-marker',
                    html: '<div style="background: #3b82f6; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); font-size: 13px;">${index + 1}</div>',
                    iconSize: [32, 32]
                })
            }).addTo(map).bindPopup('<b>${index + 1}. ${loc.state}</b><br>${loc.country.toUpperCase()}');`;
        }).join('\n');
        
        // Create start marker
        let startMarkerJS = '';
        if (startCoords) {
            startMarkerJS = `
            L.marker([${startCoords.lat}, ${startCoords.lng}], {
                icon: L.divIcon({
                    className: 'custom-marker',
                    html: '<div style="background: #10b981; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.4); font-size: 20px;">▶</div>',
                    iconSize: [40, 40]
                })
            }).addTo(map).bindPopup('<b>${startLabel}</b>');`;
        }
        
        // Create end marker
        let endMarkerJS = '';
        if (endCoords) {
            endMarkerJS = `
            L.marker([${endCoords.lat}, ${endCoords.lng}], {
                icon: L.divIcon({
                    className: 'custom-marker',
                    html: '<div style="background: #ef4444; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.4); font-size: 20px;">🏁</div>',
                    iconSize: [40, 40]
                })
            }).addTo(map).bindPopup('<b>${endLabel}</b>');`;
        }
        
        // Create HTML with Leaflet map
        const mapHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <style>
        body { margin: 0; padding: 0; }
        #map { width: 100%; height: 100vh; }
        .leaflet-popup-content { font-weight: 600; text-align: center; }
    </style>
</head>
<body>
    <div id="map"></div>
    <script>
        var map = L.map('map').setView([${centerLat}, ${centerLng}], 6);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);
        
        // Fetch and draw road-following route
        async function drawRoute() {
            const waypoints = [${routeCoords.join(',')}];
            
            // If we have too many waypoints, sample them to stay under API limits
            let routeWaypoints = waypoints;
            if (waypoints.length > 50) {
                const step = Math.ceil(waypoints.length / 50);
                routeWaypoints = [
                    waypoints[0],  // Always include start
                    ...waypoints.slice(1, -1).filter((_, i) => i % step === 0),  // Sample middle
                    waypoints[waypoints.length - 1]  // Always include end
                ];
            }
            
            console.log('Fetching route with', routeWaypoints.length, 'waypoints');
            
            try {
                // Use OSRM (free, no API key) for driving directions
                const coords = routeWaypoints.map(wp => \`\${wp[1]},\${wp[0]}\`).join(';');
                const response = await fetch(
                    \`https://router.project-osrm.org/route/v1/driving/\${coords}?overview=full&geometries=geojson\`
                );
                
                if (!response.ok) throw new Error('Routing failed');
                
                const data = await response.json();
                console.log('Route response received');
                
                if (data.routes && data.routes.length > 0) {
                    const route = data.routes[0];
                    const coordinates = route.geometry.coordinates.map(c => [c[1], c[0]]);
                    
                    // Draw the road-following route in bright green
                    L.polyline(coordinates, {
                        color: '#22c55e',
                        weight: 4,
                        opacity: 0.9,
                        smoothFactor: 1
                    }).addTo(map);
                    
                    console.log('✓ Road-following route drawn with', coordinates.length, 'points');
                } else {
                    throw new Error('No route found');
                }
            } catch (error) {
                console.error('✗ Route fetch failed, drawing direct lines:', error);
                // Fallback: draw straight lines between waypoints in bright green
                L.polyline(waypoints, {
                    color: '#22c55e',
                    weight: 3,
                    opacity: 0.7,
                    dashArray: '10, 10'
                }).addTo(map);
            }
        }
        
        drawRoute();
        
        // Add plate location markers
        ${plateMarkersJS}
        
        // Add start marker
        ${startMarkerJS}
        
        // Add end marker
        ${endMarkerJS}
        
        // Fit bounds to show all markers
        var bounds = L.latLngBounds([${routeCoords.join(',')}]);
        map.fitBounds(bounds, { padding: [50, 50] });
    </script>
</body>
</html>`;
        
        iframe.srcdoc = mapHTML;
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
