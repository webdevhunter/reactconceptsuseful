import React from 'react';
import ReactDOM from 'react-dom';
import Jsx from './Jsx';
import Seed from './Seed'
import Wcomponent from './Wcomponent'
import Scomponent from './Scomponent'
import Ucomponent from './Ucomponent'
import Ccommunication from './Ccommunication'
import Cccallback from './Cccallback'
import Events from './Events'
import Concepts from './Concepts'
// import Complifecycle from 'Complifecycle'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
    
<Jsx/>
<Wcomponent/>
<Scomponent/>
<Ucomponent/>
<Ccommunication/>
<Cccallback/>
<Events/>
<Concepts/>

</div>, document.getElementById('root'));
registerServiceWorker();
