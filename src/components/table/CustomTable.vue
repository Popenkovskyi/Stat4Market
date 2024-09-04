<script setup>
import TableHeader from '@/components/table/TableHeader.vue';
import TableItem from '@/components/table/TableItem.vue';

import { productItems } from "@/assets/mock/productItems.ts";
</script>

<template>
    <TableHeader />
    <TableItem v-for="item in productItems" :table-item="item" />
</template>