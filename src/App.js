import './App.css';
import Mediauc from "./componentsAlunos/mediauc";
import Media from "./componentsAlunos/media";
import Curso_UC from "./componentsAlunos/PercentilCurso_UC";
import Navbar from "./componentsGeral/navbar";
import MediaCurso from "./componentsCurso/mediafinal";
import MediaCursos from "./componentsEscola/mediaCursos";
import UC_Media from "./componentsAlunos/PercentilUC_Media";
import Medias_1ano from "./componentsCurso/mediasUCS_1ano";
import Medias_2ano from "./componentsCurso/mediasUCS_2ano";
import Medias_3ano  from "./componentsCurso/mediasUCS_3ano";
import MediasC_1ano from "./componentsEscola/mediaCursos_1ano";
import MediasC_2ano from "./componentsEscola/mediaCursos_2ano";
import MediasC_3ano  from "./componentsEscola/mediaCursos_3ano";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
  
return (
  <div className="App">
            <Router>
             <Navbar />
          <Switch>
                 <Route path="/media" component={Media}>
                     <Media />
                 </Route>
                 <Route path="/PercentilCurso_UC" component={Curso_UC}>
                     <Curso_UC />
                 </Route>
                 <Route path="/mediauc" component={Mediauc}>
                     <Mediauc />
                 </Route>
                 <Route path="/PercentilUC_Media" component={UC_Media}>
                     <UC_Media />
                 </Route>
                 <Route path="/mediafinal" component={MediaCurso}>
                     <MediaCurso/>
                 </Route>
                 <Route path="/mediaUCS_1ano" component={Medias_1ano}>
                     <Medias_1ano/>
                 </Route> 
                 <Route path="/mediaUCS_2ano" component={Medias_2ano}>
                     <Medias_2ano/>
                 </Route>
                 <Route path="/mediaUCS_3ano" component={Medias_3ano}>
                     <Medias_3ano/>
                 </Route>
                 <Route path="/mediaCursos" component={MediaCursos}>
                     <MediaCursos/>
                 </Route>
                 <Route path="/mediaCursos_1ano" component={MediasC_1ano}>
                     <MediasC_1ano />
                 </Route>
                 <Route path="/mediaCursos_2ano" component={MediasC_2ano}>
                     <MediasC_2ano />
                 </Route>
                 <Route path="/mediaCursos_3ano" component={MediasC_3ano}>
                     <MediasC_3ano />
                 </Route>
          </Switch>
    </Router>
 </div>
);

};

export default App;
