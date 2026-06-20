<template>
  <div class="min-h-screen bg-slate-950">
    <AuthGate v-if="!currentUserId" @auth-success="handleAuthStateSet" />

    <div v-else class="min-h-screen">
      <Dashboard :user-id="currentUserId" @sign-out="handleUserSignOut" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '@/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import AuthGate from '@/components/AuthGate.vue'
import Dashboard from '@/components/Dashboard.vue'

const currentUserId = ref(null)

onMounted(() => {
  // Establish an active listener stream that monitors user authentication sessions natively
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUserId.value = user.uid
    } else {
      currentUserId.value = null
    }
  })
})

function handleAuthStateSet(uid) {
  currentUserId.value = uid
}

function handleUserSignOut() {
  if (confirm('Are you sure you want to sign out of SeamlessCal?')) {
    signOut(auth)
  }
}
</script>
