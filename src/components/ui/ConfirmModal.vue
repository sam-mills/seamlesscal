<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div
      @click="handleCancel"
      class="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
    ></div>

    <div
      class="relative w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-900 p-5 text-white shadow-2xl animate-scale-in space-y-4"
    >
      <div class="space-y-2">
        <h3
          class="text-sm font-bold tracking-wide text-zinc-100 uppercase font-mono text-emerald-500"
        >
          {{ title }}
        </h3>
        <p class="text-xs text-zinc-300 leading-relaxed">
          {{ message }}
        </p>
      </div>

      <div class="flex items-center justify-end gap-2.5 pt-2">
        <button
          @click="handleCancel"
          class="text-xs font-semibold h-8 px-3.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-md border border-zinc-700 shadow-sm cursor-pointer transition-colors"
        >
          {{ cancelText }}
        </button>
        <button
          @click="handleConfirm"
          :class="[
            'text-xs font-semibold h-8 px-4 rounded-md shadow-sm cursor-pointer text-white transition-colors',
            isDestructive ? 'bg-rose-600 hover:bg-rose-700' : 'bg-emerald-600 hover:bg-emerald-700',
          ]"
        >
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  title: { type: String, default: 'System Confirmation' },
  message: { type: String, default: 'Are you sure you want to proceed?' },
  confirmText: { type: String, default: 'Confirm' },
  cancelText: { type: String, default: 'Cancel' },
  isDestructive: { type: Boolean, default: false },
})

const emit = defineEmits(['confirm', 'cancel'])

function handleConfirm() {
  emit('confirm')
}
function handleCancel() {
  emit('cancel')
}
</script>
