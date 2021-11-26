import React from 'react';
import {preguntas} from './tools/preguntas';
import {ContadorMatarias} from './tools/materias';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

function Formulario() {

  const history = useHistory();
  
  const usuario_elige = event => {
    event.preventDefault();
    let fail = false

    preguntas.map( itemP => (
      itemP.respuesta === null ? (fail = true) : (
        itemP.respuesta === true && (
          itemP.materias.map(itemMm => (
            ContadorMatarias.map(itemM => (
              itemMm === itemM.materia && (itemM.contador =  itemM.contador +1)
            ))        
          ))
        )
      )
    ))   
    if (fail) {
      alert('No puede dejar ninguna pregunta sin contestar')
      return
    }     
    history.push('/resultados')
  }

  return (

    <div className="container mt-4 mb-4 " >
      
      <form className="form-control back" onSubmit={usuario_elige}>        
      <h4 className="text-center mt-4">Tronco común</h4>
        {
          preguntas.map((item, index) => (
            item.tipo === 'troncocomun' && (
              <>
                <div className="container m-5" key={index}>

                  <h6>{item.pregunta}</h6>

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

                </div>
              </>
            )
          ))
        }
      
      <h4 className="text-center mt-4">Optativas</h4>
        {
          preguntas.map((item, index) => (
            item.tipo === 'optativa' && (
              <>

                <div className="container m-5" key={index}>

                  <h6>{item.pregunta}</h6>

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

                </div>
              </>
            )
          ))
        }


      <h4  className="text-center mt-4" >Elección de especialidad</h4>
        {
          
          preguntas.map((item, index) => (
            item.tipo === 'especialidad' && (
              <>

                <div className="container m-5" key={index}>

                  <h6>{item.pregunta}</h6>

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

                </div>
             
              </>
            )
          ))
          
        }
        <h4  className="text-center mt-4" >Adicional</h4>
        {
          
          preguntas.map((item, index) => (
            item.tipo === 'adicional' && (
              <>

                <div className="container m-5" key={index}>

                  <h6>{item.pregunta}</h6>

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

                </div>
             
              </>
            )
          ))
          
        }   
        <button 
          type = 'submit'
          className="w-100 btn btn-primary mb-3"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default withRouter (Formulario);