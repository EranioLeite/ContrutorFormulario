<template >
  <v-app>
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
    <v-container fluid>
      <div style="margin-left:10vh">
        <v-row>
          <h2>Formulário</h2>
        </v-row>
        <v-row>
          <p>Construtor de formulário</p>
        </v-row>
      </div>
      <v-row style="margin-left:10vh;">
        <v-col cols="12" sm="4" md="4">
          <h3>Style do Formulário</h3>
        </v-col>
      </v-row>
      <v-row style="margin-left:10vh;">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Cor Primaria"
            dense
            v-model="formulario.cor1"
            type="color"
            placeholder="Cor do sistema"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Cor secundaria"
            dense
            v-model="formulario.cor2"
            type="color"
            placeholder="Cor do sistema"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-left:10vh;">
        <v-col cols="12" sm="4" md="4">
          <h3>Campos do Formulário</h3>
        </v-col>
      </v-row>
      <v-row style="margin-left:10vh;">
        <v-col cols="12" sm="4" md="4">
          <v-text-field
            label="Label"
            dense
            v-model="lista.label"
            placeholder="Label do campo"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            label="Placeholder"
            dense
            v-model="lista.placeholder"
            placeholder="Phaceholder do campo"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-select
            :items="listaTelefone"
            v-if="telefoneSin == false"
            v-model="lista.telefone"
            label="Telefone"
            dense
            outlined
          ></v-select>
          <v-select
            :items="listaTelefone"
            v-else
            disabled
            v-model="lista.telefone"
            label="Telefone"
            dense
            outlined
          ></v-select>
        </v-col>

        <v-col cols="12" sm="6" md="1">
          <v-btn class="mx-2" fab dark small @click="addLista" color="primary">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="11">
          <k-data-list
            mobileIconAdd="mdi-cloud-upload"
            mobileFunctionAdd="CadastraOrcamento"
            :headers="headers"
            :itens="itenslista"
          ></k-data-list>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="2" md="2">
          <v-btn
            class="mx-2"
            title="Visualizar Formulário"
            dark
            @click="salvar"
            color="primary"
          >Visualizar</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <k-footer></k-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import KLoading from "../components/KLoading.vue";
import KDialog from "../components/KDialog.vue";
import KDataList from "../components/KDataList.vue";
import KFooter from "../components/KFooter.vue";

import Component from "vue-class-component";

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
  textError = "";
  multiLine = true;
  snackbar = false;
  text = "";
  formulario = {
    Itens: [
      {
        label: "",
        placeholder: "",
        telefone: "",
        campo: "",
      },
    ],
    cor1: "#003758",
    cor2: "#EDBB2E",
  };
  listaTelefone = ["Sim", "Não"];
  lista = {
    label: "",
    placeholder: "",
    telefone: "Não",
    campo: "",
  };
  telefoneSin = false;
  itenslista = [
    {
      label: "",
      placeholder: "",
      telefone: "",
      campo: "",
    },
  ];
  cont = 1;
  headers = new Headers([
    new Header("Label", "label", false, false),
    new Header("Placeholder", "placeholder", false, false),
    new Header("Telefone", "telefone", false, false),
  ]);
  itens = [];

  loading(visible: boolean): void {
    this.dialogLoading = visible;
  }
  addLista() {
    if (
      this.lista.label == "" ||
      this.lista.placeholder == "" ||
      this.lista.telefone == ""
    ) {
      this.text = "Preencha os campos obrigatorios";
      this.snackbar = true;
    } else {
      this.lista.campo = "campo" + this.cont;
      if (this.lista.telefone == "Sim") {
        this.telefoneSin = true;
      }
      this.itenslista.push(this.lista);

      this.lista = {
        label: "",
        placeholder: "",
        telefone: "Não",
        campo: "",
      };
      this.cont++;
    }
  }

  fecharDialogMessage() {
    this.dialogMessage = false;
  }

  showMsg(msg: string | Error): void {
    this.textError = msg.toString();
    this.dialogMessage = true;
  }
  salvar() {
    this.formulario.Itens = [];
    this.lista;
    this.formulario.Itens = this.itenslista;
    Storage.salvar("Dados", JSON.stringify(this.formulario));
    this.$router.push("/formulario");
  }

  pushMain(): void {
    this.$router.push("/");
  }

  created() {
    this.itenslista = [];
    this._controller = new LoginController(this);
  }
}
</script>

<style scoped>
.Fundo {
  background-image: url(../assets/ORC-INT.png);
  background-size: cover;
  height: 90%;
}
.center {
  margin-top: 15vh;
}
</style>