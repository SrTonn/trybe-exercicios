function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfTheDecember() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');
  const holidays = [24, 25, 31]
  const fridayList = [4, 11, 18, 25]

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const days = dezDaysList[i];
    const dayListItem = document.createElement('li');
    const classes = ['days']

    fridayList.includes(days) ? classes.push('friday') : ''
    holidays.includes(days) ? classes.push('holiday') : ''

    dayListItem.innerHTML = days
    dayListItem.className = classes.join(' ')

    daysList.appendChild(dayListItem)
  }
}
createDaysOfTheDecember()

function createButton(str, id) {
  const div = document.getElementsByClassName('buttons-container')[0]
  const btn = document.createElement('button')

  btn.id = id
  btn.innerHTML = str
  div.appendChild(btn)
}
createButton('Feriados', 'btn-holiday')

document.getElementById('btn-holiday')
  .addEventListener('click', () => {
    const holidays = document.querySelectorAll('.holiday')
    holidays.forEach((e) => {
      const currentBackgroundColor = e.style.backgroundColor
      const currentColor = e.style.color
      e.style.backgroundColor = currentBackgroundColor === 'green'
                              ? 'rgb(238,238,238)'
                              : 'green'
      e.style.color = currentColor === 'white' ? 'rgb(102, 102, 102)' : 'white'
    })
  })

createButton('Sexta-feira', 'btn-friday')