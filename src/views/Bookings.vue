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

    <!-- GLOBAL CONVERSION GATE FOR FREE USERS -->
    <div
      v-else-if="userPlanTier === 'free'"
      class="border border-slate-200 dark:border-zinc-800 rounded-xl p-16 text-center bg-white dark:bg-zinc-900 max-w-3xl mx-auto space-y-6 shadow-sm mt-8"
    >
      <div
        class="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold"
      >
        !
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
      <div class="flex border-b border-slate-200 dark:border-zinc-800 gap-2 overflow-x-auto pb-px">
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
          v-if="enablePenciledInPipeline"
          @click="activeTab = 'penciled-in'"
          :class="[
            'px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap',
            activeTab === 'penciled-in'
              ? 'border-teal-500 text-teal-600 dark:text-teal-400'
              : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300',
          ]"
        >
          Penciled-In Hold ({{ penciledInCount }})
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
              <div class="flex items-center gap-1.5">
                <span
                  v-if="booking.termsSigned"
                  class="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-1.5 py-0.5 rounded text-[8px] font-bold tracking-wide uppercase"
                >
                  Contract ✓
                </span>
                <span
                  :class="[
                    'px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase',
                    booking.status === 'pending'
                      ? 'bg-amber-500/10 text-amber-600'
                      : booking.status === 'penciled-in'
                        ? 'bg-teal-500/10 text-teal-600'
                        : booking.status === 'confirmed'
                          ? 'bg-emerald-500/10 text-emerald-600'
                          : 'bg-rose-500/10 text-rose-600',
                  ]"
                >
                  {{ booking.status }}
                </span>
              </div>
            </div>
            <p class="text-xs text-slate-400 dark:text-zinc-500 truncate">
              {{ booking.clientEmail }}
            </p>

            <div
              class="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-zinc-200"
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
              <span>{{ formatBookingTimeLabel(booking) }}</span>
            </div>

            <!-- DISPLAY PENCILED-IN START TIMESTAMP -->
            <div
              v-if="booking.status === 'penciled-in' && booking.penciledInAt"
              class="text-[10px] text-teal-600 font-semibold bg-teal-500/5 p-1.5 rounded border border-teal-500/10 mt-1"
            >
              Held on: {{ formatMeetingDate(booking.penciledInAt) }}
            </div>
          </div>

          <!-- UNIFIED INTERACTIVE TRIGGER BUTTON -->
          <div
            class="flex items-center justify-end pt-2 border-t border-slate-100 dark:border-zinc-800/40"
          >
            <Button
              @click="openManagementModal(booking)"
              variant="outline"
              class="border-zinc-200 dark:border-zinc-800 text-xs font-bold px-4 h-8 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-150 transition-all cursor-pointer"
            >
              {{ activeTab === 'confirmed' || activeTab === 'past' ? 'View History' : 'Manage' }}
            </Button>
          </div>
        </Card>
      </div>
    </div>

    <!-- THE UNIFIED COMMUNICATIONS MANAGEMENT MODAL -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <Card
        class="w-full max-w-2xl bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 max-h-[90vh] flex flex-col shadow-2xl rounded-xl overflow-hidden"
      >
        <!-- Modal Title Header -->
        <div
          class="p-5 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between bg-slate-50 dark:bg-zinc-950"
        >
          <div>
            <h2 class="text-base font-bold text-slate-900 dark:text-zinc-50">
              Manage Reservation — {{ selectedBooking?.clientName }}
            </h2>
            <p class="text-xs text-slate-400 dark:text-zinc-500 mt-0.5">
              {{ selectedBooking?.clientEmail }} •
              {{ selectedBooking ? formatBookingTimeLabel(selectedBooking) : '' }}
            </p>
          </div>
          <button
            @click="closeManagementModal"
            class="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 text-lg font-bold cursor-pointer p-1"
          >
            &times;
          </button>
        </div>

        <div class="p-6 overflow-y-auto space-y-6 flex-1">
          <!-- SECTION 1: MICRO-ACCORDION RUNNING AUDIT LOG TIMELINE -->
          <div class="space-y-2.5">
            <h3
              class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500"
            >
              Interaction Log History Trail
            </h3>

            <div
              v-if="!selectedBooking?.interactionLog || selectedBooking.interactionLog.length === 0"
              class="text-xs text-slate-400 dark:text-zinc-500 italic p-3 bg-slate-50 dark:bg-zinc-950 rounded-lg border border-dashed border-slate-200 dark:border-zinc-800"
            >
              No historical manual communication payloads tracked yet for this appointment item.
            </div>

            <div v-else class="space-y-2">
              <div
                for="(log, idx) in selectedBooking.interactionLog"
                :key="log.logId || idx"
                class="border border-slate-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-slate-50 dark:bg-zinc-950/40"
              >
                <button
                  @click="activeAccordionIdx = activeAccordionIdx === idx ? null : idx"
                  class="w-full text-left px-3 py-2 flex items-center justify-between text-xs font-medium text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900/60 transition-all cursor-pointer"
                >
                  <span class="flex items-center gap-2">
                    <span>{{ activeAccordionIdx === idx ? '▼' : '▶' }}</span>
                    <strong class="text-slate-900 dark:text-zinc-100">{{
                      mapLogLabel(log.actionType)
                    }}</strong>
                    <span
                      v-if="log.templateName"
                      class="text-[10px] bg-zinc-200/60 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-600"
                      >{{ log.templateName }}</span
                    >
                  </span>
                  <span class="text-[10px] text-slate-400 font-mono">{{
                    formatMeetingDate(log.timestamp)
                  }}</span>
                </button>
                <div
                  v-if="activeAccordionIdx === idx"
                  class="p-3 bg-white dark:bg-zinc-950 text-xs text-slate-600 dark:text-zinc-400 border-t border-slate-150 dark:border-zinc-800/80 font-serif leading-relaxed whitespace-pre-wrap"
                >
                  "{{ log.messageBody }}"
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION 2: ADAPTIVE INTERACTION PANEL UTILITIES -->
          <div
            v-if="
              selectedBooking?.status === 'pending' || selectedBooking?.status === 'penciled-in'
            "
            class="space-y-6 pt-4 border-t border-slate-200 dark:border-zinc-800"
          >
            <!-- 🗂️ ZONE A: ATTRIBUTES FIELD -->
            <div
              class="bg-slate-50 dark:bg-zinc-950 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 space-y-4"
            >
              <h4
                class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500"
              >
                System Workspace Attributes
              </h4>

              <div class="space-y-1.5">
                <label
                  class="text-[11px] font-bold text-slate-700 dark:text-zinc-300 flex items-center gap-1.5"
                >
                  <span>Bespoke Google Form Contract URL</span>
                  <span class="text-[9px] font-normal text-slate-400 dark:text-zinc-500 lowercase"
                    >(Saves securely on update or scan)</span
                  >
                </label>
                <div class="flex gap-2">
                  <input
                    type="url"
                    v-model="customFormUrlInput"
                    placeholder="https://docs.google.com/forms/d/.../edit"
                    class="flex-1 text-xs h-9 rounded-md border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-sans"
                  />
                  <Button
                    @click="saveCustomFormUrlOnly"
                    :disabled="urlSaving"
                    variant="outline"
                    class="h-9 px-3 text-xs font-bold border-zinc-200 dark:border-zinc-800 hover:bg-zinc-150 text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 cursor-pointer shadow-sm flex items-center gap-1"
                  >
                    <span>{{ urlSaving ? 'Saving...' : '💾 Save Contract Link' }}</span>
                  </Button>
                </div>
              </div>

              <!-- 🕒 INDUSTRY JARGON MODE DEFIER ROW -->
              <div
                class="pt-2 border-t border-slate-200/60 dark:border-zinc-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] leading-relaxed"
              >
                <div class="space-y-0.5">
                  <span class="font-bold text-slate-800 dark:text-zinc-300 block"
                    >🕒 Fixed-Block Mode (Slots)</span
                  >
                  <span class="text-slate-400 dark:text-zinc-500 block"
                    >Ideal for venue tours, key handovers, or pre-scheduled recurring community
                    group fitness sessions.</span
                  >
                </div>
                <div class="space-y-0.5">
                  <span class="font-bold text-slate-800 dark:text-zinc-300 block"
                    >🏰 Custom-Interval Mode (Ranges)</span
                  >
                  <span class="text-slate-400 dark:text-zinc-500 block"
                    >Perfect for weekend hall hires, private parties, weddings, or custom multi-hour
                    facility rentals.</span
                  >
                </div>
              </div>

              <!-- 💡 FOOLPROOF GOOGLE FORM INSTRUCTIONS INFO CARD -->
              <div
                class="mt-3 p-3 rounded-lg border border-emerald-500/10 bg-emerald-500/5 text-[11px] leading-relaxed text-slate-600 dark:text-zinc-400"
              >
                <strong
                  class="text-emerald-600 dark:text-emerald-400 uppercase tracking-wide font-bold block mb-1"
                  >💡 How to Link Your Contract (Before You Publish!)</strong
                >
                <ol class="list-decimal pl-4 space-y-1">
                  <li>
                    Create or open your rental terms contract within your Google Forms workspace.
                  </li>
                  <li>
                    <strong>BEFORE</strong> clicking "Send" or generating response links for your
                    clients, look at your browser's address bar at the very top of the screen.
                  </li>
                  <li>
                    Copy that exact active web address string (it will naturally terminate in
                    <code
                      class="bg-zinc-200/60 dark:bg-zinc-800/60 px-1 py-0.5 rounded text-slate-800 dark:text-zinc-200 font-mono text-[10px]"
                      >/edit</code
                    >).
                  </li>
                  <li>
                    Paste it here and save. This ensures our automated backend signature loop has
                    secure scanning clearance!
                  </li>
                </ol>
              </div>
            </div>

            <!-- 📬 ZONE B: FORM SIGNATURE TRAIL AUDITOR -->
            <div
              v-if="customFormUrlInput && customFormUrlInput.trim() !== ''"
              class="p-5 rounded-xl border flex flex-col gap-4 transition-all bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm"
              :style="
                selectedBooking?.termsSigned
                  ? 'background-color: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.2);'
                  : ''
              "
            >
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 dark:border-zinc-800/60 pb-4"
              >
                <div class="space-y-0.5">
                  <span
                    class="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-zinc-500 block"
                  >
                    Contract Signature Tracking
                  </span>
                  <h4
                    class="text-sm font-bold flex items-center gap-2 text-slate-900 dark:text-zinc-100"
                  >
                    Status:
                    <span
                      :class="
                        selectedBooking?.termsSigned
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-amber-500'
                      "
                    >
                      {{
                        selectedBooking?.termsSigned
                          ? '✓ Signed & Verified'
                          : '⏳ Pending Form Signature'
                      }}
                    </span>
                  </h4>
                </div>

                <div v-if="!selectedBooking?.termsSigned">
                  <Button
                    @click="checkGoogleFormSignature"
                    :disabled="signatureAuditLoading"
                    variant="outline"
                    class="w-full sm:w-auto h-8 text-xs font-bold border-zinc-200 dark:border-zinc-800 hover:bg-zinc-150 transition-all cursor-pointer shadow-sm bg-white dark:bg-zinc-900"
                  >
                    {{
                      signatureAuditLoading
                        ? 'Analyzing Submissions...'
                        : '🔍 Scan Google Form Answers'
                    }}
                  </Button>
                </div>
                <div
                  v-else
                  class="text-xs bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md font-bold text-emerald-600 dark:text-emerald-400"
                >
                  Verification Log Clear ✓
                </div>
              </div>

              <!-- ✉️ DISPATCH CONTROL SUITE FOR HOST MANAGERS -->
              <div
                v-if="!selectedBooking?.termsSigned"
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1"
              >
                <div class="space-y-0.5">
                  <span class="text-xs font-bold block text-slate-800 dark:text-zinc-200">
                    Need to distribute this paperwork layout?
                  </span>
                  <span class="text-[10px] text-slate-400 dark:text-zinc-500 block">
                    Pencils in the slot and fires the custom link directly to client.
                  </span>
                </div>
                <Button
                  @click="dispatchContractFormToClient"
                  :disabled="modalActionLoading"
                  class="w-full sm:w-auto h-8 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1"
                >
                  ✉️ Send Form to Client
                </Button>
              </div>
            </div>

            <!-- 💬 ZONE C: CONVERSATION MESSAGING ENGINE -->
            <div class="space-y-4">
              <h3
                class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500"
              >
                Communication & Messaging Engine
              </h3>

              <!-- Custom Boilerplate Template Injector Row -->
              <div class="space-y-2">
                <span class="text-[11px] font-bold text-slate-500 dark:text-zinc-400 block"
                  >Inject Custom Message Templates:</span
                >
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="(tpl, idx) in customMessageTemplates"
                    :key="idx"
                    @click="injectTemplateText(tpl.content)"
                    type="button"
                    class="text-[11px] font-bold px-2.5 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-md bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-emerald-500/40 hover:text-emerald-500 dark:hover:text-emerald-400 cursor-pointer transition-all"
                  >
                    Send: {{ tpl.title }}
                  </button>
                  <div
                    v-if="customMessageTemplates.length === 0"
                    class="text-[10px] text-slate-400 italic"
                  >
                    No default boilerplate layouts built yet inside your custom platform Profile
                    settings.
                  </div>
                </div>
              </div>

              <!-- Operational Message Area Box -->
              <div class="space-y-1.5">
                <label class="text-[11px] font-bold text-slate-500 dark:text-zinc-400"
                  >Message Box Body</label
                >
                <textarea
                  v-model="modalMessageText"
                  placeholder="Type your notification message guidelines here or insert a boiler setting block shortcut above..."
                  class="w-full text-xs h-24 rounded-md border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-sans"
                />

                <!-- STANDALONE MESSAGE TRANSMISSION SHORTCUT LINK -->
                <div class="flex justify-end pt-1">
                  <Button
                    @click="sendOnlyMessageNote"
                    :disabled="modalActionLoading || !modalMessageText.trim()"
                    variant="outline"
                    class="border-zinc-200 dark:border-zinc-800 text-[11px] font-bold h-7 px-3 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-150 transition-all cursor-pointer"
                  >
                    {{
                      selectedBooking?.status === 'pending'
                        ? 'Pencil In & Send Note'
                        : 'Send Message Note Only'
                    }}
                  </Button>
                </div>
              </div>

              <!-- Standard Chase Nudge Module Row Trigger -->
              <div
                class="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 p-3 rounded-lg border border-slate-200 dark:border-zinc-800"
              >
                <div class="space-y-0.5">
                  <span class="text-xs font-bold block text-slate-800 dark:text-zinc-200"
                    >Need to trigger a response reminder?</span
                  >
                  <span class="text-[10px] text-slate-400 dark:text-zinc-500 block"
                    >Sends a direct automated checkout notification reminder update to your
                    client.</span
                  >
                </div>
                <Button
                  @click="triggerClientNudge"
                  :disabled="modalActionLoading"
                  variant="outline"
                  class="border-amber-200 dark:border-amber-900/40 text-amber-600 dark:text-amber-400 text-[11px] font-bold h-7 px-3 bg-amber-500/5 hover:bg-amber-500/10 cursor-pointer shadow-sm"
                >
                  Nudge Client
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- FOOTER: ADAPTIVE ACTION WORKFLOW COMMAND BUTTONS -->
        <div
          class="p-4 border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <Button
            @click="closeManagementModal"
            variant="outline"
            class="w-full sm:w-auto border-slate-200 dark:border-zinc-800 text-xs font-semibold h-9 cursor-pointer bg-white dark:bg-zinc-900"
          >
            Close Panel
          </Button>

          <div class="flex items-center gap-2.5 w-full sm:w-auto">
            <!-- Branching Pipeline Options for Intake State -->
            <template v-if="selectedBooking?.status === 'pending'">
              <Button
                @click="executeModalDecision('declined')"
                :disabled="modalActionLoading"
                variant="outline"
                class="flex-1 sm:flex-initial border-rose-200 hover:bg-rose-50 text-rose-600 text-xs font-bold h-9 px-4 cursor-pointer"
              >
                Decline
              </Button>
              <Button
                v-if="enablePenciledInPipeline"
                @click="executeModalDecision('penciled-in')"
                :disabled="modalActionLoading"
                class="flex-1 sm:flex-initial bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold h-9 px-4 cursor-pointer"
              >
                Pencil In
              </Button>
              <Button
                @click="executeModalDecision('confirmed')"
                :disabled="modalActionLoading"
                class="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold h-9 px-4 cursor-pointer"
              >
                Confirm & Lock In
              </Button>
            </template>

            <!-- Branching Options for Active Hold State -->
            <template v-if="selectedBooking?.status === 'penciled-in'">
              <Button
                @click="executeModalDecision('declined')"
                :disabled="modalActionLoading"
                variant="outline"
                class="flex-1 sm:flex-initial border-rose-200 hover:bg-rose-50 text-rose-600 text-xs font-bold h-9 px-4 cursor-pointer"
              >
                Release Hold
              </Button>
              <Button
                @click="executeModalDecision('confirmed')"
                :disabled="modalActionLoading"
                class="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold h-9 px-4 cursor-pointer"
              >
                Confirm Payments & Book
              </Button>
            </template>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '@/firebase'
import { collection, query, where, getDocs, orderBy, doc, getDoc, setDoc } from 'firebase/firestore'
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

const enablePenciledInPipeline = ref(false)
const customMessageTemplates = ref([])

const isModalOpen = ref(false)
const selectedBooking = ref(null)
const modalMessageText = ref('')
const customFormUrlInput = ref('')
const activeAccordionIdx = ref(null)
const modalActionLoading = ref(false)

// 🚀 GOOGLE FORMS DIRECT API AUDITOR TRACKING VARIABLES
const signatureAuditLoading = ref(false)
const urlSaving = ref(false)

const fetchHostBookingsList = async () => {
  if (!props.userId) return

  try {
    loading.value = true

    const userDocRef = doc(db, 'users', props.userId)
    const userSnap = await getDoc(userDocRef)
    if (userSnap.exists()) {
      const userData = userSnap.data()
      userPlanTier.value = userData.planTier || 'free'
      enablePenciledInPipeline.value = userData.enablePenciledIn ?? false
      customMessageTemplates.value = userData.messageTemplates || []
    }

    const bookingsQuery = query(
      collection(db, 'bookings'),
      where('ownerUid', '==', props.userId),
      orderBy('createdAt', 'desc'),
    )

    const snapshot = await getDocs(bookingsQuery)
    const appointments = []
    snapshot.forEach((doc) => {
      appointments.push({ id: doc.id, ...doc.data() })
    })
    rawBookings.value = appointments
  } catch (error) {
    console.error('Failed reading reservation dataset index mappings:', error)
  } finally {
    loading.value = false
  }
}

const filteredBookings = computed(() => {
  return rawBookings.value.filter((b) => {
    if (activeTab.value === 'pending') {
      return b.status === 'pending'
    } else if (activeTab.value === 'penciled-in') {
      return b.status === 'penciled-in'
    } else if (activeTab.value === 'confirmed') {
      return b.status === 'confirmed' && !isPastBooking(b)
    } else {
      return b.status === 'declined' || (b.status === 'confirmed' && isPastBooking(b))
    }
  })
})

const pendingCount = computed(() => {
  return rawBookings.value.filter((b) => b.status === 'pending').length
})

const penciledInCount = computed(() => {
  return rawBookings.value.filter((b) => b.status === 'penciled-in').length
})

const confirmedCount = computed(() => {
  return rawBookings.value.filter((b) => b.status === 'confirmed' && !isPastBooking(b)).length
})

const pastCount = computed(() => {
  return rawBookings.value.filter(
    (b) => b.status === 'declined' || (b.status === 'confirmed' && isPastBooking(b)),
  ).length
})

function isPastBooking(booking) {
  const targetDateStr = booking.bookingDate || booking.meetingTime || booking.bookingTime
  if (!targetDateStr) return false

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const parsed = Date.parse(targetDateStr)
  if (isNaN(parsed)) return false

  return new Date(parsed) < today
}

function formatBookingTimeLabel(booking) {
  if (booking.bookingDate && (booking.bookingTime || booking.meetingTime)) {
    return `${booking.bookingDate} @ ${booking.bookingTime || booking.meetingTime}`
  }
  return formatMeetingDate(booking.meetingTime || booking.bookingTime)
}

const formatMeetingDate = (isoString) => {
  if (!isoString) return ''
  return new Date(isoString).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

const openManagementModal = (booking) => {
  selectedBooking.value = booking
  modalMessageText.value = ''
  customFormUrlInput.value = booking.customFormUrl || ''
  activeAccordionIdx.value = null
  isModalOpen.value = true
}

const closeManagementModal = () => {
  isModalOpen.value = false
  selectedBooking.value = null
  modalMessageText.value = ''
  customFormUrlInput.value = ''
}

const injectTemplateText = (content) => {
  modalMessageText.value = content
}

const mapLogLabel = (type) => {
  const labels = {
    penciled_in_offer: 'Hold Instructions Issued',
    nudge: 'Automated Nudge Sent',
    manual_note: 'Manual Memo Dispatched',
    confirmed_receipt: 'Final Confirmation Receipt',
  }
  return labels[type] || 'Communication Element'
}

// 💾 EXPLICIT STANDALONE URL SAVE HANDLER
const saveCustomFormUrlOnly = async () => {
  if (!selectedBooking.value || urlSaving.value) return

  urlSaving.value = true
  try {
    const targetUrl = customFormUrlInput.value.trim()
    const bookingDocRef = doc(db, 'bookings', selectedBooking.value.id)

    await setDoc(
      bookingDocRef,
      {
        customFormUrl: targetUrl,
        updatedAt: new Date().toISOString(),
      },
      { merge: true },
    )

    selectedBooking.value.customFormUrl = targetUrl
    alert('✓ Contract Form URL saved successfully to booking context.')
    await fetchHostBookingsList()
  } catch (err) {
    console.error('Failed syncing updated form URL record:', err)
    alert(`Save Error: ${err.message}`)
  } finally {
    urlSaving.value = false
  }
}

// ✉️ DEDICATED CONTRACT DISPATCH HANDLER
const dispatchContractFormToClient = async () => {
  if (!selectedBooking.value || modalActionLoading.value) return

  modalActionLoading.value = true
  try {
    const currentInputUrl = customFormUrlInput.value.trim()

    // Auto-save the text input state first to protect current changes
    const bookingDocRef = doc(db, 'bookings', selectedBooking.value.id)
    await setDoc(
      bookingDocRef,
      {
        customFormUrl: currentInputUrl,
        updatedAt: new Date().toISOString(),
      },
      { merge: true },
    )
    selectedBooking.value.customFormUrl = currentInputUrl

    if (!currentInputUrl) {
      alert('Please save a valid contract form link before trying to dispatch an email payload.')
      modalActionLoading.value = false
      return
    }

    const functionsInstance = getFunctions(db.app)
    const updateStatusCall = httpsCallable(functionsInstance, 'updateBookingStatus')

    // Invoke backend pipeline to toggle status to penciled-in and dispatch email
    const payload = {
      bookingId: selectedBooking.value.id,
      id: selectedBooking.value.id,
      documentId: selectedBooking.value.id,
      status: 'penciled-in',
      reason: modalMessageText.value,
      message: modalMessageText.value,
      sendNoteToClient: true,
      customFormUrl: currentInputUrl,
      data: {
        bookingId: selectedBooking.value.id,
        status: 'penciled-in',
        reason: modalMessageText.value,
        sendNoteToClient: true,
        customFormUrl: currentInputUrl,
      },
    }

    await updateStatusCall(payload)
    alert('✉️ Hold instructions along with your contract token link were sent to the client!')

    closeManagementModal()
    await fetchHostBookingsList()
  } catch (error) {
    console.error('Failed dispatching automated contract email:', error)
    alert(`Email Dispatch Error: ${error.message}`)
  } finally {
    modalActionLoading.value = false
  }
}

// 🚀 GOOGLE FORMS DIRECT API AUDITOR METHOD
const checkGoogleFormSignature = async () => {
  if (!selectedBooking.value || signatureAuditLoading.value) return

  signatureAuditLoading.value = true
  try {
    const currentInputUrl = customFormUrlInput.value.trim()

    // Auto-save the current text input value first so that nothing gets lost
    if (currentInputUrl !== selectedBooking.value.customFormUrl) {
      const bookingDocRef = doc(db, 'bookings', selectedBooking.value.id)
      await setDoc(
        bookingDocRef,
        {
          customFormUrl: currentInputUrl,
          updatedAt: new Date().toISOString(),
        },
        { merge: true },
      )

      selectedBooking.value.customFormUrl = currentInputUrl
    }

    if (!currentInputUrl) {
      alert('Please paste a valid Google Form Creator /edit URL before running a signature scan.')
      signatureAuditLoading.value = false
      return
    }

    const functionsInstance = getFunctions(db.app)
    const verifySignatureCall = httpsCallable(functionsInstance, 'verifyFormSignatureViaAPI')

    const result = await verifySignatureCall({
      bookingId: selectedBooking.value.id,
    })

    if (result.data && result.data.verified) {
      alert(
        '✓ Contract Signature Verified! The Forms API matched the client details on a recent submission record.',
      )
      selectedBooking.value.termsSigned = true
      await fetchHostBookingsList()
    } else {
      alert("⏳ No submission containing this client's email or name was found on the form yet.")
    }
  } catch (error) {
    console.error('Forms API alignment validation failure:', error)
    alert(`Audit Error: ${error.message}`)
  } finally {
    signatureAuditLoading.value = false
  }
}

const executeModalDecision = async (nextStatus) => {
  if (!selectedBooking.value) return

  modalActionLoading.value = true
  try {
    const functionsInstance = getFunctions(db.app)
    const updateStatusCall = httpsCallable(functionsInstance, 'updateBookingStatus')

    const payload = {
      bookingId: selectedBooking.value.id,
      id: selectedBooking.value.id,
      documentId: selectedBooking.value.id,
      status: nextStatus,
      reason: modalMessageText.value,
      message: modalMessageText.value,
      sendNoteToClient: modalMessageText.value.trim().length > 0,
      customFormUrl: customFormUrlInput.value.trim(),
      data: {
        bookingId: selectedBooking.value.id,
        status: nextStatus,
        reason: modalMessageText.value,
        sendNoteToClient: modalMessageText.value.trim().length > 0,
        customFormUrl: customFormUrlInput.value.trim(),
      },
    }

    await updateStatusCall(payload)

    closeManagementModal()
    await fetchHostBookingsList()
  } catch (error) {
    console.error('Modal handshake execution fail:', error)
    alert(`Action error: ${error.message}`)
  } finally {
    modalActionLoading.value = false
  }
}

const sendOnlyMessageNote = async () => {
  if (!selectedBooking.value || !modalMessageText.value.trim()) return

  modalActionLoading.value = true
  try {
    const functionsInstance = getFunctions(db.app)
    const updateStatusCall = httpsCallable(functionsInstance, 'updateBookingStatus')

    const targetStatus =
      selectedBooking.value.status === 'pending' ? 'penciled-in' : selectedBooking.value.status

    const payload = {
      bookingId: selectedBooking.value.id,
      id: selectedBooking.value.id,
      documentId: selectedBooking.value.id,
      status: targetStatus,
      reason: modalMessageText.value,
      message: modalMessageText.value,
      sendNoteToClient: true,
      customFormUrl: customFormUrlInput.value.trim(),
      data: {
        bookingId: selectedBooking.value.id,
        status: targetStatus,
        reason: modalMessageText.value,
        sendNoteToClient: true,
        customFormUrl: customFormUrlInput.value.trim(),
      },
    }

    await updateStatusCall(payload)

    modalMessageText.value = ''
    alert('Message note successfully sent to client email!')

    await fetchHostBookingsList()

    if (selectedBooking.value && rawBookings.value.length > 0) {
      const refreshedDoc = rawBookings.value.find((b) => b.id === selectedBooking.value.id)
      if (refreshedDoc) {
        selectedBooking.value = refreshedDoc
      }
    }
  } catch (error) {
    console.error('Handshake failure transmitting manual note payload:', error)
    alert(`Message action error: ${error.message}`)
  } finally {
    modalActionLoading.value = false
  }
}

const triggerClientNudge = async () => {
  if (!selectedBooking.value) return

  modalActionLoading.value = true
  try {
    const functionsInstance = getFunctions(db.app)
    const dispatchNudgeCall = httpsCallable(functionsInstance, 'sendClientNudgeReminder')

    const payload = {
      bookingId: selectedBooking.value.id,
      id: selectedBooking.value.id,
      documentId: selectedBooking.value.id,
      data: {
        bookingId: selectedBooking.value.id,
      },
    }

    await dispatchNudgeCall(payload)

    alert('Response tracking nudge email successfully sent to customer!')
    closeManagementModal()
    await fetchHostBookingsList()
  } catch (error) {
    console.error('Nudge transaction fail:', error)
    alert(`Nudge error: ${error.message}`)
  } finally {
    modalActionLoading.value = false
  }
}

watch(
  () => props.userId,
  (newId) => {
    if (newId) {
      fetchHostBookingsList()
    }
  },
  { immediate: true },
)
</script>
