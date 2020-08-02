import React from 'react';
import ReactDOM from 'react-dom';
import AvailableProjects from "./AvailableProjects"

ReactDOM.render(<div className="container">
<Navbar />
<AvailableProjects />
<Panel />
</div>, document.getElementById('root'));

