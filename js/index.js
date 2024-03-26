let mainBody =  document.getElementById('mainBody');
let mainTitle = document.getElementById('mainTitle');

const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const today = new Date();
const dayIndex = today.getDay();
const dayOfWeek = daysOfWeek[dayIndex];

mainTitle.innerHTML = dayOfWeek;

function getContainerType(description) {
  let containerType = "";

  if (description === 'Dormir') containerType = 'cntDormir';
  if (description === 'Bañarse') containerType = 'cntBañarse';
  if (description === 'C# Semapi') containerType = 'cntCSemapi';
  if (description === 'Comer') containerType = 'cntComer';
  if (description === 'C# UTN') containerType = 'cntCUTN';
  if (description === 'Merienda') containerType = 'cntMerienda';
  if (description === 'Compras') containerType = 'cntCompras';
  if (description === 'Futbol') containerType = 'cntFutbol';
  if (description === 'Cocinar') containerType = 'cntCocinar';
  if (description === 'NodeJSAO') containerType = 'cntNodeJSAO';
  if (description === 'Jugar') containerType = 'cntJugar';
  if (description === 'Desayuno') containerType = 'cntDesayuno';
  if (description === 'Quinta') containerType = 'cntQuinta';

  return containerType;
}

function bodyFill(day) {
  let tasks = task[day];

  let content = ``;

  tasks.forEach(element => {
    let descriptionFill = element.description.padEnd(9, "z");
    let descriptionReplace = descriptionFill.replace(/z/g, "&nbsp;")

    content += `
      <section class="task">
        <div class="cntSchedule ${getContainerType(element.description)}">
          <p>${element.startTime}</p>
          <span class="separator">-</span>
          <p>${element.finalHour}</p>
        </div>
        <div class="cntDescription ${getContainerType(element.description)}">
          <p class="description">${descriptionReplace}</p>
        </div>
      </section>
    `;
  });

  mainBody.innerHTML = content;
}

bodyFill(dayOfWeek);
