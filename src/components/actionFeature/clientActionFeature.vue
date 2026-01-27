<template>
  <section class="action-card" aria-labelledby="action-card-title">
    <div class="content">
      <h2 id="action-card-title" class="title">{{ title }}</h2>

      <p v-if="description" class="description" v-html="description"></p>

      <div v-if="actions.length" class="actions" role="group" aria-label="Actions">
        <template v-for="(action, index) in actions" :key="action.id ?? index">
          <a
            v-if="action.type === 'link'"
            :href="action.href"
            :target="action.target ?? '_self'"
            :rel="action.target === '_blank' ? (action.rel ?? 'noopener noreferrer') : action.rel"
            :class="['action-btn', action.variant ?? 'primary']"
          >
            {{ action.label }}
          </a>

          <button
            v-else
            type="button"
            :aria-label="(action as ButtonAction).ariaLabel ?? action.label"
            @click="handleButtonClick(action as ButtonAction, index)"
            :class="['action-btn', action.variant ?? 'primary']"
          >
            {{ action.label }}
          </button>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue'
import type { PropType } from 'vue'

type Variant = 'primary' | 'secondary'

interface BaseAction {
  id?: string
  label: string
  variant?: Variant
}

interface LinkAction extends BaseAction {
  type: 'link'
  href: string
  target?: '_self' | '_blank'
  rel?: string
}

interface ButtonAction extends BaseAction {
  type: 'button'
  ariaLabel?: string
  // Note: keep actions simple - button actions emit an event instead of passing functions
}

type Action = LinkAction | ButtonAction

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: false, default: '' },
  actions: { type: Array as PropType<Action[]>, default: () => [] },
})

const emit = defineEmits<{
  (e: 'action', payload: { id?: string; index: number }): void
}>()

watchEffect(() => {
  if (props.actions.length > 2) {
    // Friendly developer warning if more than two actions provided

    console.warn('ActionCard: props.actions should contain at most 2 actions.')
  }
})

const handleButtonClick = (action: ButtonAction, index: number): void => {
  emit('action', { id: action.id, index })
}
</script>

<style scoped>
:root {
  --color-primary: var(--book-bg-color);
  --color-primary-contrast: var(--white);
  --color-primary-hover: var(--book-bg-hover);
  --radius: 0.5rem;
  --font-sans:
    'Libre Franklin', system-ui, -apple-system, 'Segoe UI', roboto, 'Helvetica Neue', arial;
  --font-serif: 'Playfair Display', georgia, serif;
}

/* Container */
.action-card {
  padding: 1.25rem;
  border-radius: calc(var(--radius) * 1);
  color: var(--action-text-color);
}

/* Content */
.title {
  font-family: 'Playfair Display', serif;
  font-weight: 100;
  margin: 0 0 0.5rem;
  font-size: 2.5rem;
  line-height: 1.2;
  white-space: pre-line;
}

.description {
  margin: 0 0 1rem;
  font-family: var(--font-sans);
  color: var(--action-description-color);
  font-size: 1rem;
}

/* Actions */
.actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1rem;
  border-radius: var(--radius);
  font-family: var(--font-sans);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition:
    background-color 120ms ease-in-out,
    transform 80ms ease;
}

.action-btn.primary {
  background: var(--book-bg-color);
  color: var(--book-text-color);
  border-radius: 0.5rem;
  font-size: 1rem;
}

.action-btn.primary:hover {
  background: var(--book-bg-hover);
}

.action-btn.secondary {
  background: transparent;
  color: var(--action-text-color);
  border: 1px solid var(--action-border-color);
}

.action-btn:active {
  transform: translateY(1px);
}

/* Responsive */
@media (width <=600px) {
  .actions {
    flex-direction: column;
  }

  .action-btn {
    width: 100%;
  }
}
</style>
