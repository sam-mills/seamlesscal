<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-white">
    <Card
      class="w-full max-w-md p-8 bg-zinc-900 border-zinc-800 shadow-2xl space-y-6 text-center animate-fade-in"
    >
      <!-- Lottie-style Animated Success Ring -->
      <div
        class="relative flex items-center justify-center mx-auto w-20 h-20 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-4xl text-emerald-400 animate-bounce"
      >
        ✨
      </div>

      <div class="space-y-2">
        <h1 class="text-2xl font-extrabold tracking-tight text-white">System Upgrade Verified!</h1>
        <p class="text-sm text-zinc-400">
          Your SeamlessCal account is now synchronized with our **Pro Hub** engine.
        </p>
      </div>

      <!-- Live Plan Status Summary Box -->
      <div class="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800 text-left space-y-2.5">
        <div class="flex justify-between items-center text-xs">
          <span class="text-zinc-500">Subscription Status:</span>
          <span
            class="text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]"
            >Active</span
          >
        </div>
        <div class="flex justify-between items-center text-xs border-t border-zinc-800/60 pt-2.5">
          <span class="text-zinc-500">Activated Tier:</span>
          <span class="text-zinc-200 font-bold">Pro Workspace ($15/mo)</span>
        </div>
        <div class="flex justify-between items-center text-xs border-t border-zinc-800/60 pt-2.5">
          <span class="text-zinc-500">Unlocked Features:</span>
          <span class="text-zinc-300 font-medium">Holds, Custom Templates, Live Sync</span>
        </div>
      </div>

      <div class="space-y-3 pt-2">
        <Button
          @click="router.push('/dashboard')"
          class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-10 shadow-lg shadow-emerald-900/20 transition-all text-xs cursor-pointer"
        >
          Launch Appointment Workspace
        </Button>

        <p class="text-[10px] text-zinc-500">
          Sync processes typically take less than 10 seconds. If your dashboard does not show "Pro"
          instantly, please refresh your browser.
        </p>
      </div>
    </Card>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const router = useRouter()
const route = useRoute()

onMounted(async () => {
  const sessionId = route.query.session_id

  if (!sessionId) {
    console.warn('No active Stripe checkout session ID found in route query parameters.')
    // If they try to manual-route to success without paying, bounce them back to the upgrade gate
    router.push('/dashboard/upgrade')
  }
})
</script>
