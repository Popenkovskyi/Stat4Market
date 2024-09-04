<script setup lang="ts">
import {
    ControlPannelIcon,
    InstagramIcon,
    TelegramIcon,
    VkIcon,
} from '@/ui/icons/index';
</script>

<template>
    <aside class="sidebar">
        <a href="#">
            <img src="@/assets/images/logo.png" alt="logotype">
        </a>

        <nav class="nav">
            <div class="nav-item">
                <ControlPannelIcon />
                <span>Мой склад</span>
            </div>
        </nav>

        <div class="social">

            <div class="social-links">

                <a href="#" target="_blank" class="social-links__item">
                    <TelegramIcon />
                </a>

                <a href="#" target="_blank" class="social-links__item">
                    <InstagramIcon />
                </a>

                <a href="#" target="_blank" class="social-links__item">
                    <VkIcon />
                </a>

            </div>

            <a href="#" target="_blank" class="social-program">Партнёрская программа</a>

        </div>

    </aside>
</template>

<style>
.sidebar {
    display: flex;
    flex-direction: column;

    width: 240px;
    background-color: #182246;
    padding: 24px 20px 43px;
}

.nav {
    padding-top: 24px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 16px;

    padding-block: 14px;
    color: var(--white-color);
    cursor: pointer;

    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
}

.nav-item:hover {
    opacity: var(--defualt-opacity);
}

.social {
    margin-top: auto;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 24px;
}

.social-links__item {
    display: grid;
    place-items: center;

    width: 32px;
    height: 32px;
    border: 1px solid rgba(113, 123, 158, .2);
    border-radius: 50%;
}

.social-program {
    display: block;
    width: max-content;
    margin-top: 16px;

    border-bottom: 1px dotted #717B9E;
    color: #717B9E;
    margin-inline: auto;
}
</style>