// this file to fix this bug: Cannot find module './ApplyIcon.vue' or its corresponding type declarations. Cannot find module './ApplyIcon.vue' or its corresponding type declarations.
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<object, object, any>
    export default component
}