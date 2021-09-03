import React from 'react';
import Form from './components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container" style={{maxWidth: "60%"}}>
      <br />
        <h2>
          Lista de compras
        </h2>
        <Form />
    </div>
  );
}
export default App;

