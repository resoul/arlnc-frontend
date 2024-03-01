import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        profile: false
    }),
    getters: {
        getProfileLinks() {
            return [
                {
                    route : "/profile",
                    name : "Profile",
                    desc : "Your profile setting",
                    icon : "ui-user-icon",
                    iconClass: "bg-warning"
                },
                {
                    route : "/app/chat",
                    name : "Messages",
                    desc : "Your messages and tasks",
                    icon: "ui-message-icon",
                    iconClass: "bg-info"
                },
                {
                    route : "/team",
                    name : "Team",
                    desc : "Your team activity",
                    icon: "ui-user-group-icon",
                    iconClass: "bg-secondary"
                },
                {
                    route : "/activity",
                    name : "Activity",
                    desc : "Your activity and events",
                    icon: "ui-file-stat-icon",
                    iconClass: "bg-error"
                },
                {
                    route : "/settings",
                    name : "Settings",
                    desc : "Webapp settings",
                    icon: "ui-settings-icon",
                    iconClass: "bg-success"
                }
            ]
        },
        getProfileName() {
            return 'Travis Fuller';
        },
        getProfilePosition() {
            return 'Product Designer';
        },
        getProfileUrl() {
            return '/profile/me';
        },
        getProfileAvatar() {
            return '/images/200x200.png';
        },
        isOnline() {
            return true;
        }
    },
    actions: {}
})