import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import '../App.css';

const Chart = () =>{
  const [chart, setChart] = useState({});
  const [anos_, setanos_] = useState(null);

  const getData =  () => {
    let _nota = [];

     axios
     .get('http://localhost:3001/alunos')
     .then(res => {
       const ano_1 = res.data.mediaprimeiroano;
        _nota.push(parseInt(ano_1));
        const ano_2 = res.data.mediasegundooano;
        _nota.push(parseInt(ano_2));
        const ano_3 = res.data.mediaterceiroano;
        _nota.push(parseInt(ano_3));
        console.log(_nota);
       
    if(_nota[0]<10 && _nota[1]<10 && _nota[2]<10){
      setanos_('Parece que os teus três anos de universidade não correram bem, tens de te empenhar mais!');
    }else if (_nota[0]<10 && _nota[1] <10 && (_nota[2] >10 && _nota[2]<13)){
      setanos_('Parece que os teus 2 primeiros anos de universidade não correram muito bem, mas nesse teu 3º ano, já se nota que houve algum estudo');
    }else if(_nota[0]<10 && _nota[2] <10 && (_nota[1] >10 && _nota[1]<13)){
      setanos_('Parece que o teu primeiro e terceiro ano não correram muito bem, mas no teu segundo ano notou-se algum empenho, tenta retomar aos hábitos de estudo que tinhas no segundo ano! ');
    }
  
    else if (_nota[0]<10 && _nota[1] <10 && (_nota[2] >13 && _nota[2]<20)){
      setanos_('Parece que os teus 2 primeiros anos de universidade não correram muito bem, mas nesse teu 3º ano, notou-se uma grande melhoria, continua assim.');
    }else if(_nota[0]<10 && _nota[2] <10 && (_nota[1] >13 && _nota[1]<20)){
      setanos_('Parece que o teu primeiro e terceiro ano não correram muito bem, mas no teu segundo ano notou-se uma grande melhoria, tenta retomar aos hábitos de estudo que tinhas no segundo ano !');
    }

    else if (_nota[0]>=10 && _nota[1] >=10 && (_nota[2] >=13 && _nota[2]<= 20)){
      setanos_('Parabéns, o teu primeiro e segundo ano foram bons , e o teu 3º ano ainda conseguiu ser melhor, continua assim!');
    }else if(_nota[0]<10 && _nota[2] <10 && (_nota[1] >13 && _nota[1]<20)){
      setanos_('Parece que o teu primeiro e terceiro ano não correram muito bem, mas no teu segundo ano notou-se uma grande melhoria, tenta retomar aos hábitos de estudo que tinhas no segundo ano!');
    }

    else if ((_nota[0] >= 10 && _nota[1] >= 10 && _nota[2]>= 10) && (_nota[0] <= 12 && _nota[1] <= 12 && _nota[2] <= 12)){
      setanos_('Parabéns, acabaste os 3 anos com uma média positiva, porém podia ser melhor. ');
    }else if((_nota[0] >=10 && _nota[1] >= 10 && _nota[2] <= 10) && (_nota[0] <= 12 && _nota[1] <= 12)){
      setanos_('Parabéns, acabaste 1º e 2º ano com uma média positiva, porém podias ter feito melhor. Já o 3º ano não te correu bem, tenta retomar aos hábitos de estudo que tinhas.');
    }else if((_nota[0] > 12 && _nota[1] > 12 && _nota[2] >12) && (_nota[0] <= 15 && _nota[1] <= 15 && _nota[2]<=15)){
      setanos_('Parabéns, acabaste com uma média razoável, continua com o bom trabalho');
    }else if((_nota[0] >15 && _nota[1] > 15 && _nota[2]>15) && (_nota[0] <= 20 && _nota[1] <= 20 && _nota[2] <= 20)){
      setanos_('Parabéns, acabaste com uma média excelente, continua com o excelente trabalho');
    }else if((_nota[0] > 12 && _nota[1] > 12 && _nota[2] <12) && (_nota[0] <= 15 && _nota[1] <= 15 && _nota[2]>=10)){
      setanos_('Parabéns, acabaste o 1º e 2º ano com uma média razoável. Já o 3º ano não correu mal, porém bem sabes que tens potencial.');
    }else if((_nota[0] >15 && _nota[1] > 15 && _nota[2]<15) && (_nota[0] <= 20 && _nota[1] <= 20 && _nota[2] >= 12)){
      setanos_('Parabéns, acabaste o 1º e 2º ano com uma média razoável. Já no 3º ano, a tua média não foi má, mas sabes que tens potencial para manter as notas do 1º e 2º ano.');
    }

    else if((_nota[0] >=10 && _nota[1] <= 10 && _nota[2] <= 10) && (_nota[0] <= 12)){
      setanos_('Parabéns, acabaste o 1º ano com uma média positiva, porém podias ter feito melhor. Já no 2º e 3º ano acabaste com uma média negativa, tenta retomar aos hábitos de estudo que tinhas no 1º ano.');
    }else if((_nota[0] > 12 && _nota[1] < 12 && _nota[2] <12) && (_nota[0] <= 15 && _nota[1] <= 10 && _nota[2]<=10)){
      setanos_('Parabéns, acabaste o 1º ano com uma média razoável, porém no 2º e 3º ano podias ter feito melhor.');
    }else if((_nota[0] >15 && _nota[1] < 15 && _nota[2] <15) && (_nota[0] <= 20 && _nota[1] <= 12 && _nota[2] <= 12)){
      setanos_('Parabéns, acabaste o 1º ano com uma média excelente.Já no 2º e 3º ano tiveste uma média razoável.');


    }else if((_nota[0] > 10 && _nota[1] < 10 && _nota[2] >10) && (_nota[0] <= 12 && _nota[2] <=12)){
      setanos_('Parabéns, acabaste o 1º e 3º ano com uma média positiva, porém podia ser melhor. Já no 2º ano acabste com uma média negativa, tenta retomar aos hábitos de estudo.');
    }else if((_nota[0] >12 && _nota[1] < 12 && _nota[2] > 12) && (_nota[0] <= 15 && _nota[1] >= 10 && _nota[2] <= 15)){
      setanos_('Parabéns, acabaste o 1º e 3º ano com uma média razoável. Já no 2º ano acabaste com uma média positiva, porém podias ter feito melhor');
    }else if((_nota[0] >15 && _nota[1] < 15 && _nota[2] > 15) && (_nota[0] <= 20 && _nota[1] >= 12 && _nota[2] <= 20)){
      setanos_('Parabéns, acabaste o 1º e 3º ano com uma média excelente. Já no 2º ano acabaste com uma média razoável');
   
    }else if( _nota[0] <0 ||_nota[1] <0 ||_nota[2] <0 ){
      setanos_("Média da cadeira muito baixa, problema no ficheiro json.")
    }else if( _nota[0] >20 ||_nota[1] >20 ||_nota[2] >20){
      setanos_("Média da cadeira muito elevada, problema no ficheiro json.")
    }


        setChart({
          labels : ["1º Ano", "2º Ano", "3º Ano"],
          datasets: [
            {
              label: "Média dos três Anos",
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.4)",
              data: _nota,
              fill: false,
              tension: 0.1,
            }
          ]
        });
     })
     .catch(err => {
       console.log(err)
     })
     console.log(_nota); 
  };

  useEffect(() => {
    getData();
  }, []); 

  return (
    <table width="100" height="100">
      <tbody>
      <tr>
      <td>
      <div>
        <Line
          data={chart}
          options={{ 
            responsive: true,
            maintainAspectRatio: false, 
            scales: {
            yAxes: [
                {
                    ticks: {
                        min:0,
                        max:20,
                        stepSize:2.5
                    } 
                }
                
            ]
          }
        }}
        />
      </div>
      <div><b>Bem vindo caro aluno!</b><p>{anos_}</p></div> 

      </td>
      </tr>
      </tbody>
    </table>

  );
};
export default Chart;
