<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :color="color"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="color"
           v-bind="attrs"
          @click="fecharSnackbar()"
        >
          Ok
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    text: String,
    color: String,
    snackbar: Boolean,
     
  },
  
  methods: {
    fecharSnackbar: function() {
      this.$emit("fecharDialog");
    }
  }
});
</script>