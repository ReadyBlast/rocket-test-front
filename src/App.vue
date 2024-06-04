<script setup lang="ts">
import CardLeadInfo from './components/CardLeadInfo.vue';
import { onMounted, ref } from 'vue';

import axios from 'axios';
import type { ILead } from './model/lead.model';

const loading = ref<boolean>(false);
const searchInputValue = ref<string>('');
const leads = ref<ILead[]>([]);

const getLeads = async (query?: string) => {
  loading.value = true;
  await axios
    .get<ILead[]>(import.meta.env.VITE_URL, {
      params: {
        query,
      },
    })
    .then((response) => {
      loading.value = false;
      leads.value = response.data;
    })
    .catch((error) => console.log(error));
};

const onSearch = (searchValue: string) => {
  if (searchValue.length >= 3 || searchValue.length === 0) {
    getLeads(searchValue);
  }

  if (searchValue.length < 3) {
    leads.value  = [];
  }
};

onMounted(() => getLeads());
</script>

<template>
  <a-flex
    vertical
    style="max-width: 1250px; margin: 50px auto"
    align="center"
    gap="large"
  >
    <a-flex justify="space-between" style="width: 100%">
      <a-typography-title style="width: 100%" :level="2"
        >Сделки</a-typography-title
      >
      <a-input-search
        v-model:value="searchInputValue"
        placeholder="Введите поисковый запрос"
        enter-button
        
        :loading="loading"
        @search="onSearch"
        size="large"
      />
    </a-flex>

    <a-flex wrap="wrap" align="center" justify="center" gap="large" style="position: relative;">
      <a-empty v-if="leads.length <= 0" style="opacity: 0.5;" />
      <CardLeadInfo
        v-for="lead in leads"
        :key="lead.id"
        :lead="lead"
        v-show="!loading"
      />
      <a-spin :spinning="loading" size="large" style="position: fixed;"/>
    </a-flex>
  </a-flex>
</template>
