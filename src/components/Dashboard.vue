<template>
  <div v-if="loading" class="flex min-h-screen items-center justify-center text-muted-foreground">
    <div class="flex flex-col items-center gap-2">
      <span class="animate-pulse text-sm font-medium">Initializing customization engine...</span>
    </div>
  </div>

  <div
    v-else
    :style="{
      '--calendar-primary': settings.primaryColor,
      '--calendar-accent': settings.accentColor,
      '--calendar-bg-event': settings.eventBgColor,
    }"
    class="min-h-screen bg-slate-50 p-6 dark:bg-zinc-950 text-slate-900 dark:text-zinc-50"
  >
    <header
      class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 dark:border-zinc-800 pb-5 gap-4"
    >
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
          Widget Customizer
        </h1>
        <p class="text-xs text-slate-500 dark:text-zinc-400 font-mono mt-1">
          Tenant ID:
          <span class="text-emerald-600 dark:text-emerald-400 font-semibold">{{
            activeWidgetId
          }}</span>
        </p>
      </div>

      <div class="flex items-center gap-3 w-full sm:w-auto justify-end">
        <Button
          type="button"
          variant="outline"
          @click="$emit('sign-out')"
          class="border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs font-semibold h-9 px-4 transition-all cursor-pointer shadow-xs"
        >
          Sign Out
        </Button>

        <Button
          @click="saveWidgetSettings"
          :disabled="saving"
          variant="default"
          class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm transition-all text-xs h-9 px-4 cursor-pointer"
        >
          {{ saving ? 'Saving configurations...' : 'Save Settings' }}
        </Button>
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card
        class="p-6 shadow-sm bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 space-y-6 h-fit"
      >
        <div class="space-y-2">
          <Label class="text-sm font-semibold tracking-wide text-slate-900 dark:text-zinc-100"
            >Default Interactive View</Label
          >
          <div class="grid grid-cols-2 gap-2">
            <Button
              type="button"
              :variant="settings.defaultView === 'month' ? 'outline' : 'default'"
              @click="settings.defaultView = 'month'"
              class="w-full text-xs font-medium"
            >
              Month Grid
            </Button>
            <Button
              type="button"
              :variant="settings.defaultView === 'agenda' ? 'outline' : 'default'"
              @click="settings.defaultView = 'agenda'"
              class="w-full text-xs font-medium"
            >
              Agenda List
            </Button>
          </div>
          <div v-if="settings.defaultView === 'agenda'" class="space-y-2 mt-3 animate-fade-in">
            <Label
              class="text-xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider"
              >Visible Bookings Limit</Label
            >
            <select
              v-model.number="settings.agendaLimit"
              class="w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
            >
              <option v-for="n in 10" :key="n" :value="n">{{ n }} Items Max</option>
            </select>
          </div>
        </div>

        <div class="space-y-3 mb-2">
          <Label
            class="text-xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider"
          >
            Widget Name
          </Label>
          <input
            v-model="widgetName"
            type="text"
            placeholder="e.g. Homepage Booking Calendar"
            class="w-full text-sm rounded-md border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
          />
        </div>

        <div class="space-y-2">
          <Label class="text-sm font-semibold tracking-wide text-foreground">
            Target Calendar Source Account
          </Label>
          <div class="relative w-full">
            <select
              v-model="selectedCalendarEmail"
              class="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer"
            >
              <option value="" disabled selected v-if="connectedAccounts.length === 0">
                No accounts connected yet. Please link a Google Account below.
              </option>

              <option v-for="account in connectedAccounts" :key="account.id" :value="account.email">
                {{ account.email }}
              </option>
            </select>

            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground"
            >
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <p class="text-[11px] text-muted-foreground">
            This select index determines which secure token your public layout embeds use to query
            live events.
          </p>
        </div>

        <Separator class="my-4 border-slate-200 dark:border-zinc-800" />

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3
              class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500"
            >
              Theme Color Tokens
            </h3>
          </div>
          <div class="space-y-2 mt-4">
            <label class="text-sm font-semibold text-slate-900 dark:text-zinc-100">
              Base Widget Theme
            </label>
            <select
              v-model="settings.baseTheme"
              class="w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-700 cursor-pointer"
            >
              <option value="light">Light Mode (White Background)</option>
              <option value="dark">Dark Mode (Slate Background)</option>
              <option value="transparent">Transparent (Adapts to Host Website)</option>
            </select>
          </div>
          <div class="space-y-3 mb-4">
            <label class="text-xs font-semibold text-slate-600 dark:text-slate-300"
              >Quick Styling Presets</label
            >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                v-for="preset in colorPresets"
                :key="preset.name"
                @click="applyPreset(preset)"
                type="button"
                class="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-600 transition text-left text-xs text-slate-700 dark:text-slate-300 group cursor-pointer"
              >
                <div class="flex -space-x-1 shadow-sm">
                  <span
                    class="w-3.5 h-3.5 rounded-full border border-white dark:border-zinc-900"
                    :style="{ backgroundColor: preset.primary }"
                  ></span>
                  <span
                    class="w-3.5 h-3.5 rounded-full border border-white dark:border-zinc-900"
                    :style="{ backgroundColor: preset.accent }"
                  ></span>
                  <span
                    class="w-3.5 h-3.5 rounded-full border border-white dark:border-zinc-900"
                    :style="{ backgroundColor: preset.bgEvent }"
                  ></span>
                </div>
                <span
                  class="truncate group-hover:text-slate-900 dark:group-hover:text-white font-medium"
                  >{{ preset.name }}</span
                >
              </button>
            </div>
          </div>
          <div class="flex items-center justify-between gap-4">
            <div class="flex flex-col gap-0.5">
              <Label class="text-sm font-medium text-slate-900 dark:text-zinc-100"
                >Primary Brand</Label
              >
              <span class="text-xs text-slate-400 dark:text-zinc-500"
                >Headers and frame components</span
              >
            </div>
            <input
              type="color"
              v-model="settings.primaryColor"
              class="w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"
            />
          </div>

          <div class="flex items-center justify-between gap-4">
            <div class="flex flex-col gap-0.5">
              <Label class="text-sm font-medium text-slate-900 dark:text-zinc-100"
                >Accent Interaction</Label
              >
              <span class="text-xs text-slate-400 dark:text-zinc-500"
                >Dates numbers and highlights</span
              >
            </div>
            <input
              type="color"
              v-model="settings.accentColor"
              class="w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"
            />
          </div>

          <div class="flex items-center justify-between gap-4 mt-4">
            <div class="flex flex-col gap-0.5">
              <Label class="text-sm font-medium text-slate-900 dark:text-zinc-100"
                >Event Panel Tint</Label
              >
              <span class="text-xs text-slate-400 dark:text-zinc-500"
                >Background of event item nodes</span
              >
            </div>
            <input
              type="color"
              v-model="settings.eventBgColor"
              class="w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"
            />
          </div>

          <div class="flex items-center justify-between gap-4 mt-4">
            <div class="flex flex-col gap-0.5">
              <Label class="text-sm font-medium text-slate-900 dark:text-zinc-100">
                Header / UI Text
              </Label>
              <span class="text-xs text-slate-400 dark:text-zinc-500">
                Month headers and weekday labels
              </span>
            </div>
            <input
              type="color"
              v-model="settings.headerTextColor"
              class="w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"
            />
          </div>

          <div class="flex items-center justify-between gap-4 mt-4">
            <div class="flex flex-col gap-0.5">
              <Label class="text-sm font-medium text-slate-900 dark:text-zinc-100">
                Event Text Color
              </Label>
              <span class="text-xs text-slate-400 dark:text-zinc-500">
                Text inside the colored event chips
              </span>
            </div>
            <input
              type="color"
              v-model="settings.textColor"
              class="w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"
            />
          </div>
        </div>

        <Separator class="my-4 border-slate-200 dark:border-zinc-800" />

        <div class="space-y-4">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
            Geometric Configurations
          </h3>

          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-900 dark:text-zinc-100"
              >Element Border Radius</label
            >
            <select
              :value="settings.borderRadius"
              @change="(e) => (settings.borderRadius = e.target.value)"
              class="w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-700 cursor-pointer"
            >
              <option value="0px" class="bg-white dark:bg-zinc-950">
                Sharp Structural Boundaries (0px)
              </option>
              <option value="6px" class="bg-white dark:bg-zinc-950">
                Subtle Smooth Curves (6px)
              </option>
              <option value="12px" class="bg-white dark:bg-zinc-950">
                Highly Rounded Modern (12px)
              </option>
            </select>
          </div>

          <div class="space-y-2 mt-4">
            <label class="text-sm font-semibold text-slate-900 dark:text-zinc-100"
              >Typography Font Family Mapping</label
            >
            <select
              :value="settings.fontFamily"
              @change="(e) => (settings.fontFamily = e.target.value)"
              class="w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-700 cursor-pointer"
            >
              <option value="sans-serif" class="bg-white dark:bg-zinc-950">
                Modern Clean Sans-Serif
              </option>
              <option value="serif" class="bg-white dark:bg-zinc-950">Elegant Bookish Serif</option>
              <option value="mono" class="bg-white dark:bg-zinc-950">Technical Monospace</option>
            </select>
          </div>
        </div>
      </Card>

      <div class="lg:col-span-2 flex flex-col space-y-3">
        <Label class="text-sm font-semibold tracking-wide text-slate-700 dark:text-zinc-300">
          Live Client Workspace Preview Simulator
        </Label>

        <Card
          class="p-4 bg-slate-100 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm flex-grow min-h-[550px] overflow-hidden"
        >
          <iframe
            :key="`${activeWidgetId}-${selectedCalendarEmail}-${settings.baseTheme}-${settings.primaryColor}-${settings.accentColor}-${settings.eventBgColor}-${settings.textColor}-${settings.headerTextColor}-${settings.defaultView}-${settings.fontFamily}-${settings.borderRadius}-${settings.agendaLimit}`"
            :src="`/render-widget.html?id=${activeWidgetId}&calendarSourceEmail=${encodeURIComponent(selectedCalendarEmail)}&baseTheme=${settings.baseTheme}&primaryColor=${encodeURIComponent(settings.primaryColor)}&accentColor=${encodeURIComponent(settings.accentColor)}&eventBgColor=${encodeURIComponent(settings.eventBgColor)}&textColor=${encodeURIComponent(settings.textColor)}&headerTextColor=${encodeURIComponent(settings.headerTextColor)}&defaultView=${settings.defaultView}&fontFamily=${settings.fontFamily}&borderRadius=${settings.borderRadius}&agendaLimit=${settings.agendaLimit}`"
            class="w-full h-[500px] border-none bg-transparent"
            scrolling="no"
          ></iframe>
        </Card>

        <Card
          class="mt-8 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm"
        >
          <div
            class="p-5 md:p-6 border-b border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
          >
            <div>
              <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Source Calendar Accounts
              </h2>
              <p class="text-sm text-slate-500 dark:text-zinc-400 mt-1">
                Connect the Google accounts we should sync your calendar events from.
              </p>
            </div>

            <Button
              @click.prevent="connectGoogleCalendar"
              class="bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 shadow-sm"
            >
              <svg
                class="w-4 h-4 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
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

          <div class="p-5 md:p-6 space-y-6">
            <Separator class="border-slate-100 dark:border-zinc-900" />

            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left">
                <thead
                  class="text-xs text-slate-500 dark:text-zinc-400 uppercase bg-slate-50 dark:bg-zinc-900/50"
                >
                  <tr>
                    <th class="px-4 py-3 rounded-tl-md">Account Email</th>
                    <th class="px-4 py-3">Status</th>
                    <th class="px-4 py-3 text-right rounded-tr-md">Actions</th>
                  </tr>
                </thead>

                <tbody v-if="connectedAccounts.length === 0">
                  <tr>
                    <td
                      colspan="3"
                      class="px-4 py-10 text-center text-slate-400 dark:text-zinc-500 font-medium"
                    >
                      No authenticated Google Identities synced to this dashboard account index.
                    </td>
                  </tr>
                </tbody>

                <tbody v-else>
                  <tr
                    v-for="account in connectedAccounts"
                    :key="account.id"
                    class="border-b border-slate-100 dark:border-zinc-800/50 hover:bg-slate-50/50 dark:hover:bg-zinc-900/20 transition-colors"
                  >
                    <td class="px-4 py-4 font-medium text-slate-900 dark:text-slate-100">
                      {{ account.email }}
                    </td>
                    <td class="px-4 py-4">
                      <span
                        class="inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 uppercase"
                      >
                        Active
                      </span>
                    </td>
                    <td class="px-4 py-4 text-right">
                      <Button
                        variant="destructive"
                        size="sm"
                        class="h-8 text-xs font-medium"
                        @click.prevent="disconnectAccount(account)"
                      >
                        Disconnect
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
        <Card
          class="p-5 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm space-y-3"
        >
          <div class="flex items-center justify-between">
            <div class="space-y-0.5">
              <h4 class="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
                Embed Code Snippet
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Copy this code block and paste it into your website's HTML editor.
              </p>
            </div>
            <Button
              @click="copyEmbedCode"
              size="sm"
              class="bg-slate-200 dark:bg-zinc-100 hover:bg-slate-300 dark:hover:bg-zinc-200 text-slate-900 dark:text-zinc-900 text-xs font-bold transition-all px-3 py-1.5"
            >
              {{ copied ? 'Copied!' : 'Copy Snippet' }}
            </Button>
          </div>

          <div
            class="relative bg-slate-50 dark:bg-zinc-950 rounded-lg p-3 border border-slate-200 dark:border-zinc-800 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 overflow-x-auto whitespace-pre select-all"
          >
            &lt;div id="seamlesscal-widget" data-widget-id="{{ activeWidgetId }}"&gt;&lt;/div&gt;
            &lt;script src="https://cdn.seamlesscal.com/v1/widget.js" defer&gt;&lt;/script&gt;
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { db } from '@/firebase'
import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from 'firebase/firestore'

import { getAuth } from 'firebase/auth'
import { getFunctions, httpsCallable } from 'firebase/functions'

// Import Primitives
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import Select from '@/components/ui/select/Select.vue'
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue'

const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
})

defineEmits(['sign-out'])

const loading = ref(true)
const saving = ref(false)
const copied = ref(false)

let googleAuthClient = null

const accountUserId = props.userId
const activeWidgetId = ref('widget_apsley_main_001')

const widgetName = ref('Main Booking Calendar')

const selectedCalendarEmail = ref('')

const settings = reactive({
  defaultView: 'month',
  baseTheme: 'dark',
  primaryColor: '#1e6b7b',
  accentColor: '#f0ad4e',
  eventBgColor: '#eef7f9',
  textColor: '#0f172a',
  headerTextColor: '#ffffff',
  fontFamily: 'sans-serif',
  maxWidth: '100%',
  borderRadius: '6px',
  agendaLimit: 3,
})

const connectedAccounts = ref([])

const colorPresets = [
  {
    name: 'Cyber Midnight',
    primary: '#1e6b7b',
    accent: '#00ffff',
    bgEvent: '#22c55e',
    text: '#ffffff',
    headerText: '#ffffff',
  },
  {
    name: 'Crimson Royal',
    primary: '#991b1b',
    accent: '#fbbf24',
    bgEvent: '#1e293b',
    text: '#f8fafc',
    headerText: '#f8fafc',
  },
  {
    name: 'Electric Lavender',
    primary: '#6d28d9',
    accent: '#a78bfa',
    bgEvent: '#f472b6',
    text: '#ffffff',
    headerText: '#ffffff',
  },
  {
    name: 'Emerald Calm',
    primary: '#065f46',
    accent: '#34d399',
    bgEvent: '#ecfdf5',
    text: '#064e3b',
    headerText: '#065f46',
  },
  {
    name: 'Industrial Amber',
    primary: '#c2410c',
    accent: '#f97316',
    bgEvent: '#fef3c7',
    text: '#431407',
    headerText: '#c2410c',
  },
]

function applyPreset(preset) {
  settings.primaryColor = preset.primary
  settings.accentColor = preset.accent
  settings.eventBgColor = preset.bgEvent
  settings.textColor = preset.text
  settings.headerTextColor = preset.headerText || '#ffffff'
}

const connectGoogleCalendar = () => {
  if (!googleAuthClient) {
    alert('Google library is still loading or was blocked. Refresh the page.')
    return
  }
  googleAuthClient.requestCode()
}

const fetchConnectedAccounts = async () => {
  try {
    const q = query(collection(db, 'connections'), where('ownerUid', '==', props.userId))

    const querySnapshot = await getDocs(q)
    const accounts = []

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      accounts.push({
        id: doc.id,
        email: data.googleEmail,
        updatedAt: data.updatedAt ? new Date(data.updatedAt).toLocaleDateString() : 'Recent',
      })
    })

    connectedAccounts.value = accounts
    console.log('Successfully fetched linked accounts:', accounts)
  } catch (err) {
    console.error('Failed to retrieve connection matrices:', err)
  }
}

const disconnectAccount = async (account) => {
  const confirmBlock = confirm(
    `Are you sure you want to disconnect ${account.email}? Your embedded widgets using this source will stop syncing.`,
  )
  if (!confirmBlock) return

  try {
    const connectionDocRef = doc(db, 'connections', account.id)
    await deleteDoc(connectionDocRef)

    if (selectedCalendarEmail.value === account.email) {
      selectedCalendarEmail.value = ''
    }

    await fetchConnectedAccounts()
    alert('Google connection severed cleanly.')
  } catch (err) {
    console.error('Failed to tear down connection link:', err)
    alert(`Could not remove account: ${err.message}`)
  }
}

onMounted(async () => {
  try {
    await fetchConnectedAccounts()
    const docRef = doc(db, 'widgets', activeWidgetId.value)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const incomingData = docSnap.data()

      widgetName.value = incomingData.widgetName || 'Main Booking Calendar'
      selectedCalendarEmail.value = incomingData.calendarSourceEmail || ''

      const savedSettings = incomingData.settings || incomingData || {}

      Object.assign(settings, {
        defaultView: savedSettings.defaultView || 'month',
        primaryColor: savedSettings.primaryColor || '#1e6b7b',
        accentColor: savedSettings.accentColor || '#f0ad4e',
        eventBgColor: savedSettings.eventBgColor || '#eef7f9',
        textColor: savedSettings.textColor || '#0f172a',
        headerTextColor: savedSettings.headerTextColor || '#ffffff',
        fontFamily: savedSettings.fontFamily || 'sans-serif',
        borderRadius: savedSettings.borderRadius || '6px',
        maxWidth: savedSettings.maxWidth || '100%',
        baseTheme: savedSettings.baseTheme || 'dark',
        agendaLimit: savedSettings.agendaLimit || 3,
      })
    }

    if (!selectedCalendarEmail.value && connectedAccounts.value.length > 0) {
      selectedCalendarEmail.value = connectedAccounts.value[0].email
    }
  } catch (err) {
    console.error('Failed to parse widget database parameters:', err)
  } finally {
    loading.value = false
  }

  if (window.google) {
    console.log('Google script detected! Initializing client details...')

    googleAuthClient = window.google.accounts.oauth2.initCodeClient({
      client_id: '415247533936-e569avvi75k2kod4q9nbhecsqojts65n.apps.googleusercontent.com',
      scope:
        'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.email',
      ux_mode: 'popup',
      callback: async (response) => {
        if (response.error) {
          console.error('Auth failed or cancelled:', response.error)
          return
        }

        if (response.code) {
          console.log('Got code! Initiating secure backend handshake...', response.code)

          try {
            const functions = getFunctions(db.app)

            const exchangeFunction = httpsCallable(functions, 'exchangeAuthCodeForTokens')
            const result = await exchangeFunction({ code: response.code })

            console.log('Handshake Complete!', result.data)
            alert(`Successfully linked: ${result.data.email}`)

            await fetchConnectedAccounts()

            if (!selectedCalendarEmail.value) {
              selectedCalendarEmail.value = result.data.email
            }
          } catch (handshakeError) {
            console.error('The backend handshake failed:', handshakeError)
            alert(`Connection failed: ${handshakeError.message}`)
          }
        }
      },
    })
    console.log('Google Identity Client successfully built and waiting.')
  } else {
    console.warn('Google GSI script could not be located on the window element.')
  }
})

async function saveWidgetSettings() {
  saving.value = true
  try {
    const docRef = doc(db, 'widgets', activeWidgetId.value)

    await setDoc(
      docRef,
      {
        widgetId: activeWidgetId.value,
        ownerUid: accountUserId,
        calendarSourceEmail: selectedCalendarEmail.value,
        widgetName: widgetName.value,
        settings: { ...settings },
        updatedAt: new Date().toISOString(),
      },
      { merge: true },
    )

    alert('Widget customizations locked in safely!')

    const iframe = document.querySelector('iframe')
    if (iframe) {
      iframe.src = iframe.src
    }
  } catch (err) {
    console.error('Cloud synchronization failure details:', err)
    alert('Failed to update configurations: ' + err.message)
  } finally {
    saving.value = false
  }
}

function copyEmbedCode() {
  const embedString = `<div id="seamlesscal-widget" data-widget-id="${activeWidgetId.value}"></div>
    <script src="https://cdn.seamlesscal.com/v1/widget.js" defer><\/script>`

  navigator.clipboard
    .writeText(embedString)
    .then(() => {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    })
    .catch((err) => {
      console.error('Could not copy string text: ', err)
    })
}
</script>

<style scoped>
input[type='color']::-webkit-color-swatch-wrapper {
  padding: 0;
}
input[type='color']::-webkit-color-swatch {
  border: none;
  border-radius: 4px;
}
</style>
