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

document.getElementById('btn-friday')
  .addEventListener('click', () => {
    const holidays = document.querySelectorAll('.friday')
    const fridayList = [4, 11, 18, 25]

    holidays.forEach((e, i) => {
      const currentText = e.innerHTML
      e.innerHTML = isNaN(currentText) ? fridayList[i] : 'friday'
    })
  })

document.querySelectorAll('.days').forEach(element => {
  element.addEventListener('mouseover', () => {
    element.style.cursor = 'default'
    element.style.transition = 'all 0.4s'
    element.style.transform = 'scale(1.3)'
  })

  element.addEventListener('mouseout', () => {
    element.style.transform = 'scale(1.0)'
  })
})

function createTask(nameTag, parentClassName) {
  const myTasks = document.getElementsByClassName(parentClassName)[0]
  const tagP = document.createElement(nameTag)
  tagP.style.cursor = 'default'
  tagP.innerText = 'Projeto:'
  myTasks.appendChild(tagP)
}
createTask('span', 'my-tasks')

// Peguei a function do gabarito, não entendi o enunciado!
function newTaskDiv(color, size) {
  const tasksContainer = document.querySelector('.my-tasks')
  const newTask = document.createElement('div')
  newTask.className = 'task'
  newTask.style.backgroundColor = color
  newTask.style.height = `${size}px`
  newTask.style.width = `${size}px`
  tasksContainer.appendChild(newTask)
}
newTaskDiv('green', 23)
