<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <ResumeHeader />
    <div class="max-w-5xl mx-auto p-8">
      <ResumeLayout />
    </div>
  </div>
</template>

<script setup lang="ts">
import ResumeHeader from '../components/ResumeHeader.vue'
import ResumeLayout from '../components/ResumeLayout.vue'
</script>
