<script setup>
import { Primitive } from 'reka-ui'

const props = defineProps({
  modelValue: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])

function handleInput(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div class="relative w-full">
    <slot :model-value="props.modelValue" :handle-input="handleInput" />
  </div>
</template>
