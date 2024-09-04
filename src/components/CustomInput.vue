<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';

import { ApplyIcon, CancelIcon } from '@/ui/icons/index';

import { formatNumber } from '@/utils/index';

interface Props {
    id?: string
    value?: string
    valueType?: string
}

const props = withDefaults(defineProps<Props>(), {
    value: "0",
    valueType: "шт."
})

const inputElement: Ref<HTMLInputElement | null> = ref(null);

const inputValue: Ref<string> = ref(formatNumber(props.value));
const previousValue: Ref<string> = ref("");

const isActive: Ref<boolean> = ref(false);

function changeValue(event: Event): void {
    const { value } = event.target as HTMLInputElement;
    inputValue.value = value.replace(/\s/g, '');
    isActive.value = true;

    changeInputElementWidth();
}

function applyChanges(): void {
    isActive.value = false;
    inputValue.value = formatNumber(inputValue.value);

    changeInputElementWidth();
}

function cancelChanges(): void {
    isActive.value = false;
    inputValue.value = previousValue.value;

    changeInputElementWidth();
}

function savePreviousValue(event: Event): void {
    const { value } = event.target as HTMLInputElement;
    previousValue.value = value;
}

function changeInputElementWidth(): void {
    inputElement.value!.style.width = inputValue.value?.length + "ch";
}

onMounted(() => changeInputElementWidth());
</script>

<template>
    <div class="custom-input-wrapper">
        <div class="custom-input">
            <input :id="props.id" ref="inputElement" type="text" :value="inputValue" @input="changeValue"
                @focus="savePreviousValue">
            <label v-if="!isActive" :for="props.id" class="custom-input__text">{{ props.valueType }}</label>
        </div>

        <div v-if="isActive" class="custom-input-icons">
            <ApplyIcon @click="applyChanges" />
            <CancelIcon @click="cancelChanges" />
        </div>
    </div>
</template>

<style>
.custom-input-wrapper {
    display: flex;
    align-items: center;
}

.custom-input {
    width: max-content;
    border-bottom: 1px dotted var(--primary-blue-color);
    color: var(--primary-blue-color);
}

.custom-input input {
    padding: 0;
    border: none;
    color: inherit;

    width: 1ch;
    /* field-sizing: content; */

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

}

.custom-input input:focus-visible {
    outline: none;
}

.custom-input__text {
    padding-left: 2px;
}

.custom-input-icons {
    display: flex;
    align-items: center;
    gap: 4px;
    padding-left: 8px;
}
</style>