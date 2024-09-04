<script setup lang="ts">
import CustomInput from '@/components/CustomInput.vue';

import CustomButton from '@/ui/CustomButton.vue';
import { RangeSizeIcon } from '@/ui/icons/index';

import type { SizeRangeData } from "@/types/ProductItems";

const { sizeRangeData } = defineProps<{ sizeRangeData: SizeRangeData[] | undefined }>();
</script>

<template>
    <div class="size-range">
        <div class="size-range-title">
            <RangeSizeIcon />
            <h5>Размерный ряд</h5>
        </div>

        <div class="size-range-header">
            <div class="size-range-header__title">Размер</div>
            <div class="size-range-header__title">Остаток на WB</div>
            <div class="size-range-header__title">Хватит на</div>
            <div class="size-range-header__title">Остаток у поставщика</div>
            <div class="size-range-header__title">Хватит на</div>
            <div class="size-range-header__title">Остаток мой склад</div>
            <div class="size-range-header__title">Хватит на</div>
            <div class="size-range-header__title">Остаток всего</div>
            <div class="size-range-header__title">Хватит на</div>
            <div class="size-range-header__title">В пути от <br>производителя</div>
            <div class="size-range-header__title">Скорость заказов</div>
            <div class="size-range-header__title">История <br>изменения</div>
        </div>

        <table class="size-range__items">
            <tr v-for="item in sizeRangeData" :key="item.size" class="size-range__item">

                <td><span class="size">{{ item.size }}</span></td>
                <td>{{ item.remainder }} шт.</td>
                <td>{{ item.remainderLeft }} дня</td>
                <td>{{ item.supplierBalance }} шт.</td>
                <td>{{ item.supplierLeft }} дня</td>
                <td>
                    <CustomInput id="adffkjasd" :value="item.warehouse" />
                </td>
                <td>{{ item.warehouseLeft }} дня</td>
                <td>{{ item.all }} шт.</td>
                <td>{{ item.allLeft }} дня</td>
                <td>
                    <CustomInput id="kjfek" :value="item.way" />
                </td>
                <td>{{ item.speed }} шт. / день</td>
                <td>
                    <CustomButton />
                </td>

            </tr>
        </table>

    </div>
</template>

<style>
.size-range {
    position: relative;

    grid-column: 1/3;

    padding: 16px;
    border-radius: 4px;
    background-color: #F8F8F8;

    overflow: hidden;
}

.size-range::after {
    content: "";

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    width: 4px;

    background-color: #A5D274;
}

.size-range-title {
    display: flex;
    gap: 8px;

    padding-left: 16px;
    padding-bottom: 12px;
}

.size-range-title h5 {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
}

.size-range-header {
    display: grid;
    grid-template-columns: 130px 130px 100px 130px 100px 130px 100px 130px 130px 130px 130px 130px;

    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
}

.size-range-header__title {
    display: flex;
    align-items: center;
    padding-left: 16px;
    height: 48px;

    color: #999999;
    white-space: nowrap;
}

.size-range__item {
    display: grid;
    grid-template-columns: 130px 130px 100px 130px 100px 130px 100px 130px 130px 130px 130px 130px;

    padding: 12px 16px;
    background-color: var(--white-color);
    border-bottom: 1px solid #EBEBEB;
}

.size-range__item .size {
    display: grid;
    place-items: center;

    width: 72px;
    height: 24px;
    border-radius: 4px;
    background-color: var(--pink-color);
    color: var(--white-color);
}
</style>