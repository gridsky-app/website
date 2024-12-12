<script setup lang="ts">
const emit = defineEmits(['launch'])

function onLaunchClick(e: any) {
  e.preventDefault()

  emit('launch')
}
</script>

<template>
  <div>
    <h1 class="text-h1 ml-n2">
      Gridsky
    </h1>
    <div class="text-overline text-grey-darken-2 mt-6">
      on a mission
    </div>
    <p class="text-subtitle-1">
      Bringing the Instagram experience<br />
      to the Bluesky decentralized network.
    </p>
    <div class="mt-2">
      <a
          href="https://gridsky.app"
          class="text-grey mr-4"
          @click="onLaunchClick"
      >
        Launch
      </a>
      <a
          href="https://patreon.com/dxlliv"
          target="_blank"
          class="text-grey"
      >
        Get early access features
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media(max-width: 640px) {
  .text-h1 {
    font-size: 88px !important;
  }

  .text-subtitle-1 {
    br {
      display: none;
    }
  }
}
</style>