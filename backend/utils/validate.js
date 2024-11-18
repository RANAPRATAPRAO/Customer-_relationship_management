exports.validateContact = (contact) => {
    const { firstName, lastName, email, phoneNumber } = contact;
    if (!firstName || !lastName || !email || !phoneNumber) {
        return 'All fields are required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Invalid email format';
    }
    const phoneRegex = /^[+]?[0-9]{10,15}$/; 
    if (!phoneRegex.test(phoneNumber)) {
        return 'Invalid phone number format';
    }
    return null;
};
