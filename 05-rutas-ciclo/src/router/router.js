import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect:'/pokemon',
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => 
      import(/* webpackChunkName: "PokemonLayout" */ "../modules/pokemon/layouts/PokemonLayout"),
      children: [
        {
            path: "home",
            name: 'pokemon-home',
            component: () =>
              import(
                /* webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage"
              ),
          },
          {
            path: "about",
            name:'pokemon-about',
            component: () =>
              import(
                /* webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/AboutPage"
              ),
          },
          {
            path: "pokemonid/:id",
            name: 'pokemon-id',
            component: () =>
              import(
                /* webpackChunkName: "PokemonPage" */ "../modules/pokemon/pages/PokemonPage"
              ),
              props: (route) => {
                console.log( route )
                const id = Number(route.params.id)
                return  isNaN(id) ? { id: 1 } :  { id }
              }
          },
          {
            path: '',
            name: "pokemon-redirect",
            redirect: { name: 'pokemon-home'}
          }
      ]
  },
  // DBZ Layout
  {
    path: '/dbz',
    name: 'dbz',
    component: () => 
    import(/* webpackChunkName: "DragonBallLayout" */ "../modules/dbz/layouts/DragonBallLayout"),
    children: [
      {
        path: "characters",
        name: 'dbz-characters',
        component: () =>
          import(
            /* webpackChunkName: "CharactersPage" */ "../modules/dbz/pages/Characters"
          ),
      },
      {
        path: "about",
        name: 'dbz-about',
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ "../modules/dbz/pages/About"
          )
      },
      {
        path: '',
        name: "dbz-redirect",
        redirect: { name: 'dbz-characters'}
      },

    ]
  },  
  {
    path: "/:pathhMatch(.*)*",
    component: () =>
       import(/* webpackChunkName: "NoPageFound" */ "../modules/shared/pages/NoPageFound"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;