import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import urlencode from 'urlencode';
import '../App.css'; // Import the CSS file for glassmorphic styling

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    activity: 'kayaking',
    checkInDate: '',
    checkOutDate: '',
    gift: ''
  });
  const [qrCodeData, setQrCodeData] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // List of available gifts
  const gifts = [
    'SCX2',
    'CDX',
    'PSRBKB'
  ];

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate random gift if not selected
    const selectedGift =  gifts[Math.floor(Math.random() * gifts.length)] 

    
    // Construct the WhatsApp message
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nActivity: ${formData.activity}\nCheckIn Date: ${formData.checkInDate}\nCheckOut Date: ${formData.checkOutDate}\nGift: ${selectedGift}`;
    
    // Create a WhatsApp API URL
    const phoneNumber = '9531989776'; // Replace with your phone number including country code
    const encodedMessage = urlencode(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Set QR code data and WhatsApp URL
    setQrCodeData(url);
    setWhatsappUrl(url);
  };

  return (
    <div className="container" id='booking'>
      <div className="glassmorphic-form card-price">
        <h1>Booking Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Activity:</label>
            <select
              name="activity"
              value={formData.activity}
              onChange={handleChange}
            >
              <option value="kayaking">Kayaking</option>
              <option value="deep scuba">Deep Scuba</option>
              <option value="shore scuba">Shore Scuba</option>
            </select>
          </div>
          <div className="form-group">
            <label>Check-in Date:</label>
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Check-out Date:</label>
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              required
            />
          </div>
          <button class="btn btn-primary">Generate Voucher</button>
        </form>
      </div>
      {qrCodeData && (
       <div className="glassmorphic-result">
       <h2>Scan this QR Code or click the button to send the data via WhatsApp:</h2>
       <QRCode value={qrCodeData} />
       <button onClick={() => window.open(whatsappUrl, '_blank')} className="btn btn-primary">Open Whatsapp</button>
     </div>
     
      )}
    </div>
  );
};

export default App;
