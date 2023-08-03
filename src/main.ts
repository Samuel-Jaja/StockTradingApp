import { createApp } from 'vue'
import { createPinia } from 'pinia'


import './styles/tailwind.scss'

import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

import App from './App.vue'
import LoginView from './views/auth/LoginView.vue';
import RegisterView from './views/auth/RegisterView.vue';
import HomeView from './views/home/HomeView.vue';
import router from './router'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Message from 'primevue/message';
import TabMenu from 'primevue/tabmenu';
import DataTable from 'primevue/datatable';


const app = createApp(App)

app.component('pv-imputtext', InputText)
    .component('pv-button', Button)
    .component('pv-tab-menu', TabMenu)
    .component('pv-message', Message)
    .component('pv-datatable', DataTable)

app.use(PrimeVue)
app.component('LoginView', LoginView);
app.component('RegisterView', RegisterView);
app.component('HomeView', HomeView);
app.use(router)
app.use(createPinia())
app.mount('#app')
