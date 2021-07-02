import React, { useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";
import axios from "axios";

const Chart = () =>{
  const [chart, setChart] = useState({});
  const [media, setmedia] = useState(null);

  const getData =  () => {
    let _nota = [];

     axios
     .get('http://localhost:3001/alunos')
     .then(res => {
        var nota1 = res.data.notaUC1;
        _nota.push(parseInt(nota1));
        var nota2 = res.data.notaUC2;
        _nota.push(parseInt(nota2));
        var mediaUC = (nota2 + nota1)/2;
        _nota.push(parseInt(mediaUC));

       //----------------------------------------Caso quisessemos mostrar quanto faltava para aquela nota chegar à positiva------------// 
        
       //const [freq1, setfreq1] = useState(null);
       //const [freq2, setfreq2] = useState(null);
       //var nota_negativa_1 = 10 - nota1;
       //var nota_negativa_2 = 10 - nota2;
     
       // if (_nota[0] <= 8){
       //   setfreq1('Andaste-te a baldar neste primeiro teste, ainda te faltou' + ' ' + nota_negativa_1 + ' ' + 'valores para a positiva' );
       // }else if(_nota[0]<10 && _nota[0]>8){ //caso queiramos mostrar a nota, basta por setano1/2/3(dataobj/a/b)
       //   setfreq1('Infelizmente não conseguiste chegar à positiva neste primeiro teste, mas tiveste lá perto, faltou-te apenas'+' ' + nota_negativa_1 +' '+'valores para a positiva' );
       // }else if (_nota[0] >= 10 && _nota[0] <= 13){
       //   setfreq1('Muito bem, o teu primeiro teste foi bom, mas bem sabes que podias fazer melhor');
       // }else if(_nota[0] >=13){
       //   setfreq1('Muito bem, tiveste um primeiro teste acima da média, continua assim');
       // }
       // if (_nota[1] <= 8){
       //   setfreq2('' + 'Andaste-te a baldar neste segundo teste, ainda te faltou'+' ' + nota_negativa_2 +' '+'valores para a positiva' );
       // }else if(_nota[1]<10){
       //   setfreq2('' + 'Infelizmente não conseguiste chegar à positiva neste primeiro teste, mas tiveste lá perto, faltou-te apenas'+' ' + nota_negativa_1 + ' '+ 'valores para a positiva');
       // }else if (_nota[1] >= 10 && _nota[1] <= 13){
       //   setfreq2('' + 'Muito bem, o teu segundo teste foi bom, mas bem sabes que podias fazer melhor');
       // }else if(_nota[1] >=13){
       //   setfreq2('' +'Muito bem, tiveste um segundo teste acima da média, continua assim');
       // }
       // No html seria <p>{freq1}</p><p>{freq2}</p>
        if(_nota[2]<9.5 && _nota[0] > 10 ){
          setmedia('Infelizmente, não foi desta que passaste à UC, mas como podes verificar, faltou-te estudo para o segundo teste');
        }else if (_nota[2] <= 9.5 && _nota[1] > 10){
          setmedia('Infelizmente, não foi desta que passaste à UC, mas como podes verificar, faltou-te estudo para o primeiro teste');
        }else if(_nota[2] >=10 && _nota[2] <=12 && _nota[0] >= 14){
          setmedia('Parabéns, passaste à UC, porém com alguma dificuldade no segundo teste.');
        }else if(_nota[2] >=10 && _nota[2] <=12 && _nota[1] >= 14){
            setmedia('Parabéns, passaste à UC, porém com alguma dificuldade no primeiro teste.');
        }else if(_nota[2] >12){
          setmedia('Parabéns, passaste à UC, com alguma facilidade.');
        }else if((_nota[0] <9.5 && _nota[0]>7) && (_nota[1] <7)){
          setmedia('Infelizmente, não foi desta que passaste à UC, precisas de te esforçar mais, principalmente nesse teu segundo teste.')
        }else if((_nota[1] <9.5 && _nota[1]>7) && (_nota[0] <7)){
          setmedia('Infelizmente, não foi desta que passaste à UC, precisas de te esforçar mais, principalmente nesse teu primeiro teste.')
        }else if(_nota[0]>7 && _nota[0]<9.5 && _nota[1]>7 && _nota[1]<9.5){
          setmedia('Infelizmente, não foi desta que passaste à UC, precisas de te esforçar um pouco mais em ambas as frequências .')
        }else if(_nota[0]<7 && _nota[1]<7){
          setmedia('Infelizmente, não foi desta que passaste à UC, precisas de te esforçar muito mais em ambas as frequências.')
        }
      
        setChart({
          labels : ["1ª Frequência","2ª Frequência","Média"],
          datasets: [
            {
              borderColor: ["#EBC79E","#A62A2A","#3299CC"],
              backgroundColor: ["#EBC79E","#A62A2A","#3299CC"],
              data: _nota,
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
      <div><b>Notas relativas à UC</b>
      <HorizontalBar
          data={chart}
          options={{ 
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display:false,
            },
            height: '300px', 
            width: "300px",
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
      <div><b>Bem vindo caro aluno!</b><p>{media}</p></div> 
      </td>
      </tr>
      </tbody>
    </table>

  );
};
export default Chart;
