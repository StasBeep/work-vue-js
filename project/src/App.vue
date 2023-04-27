<template>
  <v-app>
    <v-app-bar app>
      <v-btn to="/dashboard" plain :ripple="false">Dashboard</v-btn>
      <v-btn to="/about" plain :ripple="false">About</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
