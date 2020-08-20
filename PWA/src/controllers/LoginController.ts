import { ILoginView, ILoginController } from "../contracts/LoginContract";
import axios from "../plugins/axios"
import { Storage } from "../configuration/storage"
export class LoginController implements ILoginController {

    _view: ILoginView

    constructor(view: ILoginView) {
        this._view = view
        Storage.salvar("Logado", "false");
        Storage.salvar("Session", "");
        Storage.salvar("User", "");
        Storage.salvar("Colaborador", JSON.stringify({ codigo: "" }));
    }

    login(user: string, pass: string): void {


        this._view.loading(true)

        //Processamento
        let login = new Login(user, pass)
        console.log(JSON.stringify(login.user))
        // if (login.user == "Eranio" && login.pass == "123") {
        //     Storage.salvar("Logado", "true")
        //     Storage.salvar("Colaborador", JSON.stringify(login.user))
        //     this._view.pushMain()
        // }
        axios.post('Login', login).then((response: any) => {
            this._view.loading(false)
            if (response.data.sucesso == true) {

                Storage.salvar("Colaborador", JSON.stringify(response.data.tRetorno))
                axios.defaults.headers.PortalComprasSession =
                    response.data.message;
                this._view.pushMain()
            } else {
                this._view.showMsg(response.data.message)
            }
        }).catch((e: any) => {
            this._view.loading(false)
            this._view.showMsg(e)
        })

        // if (login.user == "Pedro" && login.pass == "123") {
        //     this._view.pushMain()
        // }

        // this._view.loading(false)


    }
}

class Login {
    user: string
    pass: string
    constructor(user: string, pass: string) {
        this.user = user
        this.pass = pass
    }
}