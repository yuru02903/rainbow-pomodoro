<template>
  <v-container id="container">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center" :class="colors[selectedColor - 1].name">通知設定</h1>
      </v-col>
      <v-col cols="12">
        <v-radio-group inline v-model="notify">
          <v-radio label="開啟" :value="true"></v-radio>
          <v-radio label="關閉" :value="false"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center" :class="colors[selectedColor - 1].name">鈴聲設定</h1>
      </v-col>
      <v-col col="12">
        <v-table >
          <thead :class="colors[selectedColor - 1].bName">
            <tr>
              <th>名稱</th>
              <th>試聽</th>
              <th>選擇</th>
            </tr>
          </thead>
          <tbody :class="colors[selectedColor - 1].bName">
            <tr v-for="alarm in alarms" :key="alarm.id" :class="colors[selectedColor - 1].bName">
              <td>{{ alarm.name }}</td>
              <td class="pt-2" >
                <audio :src="alarm.file" controls :class="colors[selectedColor - 1].bName"></audio>
              </td>
              <td class="pt-5">
                <v-radio-group v-model="selectedAlarm">
                  <v-radio :value="alarm.id"></v-radio>
                </v-radio-group>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center" :class="colors[selectedColor - 1].name">色彩設定</h1>
      </v-col>
      <v-col cols="12" >
        <v-list class="pa-0">
          <v-list-group value="Users" :class="colors[selectedColor - 1].bName">
            <template v-slot:activator="{ props }" >
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-brush"
                title="版面顏色"
                style="height: 60px;"
              ></v-list-item>
            </template>

            <v-list-item v-for="color in colors" :key="color.id" :value="color.name" >
              <v-radio-group v-model="selectedColor" style="height: 50px;">
                <v-radio style="height: 50px;" :class="color.name" :label="color.name" :value="color.id" inline></v-radio>
              </v-radio-group>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { alarms, selectedAlarm, notify, colors, selectedColor } = storeToRefs(settings)

</script>

<!-- 使用style scoped會只影響此元件，但要此元件裡的元件可能不被影響，那就需要用:deep -->
<style scoped>
:deep(.v-selection-control-group.v-selection-control-group--inline) {
  margin: auto
}
</style>

<style>
.red {
  color: rgb(180, 40, 40);
}

.red-b {
  background: rgb(245, 238, 235);
}

.orange {
  color: rgb(200, 100, 45);
}
.orange-b {
  background: rgb(248, 243, 232);
}

.yellow {
  color: rgb(210, 200, 40);
}
.yellow-b {
  background:rgb(248, 251, 233);
}

.green {
  color: rgb(0, 145, 0);
}
.green-b {
  background: rgb(239, 248, 239);
}

.blue {
  color: rgb(2, 161, 209)
}

.blue-b {
  background: rgb(232, 240, 247)
}

.navy {
  color: rgb(5, 5, 161)
}
.navy-b {
  background: rgb(236, 238, 248)
}

.purple {
  color: purple
}
.purple-b {
  background: rgb(251, 244, 251)
}

</style>
