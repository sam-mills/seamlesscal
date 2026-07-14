<template>
  <div class="upgrade-container">
    <div class="header-section">
      <h1>Choose Your Plan</h1>
      <p>Scale your local business schedule management without administrative drag.</p>
    </div>

    <div class="pricing-grid">
      <div class="pricing-card" :class="{ 'current-plan': currentTier === 'free' }">
        <div class="card-header">
          <h3>Standard Base</h3>
          <div class="price-display">
            <span class="currency">$</span>
            <span class="amount">0</span>
            <span class="period">/mo</span>
          </div>
        </div>
        <ul class="feature-list">
          <li>✓ 1 Active Calendar Link Widget</li>
          <li>✓ Automated Booking Acceptances</li>
          <li>✓ Standard Database Cache Renders</li>
          <li>✗ Advanced Client Pre-Review Holds</li>
        </ul>
        <button class="action-btn text-muted" disabled>
          {{ currentTier === 'free' ? 'Your Current Active Tier' : 'Downgrade via Billing Portal' }}
        </button>
      </div>

      <div class="pricing-card premium" :class="{ 'current-plan': currentTier === 'pro' }">
        <div class="badge-ribbon">Most Popular</div>
        <div class="card-header">
          <h3>Professional Hub</h3>
          <div class="price-display">
            <span class="currency">$</span>
            <span class="amount">15</span>
            <span class="period">/mo</span>
          </div>
        </div>
        <ul class="feature-list">
          <li>✓ Unlimited Active Calendar Link Widgets</li>
          <li>✓ Complete Manual "Penciled-In" Pre-Reviews</li>
          <li>✓ High-Priority Realtime API Sync Streams</li>
          <li>✓ Custom Client Response Note Injections</li>
        </ul>

        <button @click="handleProAction" :disabled="loading" class="action-btn call-to-action">
          <span v-if="loading" class="spinner"></span>
          <span v-else>{{
            currentTier === 'pro' ? 'Manage Subscription Options' : 'Upgrade to Professional Hub'
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth'
import { getFirestore, doc, onSnapshot } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions'

export default {
  name: 'UpgradeView',
  data() {
    return {
      currentTier: 'free', // Defaults to fallback configuration tier state
      loading: false,
      userDocListener: null,
    }
  },
  mounted() {
    const auth = getAuth()
    const db = getFirestore()

    if (auth.currentUser) {
      // Establish dynamic client profile metadata streams
      this.userDocListener = onSnapshot(doc(db, 'users', auth.currentUser.uid), (snapshot) => {
        if (snapshot.exists()) {
          this.currentTier = snapshot.data().planTier || 'free'
        }
      })
    }
  },
  unmounted() {
    // Teardown long-lived active memory stream configurations cleanly
    if (this.userDocListener) {
      this.userDocListener()
    }
  },
  methods: {
    async handleProAction() {
      this.loading = true
      const functions = getFunctions()

      try {
        if (this.currentTier === 'pro') {
          // User is already pro, route them straight to the customer profile billing portal
          const getPortalSession = httpsCallable(functions, 'createBillingPortal')
          const result = await getPortalSession()
          if (result.data && result.data.url) {
            window.location.href = result.data.url
          }
        } else {
          // User is on free tier, route them safely to Stripe checkout portal session setup
          const getCheckoutSession = httpsCallable(functions, 'createCheckoutSession')
          const result = await getCheckoutSession()
          if (result.data && result.data.url) {
            window.location.href = result.data.url
          }
        }
      } catch (error) {
        console.error('Portal Pipeline Transfer Failure:', error.message)
        alert('Failed execution routing request context to checkout endpoint handlers.')
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.upgrade-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  color: #0f172a;
}
.header-section {
  text-align: center;
  margin-bottom: 50px;
}
.header-section h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 12px;
}
.header-section p {
  color: #64748b;
  font-size: 1.1rem;
}
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  align-items: stretch;
}
.pricing-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 35px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.2s ease;
}
.pricing-card.premium {
  border: 2px solid #1e6b7b;
  box-shadow: 0 10px 25px -5px rgba(30, 107, 123, 0.1);
}
.pricing-card.current-plan {
  border-color: #10b981;
}
.badge-ribbon {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #1e6b7b;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}
.card-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
}
.price-display {
  margin-bottom: 25px;
}
.price-display .currency {
  font-size: 1.5rem;
  font-weight: 700;
  vertical-align: top;
}
.price-display .amount {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
}
.price-display .period {
  color: #64748b;
  font-size: 1rem;
}
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 35px 0;
  flex-grow: 1;
}
.feature-list li {
  padding: 10px 0;
  border-bottom: 1px dashed #f1f5f9;
  font-size: 0.95rem;
  color: #334155;
}
.action-btn {
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}
.action-btn:disabled {
  background: #f1f5f9;
  color: #94a3b8;
  cursor: not-allowed;
}
.call-to-action {
  background: #1e6b7b;
  color: #ffffff;
}
.call-to-action:hover {
  background: #154d59;
}
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
