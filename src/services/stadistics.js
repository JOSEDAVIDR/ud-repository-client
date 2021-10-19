import axios from "axios";
//const repositoryUrl = 'https://apirepository.planestic.udistrital.edu.co/api'
const repositoryUrl = 'http://192.168.0.14:3005';

class StadisticsService {

    getStadistics() {
        const data = {}
        return axios.get(`${repositoryUrl}/stadistics`, {
            params: data
        });
    }
    getStadisticsByid(id_obj) {
        return axios.get(`${repositoryUrl}/stadistics`, {
            params: {
                id_obj
            }
        });
    }
    getStadisticsByAutor(autor) {
        return axios.get(`${repositoryUrl}/stadistics`, {
            params: {
                autor: autor
            }
        });
    }

    getStadisticsByFilter(data,autor) {
        return axios.get(`${repositoryUrl}/stadistics`, data, {
            params: {
                autor
            }
        });
    }
    /*
    getStadisticsByFilter(autor,ranking,num_view,num_donwload){
         return axios.get(`${repositoryUrl}/stadistics`, { params: { autor: autor },{ ranking: ranking },{ num_view: num_view} ,{ num_donwload: num_donwload} } );
    }
    /*
        getStadisticsByid(idobj) {
            return axios.get(`${repositoryUrl}/stadistics`, { params: { idobj } });
        }

        getStadisticsByRevisor(revisor) {
            return axios.get(`${repositoryUrl}/stadistics`, { params: { revisor: revisor } });
        }*/

    addStadistics(data) {
        return axios.post(`${repositoryUrl}/stadistics`, data);
    }

    updateStadistics(data, id) {
        return axios.put(`${repositoryUrl}/stadistics`, data, {
            params: {
                id
            }
        })
    }

    deleteStadisticsById(id) {
        return axios.delete(`${repositoryUrl}/stadistics`, {
            params: {
                id
            }
        });
    }
}

export default new StadisticsService();