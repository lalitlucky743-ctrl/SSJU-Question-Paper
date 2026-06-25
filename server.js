const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const crypto = require('crypto');

const app = express();

// ✅ middleware FIRST (important)
app.use(express.json());

app.use(cors({
  origin: '*'
}));

// 🔥 Razorpay
const razorpay = new Razorpay({
  key_id: 'rzp_test_T5SmnMwS7qZw3z',
  key_secret: 'Jd5O7201ZGbZNLivO52DNP6b'
});

// ✅ ROUTES FIRST

app.get('/', (req, res) => {
  res.send('Backend Working');
});

app.get('/test', (req, res) => {
  res.json({ success: true });
});

// CREATE ORDER
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 2000,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`
    });

res.json({
  success: true,
  orderId: order.id,
  amount: order.amount,
  currency: order.currency,
  key: process.env.RAZORPAY_KEY_ID
});

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// VERIFY PAYMENT
app.post('/api/verify-payment', (req, res) => {
    
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = req.body;

    const body = razorpay_order_id + '|' + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', 'Jd5O7201ZGbZNLivO52DNP6b')
      .update(body)
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      return res.json({ success: true, message: 'Payment verified!' });
    }

    return res.status(400).json({ success: false, message: 'Invalid signature' });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ LISTEN LAST (IMPORTANT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});