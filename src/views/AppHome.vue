<template>
  <div class="gateway-wrapper">
    <div class="glow-effect"></div>

    <div class="content-box">
      <div class="logo-area">
        <span class="status-dot"></span>
        <h1 class="brand-title">SEAMLESSCAL</h1>
      </div>

      <div class="text-area">
        <h2>Welcome to your scheduling hub</h2>
        <p>
          Access your widgets, coordinate client availability, and manage your Professional
          subscription settings.
        </p>
      </div>

      <div class="action-stack">
        <router-link to="/dashboard" class="btn primary-btn"> Go to App Dashboard ⚡ </router-link>

        <a href="https://seamlesscal.com" class="btn secondary-btn"> Back to main website </a>
      </div>

      <div class="gateway-footer">
        <span>app.seamlesscal.com</span>
        <span class="divider">•</span>
        <span>Secure Session Infrastructure</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gateway-wrapper {
  min-height: calc(100vh - 64px); /* Accounts for your header bar */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09090b; /* Dark zinc/slate background matching your layout */
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.glow-effect {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(30, 107, 123, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.content-box {
  background: #121214;
  border: 1px solid #27272a;
  border-radius: 16px;
  padding: 40px;
  max-width: 480px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.logo-area {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 30px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
}

.brand-title {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #a1a1aa;
}

.text-area h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f4f4f5;
  margin-bottom: 12px;
}

.text-area p {
  font-size: 0.9rem;
  color: #71717a;
  line-height: 1.6;
  margin-bottom: 35px;
}

.action-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 35px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.primary-btn {
  background: #1e6b7b;
  color: white;
}

.primary-btn:hover {
  background: #154d59;
}

.secondary-btn {
  background: transparent;
  color: #e4e4e7;
  border: 1px solid #27272a;
}

.secondary-btn:hover {
  background: #18181b;
  border-color: #3f3f46;
}

.gateway-footer {
  font-size: 0.75rem;
  color: #52525b;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.divider {
  color: #27272a;
}
</style>
