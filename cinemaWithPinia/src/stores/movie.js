import {defineStore} from "pinia";

export const useMovieStore = defineStore('movie', {
    state:()=> (
        {
            movie:[],
            isLoading:true,
            singleMovie:{},
            year:2000,
        }
        ),
    getters: {

        filterMovies(){
            return this.movie.filter((movie=>{
                return movie.year>=this.year;
            }))
        },
    },
    actions: {
       async getMovies(){
            const result=await fetch("http://localhost:3000/movies")
           const response=await result.json();
            this.movie=response;
            this.isLoading=false;
        },

        async getSingleMovie(id) {
            this.isLoading = true;
            const result = await fetch(
                `http://localhost:3000/movies/${parseInt(id)}`
            );
            if (result.status === 404) {
                this.router.push({name: "NotFound"});
            }
            const response = await result.json();
            this.singleMovie = response;
            this.isLoading = false;
        },
    }
})