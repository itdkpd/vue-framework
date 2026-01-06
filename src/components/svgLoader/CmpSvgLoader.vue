<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// Props
interface Props {
  name: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  color: '#000',
})

// Methods
const Icon = defineAsyncComponent(() => import(`@/assets/images/icons/${props.name}.svg`))
</script>

<template>
  <div class="cmp-svg-loader">
    <Icon />
  </div>
</template>

<style scoped lang="scss">
.cmp-svg-loader {
  display: flex;
}
</style>
