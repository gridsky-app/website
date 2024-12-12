<script setup lang="ts">
import {useDisplay} from "vuetify";

const slider: any = useTemplateRef('slider')
const display = useDisplay()

const firstSliderWidth = computed(() => {
  if (display.lgAndUp.value) {
    return {
      width: 'calc(100vw - 319px)'
    }
  }

  if (display.width.value < 640) {
    return {
      width: '100vw'
    }
  }

  return {
    width: 'calc(100vw - 97px)'
  }
})

onMounted(() => {
  if (!slider.value) {
    return
  }

  slider.value.initialize()
})

function onLaunch() {
  slider.value.swiper.slideTo(1, 500)
}

useSeoMeta({
  title: 'Bluesky with unleashed creativity',
  description: 'Gridsky brings the Instagram experience to Bluesky, offering an alternative client that unleashes boundless creativity in your favorite decentralized network',
  ogImage: '/assets/og-image.png'
})
</script>

<template>
  <swiper-container
      ref="slider"
      class="fill-height"
      slides-per-view="auto"
      :init="false"
  >
    <swiper-slide :style="firstSliderWidth">

      <v-row no-gutters class="fill-height">
        <v-col
            :cols="11" :md="6" :offset="1" :offset-md="2"
            class="fill-height" style="align-content: center;"
        >

          <AppIntro @launch="onLaunch" />

        </v-col>
        <v-col class="hidden-sm-and-down" />
      </v-row>

    </swiper-slide>
    <swiper-slide style="width: 100vw;">

      <Iframe />

    </swiper-slide>
  </swiper-container>
</template>

<style scoped lang="scss">

</style>