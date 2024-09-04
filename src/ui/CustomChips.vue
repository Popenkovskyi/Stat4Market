<script setup lang="ts">
const { value } = defineProps<{ value: string }>()
</script>

<template>
    <span class="chips">
        <slot>
            Хватит на {{ value }} дн.
        </slot>
    </span>
</template>

<style>
.chips {
    display: block;
    width: max-content;
    padding: 5px 16px;
    background: #F8F8F8;
    border-radius: 4px;

    color: #666666;

    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
}
</style>