interface monitorAvailable {
  nome: string;
  h1: string;
  h2: string;
}

export const monitorsSchedule = [ //Escala de horário dos monitores
    {
        nome: 'Raquel',
        h1: '2T12', 
        h2: '4T12'
    },
    {
        nome: 'Artur',
        h1:'2T12', 
        h2:'4T12'
    },
    {
        nome: 'Pedro',
        h1: '3T12',
        h2:'5T56'
    },
    {
        nome: 'Dante',
        h1: '3T56',
        h2:'4T34'
    },
    {
        nome: 'Exercícios',
        h1: '6T12',
        h2: ''
    }
]

interface scheduleInterface extends Array<monitorAvailable>{}

export function monitorInCharge(schedule: scheduleInterface){ //Função que, com base no dia atual, retorna os monitores com horário hoje
    let dailyMonitors = [];
    const date = new Date().getDay() + 1; //Segunda na notação da UF é 2 e na notação do JS é 1, daí tive que dar esse +1

    if(date !== 7 && date >= 1 && date <= 5){
      for(let i=0; i < schedule.length - 1; i++){
        let class1 = schedule[i].h1;
        let class2 = schedule[i].h2;

        if(Number(class1.slice(0, 1)) == date || Number(class2.slice(0, 1)) == date){
          dailyMonitors.push(schedule[i].nome);
        }
      }
    } 
    else if(date === 6) {
      dailyMonitors.push(schedule[4].nome)
    }
    else if(date == 7 || date || 8){
      dailyMonitors.push(schedule[4].nome)
    }
    return dailyMonitors
  }