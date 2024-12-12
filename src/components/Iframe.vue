<script setup lang="ts">
const iframeOpacity = ref(false)

onMounted(() => {
  window.addEventListener('message', function(event) {
    if (event.data === 'mounted') {
      iframeOpacity.value = true
    }
  })
})
</script>

<template>
  <div :class="['gsky-iframe', {'gsky-iframe--visible': iframeOpacity}]">
    <iframe src="https://gridsky.app" />
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
}
</style>