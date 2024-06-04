<script setup lang="ts">
import type { ILead } from '../model/lead.model';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons-vue';

const props = defineProps<{
  lead: ILead;
}>();

</script>

<template>
  <a-descriptions
    :title="lead.leadName"
    bordered="true"
    
    style="margin: 16px"
  >
    <a-descriptions-item label="Цена">{{ lead.price }}₽ </a-descriptions-item>
    <a-descriptions-item label="Имя ответственного">
      {{ lead.responsibleUserName }}
      <a :href="'mailto:' + lead.responsibleUserEmail" style="margin: 0 5px;">
        <MailOutlined />
      </a>
    </a-descriptions-item>
    <a-descriptions-item label="Название воронки">
      {{ lead.pipelineName }}</a-descriptions-item
    >
    <a-descriptions-item label="Статус сделки">
      <a-tag :color="lead.statusColor">{{ lead.statusName }}</a-tag>
    </a-descriptions-item>
    <a-descriptions-item label="Контакты" v-for="contact in lead.contacts">
      <a-typography-title :level="5"
        >{{ contact.contactFullName }}
      </a-typography-title>
      <template v-for="contactPosition in contact.POSITION">
        <a-typography-text style="margin: 0 10px 10px 0;">{{ contactPosition.value }}</a-typography-text>
      </template>
      <template v-for="contactMail in contact.EMAIL">
        <a :href="'mailto:' + contactMail.value" style="margin: 0 5px;">
          <MailOutlined />
        </a>
      </template>
      <template v-for="contactPhone in contact.PHONE" ">
        <a :href="'callto:' + contactPhone.value" style="margin: 0 5px;">
          <PhoneOutlined />
        </a>
      </template>
    </a-descriptions-item>
  </a-descriptions>
</template>
