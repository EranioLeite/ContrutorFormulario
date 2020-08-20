<template>
  <div>
    <k-loading title="Carregando" :dialog="dialogLoading"></k-loading>
    <k-menu @sair="sair" @changePass="changePass" :menu="menu"></k-menu>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import KLoading from "../components/KLoading.vue";
import KToolbarNavigationDrawer from "../components/KToolbarNavigationDrawer.vue";
import Component from "vue-class-component";
import { Menu, MenuItem } from "../models/menu";

import { IHomeView, IHomeController } from "../contracts/HomeContract";

import { Storage } from "../configuration/storage";

@Component({
  components: {
    KLoading,
    "k-menu": KToolbarNavigationDrawer,
  },
})
export default class Home extends Vue implements IHomeView {
  itensMenu: MenuItem[] = [];
  dialogLoading = false;

  menu?: Menu;

  mostraErro(msg: string) {}

  sair() {
    Storage.salvar("Logado", "false");
    Storage.salvar("Session", "");
    Storage.salvar("User", "");
    this.$router.push("/Login");
  }

  changePass() {
    this.$router.push("/alterarSenha");
  }

  created() {
    var logado = Storage.get("Logado");
    if (logado == "true") {
      var usuario = JSON.parse(Storage.get("Colaborador")!!);
      console.log(usuario);
      if (usuario.isSuper) {
        this.itensMenu.push(
          new MenuItem("Cadastros", "", " mdi-library-plus", true, [
            new MenuItem("Usuários", "/usuarios", "", false),
            new MenuItem("Colaboradores", "/colaboradores", "", false),
            new MenuItem("Produtos", "/produtos", "", false),
            new MenuItem("Filial", "/filiais", "", false),
            new MenuItem("Departamentos", "/centrocustos", "", false),
            new MenuItem("Times", "/times", "", false),
            new MenuItem("Grupo Itens", "/grupoItens", "", false),
          ]),
          new MenuItem("Solicitações", "", " mdi-clipboard-text", true, [
            new MenuItem("Requisitar", "/solicitacoes", "", false),
            new MenuItem("Aprovar", "/solicitacaoAprovar", "", false),
            new MenuItem("Em Andamento", "/solicitacoesEmAprovacao", "", false),
            new MenuItem(
              "Não Integradas",
              "/solicitacoesNaoIntegradas",
              "",
              false
            ),
          ]),
          new MenuItem("Configuração", "", "mdi-settings", true, [
            new MenuItem("Service Layer", "/userServiceLayer", "", false),
            new MenuItem("STMP-Email", "/emailConfiguration", "", false),
          ])
        );
      } else {
        this.itensMenu.push(
          new MenuItem(
            "Casdastros",
            "/listaproduto",
            " mdi-clipboard-text",
            true
          ),
          new MenuItem(
            "Usuários",
            "/listausuario",
            " mdi-clipboard-text",
            true
          ),
          new MenuItem(
            "Forecast",
            "/listaforecast",
            " mdi-clipboard-text",
            true
          ),
          new MenuItem(
            "Standard Time",
            "/listastandardtime",
            " mdi-clipboard-text",
            true
          ),
          new MenuItem(
            "Orçamento",
            "/listaoorcamento",
            " mdi-clipboard-text",
            true
          )
        );
      }

      this.menu = new Menu(usuario.nome!, this.itensMenu);
      // this.menu.appBarStyle =
      //   "background: transparent linear-gradient(273deg, #03839A 0%, #0E6453 100%) 0% 0% no-repeat padding-box;";
    } else {
      this.sair();
    }
  }
}
</script>