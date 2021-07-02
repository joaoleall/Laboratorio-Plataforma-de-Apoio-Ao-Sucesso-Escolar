import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const Chart = () =>{
  const [chart, setChart] = useState({});
  const [anos, setanos] = useState(null);

  const getData =  () => {
    let _nota = [];

     axios
     .get('http://localhost:3001/diretorcurso')
     .then(res => {
        var sem_1_1 = res.data.curso[0].alunosnotaUC1_1_1 + res.data.curso[0].alunosnotaUC2_1_1 + 
        res.data.curso[0].alunosnotaUC3_1_1 +res.data.curso[0].alunosnotaUC4_1_1 +res.data.curso[0].alunosnotaUC5_1_1 ;
        var sem_2_1 = res.data.curso[0].alunosnotaUC1_2_1+res.data.curso[0].alunosnotaUC2_2_1+res.data.curso[0].alunosnotaUC3_2_1+
        res.data.curso[0].alunosnotaUC4_2_1+res.data.curso[0].alunosnotaUC5_2_1;
        var ano_1 = (sem_1_1 + sem_2_1)/10;
        _nota.push(parseInt(ano_1));

        var sem_1_2 = res.data.curso[0].alunosnotaUC1_1_2 + res.data.curso[0].alunosnotaUC2_1_2 + 
        res.data.curso[0].alunosnotaUC3_1_2 +res.data.curso[0].alunosnotaUC4_1_2 +res.data.curso[0].alunosnotaUC5_1_2 ;
        var sem_2_2 = res.data.curso[0].alunosnotaUC1_2_2+res.data.curso[0].alunosnotaUC2_2_2+res.data.curso[0].alunosnotaUC3_2_2+
        res.data.curso[0].alunosnotaUC4_2_2+res.data.curso[0].alunosnotaUC5_2_2;
        var ano_2 = (sem_1_2 + sem_2_2)/10;
        _nota.push(parseInt(ano_2));

        var sem_1_3 = res.data.curso[0].alunosnotaUC1_1_3 + res.data.curso[0].alunosnotaUC2_1_3 + 
        res.data.curso[0].alunosnotaUC3_1_3 +res.data.curso[0].alunosnotaUC4_1_3 +res.data.curso[0].alunosnotaUC5_1_3 ;
        var sem_2_3 = res.data.curso[0].alunosnotaUC1_2_3+res.data.curso[0].alunosnotaUC2_2_3+res.data.curso[0].alunosnotaUC3_2_3+
        res.data.curso[0].alunosnotaUC4_2_3+res.data.curso[0].alunosnotaUC5_2_3;
        var ano_3 = (sem_1_3 + sem_2_3)/10;
        _nota.push(parseInt(ano_3));

        var mediafinal = (sem_1_1 + sem_1_2 + sem_2_1 + sem_2_2 + sem_1_3 + sem_2_3) / 30;
        _nota.push(parseInt(mediafinal));


     if(_nota[0]<10 && _nota[1]<10 && _nota[2] <10){
       setanos('Os alunos do seu curso acabaram com uma média negativa em todos os anos, aja com urgência.');
     }else if((_nota[0]<10 && _nota[1]>=10 && _nota[2] >=10)){
       setanos('Os alunos do 1º ano tiveram dificuldade em várias cadeiras, veja o que se passa.');
     }else if(_nota[0]<10 && _nota[1]<10 && _nota[2] >=10) {
       setanos('Os alunos do 1º e 2º ano tiveram dificuldade em várias cadeiras, veja o que se passa.');
     }else if(_nota[0]<10 && _nota[1]>=10 && _nota[2] <10) {
       setanos('Os alunos do 1º e 3º ano tiveram dificuldade em várias cadeiras, veja o que se passa.');
     }else if(_nota[0]>=10 && _nota[1]<10 && _nota[2] <10) {
       setanos('Os alunos do 2º e 3º ano tiveram dificuldade em várias cadeiras, veja o que se passa.');
     }else if(_nota[0]>=10 && _nota[1]<10 && _nota[2] >=10) {
       setanos('Os alunos do 2º ano tiveram dificuldade em várias cadeiras, veja o que se passa.');
     }else if(_nota[0]>=10 && _nota[1]>=10 && _nota[2] <10) {
       setanos('Os alunos do 3º ano tiveram dificuldade em várias cadeiras, veja o que se passa.');
     }
   else if ((_nota[0] >= 10 && _nota[1] >= 10 && _nota[2]>= 10) && (_nota[0] <= 12 && _nota[1] <= 12 && _nota[2] <= 12)){
     setanos('Parabéns, os seus alunos acabaram com uma média positiva, porém podia ser melhor. ');
   }else if((_nota[0] >=10 && _nota[1] >= 10 && _nota[2] < 10) && (_nota[0] <= 12 && _nota[1] <= 12)){
       setanos('Parabéns, os seus alunos de 1º e 2º ano acabaram com uma média positiva, porém podiam ter feito melhor. Já os do 3º ano acabaram com uma média negativa, veja o que passa');
   }else if((_nota[0] >= 12 && _nota[1] >= 12 && _nota[2] >=12) && (_nota[0] < 15 && _nota[1] < 15 && _nota[2]<15)){
     setanos('Parabéns, os seus alunos acabaram com uma média razoável, continue com o bom trabalho');
   }else if((_nota[0] >=15 && _nota[1] >= 15 && _nota[2]>=15) && (_nota[0] <= 20 && _nota[1] <= 20 && _nota[2] <= 20)){
     setanos('Parabéns, os seus alunos acabaram com uma média excelente, continue com o excelente trabalho');
   }else if((_nota[0] >= 12 && _nota[1] >= 12 && _nota[2] <12) && (_nota[0] < 15 && _nota[1] < 15 && _nota[2]>=10)){
       setanos('Parabéns, os seus alunos de 1º e 2º ano acabaram com uma média razoável, porém os de 3º ano podiam ter feito melhor');
   }else if((_nota[0] >=15 && _nota[1] >= 15 && _nota[2]<15) && (_nota[0] <= 20 && _nota[1] <= 20 && _nota[2] >= 12)){
     setanos('Parabéns, os seus alunos de 1º e 2º ano acabaram com uma média razoável, porém os de 3º ano podiam ter feito melhor');
   }
   else if((_nota[0] >=10 && _nota[1] < 10 && _nota[2] < 10) && (_nota[0] <= 12)){
       setanos('Parabéns, os seus alunos de 1º ano acabaram com uma média positiva, porém podiam ter feito melhor. Já os do 2º e 3º ano acabaram com uma média negativa, veja o que passa');
   }else if((_nota[0] >= 12 && _nota[1] < 12 && _nota[2] <12) && (_nota[0] < 15 && _nota[1] < 10 && _nota[2]<10)){
     setanos('Parabéns, os seus alunos de 1º ano acabaram com uma média razoável, porém os alunos de 2º e 3º ano podiam ter feito melhor.');
   }else if((_nota[0] >= 15 && _nota[1] < 15 && _nota[2] <15) && (_nota[0] <= 20 && _nota[1] < 12 && _nota[2] < 12)){
     setanos('Parabéns, os seus alunos de 1º ano acabaram com uma média excelente, já os alunos do 2º e 3º ano tiveram uma média razoável');
   }else if((_nota[0] >= 10 && _nota[1] < 10 && _nota[2] >= 10) && (_nota[0] < 12 && _nota[2] <12)){
       setanos('Parabéns, os seus alunos de 1º e 3º ano acabaram com uma média positiva, porém podia ser melhor. Já os do 2º ano acabaram com uma média negativa, veja o que passa');
   }else if((_nota[0] >= 12 && _nota[1] < 12 && _nota[2] >= 12) && (_nota[0] < 15 && _nota[1] >= 10 && _nota[2] < 15)){
     setanos('Parabéns, os seus alunos de 1º e 3º ano acabaram com uma média razoável, já os do 2º ano acabaram com uma média positiva, porém podiam feito melhor');
   }else if((_nota[0] >= 15 && _nota[1] < 15 && _nota[2] >= 15) && (_nota[0] <= 20 && _nota[1] >= 12 && _nota[2] <= 20)){
     setanos('Parabéns, os seus alunos de 1º e 3º ano acabaram com uma média excelente, já os do 2º ano acabaram com uma média razoável');

   }else if((_nota[0] >= 10 && _nota[0] <= 15 ) && (_nota[1] >=10 && _nota[1] <= 15 ) && ( _nota[2] >= 15 && _nota[2]<= 20)){
    setanos('Parabéns, os seus alunos do 3º ano acabaram com uma média excelente, já os seus alunos de 1º e 2º ano acabaram com uma média positiva !');
   } else if((_nota[0] >= 5 && _nota[0] <= 7) && (_nota[1] >= 10 && _nota[1] <= 15 ) && (_nota[2] >=10 && _nota[2] <= 15 )){
    setanos('Parabéns, os seus alunos do 1º ano acabaram com uma média excelente, já os seus alunos de 2º e 3º ano acabaram com uma média positiva !');
   } else if((_nota[0] >= 10 && _nota[0] <= 15 ) && (_nota[1] >= 15 && _nota[1] <= 20) && (_nota[2] >=10 && _nota[2] <= 15 )){
    setanos('Parabéns, os seus alunos do 2º ano acabaram com uma média excelente, já os seus alunos de 1º e 3º ano acabaram com uma média positiva !');
   }else if( _nota[0] <0 ||_nota[1] <0 ||_nota[2] <0 ){
     setanos("Média da cadeira muito baixa, problema no ficheiro json.")
   }else if( _nota[0] >20 ||_nota[1] >20 ||_nota[2] >20){
     setanos("Média da cadeira muito elevada, problema no ficheiro json.")
   }
   console.log(_nota);

        setChart({
          labels: ["1º Ano","2º Ano","3º Ano","Media Final"],
          datasets: [
            {
              label: "Medias",
              borderColor: ['rgba(255, 99, 132, 1.0)',
              'rgba(255, 159, 64, 1.0)',
              'rgba(255, 205, 86, 1.0)',
              'rgba(75, 192, 192, 1.0)'],
              backgroundColor: ['rgba(255, 99, 132, 1.0)',
              'rgba(255, 159, 64, 1.0)',
              'rgba(255, 205, 86, 1.0)',
              'rgba(75, 192, 192, 1.0)'],
              data: _nota,
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
      <div><b>Médias dos alunos do Curso </b>
      <Bar
          data={chart}
          options={{ 
            responsive: true,
            maintainAspectRatio: true,
            legend: {
              display:false,
            },
            height: '700px', 
            width: "700px",
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  max:20,
                  stepSize:2,
                }
              }]
          }
        }}
        />
      </div>
      <div><b>Bem vindo caro Diretor de Curso!</b><p>{anos}</p></div> 
      </td>
      </tr>
      </tbody>
    </table>

  );
};
export default Chart;
