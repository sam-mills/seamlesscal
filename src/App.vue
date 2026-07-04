<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 relative">
    <AuthGate v-if="!currentUserId" @auth-success="handleAuthStateSet" />

    <div v-else class="min-h-screen flex flex-col">
      <nav
        class="border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-md px-6 py-3 flex items-center justify-between h-14 select-none z-40"
      >
        <div class="flex items-center gap-4">
          <div
            @click="activeTab = 'customizer'"
            class="flex items-center gap-2 cursor-pointer group"
            title="Return to Customizer"
          >
            <span
              class="w-2.5 h-2.5 bg-emerald-500 rounded-full group-hover:scale-110 transition-transform animate-pulse"
            ></span>
            <span
              class="text-sm font-bold tracking-tight text-white uppercase font-mono group-hover:text-emerald-400 transition-colors"
              >SeamlessCal</span
            >
          </div>

          <button
            v-if="activeTab === 'profile'"
            @click="activeTab = 'customizer'"
            class="animate-fade-in flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-md transition-all cursor-pointer shadow-sm h-8"
          >
            <svg
              class="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Customizer
          </button>
        </div>

        <div class="flex items-center gap-3">
          <button
            @click="activeTab = 'profile'"
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center shadow-sm border transition-all cursor-pointer overflow-hidden group/avatar p-0',
              activeTab === 'profile'
                ? 'bg-emerald-600 border-emerald-500 ring-2 ring-emerald-500/20 scale-105'
                : 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600',
            ]"
            title="Account Profile & Settings"
          >
            <img
              v-if="userProfile.logoUrl"
              :src="userProfile.logoUrl"
              alt="Profile Logo"
              class="w-full h-full object-cover"
              @error="userProfile.logoUrl = ''"
            />
            <svg
              v-else
              :class="[
                'w-4 h-4 transition-colors',
                activeTab === 'profile'
                  ? 'text-white'
                  : 'text-zinc-400 group-hover/avatar:text-zinc-200',
              ]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <button
            @click="triggerLogoutPrompt"
            class="text-xs font-semibold h-8 px-3.5 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 text-zinc-200 hover:text-white rounded-md border border-zinc-700 hover:border-zinc-600 shadow-sm transition-all cursor-pointer flex items-center justify-center"
          >
            Logout
          </button>
        </div>
      </nav>

      <main class="flex-grow z-10">
        <Dashboard
          v-if="activeTab === 'customizer'"
          :user-id="currentUserId"
          @sign-out="triggerLogoutPrompt"
        />

        <ProfileSettings
          v-if="activeTab === 'profile'"
          :user-id="currentUserId"
          @profile-updated="fetchGlobalNavbarAvatar(currentUserId)"
        />
      </main>
    </div>

    <ConfirmModal
      :is-open="isLogoutModalOpen"
      title="Terminate Session"
      message="Are you sure you want to log out of SeamlessCal? You will need to authenticate again to update widget tokens."
      confirm-text="Logout"
      cancel-text="Stay Logged In"
      :is-destructive="true"
      @confirm="handleConfirmSignOut"
      @cancel="isLogoutModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { auth, db } from '@/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import AuthGate from '@/components/AuthGate.vue'
import Dashboard from '@/components/Dashboard.vue'
import ProfileSettings from '@/views/ProfileSettings.vue'
import ConfirmModal from '@/components/ui/ConfirmModal.vue'

const currentUserId = ref(null)
const activeTab = ref('customizer')
const isLogoutModalOpen = ref(false)

const userProfile = reactive({
  logoUrl: '',
})

async function fetchGlobalNavbarAvatar(uid) {
  if (!uid) return
  try {
    const userDocRef = doc(db, 'users', uid)
    const userSnap = await getDoc(userDocRef)
    if (userSnap.exists()) {
      const data = userSnap.data()
      userProfile.logoUrl = data.logoUrl || ''
    }
  } catch (err) {
    console.error('Failed syncing global navbar avatar index:', err)
  }
}

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUserId.value = user.uid
      await fetchGlobalNavbarAvatar(user.uid) // Initial boot load
    } else {
      currentUserId.value = null
      userProfile.logoUrl = ''
    }
  })
})

function handleAuthStateSet(uid) {
  currentUserId.value = uid
}

function triggerLogoutPrompt() {
  isLogoutModalOpen.value = true
}

function handleConfirmSignOut() {
  isLogoutModalOpen.value = false
  signOut(auth)
}
</script>
