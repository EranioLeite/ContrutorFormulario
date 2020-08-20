export interface ILoginView {

    loading(visible: boolean): void
    showMsg(msg: string): void
    pushMain(): void
}

export interface ILoginController {

    login(user: string, pass: string): void

}