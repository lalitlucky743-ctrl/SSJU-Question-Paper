const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://ssju-questionpaper.netlify.app/', 'https://ssju-question-paper-6ffw.vercel.app/'],
  credentials: true
}));

// 🔥 YAHAN APNI TEST KEYS DAALO
const razorpay = new Razorpay({
  key_id: 'rzp_test_T5SmnMwS7qZw3z',
  key_secret: 'Jd5O7201ZGbZNLivO52DNP6b'
});

app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, paperId } = req.body;
    
    const options = {
      amount: amount * 100,
      currency: 'INR',
      receipt: `paper_${paperId}`,
      payment_capture: 1
    };

    const order = await razorpay.orders.create(options);
    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/verify-payment', (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', 'Jd5O7201ZGbZNLivO52DNP6b')
      .update(body.toString())
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      res.json({ success: true, message: 'Payment verified!' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid signature' });
    }
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, '0.0.0.0', () => {
  console.log('🚀 Server running on http://localhost:5000');
});
app.get('/', (req, res) => {
  res.send('Backend Working');
});

app.get('/test', (req, res) => {
  res.json({ success: true });
});