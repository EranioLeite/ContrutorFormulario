export class Storage {

    static valKey = "Contrutor_Formulario";

    static salvar(key: string, data: string) {
        //localStorage.setItem(this.valKey + key, data);
        sessionStorage.setItem(this.valKey + key, data);
    }

    static get(key: string): string | null {
        return sessionStorage.getItem(this.valKey + key)
    }

}