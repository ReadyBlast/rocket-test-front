<script setup lang="ts">
import { ref } from 'vue';
import LeadDescription from './LeadDescription.vue';
import type { ILead } from '../model/lead.model';

defineProps<{
  lead: ILead;
}>();

const isModalVisible = ref<boolean>(false);
</script>

<template>
  <a-card :title="lead.leadName" style="max-width: 220px">
    <a-typography-text>Стоимость сделки:</a-typography-text>
    <a-typography-paragraph :strong="true">{{ lead.price }}₽</a-typography-paragraph>
    <a-typography-text>Ответственное лицо:</a-typography-text>
    <a-typography-paragraph :strong="true">{{ lead.responsibleUserName }}</a-typography-paragraph>
    <a-tag :color="lead.statusColor" style="margin-bottom: 15px">{{
      lead.statusName
    }}</a-tag>
    <a-button type="default" @click="isModalVisible = true" block>
      Подробнее
    </a-button>
  </a-card>

  <a-modal v-model:open="isModalVisible" centered style="width: 80%">
    <template #footer> </template>
    <LeadDescription :lead="lead" />
  </a-modal>
</template>
