<script setup lang="ts">
import { ref, computed } from 'vue'
import { TriggerType } from '@/components/input/enums'

const props = defineProps<{
  id?: string
  required: boolean
  name: string
  class?: string
  modelValue: string
  type?: string
  disabled?: boolean
  error?: { status: boolean; message: string }
  trigger?: TriggerType
  maxLength?: string
  pattern?: { letters?: string; numbers?: string }
}>()

const errorVariable = ref('')
const errorMessage = computed(() => errorVariable.value)

const emit = defineEmits(['update:modelValue', 'update:error'])
// const handlePattern = (e) => {
//   if (props.pattern) {
//     const { letters, numbers } = props.pattern
//     if (letters && !numbers) {
//     }
//   }
// }
const handleError = (event: Event) => {
  if (props.required) {
    if (props.error) {
      if (!(event.target as HTMLInputElement).value) {
        emit('update:error', {
          status: true,
          message: props.error.message,
        })
        errorVariable.value = props.error.message
      } else {
        emit('update:error', {
          status: false,
          message: props.error.message,
        })
        errorVariable.value = ''
      }
    } else {
      if (!(event.target as HTMLInputElement).value) {
        errorVariable.value = `${props.name} field is required`
      } else {
        errorVariable.value = ''
      }
    }
  }
}
const onBlur = (event: Event) => {
  if (props.trigger !== TriggerType.CHANGE) {
    handleError(event)
  }
}
const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
  if (props.trigger === TriggerType.CHANGE) {
    handleError(event)
  }
}
</script>

<template>
  <input
    :id="id || name"
    :type="type || 'text'"
    :name="name"
    :value="modelValue"
    autocomplete="off"
    :class="[
      {
        'form-control-error': error,
      },
      props.class,
    ]"
    :disabled="disabled"
    class="form-control"
    :maxLength="maxLength"
    @input="onInput"
    @blur="onBlur"
  />
  <span class="form-control-error">{{ errorMessage }}</span>
</template>
