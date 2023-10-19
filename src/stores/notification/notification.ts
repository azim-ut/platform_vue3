import {defineStore} from "pinia";
import type {NotificationBean, NotificationState} from "./types";
import {NotificationService} from "@/stores/notification/NotificationService";

export const notificationStore = defineStore("notification", {
    state: ():NotificationState => ({
        list: [],
        mute: false
    }),
    getters: {
        getList: (state: NotificationState): NotificationBean[] => state.list,
        getViewList: (state: NotificationState) => (view: boolean) : NotificationBean[] => state.list.filter(row => row.viewed === view),
        isMuted: (state: NotificationState): boolean => state.mute
    },
    actions: {
        async fetchList() : Promise<void> {
            await NotificationService.fetchList({viewed: true}).then((res: any) => {
                console.log(res)
            }).catch((reason: any) => {
                this.$state.list.push({
                    title: "title1",
                    text: "text1",
                    viewed: false
                })
            })
        }
    }
})