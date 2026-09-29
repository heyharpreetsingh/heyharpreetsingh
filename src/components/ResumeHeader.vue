<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 print:hidden">
    <div class="max-w-5xl mx-auto px-8 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <button
            @click="toggleTheme()"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <component :is="isDark ? Moon : Sun" :size="20" />
          </button>
          <span class="text-sm text-gray-600 dark:text-gray-400"></span>
        </div>

        <div class="flex items-center gap-4">
          <button
            @click="printResume"
            class="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <Printer :size="18" />
            <span class="text-sm font-medium">Print / Save as PDF</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Sun, Moon, Printer } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const printResume = () => {
  window.print()
}
</script>
