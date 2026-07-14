<template>
  <div class="success-container">
    <div class="success-card">
      <div class="icon-burst">
        <span class="checkmark">✓</span>
      </div>

      <div class="header-section">
        <h1>Welcome to Professional Hub</h1>
        <p class="invoice-meta" v-if="sessionId">Session Token Authenticated</p>
      </div>

      <hr class="divider" />

      <div class="feature-unlocked-box">
        <h3>🚀 Your New Premium Engine Assets:</h3>
        <ul class="perk-list">
          <li>
            <span class="icon">✨</span>
            <div>
              <strong>Transactional Booking Pipeline Activated</strong>
              <p>
                Clients can now select slots, submit metadata notes, and populate your schedule
                matrix live.
              </p>
            </div>
          </li>
          <li>
            <span class="icon">⚡</span>
            <div>
              <strong>Realtime Google Calendar Integration</strong>
              <p>
                Confirmed reservations bypass queues and write straight to your synchronized Google
                cloud calendar logs.
              </p>
            </div>
          </li>
          <li>
            <span class="icon">🎨</span>
            <div>
              <strong>Advanced Canvas Layout Customizations</strong>
              <p>
                Full design authority over custom border radius tokens, geometric constraints, and
                premium typography structures.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="action-footer">
        <router-link to="/dashboard/customizer" class="cta-btn primary-cta">
          Configure Your Live Widget Now
        </router-link>
        <router-link to="/dashboard" class="cta-btn secondary-cta">
          Go to Main Workspace Overview
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const sessionId = computed(() => route.query.session_id || '')
</script>

<style scoped>
.success-container {
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  background-color: #fafafa;
}
.dark .success-container {
  background-color: #09090b;
}

.success-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  max-width: 580px;
  width: 100%;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}
.dark .success-card {
  background: #121214;
  border-color: #27272a;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
}

.icon-burst {
  width: 64px;
  height: 64px;
  background-color: #ecfdf5;
  border: 2px solid #a7f3d0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
}
.dark .icon-burst {
  background-color: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.2);
}

.checkmark {
  color: #10b981;
  font-size: 1.75rem;
  font-weight: 700;
}

.header-section h1 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
}
.dark .header-section h1 {
  color: #f4f4f5;
}

.header-section p {
  color: #64748b;
  font-size: 0.95rem;
}
.dark .header-section p {
  color: #a1a1aa;
}

.invoice-meta {
  font-family: monospace;
  font-size: 0.75rem !important;
  background: #f1f5f9;
  padding: 4px 10px;
  border-radius: 6px;
  display: inline-block;
  margin-top: 4px;
  color: #475569 !important;
}
.dark .invoice-meta {
  background: #1a1a1e;
  color: #71717a !important;
}

.divider {
  border: 0;
  border-top: 1px dashed #e2e8f0;
  margin: 30px 0;
}
.dark .divider {
  border-top-color: #27272a;
}

.feature-unlocked-box {
  text-align: left;
  margin-bottom: 35px;
}

.feature-unlocked-box h3 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  font-weight: 700;
  margin-bottom: 20px;
}

.perk-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.perk-list li {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.perk-list .icon {
  font-size: 1.25rem;
  line-height: 1;
  padding-top: 2px;
}

.perk-list strong {
  display: block;
  font-size: 0.95rem;
  color: #1e293b;
  font-weight: 600;
}
.dark .perk-list strong {
  color: #e4e4e7;
}

.perk-list p {
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 4px;
  line-height: 1.5;
}
.dark .perk-list p {
  color: #71717a;
}

.action-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.15s ease;
}

.primary-cta {
  background-color: #1e6b7b;
  color: #ffffff;
}
.primary-cta:hover {
  background-color: #154d59;
}

.secondary-cta {
  background-color: transparent;
  color: #475569;
  border: 1px solid #cbd5e1;
}
.dark .secondary-cta {
  color: #a1a1aa;
  border-color: #27272a;
}
.secondary-cta:hover {
  background-color: #f8fafc;
}
.dark .secondary-cta:hover {
  background-color: #18181b;
}
</style>
