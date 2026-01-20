/* ==========================================
   FRESH MEAT DAILY - JAVASCRIPT
   WhatsApp Integration & Form Handling
   ========================================== */

// Business Configuration
const BUSINESS_CONFIG = {
    whatsappNumber: '254701698883', // International format: +254...
    businessName: 'Fresh Meat Daily',
    location: 'Dagoreti Slaughter House',
    minFreeDelivery: 10000 // KSH
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    setupDeliveryTypeListener();
    setupOrderValueListener();
});

/**
 * Initialize Form
 */
function initializeForm() {
    const form = document.getElementById('orderForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

/**
 * Handle Form Submission
 */
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        customerName: document.getElementById('customerName').value.trim(),
        customerPhone: document.getElementById('customerPhone').value.trim(),
        meatType: document.getElementById('meatType').value,
        quantity: document.getElementById('quantity').value.trim(),
        orderValue: document.getElementById('orderValue').value,
        deliveryType: document.getElementById('deliveryType').value,
        deliveryAddress: document.getElementById('deliveryAddress').value.trim(),
        preferredTime: document.getElementById('preferredTime').value,
        notes: document.getElementById('notes').value.trim()
    };

    // Validate form data
    if (!validateForm(formData)) {
        return;
    }

    // Generate WhatsApp message
    const whatsappMessage = generateWhatsAppMessage(formData);

    // Redirect to WhatsApp
    redirectToWhatsApp(whatsappMessage);
}

/**
 * Validate Form Data
 */
function validateForm(data) {
    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Customer Name validation
    if (!data.customerName || data.customerName.length < 2) {
        showError('nameError', 'Please enter a valid name');
        isValid = false;
    }

    // Phone Number validation
    if (!data.customerPhone) {
        showError('phoneError', 'Please enter a phone number');
        isValid = false;
    } else if (!isValidPhoneNumber(data.customerPhone)) {
        showError('phoneError', 'Please enter a valid phone number (10-13 digits)');
        isValid = false;
    }

    // Meat Type validation
    if (!data.meatType) {
        alert('Please select a meat type');
        isValid = false;
    }

    // Quantity validation
    if (!data.quantity) {
        alert('Please enter quantity');
        isValid = false;
    }

    // Order Value validation
    if (!data.orderValue || data.orderValue <= 0) {
        alert('Please enter a valid order value');
        isValid = false;
    }

    // Delivery Type validation
    if (!data.deliveryType) {
        alert('Please select delivery or pickup');
        isValid = false;
    }

    // Delivery Address validation (if delivery selected)
    if (data.deliveryType === 'Delivery' && !data.deliveryAddress) {
        alert('Please enter your delivery address');
        isValid = false;
    }

    // Preferred Time validation
    if (!data.preferredTime) {
        alert('Please select your preferred time');
        isValid = false;
    }

    return isValid;
}

/**
 * Validate Phone Number
 */
function isValidPhoneNumber(phone) {
    // Remove common formatting
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    
    // Check if it's a valid phone number (10-13 digits)
    return /^\d{10,13}$/.test(cleaned);
}

/**
 * Show Error Message
 */
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

/**
 * Clear All Errors
 */
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
}

/**
 * Setup Delivery Type Listener
 */
function setupDeliveryTypeListener() {
    const deliveryTypeSelect = document.getElementById('deliveryType');
    if (deliveryTypeSelect) {
        deliveryTypeSelect.addEventListener('change', handleDeliveryTypeChange);
    }
}

/**
 * Handle Delivery Type Change
 */
function handleDeliveryTypeChange() {
    const deliveryType = document.getElementById('deliveryType').value;
    const addressGroup = document.getElementById('deliveryAddressGroup');
    const addressInput = document.getElementById('deliveryAddress');

    if (addressGroup) {
        if (deliveryType === 'Delivery') {
            addressGroup.style.display = 'block';
            addressGroup.classList.add('show');
            addressInput.required = true;
        } else {
            addressGroup.style.display = 'none';
            addressGroup.classList.remove('show');
            addressInput.required = false;
            addressInput.value = '';
        }
    }
}

/**
 * Setup Order Value Listener - Show delivery fee notice
 */
function setupOrderValueListener() {
    const orderValueInput = document.getElementById('orderValue');
    if (orderValueInput) {
        orderValueInput.addEventListener('change', updateDeliveryNotice);
        orderValueInput.addEventListener('input', updateDeliveryNotice);
    }
}

/**
 * Update Delivery Notice based on Order Value
 */
function updateDeliveryNotice() {
    const orderValue = parseFloat(document.getElementById('orderValue').value) || 0;
    const deliveryNotice = document.getElementById('deliveryNotice');

    if (!deliveryNotice) return;

    if (orderValue >= BUSINESS_CONFIG.minFreeDelivery) {
        deliveryNotice.className = 'delivery-notice free';
        deliveryNotice.innerHTML = `✓ <strong>FREE DELIVERY!</strong> Your order qualifies for free delivery (KSH ${orderValue.toLocaleString()})`;
    } else if (orderValue > 0) {
        deliveryNotice.className = 'delivery-notice paid';
        deliveryNotice.innerHTML = `⚠ <strong>Delivery Charges Apply:</strong> Your order is below KSH ${BUSINESS_CONFIG.minFreeDelivery}. Delivery charges will be confirmed via WhatsApp.`;
    } else {
        deliveryNotice.innerHTML = '';
        deliveryNotice.className = 'delivery-notice';
    }
}

/**
 * Generate WhatsApp Message from Form Data
 */
function generateWhatsAppMessage(data) {
    const lines = [
        '📦 *NEW MEAT ORDER*',
        '',
        `*Customer Name:* ${data.customerName}`,
        `*Phone:* ${data.customerPhone}`,
        `*Meat Type:* ${data.meatType}`,
        `*Quantity:* ${data.quantity}`,
        `*Estimated Order Value:* KSH ${formatCurrency(data.orderValue)}`,
        `*Delivery/Pickup:* ${data.deliveryType}`,
    ];

    // Add delivery address if applicable
    if (data.deliveryType === 'Delivery' && data.deliveryAddress) {
        lines.push(`*Delivery Address:* ${data.deliveryAddress}`);
    }

    lines.push(`*Preferred Time:* ${data.preferredTime}`);

    // Add notes if provided
    if (data.notes) {
        lines.push(`*Special Requests:* ${data.notes}`);
    }

    // Add delivery info footer
    lines.push('');
    lines.push('---');
    lines.push('💡 *Note:* Free delivery applies only to orders above KSH 10,000');

    return lines.join('\n');
}

/**
 * Format Currency
 */
function formatCurrency(value) {
    return parseInt(value).toLocaleString('en-KE');
}

/**
 * Redirect to WhatsApp
 */
function redirectToWhatsApp(message) {
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp Click-to-Chat URL
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
}

/**
 * Utility: Format Phone Number
 */
function formatPhoneNumber(phone) {
    // Remove all non-digit characters
    let cleaned = phone.replace(/\D/g, '');
    
    // If starts with 07, replace with 2547 for international format
    if (cleaned.startsWith('07')) {
        cleaned = '254' + cleaned.substring(1);
    }
    
    return cleaned;
}
