<script setup lang="ts">
import CustomButton from '@/ui/CustomButton.vue';
import { SettingsIcon } from '@/ui/icons/index';

import CustomTable from '@/components/table/CustomTable.vue';
import SideBar from '@/components/SideBar.vue';
</script>

<template>

  <SideBar />

  <main>
    <div class="product-title">
      <h2>Мой склад</h2>
      <CustomButton second>
        <SettingsIcon />
        Настройки отчета
      </CustomButton>
    </div>

    <div class="products-card">

      <h3>Товары: <span class="goods-title">134 шт.</span></h3>

      <CustomTable />

    </div>
  </main>

</template>

<style>
.product-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.products-card {
  padding: 30px;
  margin-top: 24px;
  border-radius: 8px;
  background-color: var(--white-color);
}

.goods-title {
  color: var(--pink-color);

  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
}
</style>
