import React, { useState, useEffect } from "react";
import {HorizontalBar} from "react-chartjs-2";
import axios from "axios";



const Chart = () =>{
  const [chart, setChart] = useState({});
  const [chart1, setChart1] = useState({});
  const [frase, setFrase] = useState(null);

  const getData =  () => {
    let _nota = [];
    let _media = [];

    axios
    .get('http://localhost:3001/alunos')
    .then(res => {
      const dataObj = res.data.percentilCadeira;
      const dataObj1 = res.data.mediaCadeira;
      _nota.push(parseInt(dataObj));
      _media.push(parseInt(dataObj1));

      var alunosmelhor_UC = 100 - _nota[0];
      console.log(alunosmelhor_UC);

      if(_nota[0] < 25 && _media[0] < 5 ){
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está muito baixa, tens de te esforçar muito mais!");
      }else if(_nota[0] < 25 && (_media[0] > 5 && _media[0] <10 )){
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está baixa, tens de te esforçar muito mais!");
      }else if((_nota[0] >= 25 && _nota[0] < 50) && _media[0] < 5 ){
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está muito baixa, tens de te esforçar muito mais!");
      }else if((_nota[0] >= 25 && _nota[0] < 50) && (_media[0] >= 5 && _media[0] <10 )){
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está baixa, tens de te esforçar muito mais!");


      }else if((_nota[0] < 50 && _nota[0] >= 25) && (_media[0] < 10 && _media[0] >= 5 )){
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está baixa, tens de te esforçar muito mais, esforça-te !");
      }else if((_nota[0] < 50 && _nota[0] >= 25) && (_media[0] >= 10 && _media[0] < 15 )){
        setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está positiva, porém como podes verificar existem muitos alunos com notas melhores, esforça-te!");
      }else if(_nota[0] >= 50 && (_media[0] < 10 && _media[0] >= 5)){
        setFrase("Existem apenas " + alunosmelhor_UC + " %  de alunos com melhor nota na UC, mas a tua média na UC está baixa, tens de te esforçar mais!");
      }else if(_nota[0] >= 50 && _media[0] >= 10 && _media[0] < 15 ){
        setFrase("Existem apenas " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está positiva, continua assim!");
      }

    else if((_nota[0] < 50 && _nota[0] >= 25) && (_media[0] >= 10 && _media[0] < 15 )){
      setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está positiva, porém como podes verificar existem muitos alunos com notas melhores, esforça-te!");
    }else if((_nota[0] < 50 && _nota[0] >= 25) && _media[0] >= 15 && _media[0] < 20 ){
      setFrase("Existem " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está muito positiva, porém como podes verificar existem muitos alunos com notas melhores, esforça-te!");
    }else if(_nota[0] >= 50 && (_media[0] < 15 && _media[0] >= 10)){
      setFrase("Existem apenas " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está positiva, estás num bom caminho !");
    }else if(_nota[0] >= 50 && _media[0] >= 15 ){
      setFrase("Existem apenas " + alunosmelhor_UC + " %  de alunos com melhor nota na UC e a tua média na UC está muito positiva, estás num ótimo caminho !");
    }


       setChart({
         datasets: [
           {
             label: "Percentil na UC",
             borderColor: "rgba(153,204,255,1)",
             backgroundColor: "rgba(153,204,255,1)",
             data: _nota
           }
         ]
       });

       setChart1({
         datasets: [
           {
             label: "Média na UC",
             borderColor: "rgba(106, 90, 205)",
             backgroundColor: "rgba(106, 90, 205)",
             data: _media
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
    <table width="400" height="0">
      <tbody>
      <tr>
      <td>
      <div>
      <HorizontalBar
          data={chart}
          options={{ 
            responsive: true,
            maintainAspectRatio: false,
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
      </td>
      </tr>
    <tr>
      <td>
      <div>
      <HorizontalBar
          data={chart1}
          options={{ 
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            xAxes: [
                {
                    ticks: {
                        min:0,
                        max:20,
                        stepSize:1
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
