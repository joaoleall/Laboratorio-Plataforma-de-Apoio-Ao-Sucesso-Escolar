import React, { useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";
import axios from "axios";

const Chart = () =>{
  const [chart, setChart] = useState({});
  const [frase, setFrase] = useState(null);

  const getData =  () => {
    let _nota = [];
     axios
     .get('http://localhost:3001/alunos')
     .then(res => {
       const dataObj = res.data.percentilCadeira;
       _nota.push(parseInt(dataObj));
       const dataObj1 = res.data.percentilCurso;
       _nota.push(parseInt(dataObj1));

      console.log(_nota[0]);
      console.log(_nota[1]);
      var alunosmelhor_UC = 100 - _nota[0];
      var alunosmelhor_Curso = 100 - _nota[1];
      console.log(alunosmelhor_UC);
      console.log(alunosmelhor_Curso);

      if(_nota[0] < 25 && _nota[1] < 25 ){
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e também  " + alunosmelhor_Curso +" % com melhores notas no curso, tens de te esforçar muito mais!");
      }else if(_nota[0] < 25 && (_nota[1] >= 25 && _nota[1] <= 50 )){ 
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e também  " + alunosmelhor_Curso +" % com melhores notas no curso, tens de te esforçar muito mais, principalmente nessa UC!");
      }else if((_nota[0] >= 25 && _nota[0] < 50) && _nota[1] < 25 ){ 
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e também  " + alunosmelhor_Curso +" % com melhores notas no curso, tens de te esforçar muito mais, no curso em geral!");
      }else if((_nota[0] >= 25 && _nota[0] < 50) && (_nota[1] >= 25 && _nota[1] <50 )){ 
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e também  " + alunosmelhor_Curso +" % com melhores notas no curso, tens de te esforçar mais!");
      }else if((_nota[0] < 50 && _nota[0] > 25) && _nota[1] >= 50 ){
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e também " + alunosmelhor_Curso +" % com melhores notas no curso, tens de te esforçar mais nessa UC!");
      }else if(_nota[0] >= 50 && (_nota[1] < 50 && _nota[1] >= 25)){
        setFrase("Existem apenas " + alunosmelhor_UC + " %  de alunos com melhor nota na UC, porém existem " + alunosmelhor_Curso +" % com melhores notas no curso, tens de te esforçar mais, no curso em geral!");
      }else if(_nota[0] >= 50 && _nota[1] >= 50 ){
        setFrase("Existem apenas " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e também " + alunosmelhor_Curso +" % com melhores notas no curso, estás num bom caminho!");
      }

        setChart({
          labels : ["UC","Curso"],
          datasets: [
            {
              label: "Percentil",
              borderColor: ["rgba(73, 93, 147)","rgba(255, 66, 71)"],
              backgroundColor: ["rgba(73, 93, 147)","rgba(255, 66, 71)"],
              data: _nota
            },
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
    <table width="400" height="0">
      <tbody>
      <tr>
      <td>
      <div> <b>Percentil na UC e no Curso</b>
        <HorizontalBar
          data={chart}
          options={{ 
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display:false,
            },
            scales: {
            xAxes: [
                {
                    ticks: {
                        min:0,
                        max:100,
                        stepSize:25
                    } 
                }
            ]
          }
        }}
        />
      </div>
      <div><b>Bem vindo caro aluno!</b><p>{frase}</p></div>
      </td>
      </tr>
      </tbody>
    </table>

  );
};
export default Chart;

