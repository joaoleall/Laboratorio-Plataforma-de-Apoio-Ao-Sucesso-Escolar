import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const Chart = () =>{
  const [chart, setChart] = useState({});
  const [cadeira1_1, setCadeira1_1] = useState(null);
  const [cadeira1_2, setCadeira1_2] = useState(null);
  const [cadeira1_3, setCadeira1_3] = useState(null);
  const [cadeira1_4, setCadeira1_4] = useState(null);
  const [cadeira1_5, setCadeira1_5] = useState(null);
  const [cadeira2_1, setCadeira2_1] = useState(null);
  const [cadeira2_2, setCadeira2_2] = useState(null);
  const [cadeira2_3, setCadeira2_3] = useState(null);
  const [cadeira2_4, setCadeira2_4] = useState(null);
  const [cadeira2_5, setCadeira2_5] = useState(null);

  const getData =  () => {
    let _sem_1_1 = [];
    let _sem_1_2 = [];
    let _sem_1_3 = [];
    let _sem_1_4 = [];
    let _sem_1_5 = [];
    let _sem_2_1 = [];
    let _sem_2_2 = [];
    let _sem_2_3 = [];
    let _sem_2_4 = [];
    let _sem_2_5 = [];

     axios
     .get('http://localhost:3001/diretorcurso')
     .then(res => {
        var sem1_1 = res.data.curso[0].alunosnotaUC1_1_3;
        var sem1_2 = res.data.curso[0].alunosnotaUC2_1_3;
        var sem1_3 = res.data.curso[0].alunosnotaUC3_1_3;
        var sem1_4 = res.data.curso[0].alunosnotaUC4_1_3;
        var sem1_5 = res.data.curso[0].alunosnotaUC5_1_3;
        var sem2_1 = res.data.curso[0].alunosnotaUC1_2_3;
        var sem2_2 = res.data.curso[0].alunosnotaUC2_2_3;
        var sem2_3 = res.data.curso[0].alunosnotaUC3_2_3;
        var sem2_4 = res.data.curso[0].alunosnotaUC4_2_3;
        var sem2_5 = res.data.curso[0].alunosnotaUC5_2_3;
        _sem_1_1.push(parseInt(sem1_1));
        _sem_1_2.push(parseInt(sem1_2));
        _sem_1_3.push(parseInt(sem1_3));
        _sem_1_4.push(parseInt(sem1_4));
        _sem_1_5.push(parseInt(sem1_5));
        _sem_2_1.push(parseInt(sem2_1));
        _sem_2_2.push(parseInt(sem2_2));
        _sem_2_3.push(parseInt(sem2_3));
        _sem_2_4.push(parseInt(sem2_4));
        _sem_2_5.push(parseInt(sem2_5));      

        if(_sem_1_1 < 10 ){
          setCadeira1_1("MP3" + ', ');
        }
        if(_sem_1_2 < 10 ){
          setCadeira1_2("Gestão de Projetos" + ', ');
        }
        if(_sem_1_3 < 10 ){
          setCadeira1_3("IA"+ ', ');
        }
        if(_sem_1_4 < 10 ){
          setCadeira1_4("Lab 4"+ ', ');
        }
        if(_sem_1_5 < 10 ){
          setCadeira1_5("Redes"+ ', ');
        }
        if(_sem_2_1 < 10 ){
          setCadeira2_1("CG"+ ', ');
        }
        if(_sem_2_2 < 10 ){
          setCadeira2_2("IPC"+ ', ');
        }
        if(_sem_2_3 < 10 ){
          setCadeira2_3("Lab 5"+ ', ');
        }
        if(_sem_2_4 < 10 ){
          setCadeira2_4("SD"+ ' ');
        }
        if(_sem_2_5 < 10 ){
          setCadeira2_5("TABD"+ ' ');
        }
       
        
        
      
        setChart({
          datasets: [
            {
              label: "MP3",
              borderColor: "#990000",
              backgroundColor: "#990000",
              borderWidth: 2,
              data: _sem_1_1,
            },
            {
              label: "Gestão de Projetos",
              borderColor: "#CC0000",
              backgroundColor: "#CC0000",
              borderWidth: 2,
              data: _sem_1_2,
            },
            {
              label: "IA",
              borderColor: "#FF0000",
              backgroundColor: "#FF0000",
              borderWidth: 2,
              data: _sem_1_3,
            },
            {
              label: "Lab 4",
              borderColor: "#FF3333",
              backgroundColor: "#FF3333",
              borderWidth: 2,
              data: _sem_1_4,
            },
            {
              label: "Redes",
              borderColor: "#FF6666",
              backgroundColor: "#FF6666",
              borderWidth: 2,
              data: _sem_1_5,
            },
            {
              label: "CG",
              borderColor: "#0066CC",
              backgroundColor: "#0066CC",
              borderWidth: 2,
              data: _sem_2_1,
            },
            {
              label: "IPC",
              borderColor: "#0080FF",
              backgroundColor: "#0080FF",
              borderWidth: 2,
              data: _sem_2_2,
            },
            {
              label: "Lab 5",
              borderColor: "#3399FF",
              backgroundColor: "#3399FF",
              borderWidth: 2,
              data: _sem_2_3,
            },
            {
              label: "SD",
              borderColor: "#66B2FF",
              backgroundColor: "#66B2FF",
              borderWidth: 2,
              data: _sem_2_4,
            },
            {
              label: "TABD",
              borderColor: "#99CCFF",
              backgroundColor: "#99CCFF",
              borderWidth: 2,
              data: _sem_2_5,
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
      <div><b>Médias dos alunos de 3º ano do Curso</b>
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
      <div><p><b>Bem vindo caro Diretor de Curso!</b> </p>Tenha em especial atenção as seguintes cadeiras:<p>{cadeira1_1}{cadeira1_2}{cadeira1_3}{cadeira1_4}{cadeira1_5}{cadeira2_1}{cadeira2_2}{cadeira2_3}{cadeira2_4}{cadeira2_5}</p> </div>
      </td>
      </tr>
      </tbody>
    </table>

  );
};
export default Chart;
