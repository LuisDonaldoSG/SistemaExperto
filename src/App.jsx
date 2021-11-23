import React from 'react';
import {preguntas} from './tools/preguntas';
import {ContadormMatarias} from './tools/materias';

function App() {  

  return (
    <div className="container mt-4">
      <form className="form-control">
        {
          preguntas.map((item, index) => (
            <>
              <div className="container" key={index}>

                <h4>{item.pregunta}</h4>

                <div className="form-check">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    name={item.pregunta}
                    onChange={event => preguntas[index].respuesta = true}
                  />
                  <label className="form-check-label">Si</label>
                </div>

                <div className="form-check">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    name={item.pregunta}
                    onChange={event => preguntas[index].respuesta = false}
                  />
                  <label className="form-check-label">No</label>
                </div>

                <hr />

              </div>
              
            </>
          ))
        }

        <button 
          type = 'button'
          className="w-100 btn btn-primary"
          onClick={() => console.log(preguntas)}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
