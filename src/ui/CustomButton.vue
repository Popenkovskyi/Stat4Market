<script setup lang="ts">
const { second } = defineProps<{ second?: boolean }>()
</script>

<template>
    <button class="button" :class="{ second: second }">
        <slot>
            Посмотреть
        </slot>
    </button>
</template>

<style>
.button {
    display: flex;
    align-items: center;
    gap: 4px;

    width: max-content;
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    background-color: var(--primary-blue-color);
    color: var(--white-color);

    /* //styleName: Text_Lato Regular 12 | 16; */
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;

    cursor: pointer;
    transition: .2s;
}

.button:hover {
    opacity: var(--defualt-opacity);
}

.second {
    padding: 12px 16px;

    color: #333333;
    border-radius: 4px;
    border: 1px solid #D8DCE9;
    background-color: transparent;
}
</style>