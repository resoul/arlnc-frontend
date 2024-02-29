import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
        darkMode: useStorage('dark-mode', 'light'),
        sidebar: useStorage('sidebar', true),
        monochromeMode: useStorage('monochrome', false),
        drawer: false,
        mainClass: 'main-content w-full px-[var(--margin-x)] pb-8'
    }),
    getters: {
        isDarkMode() {
            return this.darkMode === 'dark'
        },
        isDrawer() {
            return this.drawer
        },
        isSidebar() {
            return this.sidebar
        },
        isMonochromeMode() {
            return this.monochromeMode
        },
        getMainClass() {
            return this.mainClass
        }
    },
    actions: {
        toggleDrawer() {
            this.drawer = !this.drawer
        },
        openDrawer() {
            this.drawer = true
        },
        closeDrawer() {
            this.drawer = false
        },
        toggleMonochromeMode() {
            this.monochromeMode = !this.monochromeMode
            document.body.classList.toggle('is-monochrome')
        },
        removeMonochromeMode() {
            this.monochromeMode = false
            document.body.classList.remove('is-monochrome')
            window.dispatchEvent(
                new CustomEvent("change:monochrome", {
                    detail: { currentMode: "" },
                })
            );
        },
        addMonochromeMode() {
            this.monochromeMode = true
            document.body.classList.add('is-monochrome')
            window.dispatchEvent(
                new CustomEvent("change:monochrome", {
                    detail: { currentMode: "monochrome" },
                })
            );
        },
        setMainClass(className) {
            this.mainClass = className
        },
        setDarkMode() {
            this.darkMode = 'dark'
            document.documentElement.classList.add('dark');
            window.dispatchEvent(
                new CustomEvent("change:darkmode", {
                    detail: { currentMode: "dark" },
                })
            );
        },
        setLightMode() {
            this.darkMode = 'light'
            document.documentElement.classList.remove('dark');
            window.dispatchEvent(
                new CustomEvent("change:darkmode", {
                    detail: { currentMode: "light" },
                })
            );
        },
        toggleThemeMode() {
            this.darkMode === "light" ? this.setDarkMode() : this.setLightMode();
        },
        sidebarClose() {
            this.sidebar = false
            document.body.classList.remove('is-sidebar-open')
        },
        sidebarOpen() {
            this.sidebar = true
            document.body.classList.add('is-sidebar-open')
        },
        sidebarToggle() {
            this.sidebar = !this.sidebar
            document.body.classList.toggle('is-sidebar-open')
        }
    }
})
