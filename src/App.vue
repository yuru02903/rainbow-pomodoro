<template>
  <v-app :class="colors[selectedColor - 1].bName">
    <v-app-bar >
      <v-toolbar :class="colors[selectedColor - 1].bName">
        <v-container class="d-flex align-center" :class="colors[selectedColor - 1].name">
          <v-app-bar-title class="font-weight-black">七彩鐘</v-app-bar-title>
          <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
          <v-btn prepend-icon="mdi-list-status" to="/list">事項</v-btn>
          <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
        </v-container>
      </v-toolbar>
    </v-app-bar>
    <v-main>
      <!-- Component = 目前該顯示的路由元件 -->
      <!-- 元件有三個: HomeView、ListView、SettingView -->
      <router-view v-slot="{ Component }">
        <!--
          keep-alive => 保持被包住的元件不因換頁被銷毀
          使用 include => 指定只有 HomeView 這個元件不被銷毀
        -->
          <!--
            component = 動態元件
            使用 is 綁定的原件，使現在顯示的原件 = 動態元件
          -->
        <keep-alive include="HomeView">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'
const settings = useSettingsStore()
const { colors, selectedColor } = storeToRefs(settings)

</script>
