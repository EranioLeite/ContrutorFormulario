<template >
  <v-app>
    <div>
      <v-app-bar :color="this.itensFormulario.cor1" app clipped-left id="card-toolbar">
        <v-toolbar-title>
          <v-spacer>
            <h3 style="color:white">Construtor de Formulário</h3>
          </v-spacer>
        </v-toolbar-title>
      </v-app-bar>
    </div>
    <k-loading title="Carregando" :dialog="dialogLoading"></k-loading>
    <k-dialog
      @fecharDialog="fecharDialogMessage"
      :dialog="dialogMessage"
      title="Error"
      :text="textError"
    ></k-dialog>
    <v-snackbar v-model="snackbar" color="error" :multi-line="multiLine">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">Ok</v-btn>
      </template>
    </v-snackbar>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2">Dados Informados</v-card-title>

          <v-card-text>
            <v-col
              v-for="(item, index) in this.itensFormulario.Itens"
              :key="item.id"
              cols="12"
              sm="6"
              md="6"
            >
              <p>{{item.label}} : {{dados[index].campo}}</p>
            </v-col>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-container fluid style="margin-top:50px">
      <div style="margin-left:10vh">
        <v-row>
          <h2>Formulário</h2>
        </v-row>
        <v-row>
          <p>Formulário cadastrado</p>
        </v-row>
      </div>
      <v-card class="mx-auto" max-width="130vh" outlined>
        <v-card-title>Preencha os dados</v-card-title>
        <v-row style="margin-left:2vh;">
          <v-col
            v-for="(item, index) in  this.itensFormulario.Itens"
            :key="item.id"
            cols="12"
            sm="4"
            md="4"
          >
            <v-text-field
              :label="item.label"
              v-if="item.telefone == 'Sim'"
              :color="itensFormulario.cor1"
              v-mask="'(###) #####-####'"
              v-model="dados[index].campo"
              dense
              :placeholder="item.placeholder"
              outlined
            ></v-text-field>
            <v-text-field
              :label="item.label"
              v-else
              :color="itensFormulario.cor1"
              v-model="dados[index].campo"
              dense
              :placeholder="item.placeholder"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="mx-2"
            dark
            :color="this.itensFormulario.cor2"
            @click="salvarformulario"
          >Visualizar</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

    <v-footer
      :color="this.itensFormulario.cor1"
      app
      absolute
      style="color: white;text-aling:center;"
      fixed
    >
      <v-spacer></v-spacer>
      <span style>Erânio Leite &#169; {{new Date().getFullYear()}}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import KLoading from "../components/KLoading.vue";
import KDialog from "../components/KDialog.vue";

import KDataList from "../components/KDataList.vue";
import KFooter from "../components/KFooter.vue";

import Component from "vue-class-component";
import { MaskedTextChangedListener } from "ts-input-mask";
import { Header, HeaderIcon, HeaderAction } from "../models/header";
import { Headers } from "../models/headers";
import { Storage } from "../configuration/storage";
import { ILoginView, ILoginController } from "../contracts/LoginContract";
import { LoginController } from "../controllers/LoginController";

@Component({
  components: {
    KLoading,

    KDialog,
    KDataList,
    KFooter,
  },
})
export default class Login extends Vue implements ILoginView {
  _controller?: ILoginController;

  dialogLoading = false;
  dialogMessage = false;
  dialog = false;
  multiLine = true;
  snackbar = false;
  textError = "";
  itensFormulario: any = [];
  dados: any = [];
  text = "";

  loading(visible: boolean): void {
    this.dialogLoading = visible;
  }

  salvarformulario() {
    var valor = false;
    for (var j = 0; j < this.dados.length; j++) {
      if (this.dados[j].campo == "") {
        valor = true;
      } else {
        valor = false;
      }
    }
    if (valor == true) {
      this.text = "Preencha os campos obrigatorios";
      this.snackbar = true;
      return;
    } else {
      this.dialog = true;
    }
  }

  fecharDialogMessage() {
    this.dialogMessage = false;
  }

  showMsg(msg: string | Error): void {
    this.textError = msg.toString();
    this.dialogMessage = true;
  }

  pushMain(): void {
    this.$router.push("/");
  }

  created() {
    this.itensFormulario = JSON.parse(Storage.get("Dados")!!);
    console.log(this.itensFormulario.Itens);
    for (var i = 0; i < this.itensFormulario.Itens.length; i++) {
      this.dados.push({ campo: "" });
    }
    console.log(this.dados);
    this._controller = new LoginController(this);
  }
}
</script>

<style scoped>
</style>