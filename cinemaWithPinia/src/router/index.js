import { createRouter, createWebHistory } from 'vue-router'


const Home=()=>import('../views/HomeView.vue')
const NotFound=()=>import('../views/NotFound.vue')
const About=()=>import('../views/AboutView.vue')
const Movie=()=>import('../views/MovieView.vue')
const MovieDetails=()=>import('../components/MoveDetails.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [

      {
      path:'/',
      name:'home',
      component:Home
    },

    {
      path:'/about',
      name:'about',
      component:About
    },

    {
      path:'/movie',
      name:'movie',
      component:Movie
    },

    {
      path: '/movies/:id',
      name: 'moveDetails',
      component:MovieDetails,
      props:true,
    },


    {
      path:'/:pathMatch(.*)*',
      name: 'NotFound',
      component:NotFound,
    },

  ]
})

export default router
