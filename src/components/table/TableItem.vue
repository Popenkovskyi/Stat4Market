<script setup lang="ts">
import { ref, type Ref } from 'vue';

import {
    InfoIcon,
    LinkIcon,
    ArrowIcon
} from '@/ui/icons/index';

import CustomChips from '@/ui/CustomChips.vue';
import CustomButton from '@/ui/CustomButton.vue';

import CustomInput from '@/components/CustomInput.vue';
import SizeRange from '@/components/table/SizeRange.vue';

import type { ProductItem } from "@/types/ProductItems";

import { formatNumber } from '@/utils/index';

const { tableItem } = defineProps<{ tableItem: ProductItem }>();

const isRangeSize: boolean = tableItem.sizeRangeData ? true : false;
const isRangeSizeActive: Ref<boolean> = ref(false);

function openRangeSize(): void {
    isRangeSizeActive.value = !isRangeSizeActive.value;
}
</script>

<template>
    <div class="table-item">
        <div class="table-item__description">
            <img class="description-image" src="@/assets/images/wb-image.jpg" alt="WB">
            <div class="description-text">
                <a href="#" class="description-title">
                    Долговечный букет из 9 роз в коробке,
                    в подарок — вечные стабилизированные цветы,
                </a>
                <span class="article-number">Артикул WB : 9619790</span>
            </div>
            <div class="description-icons">
                <LinkIcon />
                <InfoIcon />
            </div>
        </div>

        <div class="table-item__informations">

            <div class="table-item__info">
                <CustomInput id="adfadfk" :value="tableItem.onWB" />
                <CustomChips :value="tableItem.onWBLeft" />
            </div>

            <div class="table-item__info">
                <span>{{ formatNumber(tableItem.supplierBalance) }} шт.</span>
                <CustomChips :value="tableItem.supplierLeft" />
            </div>

            <div class="table-item__info">
                <CustomInput id="asdasafsa" :value="tableItem.warehouse" />
                <CustomChips :value="tableItem.warehouseLeft" />
            </div>

            <div class="table-item__info">
                <span>{{ formatNumber(tableItem.all) }} шт.</span>
                <CustomChips :value="tableItem.allLeft" />
            </div>

            <div class="table-item__info">
                <CustomInput id="lkvjdfskj" :value="tableItem.way" />
            </div>

            <div class="table-item__info">
                <CustomInput id="xabn" :value="tableItem.speed" value-type="шт. / день" />
                <span>150 шт. / 30 дней</span>
            </div>

            <div class="table-item__info">
                <CustomButton />
            </div>

        </div>

        <div v-if="isRangeSize" @click="openRangeSize" class="table-size-range-toggle">
            <h5>Размерный ряд</h5>
            <ArrowIcon :rotate="isRangeSizeActive" />
        </div>
        <SizeRange v-if="isRangeSizeActive" :size-range-data="tableItem.sizeRangeData" />

    </div>
</template>


<style>
.table-item {
    display: grid;
    grid-template-columns: 385px 1fr;
    gap: 16px;
    row-gap: 12px;

    padding: 20px;
    margin-top: 16px;
    border-radius: 4px;
    border: 1px solid #D8DCE9;
}

.table-item__informations {
    display: grid;
    grid-template-columns: 141px 184px 168px 133px 144px 150px auto;
    gap: 16px;
}

.table-item__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.table-item__description {
    display: flex;
}

.description-image {
    width: 35px;
    height: 46px;
    border-radius: 4px;
    object-fit: cover;
}

.description-text {
    margin-inline: 16px 4px;
}

.description-title {
    max-width: 250px;

    color: var(--primary-blue-color);
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.article-number {
    color: #666666;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
}

.description-icons {
    display: flex;
    align-self: center;
    gap: 4px;
}

.table-size-range-toggle {
    display: flex;
    align-items: center;
    gap: 8px;

    color: var(--primary-blue-color);
    width: max-content;
    user-select: none;
    cursor: pointer;
}

.table-size-range-toggle h5 {
    border-bottom: 1px dotted var(--primary-blue-color);

    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
}

.table-size-range-toggle:hover h5,
.table-size-range-toggle:hover svg {
    opacity: .6;
}
</style>