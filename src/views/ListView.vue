<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center" :class="colors[selectedColor - 1].name">事項</h1>
      </v-col>
      <v-col cols="12">
        <v-text-field
        variant="solo-filled"
        label="新增事項"
        v-model="newItem"
        :rules="[rules.required, rules.length]"
        append-icon="mdi-plus"
        ref="newItemInput"
        @click:append="onInputSubmit"
        @keydown.enter="onInputSubmit"
        ></v-text-field>
        <v-table :class="colors[selectedColor - 1].bName">
          <thead :class="colors[selectedColor - 1].bName">
            <tr>
              <th>名稱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody :class="colors[selectedColor - 1].bName">
            <tr v-for="(item, i) in items" :key="item.id">
              <td>
                <span v-show="!item.edit">{{ item.name }}</span>
                <v-text-field
                v-show="item.edit"
                v-model="item.model"
                :rules="[rules.required, rules.length]"
                ref="editItemInput"
                @keydown.enter="onEditInputSubmit(item.id, i)"
                autofocus
                ></v-text-field>
              </td>
              <td>
                <template v-if="!item.edit">
                    <!--
                      可在物件上寫 @click="item.edit 或在 js 檔案內寫成 function 統一管理
                      <v-btn icon="mdi-pencil" variant="text" color="green" @click="item.edit = true"></v-btn>
                    -->
                  <v-btn
                  icon="mdi-pencil"
                  variant="text"
                  color="green"
                  @click="editItem(item.id)"
                  ></v-btn>
                  <v-btn
                  icon="mdi-delete"
                  variant="text"
                  color="red"
                  @click="delItem(item.id)"
                  ></v-btn>
                </template>
                <template v-else>
                  <v-btn
                  icon="mdi-check"
                  variant="text"
                  color="green"
                  @click="onEditInputSubmit(item.id, i)"
                  ></v-btn>
                  <v-btn
                  icon="mdi-undo"
                  variant="text"
                  color="red"
                  @click="cancelEditItem(item.id)"
                  ></v-btn>
                </template>
              </td>
            </tr>
            <tr v-if="items.length === 0">
              <td colspan="2">沒有事項</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center" :class="colors[selectedColor - 1].name">已完成事項</h1>
      </v-col>
      <v-col cols="12">
        <v-table :class="colors[selectedColor - 1].bName">
          <thead :class="colors[selectedColor - 1].bName">
            <tr>
              <th>名稱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody :class="colors[selectedColor - 1].bName">
            <tr v-for="item in finishedItems" :key="item.id">
              <td>{{ item.name }}</td>
              <td>
                <v-btn
                  icon="mdi-delete"
                  variant="text"
                  color="red"
                  @click="delFinishedItem(item.id)"
                ></v-btn>
              </td>
            </tr>
            <tr v-if="finishedItems.length === 0">
              <td colspan="2">沒有已完成的事項</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useListStore } from '@/store/list'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store/settings'

const settings = useSettingsStore()
const { colors, selectedColor } = storeToRefs(settings)

const list = useListStore()
const { items, finishedItems } = storeToRefs(list)
const { addItem, editItem, delItem, cancelEditItem, confirmEditItem, delFinishedItem } = list

const newItem = ref('')
const newItemInput = ref(null)
const editItemInput = ref([])

const onInputSubmit = async () => {
  const validate = await newItemInput.value.validate()
  console.log(validate)
  if (validate.length > 0) return
  addItem(newItem.value)
  newItemInput.value.reset()
}

const onEditInputSubmit = async (id, i) => {
  const validate = await editItemInput.value[i].validate()
  if (validate.length > 0) return
  confirmEditItem(id)
}

const rules = {
  required: (value) => {
    return Boolean(value) || '欄位必填'
  },
  length: (value) => {
    return value.length >= 3 || '必須三個字以上'
  }
}
</script>

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
