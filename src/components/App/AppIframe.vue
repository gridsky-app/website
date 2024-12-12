<script setup lang="ts">
defineProps<{
  launcher: boolean
}>()

const emit = defineEmits(['launch'])

const iframeOpacity = ref(false)

onMounted(() => {
  window.addEventListener('message', function(event) {
    if (event.data === 'mounted') {
      setTimeout(() => {
        iframeOpacity.value = true
      }, 1250)
    }
  })
})

const iframeClasses = computed(() => {
  const classes = ['gsky-iframe']

  if (iframeOpacity.value) {
    classes.push('gsky-iframe--visible')
  }

  return classes
})
</script>

<template>
  <div :class="iframeClasses">
    <iframe src="https://gridsky.app" />
    <div
        v-if="launcher && $vuetify.display.width >= 640"
        class="gsky-iframe__launcher"
        @click="emit('launch')"
    />
  </div>
</template>

<style scoped lang="scss">
iframe {
  width: 100%;
  height: 100dvh;
  border: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.gsky-iframe {
  width: calc(100vw + 1px);
  border-left: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  margin-left: -1px;

  &--visible {
    iframe {
      opacity: 1;
    }
  }

  &__launcher {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }
}
</style>