<template>
  <div v-if="loading" class="flex min-h-screen items-center justify-center text-muted-foreground">
    <div class="flex flex-col items-center gap-2">
      <span class="animate-pulse text-sm font-medium">Initializing customization engine...</span>
    </div>
  </div>

  <div
    v-else
    :style="{
      '--calendar-primary': settings?.primaryColor || '#1e6b7b',
      '--calendar-accent': settings?.accentColor || '#f0ad4e',
      '--calendar-bg-event': settings?.eventBgColor || '#eef7f9',
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
          @click="saveWidgetSettings"
          :disabled="saving"
          variant="default"
          class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm transition-all text-xs h-9 px-4 cursor-pointer"
        >
          {{ saving ? 'Saving configurations...' : 'Save Settings' }}
        </Button>
      </div>
    </header>

    <div
      v-if="status?.message"
      :class="[
        'mb-6 p-3 rounded-lg text-xs font-semibold tracking-wide border animate-fade-in flex items-start gap-2.5 max-w-7xl',
        status?.type === 'success'
          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
          : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400',
      ]"
    >
      <svg
        v-if="status?.type === 'error'"
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
      <div>{{ status?.message }}</div>
    </div>

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
              :variant="settings?.defaultView === 'month' ? 'outline' : 'default'"
              @click="settings ? (settings.defaultView = 'month') : null"
              class="w-full text-xs font-medium"
            >
              Month Grid
            </Button>
            <Button
              type="button"
              :variant="settings?.defaultView === 'agenda' ? 'outline' : 'default'"
              @click="handlePremiumFeatureClick('agenda', 'view')"
              class="w-full text-xs font-medium flex items-center justify-center gap-1.5"
            >
              <span v-if="userPlanTier === 'free'">🔒</span> Agenda List
            </Button>
          </div>
          <div v-if="settings?.defaultView === 'agenda'" class="space-y-2 mt-3 animate-fade-in">
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
            >Widget Name</Label
          >
          <input
            v-model="widgetName"
            type="text"
            placeholder="e.g. Homepage Booking Calendar"
            class="w-full text-sm rounded-md border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
          />
        </div>

        <div class="space-y-2">
          <Label
            class="text-sm font-semibold tracking-wide text-slate-900 dark:text-zinc-100 flex items-center justify-between"
          >
            <span>Booking Engine Status</span>
            <span
              v-if="userPlanTier === 'free'"
              class="text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded font-bold"
              >PRO</span
            >
          </Label>
          <select
            :value="userPlanTier === 'free' ? 'paused' : bookingMode"
            @change="(e) => (bookingMode = e.target.value)"
            @click="userPlanTier === 'free' ? (showUpgradeModal = true) : null"
            class="w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="paused" :disabled="userPlanTier !== 'free'">
              View-Only Calendar Display Mode {{ userPlanTier === 'free' ? '(Active)' : '' }}
            </option>
            <option value="auto" :disabled="userPlanTier === 'free'">
              Auto-Confirm Engine (Instantly Syncs) {{ userPlanTier === 'free' ? '🔒' : '' }}
            </option>
            <option value="request" :disabled="userPlanTier === 'free'">
              Manual Request Hold Queue (Dashboard Approvals)
              {{ userPlanTier === 'free' ? '🔒' : '' }}
            </option>
          </select>
          <p class="text-[11px] text-muted-foreground">
            Free plans display interactive availability streams. Upgrading to Pro activates
            transactional workflows and sync pipelines.
          </p>
        </div>

        <div class="space-y-2">
          <Label class="text-sm font-semibold tracking-wide text-foreground"
            >Target Calendar Source Account</Label
          >
          <div class="relative w-full">
            <select
              v-model="selectedCalendarEmail"
              class="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer"
            >
              <option value="" disabled selected v-if="connectedAccounts.length === 0">
                No accounts connected. Please link an integration in Account Settings.
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
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p class="text-[11px] text-muted-foreground">
            Determines which secure Google token your public layout embeds use to fetch
            availability.
          </p>
        </div>

        <Separator class="my-4 border-slate-200 dark:border-zinc-800" />

        <div class="space-y-4">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
            Theme Color Tokens
          </h3>
          <div class="space-y-2 mt-4">
            <label class="text-sm font-semibold text-slate-900 dark:text-zinc-100"
              >Base Widget Theme</label
            >
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
              <Label class="text-sm font-medium text-slate-900 dark:text-zinc-100"
                >Header / UI Text</Label
              >
              <span class="text-xs text-slate-400 dark:text-zinc-500"
                >Month headers and weekday labels</span
              >
            </div>
            <input
              type="color"
              v-model="settings.headerTextColor"
              class="w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"
            />
          </div>

          <div class="flex items-center justify-between gap-4 mt-4">
            <div class="flex flex-col gap-0.5">
              <Label class="text-sm font-medium text-slate-900 dark:text-zinc-100"
                >Event Text Color</Label
              >
              <span class="text-xs text-slate-400 dark:text-zinc-500"
                >Text inside the colored event chips</span
              >
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
            <label
              class="text-sm font-semibold text-slate-900 dark:text-zinc-100 flex items-center justify-between"
            >
              <span>Element Border Radius</span>
              <span
                v-if="userPlanTier === 'free'"
                class="text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded font-bold"
                >PRO</span
              >
            </label>
            <select
              :value="settings?.borderRadius"
              @change="(e) => (settings.borderRadius = e.target.value)"
              @click="userPlanTier === 'free' ? (showUpgradeModal = true) : null"
              class="w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-700 cursor-pointer"
            >
              <option value="6px">Subtle Smooth Curves (6px)</option>
              <option value="0px" :disabled="userPlanTier === 'free'">
                Sharp Structural Boundaries (0px) {{ userPlanTier === 'free' ? '🔒' : '' }}
              </option>
              <option value="12px" :disabled="userPlanTier === 'free'">
                Highly Rounded Modern (12px) {{ userPlanTier === 'free' ? '🔒' : '' }}
              </option>
            </select>
          </div>

          <div class="space-y-2 mt-4">
            <label
              class="text-sm font-semibold text-slate-900 dark:text-zinc-100 flex items-center justify-between"
            >
              <span>Typography Font Family Mapping</span>
              <span
                v-if="userPlanTier === 'free'"
                class="text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded font-bold"
                >PRO</span
              >
            </label>
            <select
              :value="settings?.fontFamily"
              @change="(e) => (settings.fontFamily = e.target.value)"
              @click="userPlanTier === 'free' ? (showUpgradeModal = true) : null"
              class="w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-700 cursor-pointer"
            >
              <option value="sans-serif">Modern Clean Sans-Serif</option>
              <option value="serif" :disabled="userPlanTier === 'free'">
                Elegant Bookish Serif {{ userPlanTier === 'free' ? '🔒' : '' }}
              </option>
              <option value="mono" :disabled="userPlanTier === 'free'">
                Technical Monospace {{ userPlanTier === 'free' ? '🔒' : '' }}
              </option>
            </select>
          </div>
        </div>
      </Card>

      <div class="lg:col-span-2 flex flex-col space-y-4">
        <Label class="text-sm font-semibold text-slate-700 dark:text-zinc-300">
          Live Client Workspace Preview Simulator
          <span
            v-if="connectedAccounts.length === 0"
            class="text-xs text-amber-500 font-normal pl-2"
            >(Preview Sandbox Mode)</span
          >
        </Label>

        <Card
          class="p-4 bg-slate-100 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm flex-grow min-h-[550px]"
        >
          <iframe
            :key="`${activeWidgetId}-${selectedCalendarEmail}-${settings?.baseTheme}-${settings?.primaryColor}-${settings?.accentColor}-${settings?.eventBgColor}-${settings?.textColor}-${settings?.headerTextColor}-${settings?.defaultView}-${settings?.fontFamily}-${settings?.borderRadius}-${settings?.agendaLimit}`"
            :src="
              connectedAccounts.length > 0
                ? `/render-widget.html?id=${activeWidgetId}&calendarSourceEmail=${encodeURIComponent(selectedCalendarEmail)}&baseTheme=${settings?.baseTheme || 'dark'}&primaryColor=${encodeURIComponent(settings?.primaryColor || '#1e6b7b')}&accentColor=${encodeURIComponent(settings?.accentColor || '#f0ad4e')}&eventBgColor=${encodeURIComponent(settings?.eventBgColor || '#eef7f9')}&textColor=${encodeURIComponent(settings?.textColor || '#0f172a')}&headerTextColor=${encodeURIComponent(settings?.headerTextColor || '#ffffff')}&defaultView=${settings?.defaultView || 'month'}&fontFamily=${settings?.fontFamily || 'sans-serif'}&borderRadius=${settings?.borderRadius || '6px'}&agendaLimit=${settings?.agendaLimit || 3}`
                : `/render-widget.html?mockData=true&baseTheme=${settings?.baseTheme || 'dark'}&primaryColor=${encodeURIComponent(settings?.primaryColor || '#1e6b7b')}&accentColor=${encodeURIComponent(settings?.accentColor || '#f0ad4e')}&eventBgColor=${encodeURIComponent(settings?.eventBgColor || '#eef7f9')}&textColor=${encodeURIComponent(settings?.textColor || '#0f172a')}&headerTextColor=${encodeURIComponent(settings?.headerTextColor || '#ffffff')}&defaultView=${settings?.defaultView || 'month'}&fontFamily=${settings?.fontFamily || 'sans-serif'}&borderRadius=${settings?.borderRadius || '6px'}&agendaLimit=${settings?.agendaLimit || 3}`
            "
            class="w-full border-none bg-transparent transition-all duration-200"
            style="height: 650px"
            scrolling="no"
          ></iframe>

          <div
            v-if="connectedAccounts.length === 0"
            class="mt-4 p-3.5 bg-zinc-950/40 rounded-lg border border-zinc-800/80 flex items-center justify-between text-left"
          >
            <div>
              <h5 class="text-xs font-bold text-zinc-200">Loving the layout design look?</h5>
              <p class="text-[11px] text-zinc-400">
                Connect your native calendar source stream to activate your booking widget code.
              </p>
            </div>
            <Button
              size="sm"
              @click="$emit('go-to-profile')"
              class="bg-emerald-600 hover:bg-emerald-700 font-bold text-xs h-8 cursor-pointer"
            >
              Connect Google Calendar ⚡
            </Button>
          </div>
        </Card>

        <Card
          v-if="connectedAccounts.length > 0"
          class="p-4 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm space-y-3 animate-fade-in"
        >
          <div class="flex items-center justify-between">
            <h4
              class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400"
            >
              Deploy Code Snippet
            </h4>
            <Button
              @click="copyEmbedCode"
              size="xs"
              variant="outline"
              class="h-7 text-[11px] font-medium border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-950 cursor-pointer"
            >
              {{ copied ? 'Copied to Clipboard! 📋' : 'Copy Embed Snippet' }}
            </Button>
          </div>
          <div class="p-3 bg-slate-950 rounded-lg border border-zinc-800/80 overflow-x-auto">
            <code class="text-[11px] font-mono text-zinc-300 block whitespace-pre"
              >&lt;div id="seamlesscal-widget" data-widget-id="{{
                activeWidgetId
              }}"&gt;&lt;/div&gt;&#10;&lt;script src="https://cdn.seamlesscal.com/widget.js"
              defer&gt;&lt;/script&gt;</code
            >
          </div>
        </Card>
      </div>
    </div>
  </div>

  <div
    v-if="showUpgradeModal"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
  >
    <Card
      class="w-full max-w-sm p-6 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-center space-y-4 shadow-2xl"
    >
      <div
        class="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto text-xl"
      >
        ✨
      </div>
      <div class="space-y-1">
        <h3 class="text-base font-bold text-slate-900 dark:text-zinc-100">
          Upgrade to SeamlessCal Pro
        </h3>
        <p class="text-xs text-slate-500 dark:text-zinc-400">
          Unlock advanced geometric configurations, custom typography mappings, and the high-speed
          responsive Agenda view layout.
        </p>
      </div>
      <div
        class="bg-slate-50 dark:bg-zinc-950 p-3 rounded-lg border border-slate-200 dark:border-zinc-800 text-left"
      >
        <div class="flex justify-between items-center text-xs">
          <span class="text-slate-700 dark:text-zinc-300 font-medium">Professional Tier Plan</span>
          <span class="text-emerald-600 dark:text-emerald-400 font-bold">$15 / mo</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-2">
        <Button
          @click="showUpgradeModal = false"
          variant="outline"
          class="h-9 text-xs border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 cursor-pointer"
        >
          Maybe Later
        </Button>
        <Button
          class="h-9 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
          @click="redirectToUpgradeView"
        >
          Upgrade Now
        </Button>
      </div>
    </Card>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '@/firebase'
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore'

// Import Primitives
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
})

const router = useRouter()
const loading = ref(true)
const saving = ref(false)
const copied = ref(false)

const status = reactive({
  message: '',
  type: 'success',
})

let autoClearTimeout = null

const accountUserId = props.userId
const activeWidgetId = ref(`widget_${props.userId.slice(0, 8)}_main_001`)
const widgetName = ref('My Booking Calendar')
const selectedCalendarEmail = ref('')

const bookingMode = ref('auto')

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

const userPlanTier = ref('free')
const showUpgradeModal = ref(false)

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

function handlePremiumFeatureClick(targetValue, mode) {
  if (userPlanTier.value === 'free') {
    showUpgradeModal.value = true
    return
  }

  if (mode === 'view') {
    settings.defaultView = targetValue
  }
}

function redirectToUpgradeView() {
  showUpgradeModal.value = false
  router.push('/dashboard/upgrade')
}

const fetchConnectedAccounts = async () => {
  try {
    const q = query(collection(db, 'connections'), where('ownerUid', '==', props.userId))
    const querySnapshot = await getDocs(q)
    const accountsList = []

    querySnapshot.forEach((doc) => {
      accountsList.push({ id: doc.id, email: doc.data().googleEmail })
    })

    connectedAccounts.value = accountsList

    if (accountsList.length > 0 && !selectedCalendarEmail.value) {
      selectedCalendarEmail.value = accountsList[0].email
    }
  } catch (err) {
    console.error('Failed fetching connected accounts for dashboard simulator:', err)
  }
}

async function saveWidgetSettings() {
  if (autoClearTimeout) clearTimeout(autoClearTimeout)
  status.message = ''
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
        bookingMode: bookingMode.value,
        settings: { ...settings },
        updatedAt: new Date().toISOString(),
      },
      { merge: true },
    )

    status.type = 'success'
    status.message = 'Widget customizations saved successfully!'

    const iframe = document.querySelector('iframe')
    if (iframe) iframe.src = iframe.src

    autoClearTimeout = setTimeout(() => {
      status.message = ''
    }, 6000)
  } catch (err) {
    console.error('Cloud synchronization failure:', err)
    status.type = 'error'
    status.message = `Failed to update configurations: ${err.message}`
  } finally {
    saving.value = false
  }
}

function copyEmbedCode() {
  const embedString = `<div id="seamlesscal-widget" data-widget-id="${activeWidgetId.value}"></div>\n<script src="https://cdn.seamlesscal.com/widget.js" defer><\/script>`
  navigator.clipboard.writeText(embedString).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}

onMounted(async () => {
  try {
    await fetchConnectedAccounts()

    const userDocRef = doc(db, 'users', props.userId)
    const userSnap = await getDoc(userDocRef)
    if (userSnap.exists()) {
      userPlanTier.value = userSnap.data().planTier || 'free'
    }

    const docRef = doc(db, 'widgets', activeWidgetId.value)
    const docSnap = await getDoc(docRef)

    window.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SEAMLESSCAL_RESIZE') {
        const previewIframe = document.querySelector('iframe')
        if (previewIframe && event.data.height) {
          previewIframe.style.height = event.data.height + 16 + 'px'
        }
      }
    })

    if (docSnap.exists()) {
      const incomingData = docSnap.data()
      widgetName.value = incomingData.widgetName || 'Main Booking Calendar'
      selectedCalendarEmail.value = incomingData.calendarSourceEmail || ''

      bookingMode.value = incomingData.bookingMode || 'auto'

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
})
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
