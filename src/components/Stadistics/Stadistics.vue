<template>
  <v-container class="lighten-5 rvcontainer">
    <div>
      <h1 align="center">
        {{ h1.text }} <v-icon :title="title.text" medium> {{ h1.icon }}</v-icon>
      </h1>
    </div>
    <v-row>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Total recursos publicados
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center">
              <v-col class="text-h2" cols="6"> 2352 </v-col>
              <v-col cols="6">
                <v-icon size="80px">mdi-file-eye-outline</v-icon>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Total recursos descargados
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center">
              <v-col class="text-h2" cols="6"> 402 </v-col>
              <v-col cols="6">
                <v-icon size="80px">mdi-download-multiple</v-icon>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Total recursos vistos
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col class="text-h2" cols="6"> 1987 </v-col>
              <v-col cols="6">
                <v-icon size="80px">mdi-eye-check</v-icon>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-row>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Total recursos publicados mes
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center">
              <v-col>
                <h2>enero - 10</h2>
                <h2>febrero - 5</h2>
                <h2>marzo - 45</h2>
                <h2>abril - 35</h2>
                <h2>mayo - 185</h2>
                <h2>junio - 95</h2>
                <h2>julio - 36</h2>
                <h2>agosto - 21</h2>
                <h2>septiembre - 1</h2>
                <h2>octubre - 33</h2>
                <h2>noviembre - 2</h2>
                <h2>diciembre - 8</h2>
              </v-col>
              <v-col cols="6">
                <v-icon size="180px">mdi-calendar-check</v-icon>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text">
                Total recursos por clasificacion educativa
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center">
              <v-col>
                <h3>Infografia - 10</h3>
                <h3>Mapa Conceptual - 5</h3>
                <h3>Grabacion de voz propia - 45</h3>
                <h3>Potcast - 35</h3>
                <h3>Animacion - 185</h3>
                <h3>Videotutorial - 95</h3>
                <h3>Manual - 36</h3>
                <h3>Plantilla - 21</h3>
                <h3>Documento de Investigacion - 1</h3>
              </v-col>
              <v-col cols="4">
                <v-icon size="80px">mdi-qrcode</v-icon>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Total recursos por clasificacion
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center">
              <v-col>
                <h4>Agronomía, Veterinaria y afines - 10</h4>
                <h4>Artes - 5</h4>
                <h4>Grabacion de voz propia - 45</h4>
                <h4>Ciencias y Educación - 35</h4>
                <h4>Ciencias de la Salud - 185</h4>
                <h4>Ciencias Sociales y Humanas - 95</h4>
                <h4>Economía, Administración, Contaduría y afines - 36</h4>
                <h4>Ingeniería, Arquitectura, Urbanismo y afines - 21</h4>
                <h4>Matemáticas y Ciencia Naturales - 1</h4>
              </v-col>
              <v-col cols="4">
                <v-icon size="80px">mdi-shape-plus</v-icon>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    &nbsp; &nbsp; &nbsp;

    <v-form align="center" class="list px-3 mx-auto">
      <v-row md-12>
        <v-col>
          <v-text-field
            v-model="search"
            append-icon="mdi-account-box"
            label="Autor"
            single-line
            hide-details
            @keyup="authorExists"
          ></v-text-field>
          <span>{{ message }}</span>
        </v-col>
        <v-col>
          <v-btn
            v-model="search1"
            :loading="loading3"
            :disabled="loading3"
            color="success"
            class="ma-2 white--text"
            @click="generateGraphs()"
            href="/stadistics/grafica"
          >
            Consultar Graficas
            <v-icon right dark> mdi-magnify-search </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    &nbsp; &nbsp; &nbsp;

    <v-data-table
      :headers="headers"
      :items="stadistics"
      :search="search"
      class="text-h3"
    >
      <template v-slot:[`item.ranking`]="{ item }">
        <v-rating
          readonly="false"
          v-model="item.ranking"
          background-color="yellow"
          color="red"
          large
          half-icon="$ratingHalf"
          half-increments="true"
          dark
        >
          {{ item.ranking }}
        </v-rating>
      </template>

      <template v-slot:[`item.view`]="{ item }">
        <v-chip :color="getColor(item.num_view)" dark>
          {{ item.num_view }}
        </v-chip>
      </template>

      <template v-slot:[`item.location`]="{ item }">
        <a target="_blank" :href="item.location">
          {{ item.autor }}
        </a>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          medium
          :title="actions.detail.title"
          class="mr-2"
          @click="detalleFiles(item.id)"
          >{{ actions.detail.icon }}</v-icon
        >
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import stadisticsService from "../../services/stadistics";
export default {
  name: "stadistics-list",
  data() {
    return {
      filEmail: "",
      h1: {
        text: "Estadisticas de Recursos ",
        icon: "mdi-chart-histogram",
        color: "red",
      },
      message: "",
      totaldescargas: "",
      totalvistas: "",
      totalrecursos: "",
      search: "",
      files: [],
      stadistics: [],
      filterselection: [],
      title: "",
      url: "Ver recurso",
      headers: [
        {
          text: "Objeto",
          value: "name_obj",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        {
          text: "Ranking",
          value: "ranking",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        {
          text: "Numero de Vistas",
          value: "num_view",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Numero de Descargas",
          value: "num_download",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Autor",
          value: "autor",
          sortable: true,
          align: "start",
          class: "text-button",
        },
      ],
      buttons: [
        {
          model: "ranking",
          label: "Ranking",
          color: "sucess",
          value: "ranking",
        },
        {
          model: "visitas",
          label: "Visitas",
          color: "success",
          value: "visitas",
        },

        {
          model: "descargas",
          label: "Descargas",
          color: "success",
          value: "descargas",
        },
      ],
      actions: {
        detail: {
          title: "Revisar el recurso",
          icon: " mdi-clipboard-edit-outline", // mdi-format-list-bulleted",
        },
      },
    };
  },
  methods: {
    retrieveFiles() {
      //.getFiles()
      /*
      if (localStorage.rol == "COORDINADOR") {
        filesService
          .getFiles()
          .then((response) => {
            this.files = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }
      
       if (localStorage.rol == "ADMINISTRADOR") {
        filesService
          .getFiles()
          .then((response) => {
            this.files = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }*/
      if (localStorage.rol == "ADMINISTRADOR") {
        stadisticsService
          .getStadistics()
          .then((response) => {
            this.stadistics = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    generateGraphs() {
      this.stadistics = stadisticsService
        .getStadisticsByFilter(this.filterselection, this.search)
        .then((response) => {
          response.data.forEach((element) => {
            this.etiquetas.push(element.name_obj);
            this.valores.push(element.ranking);
          });
        });
    },
    refreshList() {
      this.retrieveFiles();
    },

    searchTitle() {
      stadisticsService
        .getStadistics()
        .then((response) => {
          this.stadistics = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    authorExists() {
      stadisticsService
        .getStadisticsByAutor(this.search)
        .then((response) => {
          if (response.data.length != 0) {
            this.message = "";
          } else {
            this.message = "No existen registros para el Autor: " + this.search;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    reiniciar() {
      this.stadistics = [];
    },
    detalleFiles(id) {
      this.$router.push({ name: "valorar", params: { id: id } });
    },
    getColor(state) {
      if (state == "Sin aprobar") return "red";
      if (state == "Aprobado") return "green";
      else return "blue";
    },
    contarDatos() {
      stadisticsService
        .getStadistics()
        .then((response) => {
          this.totaldescargas = response.data.num_download.length;
          this.totalvistas = response.data.num_view.length;
          this.totalrecursos = response.data.length;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveFiles();
  },
};
</script>

<style scoped>
.list {
  max-width: 750px;
}
.rvcontainer {
  max-width: 1536px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.h {
  box-shadow: gray 5p 5p 10p;
  -webkit-transition: -webkit-transform 0.2s ease-in-out 0.1s;
}
.h:hover {
  -webkit-transform: scale(1.1);
}
</style>
