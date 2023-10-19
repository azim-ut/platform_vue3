import type {NotificationBean, NotificationFilter} from "./types";
import type {AxiosResponse} from "axios";
import {ApiEndpoints, AxiosApi} from "@/api/axios-api-config";

export class NotificationService {
    public static async fetchList(filter: NotificationFilter): Promise<AxiosResponse<NotificationBean[]>> {
        return await AxiosApi.post<NotificationBean[]>(`${ApiEndpoints.notification}/list`, filter)
    }
}