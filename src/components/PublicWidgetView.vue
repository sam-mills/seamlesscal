<template>
  <!-- Loading State Gate -->
  <div
    v-if="!settings"
    class="p-6 text-center text-xs font-medium text-zinc-500 animate-pulse bg-slate-950 min-h-[500px]"
  >
    Initializing secure booking parameters...
  </div>

  <div
    v-else
    class="p-6 bg-slate-950 border border-zinc-900 rounded-xl text-zinc-100 max-w-4xl mx-auto shadow-xl"
  >
    <header class="mb-6 pb-4 border-b border-zinc-900">
      <h2 class="text-lg font-bold tracking-tight text-white flex items-center gap-2">
        Secure Booking Scheduler
      </h2>
      <p class="text-xs text-zinc-400 mt-1">
        Select an open date on the calendar first to configure your reservation.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <!-- LEFT COLUMN: MINI-CALENDAR DATE SELECTOR -->
      <div class="bg-zinc-900/40 p-4 rounded-lg border border-zinc-900">
        <div class="flex items-center justify-between mb-4">
          <button
            type="button"
            @click.prevent="navigateMonth(-1)"
            class="p-1 px-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded transition-all cursor-pointer"
          >
            &lt;
          </button>
          <span class="text-xs font-bold uppercase tracking-wider text-zinc-200">
            {{ currentMonthName }}
          </span>
          <button
            type="button"
            @click.prevent="navigateMonth(1)"
            class="p-1 px-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded transition-all cursor-pointer"
          >
            &gt;
          </button>
        </div>

        <!-- Weekday Headers -->
        <div
          class="grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-2"
        >
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>

        <!-- Calendar Grid -->
        <div class="grid grid-cols-7 gap-1.5">
          <!-- Empty Padding Slots -->
          <div
            v-for="empty in paddingDays"
            :key="'empty-' + empty"
            class="aspect-square opacity-0 pointer-events-none"
          ></div>

          <!-- Month Days -->
          <button
            v-for="day in daysInMonthList"
            :key="'day-' + day"
            type="button"
            @click.prevent="selectDate(day)"
            :disabled="isPastDate(day)"
            :class="[
              'aspect-square flex items-center justify-center text-xs font-bold rounded transition-all border',
              isSameDate(day)
                ? 'bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-600/20 cursor-pointer'
                : isPastDate(day)
                  ? 'bg-zinc-950 border-zinc-900/40 text-zinc-600 opacity-25 cursor-not-allowed'
                  : 'bg-zinc-900/50 border-zinc-800/80 hover:border-zinc-700 text-zinc-300 cursor-pointer',
            ]"
          >
            {{ day }}
          </button>
        </div>
      </div>

      <!-- RIGHT COLUMN: DYNAMIC BOOKING SLOTS / RANGES -->
      <div
        class="bg-zinc-900/20 p-4 rounded-lg border border-zinc-900 min-h-[340px] flex flex-col justify-between"
      >
        <!-- STEP A: Prompt if no date selected yet -->
        <div
          v-if="!selectedDate"
          class="flex-grow flex flex-col items-center justify-center text-center text-zinc-500 py-10 space-y-2"
        >
          <span class="text-2xl font-bold">^</span>
          <p class="text-xs font-medium">
            Please click a date on the calendar layout to select your booking day.
          </p>
        </div>

        <!-- STEP B: Loading availability context block -->
        <div
          v-else-if="loadingBusyState"
          class="flex-grow flex flex-col items-center justify-center text-center text-zinc-500 py-10 text-xs font-medium animate-pulse"
        >
          Cross-referencing live Google Calendar availability...
        </div>

        <!-- STEP C: Form View Stages once date is active -->
        <div v-else class="space-y-4 flex-grow animate-fade-in">
          <div class="flex items-center justify-between pb-3 border-b border-zinc-900">
            <span class="text-xs font-bold text-zinc-300 uppercase tracking-wider"
              >Availability Stream</span
            >
            <span
              class="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded"
            >
              Selected: {{ formattedSelectedDate }}
            </span>
          </div>

          <!-- SUCCESS STATE VIEW (OPTIMIZED VENUE HOLD CONTEXT) -->
          <div v-if="bookingCompleted" class="text-center py-8 space-y-4 animate-fade-in">
            <div
              class="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl"
            >
              &#10003;
            </div>
            <div>
              <h3 class="text-sm font-bold text-white">Reservation Request Received!</h3>
              <p class="text-xs text-zinc-400 max-w-xs mx-auto mt-1">
                Your requested time block has been logged and successfully placed on a temporary
                hold.
              </p>
            </div>

            <!-- 📑 Proactive Venue Contract Callout Banner -->
            <div
              class="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-lg max-w-xs mx-auto text-[11px] leading-relaxed text-zinc-300 space-y-1 text-left"
            >
              <span
                class="font-bold text-emerald-400 uppercase tracking-wide block text-center mb-1"
                >⏳ Next Step Required</span
              >
              <p class="text-zinc-400 text-center">
                A custom <strong>Venue Hire Agreement</strong> has been dispatched to your email
                address.
              </p>
              <p class="text-zinc-400 text-center font-medium pt-1">
                Please check your inbox right now to review and sign the terms to secure your rental
                block completely!
              </p>
            </div>
          </div>

          <!-- STAGE 1: CHOOSE TIMES -->
          <div v-else-if="currentFormStage === 1" class="space-y-4 animate-fade-in">
            <!-- VIEW 1: FIXED DURATION SLOTS -->
            <div v-if="settings.bookingStyle === 'slot'" class="space-y-3">
              <p class="text-xs text-zinc-400">Select an available appointment time slot:</p>

              <div
                v-if="filteredAvailableSlots.length === 0"
                class="text-center py-6 text-zinc-500 text-xs"
              >
                No slots available on this date. Everything is fully booked!
              </div>

              <div v-else class="grid grid-cols-3 gap-2">
                <button
                  v-for="slot in filteredAvailableSlots"
                  :key="slot"
                  type="button"
                  @click.prevent="selectTimeSlot(slot)"
                  :class="[
                    'p-2 text-xs font-semibold rounded-md border transition-all text-center cursor-pointer',
                    selectedSlot === slot
                      ? 'bg-emerald-600 border-emerald-500 text-white'
                      : 'bg-zinc-900/50 border-zinc-800/60 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300',
                  ]"
                >
                  <!-- 🚀 LOCALIZED CHIP INTERPOLATION -->
                  {{ formatTimeToLocalClientZone(slot) }}
                </button>
              </div>
            </div>

            <!-- VIEW 2: CUSTOM TIME RANGE SELECTOR (COMMUNITY HALL STYLE) -->
            <div v-else-if="settings.bookingStyle === 'range'" class="space-y-4">
              <p class="text-xs text-zinc-400">Select your custom booking time interval range:</p>

              <div class="flex items-center gap-4">
                <!-- Start Dropdown -->
                <div class="flex flex-col gap-1 flex-1">
                  <label class="text-[10px] uppercase font-bold tracking-wide text-zinc-500"
                    >Arrival Time</label
                  >
                  <select
                    v-model="rangeSelection.startTime"
                    class="bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-zinc-200 outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option v-for="hour in standardTimeOptions" :key="hour" :value="hour">
                      <!-- 🚀 LOCALIZED SELECT DROPDOWN LABEL -->
                      {{ formatTimeToLocalClientZone(hour) }}
                    </option>
                  </select>
                </div>

                <span class="text-zinc-600 mt-4 font-mono text-xs">to</span>

                <!-- End Dropdown -->
                <div class="flex flex-col gap-1 flex-1">
                  <label class="text-[10px] uppercase font-bold tracking-wide text-zinc-500"
                    >Departure Time</label
                  >
                  <select
                    v-model="rangeSelection.endTime"
                    class="bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-zinc-200 outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option v-for="hour in standardTimeOptions" :key="hour" :value="hour">
                      <!-- 🚀 LOCALIZED SELECT DROPDOWN LABEL -->
                      {{ formatTimeToLocalClientZone(hour) }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Live Error / Conflict Warning -->
              <p
                v-if="hasRangeOverlapConflict"
                class="text-xs text-red-400 font-semibold bg-red-950/30 border border-red-900/50 rounded p-2.5"
              >
                {{ rangeConflictMessage }}
              </p>
            </div>

            <button
              type="button"
              @click.prevent="currentFormStage = 2"
              :disabled="
                hasRangeOverlapConflict || (settings.bookingStyle === 'slot' && !selectedSlot)
              "
              class="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-30 disabled:pointer-events-none text-white font-bold py-2.5 rounded text-xs transition-all uppercase tracking-wider cursor-pointer"
            >
              Continue to Details →
            </button>
          </div>

          <!-- STAGE 2: INTAKE CLIENT CONTACT INFO -->
          <div v-else-if="currentFormStage === 2" class="space-y-3.5 animate-fade-in">
            <p class="text-xs text-zinc-400">
              Complete your contact info to secure the reservation slot:
            </p>

            <div class="space-y-1">
              <label class="text-[10px] uppercase font-bold text-zinc-400 tracking-wide block"
                >Your Full Name</label
              >
              <input
                type="text"
                v-model="clientForm.name"
                placeholder="John Doe"
                class="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div class="space-y-1">
              <label class="text-[10px] uppercase font-bold text-zinc-400 tracking-wide block"
                >Email Address</label
              >
              <input
                type="email"
                v-model="clientForm.email"
                placeholder="john@example.com"
                class="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div class="space-y-1">
              <label class="text-[10px] uppercase font-bold text-zinc-400 tracking-wide block"
                >Appointment Notes / Requirements</label
              >
              <textarea
                v-model="clientForm.notes"
                placeholder="Any specific requests or context..."
                class="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-zinc-100 h-16 focus:outline-none focus:border-emerald-500 font-sans"
              />
            </div>

            <div class="flex gap-2 pt-2">
              <button
                type="button"
                @click.prevent="currentFormStage = 1"
                class="p-2 px-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded text-xs hover:bg-zinc-800 transition cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="button"
                @click.prevent="submitFinalBookingToFirebase"
                :disabled="
                  submittingToFirebase || !clientForm.name.trim() || !clientForm.email.trim()
                "
                class="flex-grow bg-emerald-600 hover:bg-emerald-700 disabled:opacity-30 disabled:pointer-events-none text-white font-bold rounded text-xs transition-all uppercase tracking-wider cursor-pointer"
              >
                {{ submittingToFirebase ? 'Processing sync...' : 'Confirm Reservation Now' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useRoute } from 'vue-router'

const route = useRoute()

// CORE FUNNEL WORKSPACE STATES
const settings = ref(null)
const ownerUid = ref('')
const currentFormStage = ref(1)
const submittingToFirebase = ref(false)
const bookingCompleted = ref(false)
const loadingBusyState = ref(false)

const selectedDate = ref(null)
const selectedSlot = ref(null)
const generatedAvailableSlots = ref([
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
])
const googleBusySlots = ref([])

// Date Tracking Variables
const calendarDate = ref(new Date())
const paddingDays = ref(0)
const daysInMonthList = ref([])

// 🌍 AUTOMATIC TIMEZONE DETECTION LOGIC
const clientBrowserTimezone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC')

/**
 * Translates an incoming slot string layout safely into the client's local user context hour badge
 * e.g., "09:30 AM" -> Converts to whatever local time standard matches their active screen session
 */
const formatTimeToLocalClientZone = (timeOptionStr) => {
  if (!timeOptionStr) return ''

  // Splitting out hour tokens to build clean transient dates
  const [time, modifier] = timeOptionStr.split(' ')
  let [hours, minutes] = time.split(':').map(Number)
  if (modifier === 'PM' && hours < 12) hours += 12
  if (modifier === 'AM' && hours === 12) hours = 0

  const proxyDate = new Date()
  proxyDate.setHours(hours, minutes, 0, 0)

  return proxyDate.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

// Client Intake parameters
const clientForm = reactive({
  name: '',
  email: '',
  notes: '',
})

// Setup range variables
const rangeSelection = reactive({
  startTime: '09:00 AM',
  endTime: '12:00 PM',
})

// Simple helper array for range selectors
const standardTimeOptions = [
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
]

const currentMonthName = computed(() => {
  return calendarDate.value.toLocaleString('en-US', { month: 'long', year: 'numeric' })
})

const formattedSelectedDate = computed(() => {
  if (!selectedDate.value) return ''
  return selectedDate.value.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
})

// Utility function to convert standard string date + "09:30 AM" string to an absolute Javascript Date Instance
function parseTimeToDate(timeStr) {
  if (!selectedDate.value) return new Date()
  const [time, modifier] = timeStr.split(' ')
  let [hours, minutes] = time.split(':').map(Number)
  if (modifier === 'PM' && hours < 12) hours += 12
  if (modifier === 'AM' && hours === 12) hours = 0

  const d = new Date(selectedDate.value.getTime())
  d.setHours(hours, minutes, 0, 0)
  return d
}

// 🚀 FILTER ENGINE FOR "SLOT" MODE
const filteredAvailableSlots = computed(() => {
  if (googleBusySlots.value.length === 0) return generatedAvailableSlots.value

  return generatedAvailableSlots.value.filter((slot) => {
    const slotStart = parseTimeToDate(slot)
    // Assume each appointment slot duration is 30 mins
    const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000)

    // Check if this slot overlaps with ANY busy block returned by Google Calendar
    return !googleBusySlots.value.some((busy) => {
      const busyStart = new Date(busy.start)
      const busyEnd = new Date(busy.end)
      return slotStart < busyEnd && slotEnd > busyStart
    })
  })
})

const rangeConflictMessage = ref('The selected time block overlaps with an existing reservation.')

const hasRangeOverlapConflict = computed(() => {
  if (!settings.value) return false

  const startIdx = standardTimeOptions.indexOf(rangeSelection.startTime)
  const endIdx = standardTimeOptions.indexOf(rangeSelection.endTime)

  // Logical validation check: Arrival time cannot be equal or after Departure time
  if (startIdx >= endIdx) {
    rangeConflictMessage.value = 'Arrival time must be set before your scheduled departure time.'
    return true
  }

  if (googleBusySlots.value.length === 0) return false

  const proposedStart = parseTimeToDate(rangeSelection.startTime)
  const proposedEnd = parseTimeToDate(rangeSelection.endTime)

  // Scan cross-referenced blocks to find conflicts
  const overlapsGoogle = googleBusySlots.value.some((busy) => {
    const busyStart = new Date(busy.start)
    const busyEnd = new Date(busy.end)
    return proposedStart < busyEnd && proposedEnd > busyStart
  })

  if (overlapsGoogle) {
    rangeConflictMessage.value =
      'The selected time block overlaps with an existing calendar reservation.'
    return true
  }

  return false
})

function isPastDate(day) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const checkingTarget = new Date(
    calendarDate.value.getFullYear(),
    calendarDate.value.getMonth(),
    day,
  )

  return checkingTarget < today
}

function calculateCalendarGrid() {
  const year = calendarDate.value.getFullYear()
  const month = calendarDate.value.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  paddingDays.value = firstDay === 0 ? 6 : firstDay - 1

  const days = new Date(year, month + 1, 0).getDate()
  daysInMonthList.value = Array.from({ length: days }, (_, i) => i + 1)
}

function navigateMonth(direction) {
  calendarDate.value = new Date(
    calendarDate.value.getFullYear(),
    calendarDate.value.getMonth() + direction,
    1,
  )
  calculateCalendarGrid()
}

async function selectDate(day) {
  selectedSlot.value = null
  const targetsDate = new Date(calendarDate.value.getFullYear(), calendarDate.value.getMonth(), day)
  selectedDate.value = targetsDate

  // 🚀 STATE RESET CODES: The second they select any date, wipe out the old success view
  // and drop them cleanly back into Stage 1 (Time Choice selection)
  bookingCompleted.value = false
  currentFormStage.value = 1

  // Clear out any old form details text so the next booking is fresh
  clientForm.name = ''
  clientForm.email = ''
  clientForm.notes = ''

  // Format date to ISO string standard template: YYYY-MM-DD
  const year = targetsDate.getFullYear()
  const month = String(targetsDate.getMonth() + 1).padStart(2, '0')
  const dateDay = String(targetsDate.getDate()).padStart(2, '0')
  const formattedDateString = `${year}-${month}-${dateDay}`

  const currentWidgetId = route.query.id || 'widget_1TcqhHaq_main_001'
  loadingBusyState.value = true
  googleBusySlots.value = []

  try {
    const response = await fetch(
      `https://us-central1-seamlesscal.cloudfunctions.net/getFreeBusySlots?widgetId=${currentWidgetId}&date=${formattedDateString}`,
    )
    const data = await response.json()
    if (response.ok && data.busySlots) {
      googleBusySlots.value = data.busySlots
    }
  } catch (error) {
    console.error('Failed querying free/busy schedule metrics stream loop:', error)
  } finally {
    loadingBusyState.value = false
  }
}

function isSameDate(day) {
  if (!selectedDate.value) return false
  return (
    selectedDate.value.getDate() === day &&
    selectedDate.value.getMonth() === calendarDate.value.getMonth() &&
    selectedDate.value.getFullYear() === calendarDate.value.getFullYear()
  )
}

function selectTimeSlot(slot) {
  selectedSlot.value = slot
}

async function submitFinalBookingToFirebase() {
  if (submittingToFirebase.value) return
  submittingToFirebase.value = true

  try {
    const rawTimeStr =
      settings.value.bookingStyle === 'slot' ? selectedSlot.value : rangeSelection.startTime

    const year = selectedDate.value.getFullYear()
    const month = String(selectedDate.value.getMonth() + 1).padStart(2, '0')
    const day = String(selectedDate.value.getDate()).padStart(2, '0')

    const combinedDateTimeString = `${year}-${month}-${day} ${rawTimeStr}`
    const currentWidgetId = route.query.id || 'widget_1TcqhHaq_main_001'

    const httpBodyPayload = {
      widgetId: currentWidgetId,
      clientName: clientForm.name.trim(),
      clientEmail: clientForm.email.trim(),
      meetingTime: combinedDateTimeString,
    }

    const response = await fetch(
      'https://us-central1-seamlesscal.cloudfunctions.net/createBooking',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(httpBodyPayload),
      },
    )

    const responseData = await response.json()

    if (!response.ok) {
      throw new Error(responseData.error || 'Network execution rejected request.')
    }

    bookingCompleted.value = true
  } catch (err) {
    console.error('Failed processing reservation pipeline execution:', err)
    alert(`Could not log reservation: ${err.message}`)
  } finally {
    submittingToFirebase.value = false
  }
}

onMounted(async () => {
  try {
    calculateCalendarGrid()

    const widgetId = route.query.id || 'widget_1TcqhHaq_main_001'
    const widgetDocRef = doc(db, 'widgets', widgetId)
    const docSnap = await getDoc(widgetDocRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      ownerUid.value = data.ownerUid || ''
      settings.value = data.settings || { bookingStyle: 'slot', slotDurationMinutes: 30 }
    } else {
      settings.value = { bookingStyle: 'slot', slotDurationMinutes: 30 }
    }
  } catch (err) {
    console.error('Failed processing stream configurations:', err)
  }
})
</script>

<style scoped>
.animate-fade-in {
  animation: modalFadeIn 0.2s ease-out forwards;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
