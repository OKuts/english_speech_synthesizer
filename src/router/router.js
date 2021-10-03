import {SpeakAll} from "../components/SpeakAll";
import { Round }  from "../components/Round";

export const routes = [
  {path: '/all', component: SpeakAll, exact: true},
  {path: '/round', component: Round, exact: true},
]
