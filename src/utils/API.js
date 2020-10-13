import axios from "axios";

export default {
    searchgetRandomDog: function () {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getDogsOfBreed: function (breed) {
        return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    },
    getBaseBreedsList: function () {
        return axios.get("https://dog.ceo/api/breeds/list");
    },

};
