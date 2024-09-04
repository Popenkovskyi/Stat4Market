<script setup lang="ts">
import { SortIcon, QuestionIcon } from '@/ui/icons/index';
</script>

<template>
    <div class="table-header">
        <h4 class="table-header__title">Товар</h4>

        <div class="table-header__sorting">

            <div class="sort-type-wrapper">
                <div class="sort-type">
                    Остаток на WB
                    <SortIcon />
                    <QuestionIcon />
                </div>

                <div class="sort-type">
                    Хватит на складе
                    <SortIcon />
                </div>
            </div>

            <div class="sort-type-wrapper">
                <div class="sort-type">
                    Остаток у поставщика
                    <SortIcon />
                    <QuestionIcon />
                </div>

                <div class="sort-type">
                    Хватит на складе
                    <SortIcon />
                </div>
            </div>

            <div class="sort-type-wrapper">
                <div class="sort-type">
                    Остаток мой склад
                    <SortIcon />
                    <QuestionIcon />
                </div>

                <div class="sort-type">
                    Хватит на складе
                    <SortIcon />
                </div>
            </div>

            <div class="sort-type-wrapper">
                <div class="sort-type">
                    Остаток всего
                    <SortIcon />
                    <QuestionIcon />
                </div>

                <div class="sort-type">
                    Хватит на складе
                    <SortIcon />
                </div>
            </div>

            <div class="sort-type-wrapper">
                <div class="sort-type">
                    В пути от <br>производителя
                    <SortIcon />
                    <QuestionIcon />
                </div>
            </div>

            <div class="sort-type-wrapper">
                <div class="sort-type">
                    Скорость заказов
                    <SortIcon />
                </div>
                <div class="sort-type">
                    за
                    <span class="sort-type-day">
                        <span>7 дней</span>
                    </span>
                    <QuestionIcon />
                </div>
            </div>

            <div class="sort-type-wrapper">
                <div class="sort-type">
                    История<br>
                    изменения
                </div>
            </div>

        </div>

    </div>
</template>

<style>
.table-header {
    display: grid;
    grid-template-columns: 385px 1fr;
    align-items: center;
    gap: 16px;

    padding: 7px 20px;
    margin-top: 24px;
    border-radius: 4px;

    background-color: var(--primary-blue-color);
    color: var(--white-color);
}

.sort-type-wrapper {
    display: grid;
    gap: 2px;
}

.sort-type {
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 13px;
    font-weight: 400;
    line-height: 18px;

    user-select: none;
}

.sort-type-day {
    display: block;
    padding: 2px 4px;
    color: var(--primary-blue-color);

    border-radius: 4px;
    background-color: var(--white-color);
    cursor: pointer;
}

.sort-type-day span {
    border-bottom: 1px dotted var(--primary-blue-color);
}

.table-header__sorting {
    display: grid;
    grid-template-columns: 141px 184px 168px 133px 144px 150px auto;
    gap: 16px;
}
</style>