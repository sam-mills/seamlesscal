<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <div class="relative w-full">
    <select
      v-bind="attrs"
      class="flex h-9 w-full items-center justify-between rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:focus:ring-zinc-300 text-slate-900 dark:text-zinc-50 font-medium cursor-pointer appearance-none pr-8"
    >
      <slot />
    </select>
    <div
      class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground opacity-60"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  </div>
</template>
