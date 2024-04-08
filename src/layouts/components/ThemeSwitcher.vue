<template>
    <v-btn variant="text" color="grey-50" :icon="themeIcon" @click="themeStore.toggleTheme" title="Theme"
        aria-label="Switch Theme"></v-btn>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useThemeStore } from '@/store/themeStore';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const themeIcon = computed(() => {
    return isDark?.value ? 'mdi-weather-night' : 'mdi-weather-sunny'
})

</script>