<template>
  <div class="max-w-7xl mx-auto p-6 space-y-8 animate-fade-in">
    <header
      class="border-b border-slate-200 dark:border-zinc-800 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
    >
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
          Appointment Workspace
        </h1>
        <p class="text-sm text-slate-500 dark:text-zinc-400 mt-1">
          Review manual reservation pipelines, coordinate calendar schedules, and track past
          meetings.
        </p>
      </div>
    </header>

    <div v-if="loading" class="text-center py-12 text-slate-400 animate-pulse text-xs font-medium">
      Querying platform database record indexes...
    </div>

    <!-- 🚀 GLOBAL CONVERSION GATE FOR FREE USERS -->
    <div
      v-else-if="userPlanTier === 'free'"
      class="border border-slate-200 dark:border-zinc-800 rounded-xl p-16 text-center bg-white dark:bg-zinc-900 max-w-3xl mx-auto space-y-6 shadow-sm mt-8"
    >
      <div
        class="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-2xl"
      >
        ✨
      </div>
      <div class="space-y-3">
        <h2 class="text-xl font-bold text-slate-900 dark:text-zinc-100">
          Turn Calendar Views into Active Client Bookings
        </h2>
        <p class="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto">
          Your custom embedded widgets are currently operating in
          <strong>View-Only Availability Mode</strong>. Free plans get beautiful interactive
          calendar displays, but scheduling requires an active plan rank.
        </p>
        <p class="text-xs text-slate-400 dark:text-zinc-500 font-medium">
          Upgrade to the Pro Hub to let clients instantly book appointments, select workflows, and
          coordinate timelines directly through your website template embeds.
        </p>
      </div>
      <div class="pt-4">
        <Button
          @click="router.push('/dashboard/upgrade')"
          class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm h-10 px-8 cursor-pointer shadow-sm transition-all"
        >
          Unlock Full Scheduling Engine ($15/mo)
        </Button>
      </div>
    </div>

    <!-- STANDARD WORKSPACE WORKFLOW (ONLY RENDERS FOR PRO USERS) -->
    <div v-else class="space-y-6">
      <div class="flex border-b border-slate-200 dark:border-zinc-800 gap-2">
        <button
          @click="activeTab = 'pending'"
          :class="[
            'px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap',
            activeTab === 'pending'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300',
          ]"
        >
          Pending Requests ({{ pendingCount }})
        </button>

        <button
          @click="activeTab = 'confirmed'"
          :class="[
            'px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap',
            activeTab === 'confirmed'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300',
          ]"
        >
          Confirmed Requests ({{ confirmedCount }})
        </button>

        <button
          @click="activeTab = 'past'"
          :class="[
            'px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap',
            activeTab === 'past'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300',
          ]"
        >
          Past Requests ({{ pastCount }})
        </button>
      </div>

      <div
        v-if="filteredBookings.length === 0"
        class="border border-dashed border-slate-200 dark:border-zinc-800 rounded-xl p-12 text-center text-sm text-slate-400"
      >
        No matching items are cataloged under this workspace filter tab view.
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="booking in filteredBookings"
          :key="booking.id"
          class="p-5 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between space-y-4"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-900 dark:text-zinc-100 truncate max-w-[70%]">
                {{ booking.clientName }}
              </h3>
              <span
                :class="[
                  'px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase',
                  booking.status === 'pending'
                    ? 'bg-amber-500/10 text-amber-600'
                    : booking.status === 'confirmed'
                      ? 'bg-emerald-500/10 text-emerald-600'
                      : 'bg-rose-500/10 text-rose-600',
                ]"
              >
                {{ booking.status }}
              </span>
            </div>
            <p class="text-xs text-slate-400 dark:text-zinc-500 truncate">
              {{ booking.clientEmail }}
            </p>

            <div
              class="pt-2 flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-zinc-300"
            >
              <svg
                class="w-3.5 h-3.5 text-slate-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{{ formatMeetingDate(booking.meetingTime) }}</span>
            </div>

            <div
              v-if="booking.clientMessage"
              class="mt-3 p-2.5 rounded-lg bg-slate-50 dark:bg-zinc-950 border border-slate-100 dark:border-zinc-800/60 text-[11px] text-slate-500 dark:text-zinc-400 italic"
            >
              <span
                class="font-bold text-slate-700 dark:text-zinc-300 block not-italic uppercase tracking-wider text-[9px] mb-1"
                >Client Message:</span
              >
              "{{ booking.clientMessage }}"
            </div>

            <div
              v-if="booking.hostFeedback"
              class="mt-3 p-2.5 rounded-lg text-[11px] bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300"
            >
              <span class="font-bold block uppercase tracking-wider text-[9px] mb-1"
                >Your Response Note:</span
              >
              "{{ booking.hostFeedback }}"
            </div>

            <div
              v-if="booking.status === 'pending'"
              class="pt-4 space-y-3 border-t border-slate-100 dark:border-zinc-800/50 mt-4"
            >
              <div class="flex items-center gap-2">
                <input
                  type="checkbox"
                  :id="`toggle-${booking.id}`"
                  v-model="activeToggles[booking.id]"
                  class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer h-3.5 w-3.5"
                />
                <label
                  :for="`toggle-${booking.id}`"
                  class="text-xs font-semibold text-slate-700 dark:text-zinc-300 cursor-pointer select-none"
                >
                  Include a personal response message note
                </label>
              </div>

              <div v-if="activeToggles[booking.id]" class="space-y-3 animate-fade-in pt-1">
                <div class="space-y-1">
                  <textarea
                    v-model="feedbackInputs[booking.id]"
                    placeholder="e.g., Looking forward to it! Please review any attached materials beforehand."
                    class="w-full text-xs h-16 rounded-md border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    :id="`email-flag-${booking.id}`"
                    v-model="emailFlags[booking.id]"
                    class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer h-3.5 w-3.5"
                  />
                  <label
                    :for="`email-flag-${booking.id}`"
                    class="text-[11px] font-medium text-slate-400 dark:text-zinc-500 cursor-pointer select-none"
                  >
                    Send this message directly to client's email inbox notification
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div v-if="booking.status === 'pending'" class="flex items-center gap-3 pt-2 w-full">
            <Button
              @click="processDecision(booking.id, 'declined')"
              variant="outline"
              class="w-1/2 border-slate-200 hover:bg-slate-50 dark:border-zinc-800 text-xs font-semibold h-8 cursor-pointer"
            >
              Decline
            </Button>
            <Button
              @click="processDecision(booking.id, 'confirmed')"
              class="w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold h-8 cursor-pointer"
            >
              Confirm
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '@/firebase'
import { collection, query, where, getDocs, orderBy, doc, getDoc } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
})

const router = useRouter()
const loading = ref(true)
const activeTab = ref('pending')
const rawBookings = ref([])
const userPlanTier = ref('free')

const activeToggles = reactive({})
const feedbackInputs = reactive({})
const emailFlags = reactive({})

const fetchHostBookingsList = async () => {
  try {
    loading.value = true

    const userDocRef = doc(db, 'users', props.userId)
    const userSnap = await getDoc(userDocRef)
    if (userSnap.exists()) {
      userPlanTier.value = userSnap.data().planTier || 'free'
    }

    const bookingsQuery = query(
      collection(db, 'bookings'),
      where('ownerUid', '==', props.userId),
      orderBy('meetingTime', 'asc'),
    )

    const snapshot = await getDocs(bookingsQuery)
    const appointments = []
    snapshot.forEach((doc) => {
      appointments.push(doc.data())
    })
    rawBookings.value = appointments
  } catch (error) {
    console.error('Failed reading reservation dataset index mappings:', error)
  } finally {
    loading.value = false
  }
}

const filteredBookings = computed(() => {
  const rightNow = new Date().toISOString()

  return rawBookings.value.filter((b) => {
    if (activeTab.value === 'pending') {
      return b.status === 'pending'
    } else if (activeTab.value === 'confirmed') {
      return b.status === 'confirmed' && b.meetingTime >= rightNow
    } else {
      return b.status === 'declined' || (b.status === 'confirmed' && b.meetingTime < rightNow)
    }
  })
})

const pendingCount = computed(() => {
  return rawBookings.value.filter((b) => b.status === 'pending').length
})

const confirmedCount = computed(() => {
  const rightNow = new Date().toISOString()
  return rawBookings.value.filter((b) => b.status === 'confirmed' && b.meetingTime >= rightNow)
    .length
})

const pastCount = computed(() => {
  const rightNow = new Date().toISOString()
  return rawBookings.value.filter(
    (b) => b.status === 'declined' || (b.status === 'confirmed' && b.meetingTime < rightNow),
  ).length
})

const formatMeetingDate = (isoString) => {
  return new Date(isoString).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

const processDecision = async (bookingId, nextStatus) => {
  const hasToggleActive = activeToggles[bookingId] || false
  const noteToSend = hasToggleActive ? feedbackInputs[bookingId] || '' : ''
  const shouldEmailClient = hasToggleActive ? emailFlags[bookingId] || false : false

  loading.value = true

  try {
    const functionsInstance = getFunctions(db.app)
    const updateStatusCall = httpsCallable(functionsInstance, 'updateBookingStatus')

    await updateStatusCall({
      bookingId: bookingId,
      status: nextStatus,
      reason: noteToSend,
      sendNoteToClient: shouldEmailClient,
    })

    delete activeToggles[bookingId]
    delete feedbackInputs[bookingId]
    delete emailFlags[bookingId]

    await fetchHostBookingsList()
  } catch (error) {
    console.error('Handshake execution transaction failure:', error)
    alert(`Action error exception: ${error.message}`)
    loading.value = false
  }
}

onMounted(async () => {
  await fetchHostBookingsList()
})
</script>
