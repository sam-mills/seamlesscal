<template>
  <div
    class="min-h-screen bg-slate-50 p-6 dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 flex flex-col"
  >
    <nav
      class="bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 px-6 py-3 flex items-center justify-between shadow-sm rounded-xl mb-6"
    >
      <div class="flex items-center gap-2">
        <span
          class="text-sm font-bold tracking-tight text-emerald-600 dark:text-emerald-400 font-mono uppercase"
          >Portal Workspace</span
        >
      </div>
      <div class="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
        <RouterLink
          to="/dashboard"
          class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >🎨 Customizer</RouterLink
        >
        <RouterLink
          to="/dashboard/bookings"
          class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >📋 Bookings</RouterLink
        >
        <RouterLink
          to="/dashboard/profile"
          class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >👤 Profile</RouterLink
        >
      </div>
      <router-link to="/dashboard/upgrade" class="nav-item">
        <span class="icon">✨</span>
        <span class="label">
          {{ currentTier === 'free' ? 'Upgrade Plan' : 'Billing & Subscription' }}
        </span>
      </router-link>
    </nav>

    <main class="flex-grow">
      <RouterView :user-id="userId" />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

// 🆕 CHANGED: Explicitly catch the userId prop from App.vue so we can pass it down
defineProps({
  userId: {
    type: String,
    required: true,
  },
})
</script>
