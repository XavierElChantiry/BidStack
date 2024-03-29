import logo from './logo.png';
import './App.css';

import EndpointAudit from './components/EndpointAudit'
import AppStats from './components/AppStats'
import AppHealth from './components/AppHealth'

function App() {

    const endpoints = ["listItem", "bid"]

    const rendered_endpoints = endpoints.map((endpoint) => {
        return <EndpointAudit key={endpoint} endpoint={endpoint}/>
    })
    console.log(process.env.REACT_APP_API_URL);

    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" height="150px" width="400px"/>
            <div>
                <AppStats/>
                <h1>Audit Endpoints</h1>
                {rendered_endpoints}
                <AppHealth/>
            </div>
        </div>
    );

}



export default App;
