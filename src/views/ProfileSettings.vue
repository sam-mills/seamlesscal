<template>
  <div v-if="loading" class="flex min-h-[400px] items-center justify-center text-muted-foreground">
    <div class="flex flex-col items-center gap-2">
      <span class="animate-pulse text-sm font-medium">Loading user account profiles...</span>
    </div>
  </div>

  <div v-else class="max-w-7xl mx-auto p-6 space-y-8 animate-fade-in">
    <header class="border-b border-slate-200 dark:border-zinc-800 pb-5">
      <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
        Account Profile & System Settings
      </h1>
      <p class="text-sm text-slate-500 dark:text-zinc-400 mt-1">
        Manage corporate identity variables, account limits, and data pipelines.
      </p>
    </header>

    <div
      v-if="status.message"
      :class="[
        'p-3 rounded-lg text-xs font-semibold tracking-wide border animate-fade-in flex items-start gap-2.5 shadow-sm',
        status.type === 'success'
          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
          : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400',
      ]"
    >
      <svg
        v-if="status.type === 'error'"
        class="w-4 h-4 shrink-0 mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <svg
        v-else
        class="w-4 h-4 shrink-0 mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>{{ status.message }}</div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-6">
        <Card
          class="p-6 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm space-y-6"
        >
          <h3
            class="text-base font-semibold text-slate-900 dark:text-zinc-100 border-b border-slate-100 dark:border-zinc-800/60 pb-3"
          >
            Profile Metadata
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <Label
                class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400"
                >Display / Corporate Name</Label
              >
              <input
                v-model="profile.displayName"
                type="text"
                placeholder="e.g. Apsley Consulting Ltd"
                class="w-full text-sm rounded-md border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              />
            </div>

            <div class="space-y-2">
              <Label
                class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400"
                >Primary Business Timezone</Label
              >
              <select
                v-model="profile.timezone"
                class="w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="UTC">UTC / Greenwich Mean Time</option>
                <option value="Europe/London">Europe/London (BST/GMT)</option>
                <option value="America/New_York">America/New_York (EST/EDT)</option>
                <option value="America/Los_Angeles">America/Los_Angeles (PST/PDT)</option>
                <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
              </select>
            </div>
          </div>

          <div class="space-y-2">
            <Label
              class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400"
              >Corporate Avatar or Logo URL</Label
            >
            <input
              v-model="profile.logoUrl"
              type="text"
              placeholder="https://yourwebsite.com/assets/logo.png"
              class="w-full text-sm rounded-md border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
            />
          </div>

          <div class="flex justify-end pt-2">
            <Button
              @click="saveProfileData"
              :disabled="updating"
              class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs h-9 px-5 transition-all cursor-pointer"
            >
              {{ updating ? 'Updating profile index...' : 'Save Profile Changes' }}
            </Button>
          </div>
        </Card>

        <Card
          class="border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden"
        >
          <div
            class="p-6 border-b border-slate-100 dark:border-zinc-800/60 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
          >
            <div>
              <h3 class="text-base font-semibold text-slate-900 dark:text-zinc-100">
                Source Calendar Accounts
              </h3>
              <p class="text-xs text-slate-400 dark:text-zinc-500 mt-0.5">
                Connect the external Google accounts used to query availability event streams.
              </p>
            </div>

            <Button
              @click.prevent="connectGoogleCalendar"
              class="bg-zinc-50 dark:bg-zinc-950 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-900 shadow-sm text-xs font-semibold h-9 px-4 cursor-pointer transition-colors"
            >
              <svg class="w-4 h-4 mr-2 inline-block" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Connect a Google Account
            </Button>
          </div>

          <div class="p-6 overflow-x-auto">
            <table class="w-full text-sm text-left">
              <thead
                class="text-xs text-slate-500 dark:text-zinc-400 uppercase bg-slate-50 dark:bg-zinc-950/50"
              >
                <tr>
                  <th class="px-4 py-3 rounded-tl-md">Account Email</th>
                  <th class="px-4 py-3">Link Status</th>
                  <th class="px-4 py-3 text-right rounded-tr-md">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="globalAccounts.length === 0">
                  <td
                    colspan="3"
                    class="px-4 py-10 text-center text-slate-400 dark:text-zinc-500 font-medium"
                  >
                    No authenticated Google Identities synced to this account profile index.
                  </td>
                </tr>
                <tr
                  v-else
                  v-for="account in globalAccounts"
                  :key="account.id"
                  class="border-b border-slate-100 dark:border-zinc-800/50 hover:bg-slate-50/50 dark:hover:bg-zinc-950/30 transition-colors"
                >
                  <td class="px-4 py-4 font-medium text-slate-900 dark:text-slate-100">
                    {{ account.email }}
                  </td>
                  <td class="px-4 py-4">
                    <span
                      class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 uppercase"
                    >
                      Authorized Key Active
                    </span>
                  </td>
                  <td class="px-4 py-4 text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      class="h-8 text-xs font-medium cursor-pointer"
                      @click.prevent="disconnectAccount(account)"
                    >
                      Disconnect
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div class="space-y-6">
        <Card
          class="p-6 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm space-y-4"
        >
          <h3 class="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
            Subscription & Plan Bounds
          </h3>

          <div
            :class="[
              'p-4 rounded-xl border flex items-center justify-between transition-colors',
              profile.planTier === 'pro'
                ? 'bg-emerald-500/5 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-950/40'
                : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800',
            ]"
          >
            <div>
              <p
                class="text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wide"
              >
                Active Account Rank
              </p>
              <h4
                :class="[
                  'text-xl font-bold mt-0.5 capitalize',
                  profile.planTier === 'pro'
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-zinc-500 dark:text-zinc-300',
                ]"
              >
                {{ profile.planTier === 'pro' ? 'Pro Hub' : 'Free Sandbox' }} Tier
              </h4>
            </div>
            <span
              :class="[
                'px-2 py-1 text-white rounded-full text-[10px] font-bold tracking-wider uppercase',
                profile.planTier === 'pro' ? 'bg-emerald-500' : 'bg-zinc-500',
              ]"
            >
              {{ profile.planTier === 'pro' ? 'Active' : 'Sandbox' }}
            </span>
          </div>

          <div class="space-y-2 text-xs text-slate-600 dark:text-zinc-400 pt-2">
            <div
              class="flex justify-between border-b border-slate-100 dark:border-zinc-800/50 pb-2"
            >
              <span class="font-medium text-slate-400">Total Synchronized Calendars:</span>
              <span class="font-bold text-slate-900 dark:text-zinc-100">
                {{ globalAccounts.length }} Linked
              </span>
            </div>

            <div
              class="flex justify-between border-b border-slate-100 dark:border-zinc-800/50 pb-2"
            >
              <span class="font-medium text-slate-400">System API Allocation Limits:</span>
              <span
                v-if="profile.planTier === 'pro'"
                class="font-bold text-emerald-600 dark:text-emerald-400"
              >
                Unlimited Calls
              </span>
              <span v-else class="font-bold text-zinc-700 dark:text-zinc-300">
                {{ profile.apiCount || 0 }} / 500 Calls
              </span>
            </div>
          </div>

          <Button
            @click="router.push('/dashboard/upgrade')"
            class="w-full mt-2 text-xs font-bold bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-white cursor-pointer h-9"
          >
            {{ profile.planTier === 'pro' ? 'Manage Billing Account' : 'Upgrade Account Plan ✨' }}
          </Button>
        </Card>
      </div>

      <ConfirmModal
        :is-open="isDisconnectModalOpen"
        title="Sever Google Integration"
        :message="`Are you sure you want to disconnect ${pendingAccountToDisconnect?.email || 'this account'}? Your embedded widgets using this source will stop syncing immediately.`"
        confirm-text="Disconnect"
        cancel-text="Keep Link Active"
        :is-destructive="true"
        @confirm="handleConfirmDisconnect"
        @cancel="isDisconnectModalOpen = false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '@/firebase'
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import ConfirmModal from '@/components/ui/ConfirmModal.vue'

const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
})

const router = useRouter()
const loading = ref(true)
const updating = ref(false)
const globalAccounts = ref([])

const emit = defineEmits(['profile-updated'])

const isDisconnectModalOpen = ref(false)
const pendingAccountToDisconnect = ref(null)

const status = reactive({
  message: '',
  type: 'success',
})

let autoClearTimeout = null
let googleAuthClient = null

const profile = reactive({
  displayName: '',
  timezone: 'Europe/London',
  logoUrl: '',
  planTier: 'free',
  apiCount: 0,
})

const fetchUserProfileAndIntegrations = async () => {
  try {
    const q = query(collection(db, 'connections'), where('ownerUid', '==', props.userId))
    const querySnapshot = await getDocs(q)
    const accounts = []
    querySnapshot.forEach((doc) => {
      accounts.push({ id: doc.id, email: doc.data().googleEmail })
    })
    globalAccounts.value = accounts

    const userDocRef = doc(db, 'users', props.userId)
    const userSnap = await getDoc(userDocRef)

    if (userSnap.exists()) {
      const data = userSnap.data()
      Object.assign(profile, {
        displayName: data.displayName || '',
        timezone: data.timezone || 'Europe/London',
        logoUrl: data.logoUrl || '',
        planTier: data.planTier || 'free',
        apiCount: data.apiCount || 0,
      })
    }
  } catch (err) {
    console.error('Failed processing administrative user metadata indices:', err)
  } finally {
    loading.value = false
  }
}

const connectGoogleCalendar = () => {
  if (autoClearTimeout) clearTimeout(autoClearTimeout)
  status.message = ''

  if (!googleAuthClient) {
    status.type = 'error'
    status.message =
      'Google identity platform library failed to initialize. Please refresh the page workspace.'
    return
  }
  googleAuthClient.requestCode()
}

const disconnectAccount = (account) => {
  if (autoClearTimeout) clearTimeout(autoClearTimeout)
  status.message = ''
  pendingAccountToDisconnect.value = account
  isDisconnectModalOpen.value = true
}

const handleConfirmDisconnect = async () => {
  const account = pendingAccountToDisconnect.value
  if (!account) return

  isDisconnectModalOpen.value = false
  pendingAccountToDisconnect.value = null
  loading.value = true

  try {
    const functionsInstance = getFunctions(db.app)
    const disconnectCall = httpsCallable(functionsInstance, 'disconnectCalendar')
    await disconnectCall({ email: account.email })

    await fetchUserProfileAndIntegrations()

    status.type = 'success'
    status.message = `Google account integration context (${account.email}) severed successfully.`

    autoClearTimeout = setTimeout(() => {
      status.message = ''
    }, 6000)
  } catch (err) {
    console.error('Failed to tear down connection link:', err)
    status.type = 'error'
    status.message = `Disconnection sequence interrupted: ${err.message}`
  } finally {
    loading.value = false
  }
}

const saveProfileData = async () => {
  if (autoClearTimeout) clearTimeout(autoClearTimeout)
  status.message = ''

  if (profile.logoUrl && profile.logoUrl.trim() !== '') {
    try {
      const url = new URL(profile.logoUrl)
      if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        status.type = 'error'
        status.message = 'Security Error: Only secure web image links (http/https) are authorized.'
        return
      }

      const pathname = url.pathname.toLowerCase()
      const dangerousExtensions = ['.js', '.html', '.php', '.pdf', '.zip', '.exe', '.txt', '.json']
      const isInvalidType = dangerousExtensions.some((ext) => pathname.endsWith(ext))

      if (isInvalidType) {
        status.type = 'error'
        status.message =
          'Validation Error: The provided link points to a document or script, not an image layout file.'
        return
      }
    } catch (e) {
      status.type = 'error'
      status.message = 'Invalid Configuration: Please provide a valid, structured web URL link.'
      return
    }
  }

  updating.value = true
  try {
    const userDocRef = doc(db, 'users', props.userId)
    await setDoc(
      userDocRef,
      {
        uid: props.userId,
        displayName: profile.displayName,
        timezone: profile.timezone,
        logoUrl: profile.logoUrl,
        updatedAt: new Date().toISOString(),
      },
      { merge: true },
    )

    updating.value = false
    status.type = 'success'
    status.message = 'Account profile criteria synchronized successfully!'

    emit('profile-updated')

    autoClearTimeout = setTimeout(() => {
      status.message = ''
    }, 4000)
  } catch (err) {
    updating.value = false
    console.error('Failed locking configuration down to Firestore collection:', err)
    status.type = 'error'
    status.message = 'Profile error update failure: ' + err.message
  }
}

onMounted(async () => {
  await fetchUserProfileAndIntegrations()

  if (window.google) {
    googleAuthClient = window.google.accounts.oauth2.initCodeClient({
      client_id: '415247533936-e569avvi75k2kod4q9nbhecsqojts65n.apps.googleusercontent.com',
      scope:
        'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.email',
      ux_mode: 'popup',
      callback: async (response) => {
        if (autoClearTimeout) clearTimeout(autoClearTimeout)
        status.message = ''

        if (response.error) {
          status.type = 'error'
          status.message = `Google initialization flow cancelled: ${response.error}`
          return
        }

        if (response.code) {
          try {
            const functionsInstance = getFunctions(db.app)
            const exchangeFunction = httpsCallable(functionsInstance, 'exchangeAuthCodeForTokens')
            const result = await exchangeFunction({ code: response.code })

            status.type = 'success'
            status.message = `Google Calendar link verification confirmed for profile: ${result.data.email}`

            await fetchUserProfileAndIntegrations()

            autoClearTimeout = setTimeout(() => {
              status.message = ''
            }, 6000)
          } catch (handshakeError) {
            status.type = 'error'
            status.message = `Identity verification handshake failure: ${handshakeError.message}`
          }
        }
      },
    })
  }
})
</script>

<style scoped></style>
