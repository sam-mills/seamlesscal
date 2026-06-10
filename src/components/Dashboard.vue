<template>
  <div class="min-h-screen bg-slate-50/50 p-6 md:p-10">
    <div class="max-w-7xl mx-auto space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Widget Builder</h1>
          <p class="text-muted-foreground text-sm">
            Customize your embedded public calendar styling in real-time.
          </p>
        </div>
        <Button @click="saveSettings" :disabled="isSaving">
          {{ isSaving ? 'Saving...' : 'Save Changes' }}
        </Button>
      </div>

      <Separator />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-5 space-y-6">
          <Card class="p-6 space-y-4">
            <h2 class="text-lg font-semibold">Design Tokens</h2>

            <div class="space-y-2">
              <Label for="primaryColor">Primary Theme Color</Label>
              <div class="flex gap-3 items-center">
                <input
                  type="color"
                  id="primaryColor"
                  v-model="settings.primaryColor"
                  class="w-10 h-10 rounded border cursor-pointer"
                />
                <Input type="text" v-model="settings.primaryColor" class="font-mono" />
              </div>
            </div>

            <div class="space-y-2">
              <Label for="accentColor">Accent Color (Dates/Badges)</Label>
              <div class="flex gap-3 items-center">
                <input
                  type="color"
                  id="accentColor"
                  v-model="settings.accentColor"
                  class="w-10 h-10 rounded border cursor-pointer"
                />
                <Input type="text" v-model="settings.accentColor" class="font-mono" />
              </div>
            </div>

            <div class="space-y-2">
              <Label for="fontFamily">Widget Font Family</Label>
              <select
                id="fontFamily"
                v-model="settings.fontFamily"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="sans-serif">Sans Serif (Clean/Modern)</option>
                <option value="serif">Serif (Traditional/Elegant)</option>
                <option value="mono">Monospace (Technical)</option>
              </select>
            </div>
            <div class="space-y-2 mt-4">
              <Label class="text-sm font-medium text-slate-700">Calendar Layout Engine</Label>
              <select
                v-model="settings.layoutMode"
                class="w-full p-2 border border-slate-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <option value="elastic">Community Hub Flow (Elastic Rows)</option>
                <option value="grid">Standard Studio Grid (Locked Matrix)</option>
              </select>
              <p class="text-[11px] text-slate-400 italic mt-1">
                Choose "Elastic" to auto-grow rows for crowded days, or "Grid" to keep all boxes
                square.
              </p>
            </div>
          </Card>

          <Card class="p-6 space-y-4">
            <h2 class="text-lg font-semibold">Calendar Target</h2>
            <div class="space-y-2">
              <Label for="calendarId">Google Calendar ID</Label>
              <Input
                type="text"
                id="calendarId"
                v-model="settings.calendarId"
                placeholder="primary or group.calendar.google.com"
              />
            </div>
          </Card>
        </div>

        <div class="lg:col-span-7 space-y-4 sticky top-6">
          <span class="text-xs font-semibold tracking-wider text-muted-foreground uppercase"
            >Live Preview Mockup</span
          >

          <div
            class="border rounded-xl p-6 bg-white shadow-sm transition-all duration-200"
            :style="{
              '--calendar-primary': settings.primaryColor,
              '--calendar-accent': settings.accentColor,
              'font-family': settings.fontFamily,
            }"
          >
            <div
              class="preview-header p-4 rounded-lg flex justify-between items-center text-white mb-6"
            >
              <div>
                <h3 class="font-bold text-lg">Community Centre Events</h3>
                <p class="text-xs opacity-90">Upcoming Bookings</p>
              </div>
              <span class="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
                >June 2026</span
              >
            </div>

            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 border rounded-lg hover:shadow-sm">
                <div class="flex items-center gap-4">
                  <div
                    class="preview-badge flex flex-col items-center justify-center w-12 h-12 rounded-md font-bold text-sm text-white"
                  >
                    <span>08</span>
                    <span class="text-[10px] uppercase font-normal">Jun</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-sm text-slate-800">Morning Hatha Yoga Flow</h4>
                    <p class="text-xs text-slate-500">09:30 AM - 10:30 AM | Main Hall</p>
                  </div>
                </div>
                <span class="text-xs font-semibold text-slate-400">Public</span>
              </div>

              <div
                class="flex items-center justify-between p-3 border border-dashed rounded-lg bg-slate-50/50 opacity-60"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="bg-slate-200 text-slate-600 flex flex-col items-center justify-center w-12 h-12 rounded-md font-bold text-sm"
                  >
                    <span>12</span>
                    <span class="text-[10px] uppercase font-normal">Jun</span>
                  </div>
                  <div>
                    <h4 class="font-medium text-sm text-slate-600 italic">Private Booking</h4>
                    <p class="text-xs text-slate-400 italic">01:00 PM - 04:00 PM</p>
                  </div>
                </div>
                <span class="text-xs italic text-slate-400">Busy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// Import the core Firestore SDK functions we need
import { doc, getDoc, updateDoc } from 'firebase/firestore'
// Import our initialized database instance
import { db } from '../firebase'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

// Define the exact document target we generated in our Firestore UI step
const docRef = doc(db, 'widgets', 'apsley_test_001')

const isSaving = ref(false)
const settings = ref({
  primaryColor: '#003366',
  accentColor: '#D4AF37',
  fontFamily: 'sans-serif',
  calendarId: '',
  layoutMode: 'elastic', // Add this new baseline tracker token
})
// 1. On load, read current settings from the cloud database
onMounted(async () => {
  try {
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      // Repopulate our sliders with whatever was saved historically
      settings.value = { ...settings.value, ...docSnap.data() }
    } else {
      console.log('No existing cloud configuration document found. Using defaults.')
    }
  } catch (error) {
    console.error('Error fetching layout data from Firestore:', error)
  }
})

// 2. On click, update the document in the cloud database
const saveSettings = async () => {
  isSaving.value = true
  try {
    await updateDoc(docRef, {
      primaryColor: settings.value.primaryColor,
      accentColor: settings.value.accentColor,
      fontFamily: settings.value.fontFamily,
      calendarId: settings.value.calendarId,
      layoutMode: settings.value.layoutMode, // Forces the state update to save to the cloud
    })
    alert('Success! Custom theme and layout configurations securely synced.')
  } catch (error) {
    console.error('Error writing document tokens to Firestore:', error)
    alert('Failed to save settings.')
  } finally {
    isSaving.value = false
  }
}
</script>

<style scoped>
.preview-header {
  background-color: var(--calendar-primary);
}
.preview-badge {
  background-color: var(--calendar-accent);
}
</style>
