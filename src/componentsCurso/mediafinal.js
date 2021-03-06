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
       setanos('Os alunos do seu curso acabaram com uma m??dia negativa em todos os anos, aja com urg??ncia.');
     }else if((_nota[0]<10 && _nota[1]>=10 && _nota[2] >=10)){
       setanos('Os alunos do 1?? ano tiveram dificuldade em v??rias cadeiras, veja o que se passa.');
     }else if(_nota[0]<10 && _nota[1]<10 && _nota[2] >=10) {
       setanos('Os alunos do 1?? e 2?? ano tiveram dificuldade em v??rias cadeiras, veja o que se passa.');
     }else if(_nota[0]<10 && _nota[1]>=10 && _nota[2] <10) {
       setanos('Os alunos do 1?? e 3?? ano tiveram dificuldade em v??rias cadeiras, veja o que se passa.');
     }else if(_nota[0]>=10 && _nota[1]<10 && _nota[2] <10) {
       setanos('Os alunos do 2?? e 3?? ano tiveram dificuldade em v??rias cadeiras, veja o que se passa.');
     }else if(_nota[0]>=10 && _nota[1]<10 && _nota[2] >=10) {
       setanos('Os alunos do 2?? ano tiveram dificuldade em v??rias cadeiras, veja o que se passa.');
     }else if(_nota[0]>=10 && _nota[1]>=10 && _nota[2] <10) {
       setanos('Os alunos do 3?? ano tiveram dificuldade em v??rias cadeiras, veja o que se passa.');
     }
   else if ((_nota[0] >= 10 && _nota[1] >= 10 && _nota[2]>= 10) && (_nota[0] <= 12 && _nota[1] <= 12 && _nota[2] <= 12)){
     setanos('Parab??ns, os seus alunos acabaram com uma m??dia positiva, por??m podia ser melhor. ');
   }else if((_nota[0] >=10 && _nota[1] >= 10 && _nota[2] < 10) && (_nota[0] <= 12 && _nota[1] <= 12)){
       setanos('Parab??ns, os seus alunos de 1?? e 2?? ano acabaram com uma m??dia positiva, por??m podiam ter feito melhor. J?? os do 3?? ano acabaram com uma m??dia negativa, veja o que passa');
   }else if((_nota[0] >= 12 && _nota[1] >= 12 && _nota[2] >=12) && (_nota[0] < 15 && _nota[1] < 15 && _nota[2]<15)){
     setanos('Parab??ns, os seus alunos acabaram com uma m??dia razo??vel, continue com o bom trabalho');
   }else if((_nota[0] >=15 && _nota[1] >= 15 && _nota[2]>=15) && (_nota[0] <= 20 && _nota[1] <= 20 && _nota[2] <= 20)){
     setanos('Parab??ns, os seus alunos acabaram com uma m??dia excelente, continue com o excelente trabalho');
   }else if((_nota[0] >= 12 && _nota[1] >= 12 && _nota[2] <12) && (_nota[0] < 15 && _nota[1] < 15 && _nota[2]>=10)){
       setanos('Parab??ns, os seus alunos de 1?? e 2?? ano acabaram com uma m??dia razo??vel, por??m os de 3?? ano podiam ter feito melhor');
   }else if((_nota[0] >=15 && _nota[1] >= 15 && _nota[2]<15) && (_nota[0] <= 20 && _nota[1] <= 20 && _nota[2] >= 12)){
     setanos('Parab??ns, os seus alunos de 1?? e 2?? ano acabaram com uma m??dia razo??vel, por??m os de 3?? ano podiam ter feito melhor');
   }
   else if((_nota[0] >=10 && _nota[1] < 10 && _nota[2] < 10) && (_nota[0] <= 12)){
       setanos('Parab??ns, os seus alunos de 1?? ano acabaram com uma m??dia positiva, por??m podiam ter feito melhor. J?? os do 2?? e 3?? ano acabaram com uma m??dia negativa, veja o que passa');
   }else if((_nota[0] >= 12 && _nota[1] < 12 && _nota[2] <12) && (_nota[0] < 15 && _nota[1] < 10 && _nota[2]<10)){
     setanos('Parab??ns, os seus alunos de 1?? ano acabaram com uma m??dia razo??vel, por??m os alunos de 2?? e 3?? ano podiam ter feito melhor.');
   }else if((_nota[0] >= 15 && _nota[1] < 15 && _nota[2] <15) && (_nota[0] <= 20 && _nota[1] < 12 && _nota[2] < 12)){
     setanos('Parab??ns, os seus alunos de 1?? ano acabaram com uma m??dia excelente, j?? os alunos do 2?? e 3?? ano tiveram uma m??dia razo??vel');
   }else if((_nota[0] >= 10 && _nota[1] < 10 && _nota[2] >= 10) && (_nota[0] < 12 && _nota[2] <12)){
       setanos('Parab??ns, os seus alunos de 1?? e 3?? ano acabaram com uma m??dia positiva, por??m podia ser melhor. J?? os do 2?? ano acabaram com uma m??dia negativa, veja o que passa');
   }else if((_nota[0] >= 12 && _nota[1] < 12 && _nota[2] >= 12) && (_nota[0] < 15 && _nota[1] >= 10 && _nota[2] < 15)){
     setanos('Parab??ns, os seus alunos de 1?? e 3?? ano acabaram com uma m??dia razo??vel, j?? os do 2?? ano acabaram com uma m??dia positiva, por??m podiam feito melhor');
   }else if((_nota[0] >= 15 && _nota[1] < 15 && _nota[2] >= 15) && (_nota[0] <= 20 && _nota[1] >= 12 && _nota[2] <= 20)){
     setanos('Parab??ns, os seus alunos de 1?? e 3?? ano acabaram com uma m??dia excelente, j?? os do 2?? ano acabaram com uma m??dia razo??vel');

   }else if((_nota[0] >= 10 && _nota[0] <= 15 ) && (_nota[1] >=10 && _nota[1] <= 15 ) && ( _nota[2] >= 15 && _nota[2]<= 20)){
    setanos('Parab??ns, os seus alunos do 3?? ano acabaram com uma m??dia excelente, j?? os seus alunos de 1?? e 2?? ano acabaram com uma m??dia positiva !');
   } else if((_nota[0] >= 5 && _nota[0] <= 7) && (_nota[1] >= 10 && _nota[1] <= 15 ) && (_nota[2] >=10 && _nota[2] <= 15 )){
    setanos('Parab??ns, os seus alunos do 1?? ano acabaram com uma m??dia excelente, j?? os seus alunos de 2?? e 3?? ano acabaram com uma m??dia positiva !');
   } else if((_nota[0] >= 10 && _nota[0] <= 15 ) && (_nota[1] >= 15 && _nota[1] <= 20) && (_nota[2] >=10 && _nota[2] <= 15 )){
    setanos('Parab??ns, os seus alunos do 2?? ano acabaram com uma m??dia excelente, j?? os seus alunos de 1?? e 3?? ano acabaram com uma m??dia positiva !');
   }else if( _nota[0] <0 ||_nota[1] <0 ||_nota[2] <0 ){
     setanos("M??dia da cadeira muito baixa, problema no ficheiro json.")
   }else if( _nota[0] >20 ||_nota[1] >20 ||_nota[2] >20){
     setanos("M??dia da cadeira muito elevada, problema no ficheiro json.")
   }
   console.log(_nota);

        setChart({
          labels: ["1?? Ano","2?? Ano","3?? Ano","Media Final"],
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
      <div><b>M??dias dos alunos do Curso </b>
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
