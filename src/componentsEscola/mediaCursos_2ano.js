import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";


const Chart = () =>{
  const [chart, setChart] = useState({});
  const [cursomaior, setcursomaior] = useState(null);
  const [cursomenor, setcursomenor] = useState(null);


  const getData =  () => {
    let _curso = [];
    let _curso1 = [];
    let _curso2 = [];
    let _curso3 = [];
    let _curso4 = [];
    let _curso5 = [];


     axios
     .get('http://localhost:3001/diretorescola')
     .then(res => {
        var curso1 =  res.data.cursos[0].mediafinal_2ano;
        _curso.push(parseInt(curso1));
        var curso2 =  res.data.cursos[1].mediafinal_2ano;
        _curso.push(parseInt(curso2));
        var curso3 =  res.data.cursos[2].mediafinal_2ano;
        _curso.push(parseInt(curso3));
        var curso4 =  res.data.cursos[3].mediafinal_2ano;
        _curso.push(parseInt(curso4));
        var curso5 =  res.data.cursos[4].mediafinal_2ano;
        _curso.push(parseInt(curso5)); 
        _curso1.push(parseInt(curso1));  
        _curso2.push(parseInt(curso2));  
        _curso3.push(parseInt(curso3));  
        _curso4.push(parseInt(curso4));  
        _curso5.push(parseInt(curso5));       

        var maior = 0, menor = 13;
        for(var i=0;i<5;i++){
          if(_curso[i] > maior){
            maior = _curso[i];
            var nome_maior = res.data.cursos[i].curso;
          }
          if(_curso[i] < menor){
            menor = _curso[i];
            var nome_menor = res.data.cursos[i].curso; 
          }
        }
        
        setcursomaior('O curso de' + ' ' + nome_maior + ' ' + 'foi o curso que teve melhor média.');
        setcursomenor('O curso de' + ' ' + nome_menor + ' ' + 'foi o curso que teve pior média.');
        console.log(maior);
        console.log(menor);
        console.log(nome_maior);
        console.log(nome_menor);
        
        //----------Eliminamos o gráfico circular pois não fazia sentido ter 5 cursos com notas de 0-20--------------------------------------------
        //----------Normalmente, usa-se esse tipo de gráficos para algo do quotidiano, algo que dê percentagens---------------------------------------------

        setChart({
          datasets: [
            {
              label: "Engenharia Informática",
              borderColor:"#EBC79E",
              backgroundColor: 'rgb(255, 0, 0)',
              data: _curso1,
            },
            {
              label:"Gestão",
              borderColor:"A62A2A",
              backgroundColor:'rgb(0, 0, 204)',
              data: _curso2,
            },
            {
              label:"Línguas",
              borderColor:"3299CC",
              backgroundColor:'rgb(102, 255, 255)',
              data: _curso3,
            },
            {
              label:"Engenharia Biomédica",
              borderColor:"00FF00",
              backgroundColor:'rgb(255, 0, 255)',
              data: _curso4,
            } ,
            {
              label: "Desporto",
              borderColor:"FF0000",
              backgroundColor:'rgb(255, 205, 86)',
              data: _curso5,
            }    
          ]
        });
     })
     .catch(err => {
       console.log(err)
     })
  };

  useEffect(() => {
    getData();
  }, []); 

  return (
    <table width="200" height="200">
      <tbody>
      <tr>
      <td>
      <div><b>Médias dos Cursos no 2º ano</b>
      <Bar
           data={chart}
           options={{ 
             responsive: true,
             maintainAspectRatio: false,
             height: '700px', 
             width: "700px",
             scales: {
               yAxes: [{
                 ticks: {
                   beginAtZero: true,
                   max:20,
                   stepSize:4,
                 }
               }]
           }
         }}
         />
      </div>
      <div><b>Bem vindo caro Diretor de Escola!</b><p>{cursomaior}</p><p>{cursomenor}</p></div>
      </td>
      </tr>
      </tbody>
    </table>

  );
};
export default Chart;
