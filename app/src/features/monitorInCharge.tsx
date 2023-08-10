interface monitorAvailable {
  nome: string;
  horario: string;

}

interface scheduleInterface extends Array<monitorAvailable>{}

export function monitorInCharge(schedule: scheduleInterface){ //Função que, com base no dia atual, retorna os monitores com horário hoje
    let dailyMonitors = [];
    const date = new Date().getDay() + 1; //Segunda na notação da UF é 2 e na notação do JS é 1, daí tive que dar esse +1

    if(date !== 7 && date >= 1 && date <= 5){
      for(let i=0; i < schedule.length - 1; i++){
        let class1 = schedule[i].horario.slice(0,4);
        let class2 = schedule[i].horario.slice(-4);

        if(Number(class1.slice(0, 1)) === date || Number(class2.slice(0, 1)) === date){
          dailyMonitors.push(schedule[i]);
        }
      }
    } 
    else if(date === 6) {
      dailyMonitors.push(schedule[4])
    }
    else if(date === 7 || date || 8){
      dailyMonitors.push({nome: 'ninguém', horario: 'nenhum'}) //ninguém
    }
    return dailyMonitors
  }