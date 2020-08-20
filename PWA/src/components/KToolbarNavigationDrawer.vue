<template>
  <div id="app">
    <v-app-bar color="colorPrimaryText" app clipped-left id="card-toolbar">
      <!-- <v-app-bar-nav-icon dark id="card-toolbar-icons" @click="drawer = !drawer" /> -->

      <v-icon color="primary" dark @click="drawer = !drawer">mdi-menu</v-icon>

      <v-toolbar-title>
        <img
          style="margin-left: 10px; margin-top:10px;"
          class="img-fluid"
          width="95%"
          src="../assets/MARCA-COM.png"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <label class="primary--text">
        <span>Olá, {{ menu.usuario }}</span>
        <v-icon
          color="primary"
          v-if="!isMobile"
          style="margin-left: 10px;"
          @click="changePass"
          dark
        >mdi-account</v-icon>
        <v-icon
          color="primary"
          v-if="!isMobile"
          style="margin-left: 10px;"
          @click="sair"
          dark
        >mdi-exit-to-app</v-icon>
      </label>
    </v-app-bar>

    <v-navigation-drawer id="navigation-drawer" v-model="drawer" absolute temporary color="primary">
      <v-list dense>
        <img
          style="margin-left: 10px; margin-top:10px;"
          class="img-fluid"
          width="75%"
          src="../assets/orcamento-intLOGO.png"
        />
        <div v-for="itemMenu in menu.itensMenu" :key="itemMenu.title">
          <v-list-item link>
            <v-list-item-icon>
              <!-- <v-icon class="colorPrimaryText--text">{{itemMenu.icon}}</v-icon> -->
            </v-list-item-icon>
            <v-list-item-title>
              <router-link style="text-decoration:none;" :to="itemMenu.path">
                <span class="colorPrimaryText--text">{{itemMenu.title}}</span>
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </div>
        <template v-if="isMobile">
          <v-list-item link @click="changePass">
            <v-list-item-icon>
              <v-icon class="colorPrimaryText--text">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <span class="colorPrimaryText--text">Alterar Senha</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item link @click="sair">
            <v-list-item-icon>
              <v-icon class="colorPrimaryText--text">mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <span class="colorPrimaryText--text">Sair</span>
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Menu, MenuItem } from "../models/menu";

import { Display } from "../configuration/display";

export default Vue.extend({
  props: {
    menu: Menu
  },
  data: () => ({
    drawer: null,
    isMobile: Display.isMobile()
  }),
  methods: {
    sair() {
      this.$emit("sair");
    },
    changePass() {
      this.$emit("changePass");
    }
  }
});
</script>


<style >
</style>

<style scoped>
</style>
