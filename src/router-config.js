import App from './App'
import AboutUs from './components/AboutUs'

/* configurando rotas */
export const routes = [
    // { path: '/', redirect: '/index' }, posso redirecionar para uma rota que desejar
    { path: '/', component: App },
    { path: '/about-us', component: AboutUs }
]
