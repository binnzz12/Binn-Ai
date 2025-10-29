# Panduan Integrasi Payment Gateway untuk Binn AI

## Overview
Dokumentasi ini menjelaskan cara mengintegrasikan sistem pembayaran yang aman dan profesional untuk fitur upgrade premium Binn AI.

## Rekomendasi Payment Gateway untuk Indonesia

### 1. Midtrans (Rekomendasi Utama)
- **Website**: https://midtrans.com
- **Support**: DANA, OVO, GoPay, ShopeePay, LinkAja, Transfer Bank, Kartu Kredit
- **Keunggulan**: 
  - Dashboard lengkap untuk monitoring transaksi
  - Dokumentasi bahasa Indonesia
  - Support 24/7
  - Fee kompetitif (2.9% per transaksi)

### 2. Xendit
- **Website**: https://xendit.co
- **Support**: Semua e-wallet utama, Virtual Account, Kartu Kredit
- **Keunggulan**: API modern, integrasi mudah

### 3. DANA Connect API
- **Website**: https://www.dana.id/business
- **Support**: DANA saja
- **Keunggulan**: Fee lebih rendah jika fokus DANA

## Flow Pembayaran yang Aman

```
User → Klik "Upgrade Premium" 
     → Pilih Metode Pembayaran (DANA/OVO/GoPay)
     → Redirect ke Payment Gateway
     → User Bayar via E-Wallet
     → Payment Gateway Verifikasi
     → Callback ke Server Binn AI
     → Update Status Premium User
     → Notifikasi ke User
```

## Implementasi dengan Midtrans

### Step 1: Registrasi & Setup
1. Daftar di https://dashboard.midtrans.com
2. Verifikasi bisnis (KTP, NPWP, dokumen legalitas)
3. Dapatkan Server Key dan Client Key
4. Aktifkan metode pembayaran yang diinginkan

### Step 2: Integrasi Frontend
```javascript
// Load Midtrans Snap.js
<script src="https://app.midtrans.com/snap/snap.js" 
        data-client-key="YOUR-CLIENT-KEY"></script>

// Tombol Upgrade Premium
function handleUpgrade() {
  // Request token dari backend
  fetch('/api/create-transaction', {
    method: 'POST',
    body: JSON.stringify({
      plan: 'premium',
      amount: 99000
    })
  })
  .then(res => res.json())
  .then(data => {
    // Buka popup pembayaran Midtrans
    snap.pay(data.token, {
      onSuccess: function(result) {
        // Pembayaran berhasil
        window.location.href = '/dashboard?status=success';
      },
      onPending: function(result) {
        // Menunggu pembayaran
        alert('Menunggu pembayaran...');
      },
      onError: function(result) {
        // Pembayaran gagal
        alert('Pembayaran gagal, coba lagi');
      }
    });
  });
}
```

### Step 3: Backend API (Contoh)
```javascript
// Endpoint untuk membuat transaksi
app.post('/api/create-transaction', async (req, res) => {
  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY
  });

  const parameter = {
    transaction_details: {
      order_id: 'BINN-' + Date.now(),
      gross_amount: 99000
    },
    customer_details: {
      email: req.user.email,
      phone: req.user.phone
    },
    item_details: [{
      name: 'Binn AI Premium - 1 Bulan',
      price: 99000,
      quantity: 1
    }]
  };

  const transaction = await snap.createTransaction(parameter);
  res.json({ token: transaction.token });
});

// Webhook untuk notifikasi pembayaran
app.post('/api/payment-notification', (req, res) => {
  const notification = req.body;
  
  if (notification.transaction_status === 'settlement') {
    // Update user ke premium
    updateUserToPremium(notification.order_id);
  }
  
  res.status(200).send('OK');
});
```

## Harga & Fee

### Paket Premium Binn AI
- **Harga**: Rp 99.000/bulan
- **Fee Midtrans**: ~2.900 (2.9%)
- **Diterima**: ~96.100

### Struktur Harga Alternatif
- 1 Bulan: Rp 99.000
- 3 Bulan: Rp 249.000 (hemat 17%)
- 12 Bulan: Rp 799.000 (hemat 33%)

## Keamanan & Compliance

### Wajib Dilakukan:
1. **SSL Certificate**: Gunakan HTTPS untuk semua halaman
2. **Data Encryption**: Jangan simpan data kartu kredit
3. **PCI DSS Compliance**: Payment gateway handle ini
4. **Webhook Verification**: Validasi callback dari Midtrans
5. **Log Transaksi**: Simpan semua aktivitas pembayaran

### Best Practices:
- Jangan expose API keys di frontend
- Gunakan environment variables
- Implementasi rate limiting
- Monitor transaksi mencurigakan
- Backup data transaksi rutin

## Testing

### Sandbox/Testing Mode
Midtrans menyediakan mode testing dengan nomor kartu dan e-wallet dummy:
- **DANA Test**: 081234567890
- **OVO Test**: 081234567891
- **GoPay Test**: Scan QR code akan auto-approve

### Test Scenario Checklist:
- [ ] Pembayaran sukses
- [ ] Pembayaran pending
- [ ] Pembayaran gagal
- [ ] Timeout pembayaran
- [ ] Refund
- [ ] Webhook callback

## Alternatif: Trickle Database untuk Tracking

Jika belum siap integrasi payment gateway, gunakan Trickle Database untuk tracking order manual:

```javascript
// Simpan request upgrade
const order = await trickleCreateObject('payment_order', {
  userId: currentUser.id,
  plan: 'premium',
  amount: 99000,
  status: 'pending',
  method: 'manual_transfer',
  createdAt: new Date().toISOString()
});

// Admin verifikasi manual, lalu update status
await trickleUpdateObject('payment_order', order.objectId, {
  status: 'completed',
  verifiedAt: new Date().toISOString()
});
```

## Support & Resources

- **Midtrans Docs**: https://docs.midtrans.com
- **Midtrans Discord**: https://discord.gg/midtrans
- **Email Support**: support@midtrans.com
- **Phone**: +62 21 2931 2222

## Kesimpulan

Gunakan payment gateway resmi untuk:
- Keamanan data user
- Otomasi proses pembayaran
- Laporan keuangan yang jelas
- Skalabilitas bisnis
- Kepercayaan user

Jangan gunakan nomor rekening/e-wallet pribadi karena:
- Tidak profesional
- Sulit tracking
- Risiko keamanan tinggi
- Tidak scalable
- Masalah legal & pajak