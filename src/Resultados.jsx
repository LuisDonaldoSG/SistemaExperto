import React from 'react';
import { ContadorMatarias } from './tools/materias';
import { materias } from './tools/bancoConocimiento';

function Resultados (){
  
    const [planAcademico,setPlanAcademico] = React.useState([])   
    let multiple = false         

    const crearPlan = () => {            
      //Ordenamiento de las materias con las que se tenga mayor interés
      ContadorMatarias.sort((a,b) => {
        return b.contador - a.contador
      })
      
      //Añadir formacion profesional al plan
      //  Incluir_plan(X)  ←Tipo(X,Formación profesional)
      const temporal = []
      const especialidades = []
      materias.map(itemM => (
       itemM.tipo === 'formacionprofesional' && (temporal.push(itemM))        
      ))       
      
      //Añadir materias de tronco común
      //	Incluir_plan(X)  ←Tipo(X,Tronco común)∧¬((Certificado(X)∧Opción(X,validable))      
      materias.map(itemM => (
       itemM.tipo === 'troncocomun' && (itemM.opcion === 'si' ? ContadorMatarias.map(itemC => (itemC.materia === 'Ingles' && (itemC.contador !== 1 && temporal.push(itemM)) )) : temporal.push(itemM))
      ))

      //Añadir materias de especialidad
      //	Incluir_plan(X)  ←Tipo(X,Especialidad)∧Afinidad(Y,X)
      ContadorMatarias.map(itemC => (
        itemC.tipo === 'especialidad' && especialidades.push(itemC)
      ))
      especialidades.sort((a,b) => {
        return b.contador - a.contador
      })              
      ContadorMatarias.map(itemC => (
        itemC.materia === 'especialidadmultiple' && itemC.contador === 1 && (multiple = true)
      ))
      if (multiple) {
        especialidades.pop()        
      }  else {
        especialidades.pop()
        especialidades.pop()
      }               
      especialidades.map(itemE => (
        materias.map(itemM => (itemE.materia === itemM.especialidad && (temporal.push(itemM))))
      ))
      
      //Añadir materias de optativa
      //		Incluir_plan(X)  ←Tipo(X,Optativa)∧Gusto(Y,X)
      let count = 30 - temporal.length
      for (let i = 0; i<count; i++) {        
        if (materias[i].tipo ==='optativa') {          
          temporal.push(materias[i])
        }        
      }      
      setPlanAcademico(temporal)                   
    }    

    return (
        <div className="container m-5">
            <button className="w-100 btn btn-primary mb-3" onClick={() =>crearPlan()}>Generar</button>
            <ul>
              {
                planAcademico.map(itemP => (                  
                  itemP.tipo === 'formacionprofesional' && <li key={itemP.materia}>{itemP.materia}</li>
                ))
              }
            </ul>
            <hr/>
            <ul>
              {
                planAcademico.map(itemP => (                  
                  itemP.tipo === 'troncocomun' && <li key={itemP.materia}>{itemP.materia}</li>
                ))
              }
            </ul>
            <hr/>
            <ul>
              {
                planAcademico.map(itemP => (                  
                  itemP.tipo === 'especialidad' && <li key={itemP.materia}>{itemP.materia}</li>
                ))
              }
            </ul>
            <hr/>
            <ul>
              {
                planAcademico.map(itemP => (                  
                  itemP.tipo === 'optativa' && <li key={itemP.materia}>{itemP.materia}</li>
                ))
              }
            </ul>
        </div>
    )
}

export default Resultados;
