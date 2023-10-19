export interface NotificationState {
    list: NotificationBean[],
    mute: boolean
}

export interface NotificationBean {
    title: string,
    text: string,
    viewed: boolean
}
export interface NotificationFilter {
    viewed: boolean
}