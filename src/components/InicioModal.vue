<template>
  <b-container>
    <h2>Login</h2>
    <div>
      <b-button type="danger" @click="show = !show">Iniciar Sesion</b-button>
    <!--   <b-button type="danger" @click="mostrar = !mostrar">Registrarse</b-button> -->
      <!-- <b-form @submit.prevent="login" @reset="onReset" v-if="mostrar">
        <b-form-group
          id="Usuario"
          label="Usuario"
          label-for="Usuario"
          description="Ingrese Email"
        >
          <b-form-input
            type="email"
            v-model="Usuario"
            placeholder="Usuario"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="Contraseña"
          label="Contraseña"
          label-for="Contraseña"
          description="Ingrese Contraseña"
        >
          <b-form-input
            type="password"
            v-model="Contrasena"
            placeholder="Contraseña"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Acceder</b-button>
      </b-form>
       -->

      <b-form @submit.prevent="login" @reset="onReset" v-if="show">
        <b-form-group
          id="Usuario"
          label="Usuario"
          label-for="Usuario"
          description="Ingrese Email"
        >
          <b-form-input
            type="email"
            v-model="Usuario"
            placeholder="Usuario"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="Contraseña"
          label="Contraseña"
          label-for="Contraseña"
          description="Ingrese Contraseña"
        >
          <b-form-input
            type="password"
            v-model="Contrasena"
            placeholder="Contraseña"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Acceder</b-button>
      </b-form>
      
    </div>
  </b-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "InicioModal",
  data() {
    return {
      Usuario: "",
      Contrasena: "",
      show: false,
      mostrar: true,
    };
  },
  methods: {
    
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.Usuario = "";
      this.Contrasena = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.Usuario, this.Contrasena)
        .then(
          (user) => this.$router.replace('Home',alert('el usuario se autentico correctamente')),
          (error) => console.error(error),

        );
        
    },
  },
};
</script>

<style scoped>
b-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
