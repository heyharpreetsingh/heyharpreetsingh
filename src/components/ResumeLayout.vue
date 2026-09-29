<template>
  <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none">
    <!-- Header Section -->
    <div class="border-b-2 border-gray-200 dark:border-gray-700 p-8 print:p-4">
      <div>
        <h1 class="text-4xl font-bold mb-2 text-gray-900 dark:text-white">{{ personalInfo.name }}</h1>
        <p class="text-xl text-gray-700 dark:text-gray-300 mb-3">{{ personalInfo.title }}</p>

        <!-- Contact Info -->
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <div class="flex items-center gap-2">
            <Phone :size="16" />
            <span>{{ personalInfo.phone }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Mail :size="16" />
            <a :href="`mailto:${personalInfo.email}`" class="hover:text-primary-600 dark:hover:text-primary-400">
              {{ personalInfo.email }}
            </a>
          </div>
          <div class="flex items-center gap-2">
            <MapPin :size="16" />
            <span>{{ personalInfo.location }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Linkedin :size="16" />
            <a href="https://www.linkedin.com/in/heyharpreetsingh/" target="_blank" rel="noopener noreferrer" class="hover:text-primary-600 dark:hover:text-primary-400">
              linkedin.com/in/heyharpreetsingh
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="p-8 print:p-4 space-y-6 print:space-y-3">
      <!-- Summary -->
      <section>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 print:mb-2 uppercase tracking-wide">
          Professional Summary
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ personalInfo.bio }}
        </p>
      </section>

      <!-- Skills -->
      <section>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 print:mb-2 uppercase tracking-wide">
          Technical Skills
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="category in skillCategories" :key="category.name">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ category.name }}</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in category.skills"
                :key="skill.name"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
              >
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 print:mb-2 uppercase tracking-wide">
          Work Experience
        </h2>
        <div class="space-y-4 print:space-y-3">
          <div v-for="exp in experiences" :key="exp.company" class="pb-4 print:pb-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
            <div class="mb-3">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ exp.title }}</h3>
              <div class="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mt-1">
                <span class="font-semibold">{{ exp.company }}</span>
                <span>•</span>
                <span>{{ exp.location }}</span>
                <span>•</span>
                <span>{{ exp.period }}</span>
              </div>
            </div>

            <ul class="space-y-1 print:space-y-0.5 mb-3 print:mb-2 list-disc list-inside">
              <li
                v-for="(item, i) in exp.description"
                :key="i"
                class="text-gray-700 dark:text-gray-300 text-sm"
              >
                {{ item }}
              </li>
            </ul>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in exp.technologies"
                :key="tech"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 print:mb-2 uppercase tracking-wide">
          Projects
        </h2>
        <div class="space-y-4 print:space-y-3">
          <div v-for="project in featuredProjects" :key="project.title" class="pb-4 print:pb-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
            <div class="mb-2">
              <p class="text-xs font-semibold text-gray-600 dark:text-gray-400">
                Technology: {{ project.technologies.join(', ') }}
              </p>
            </div>
            <ul class="space-y-1 print:space-y-0.5 mb-3 print:mb-2 list-disc list-inside">
              <li
                v-for="(item, i) in project.description"
                :key="i"
                class="text-gray-700 dark:text-gray-300 text-sm"
              >
                {{ item }}
              </li>
            </ul>
            <div class="flex gap-3 text-sm" v-if="project.github || project.demo">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink :size="14" />
                <span>GitHub</span>
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink :size="14" />
                <span>Packagist</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 print:mb-2 uppercase tracking-wide">
          Education
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="cert in certifications" :key="cert.name" class="flex items-start gap-3">
            <Award :size="20" class="text-primary-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white text-sm">{{ cert.name }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-xs">{{ cert.issuer }} • {{ cert.date }}</p>
              <p v-if="cert.credentialId" class="text-gray-500 dark:text-gray-500 text-xs mt-1">
                ID: {{ cert.credentialId }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Open Source / Package -->
      <section>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 print:mb-2 uppercase tracking-wide">
          Open Source/Package
        </h2>
        <div class="space-y-4">
          <div class="pb-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Laravel Firebase Cloud Messaging (FCM)</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm mb-2">
              Developed and published a Laravel package for integrating Firebase Cloud Messaging (FCM), enabling push notifications for web and mobile applications.
            </p>
            <div class="text-sm">
              <span class="font-semibold text-gray-600 dark:text-gray-400">Packagist: </span>
              <a
                href="https://packagist.org/packages/heyharpreetsingh/fcm"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-600 dark:text-primary-400 hover:underline"
              >
                https://packagist.org/packages/heyharpreetsingh/fcm
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Languages -->
      <section>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 print:mb-2 uppercase tracking-wide">
          Languages
        </h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="lang in languages"
            :key="lang.name"
            class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
          >
            {{ lang.name }}
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Award,
} from 'lucide-vue-next'
import {
  personalInfo,
  skills,
  experiences,
  projects,
  certifications,
  languages,
} from '../data/portfolio'

const featuredProjects = computed(() => projects.filter((p) => p.featured))

const skillCategories = computed(() => {
  const categories = [
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend Development' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'tools', name: 'Tools & Technologies' },
  ]

  return categories.map((cat) => ({
    name: cat.name,
    skills: skills.filter((s) => s.category === cat.id),
  }))
})
</script>
