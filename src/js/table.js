// Точка входа всей таблицы
import data from './data';

function generateTable(data) { // Создание таблицы
  const table = document.getElementById('movieTable');
  table.innerHTML = ` 
        <th>id</th>
        <th>title</th>
        <th>year</th>
        <th>imdb</th>
    `; // Создание заголовка

  data.forEach((movie) => { // Создание DOM-элемента с добавлением data-атрибутов из data-фильма
    const row = document.createElement('tr');
    row.classList.add('movie');
    row.setAttribute('data-id', movie.id);
    row.setAttribute('data-title', movie.title);
    row.setAttribute('data-year', movie.year);
    row.setAttribute('data-imdb', movie.imdb.toFixed(2));

    row.innerHTML = `
          <td>${movie.id}</td>
          <td>${movie.title}</td>
          <td>(${movie.year})</td>
          <td>imdb: ${movie.imdb.toFixed(2)}</td>
        `; // Добавление к строке информации из data-данных

    table.appendChild(row); // Добавление строки в таблицу
  });
}

generateTable(data);

// Первый способ сортировки

function sorting() {
  let counterSorting = 0;
  setInterval(() => {
    if (counterSorting === 0) {
      data.sort((a, b) => a.id - b.id);
      console.log('Сортировка данных по возрастанию по первому полю');
    } else if (counterSorting === 1) {
      data.sort((a, b) => b.id - a.id);
      console.log('Сортировка данных по убыванию по первому полю');
    } else if (counterSorting === 2) {
      data.sort((a, b) => a.title.localeCompare(b.title));
      console.log('Сортировка данных по возрастанию по второму полю');
    } else if (counterSorting === 3) {
      data.sort((a, b) => b.title.localeCompare(a.title));
      console.log('Сортировка данных по убыванию по второму полю');
    } else if (counterSorting === 4) {
      data.sort((a, b) => a.year - b.year);
      console.log('Сортировка данных по возрастанию по третьему полю');
    } else if (counterSorting === 5) {
      data.sort((a, b) => b.year - a.year);
      console.log('Сортировка данных по убыванию по третьему полю');
    } else if (counterSorting === 6) {
      data.sort((a, b) => a.imdb - b.imdb);
      console.log('Сортировка данных по возрастанию по четвертому полю');
    } else if (counterSorting === 7) {
      data.sort((a, b) => b.imdb - a.imdb);
      console.log('Сортировка данных по убыванию по четвертому полю');
    }

    generateTable(data);
    counterSorting++;

    if (counterSorting === 8) {
      counterSorting = 0;
      console.log('цикл заново');
    }
  }, 1000);
}

setTimeout(() => {
  console.log('Началась сортировка данных');
  sorting();
}, 1000);

// Второй способ сортировки (это вроде как 2 задание)

// function updateTable(dataIds, dataTitles, dataYears, dataImdb) {
//     const table = document.getElementById("movieTable");
//     table.innerHTML = `
//         <th>id</th>
//         <th>title</th>
//         <th>year</th>
//         <th>imdb</th>
//     `;

//     for (let i = 0; i < dataIds.length; i++) {
//         const row = document.createElement('tr');
//         row.classList.add('movie');
//         row.setAttribute('data-id', dataIds[i]);
//         row.setAttribute('data-title', dataTitles[i]);
//         row.setAttribute('data-year', dataYears[i]);
//         row.setAttribute('data-imdb', dataImdb[i]);

//         row.innerHTML = `
//           <td>${dataIds[i]}</td>
//           <td>${dataTitles[i]}</td>
//           <td>(${dataYears[i]})</td>
//           <td>imdb: ${dataImdb[i]}</td>
//         `;

//         table.appendChild(row);
//     }
// }

// function sorting() {
//     const table = document.getElementById("movieTable");
//     const trElements = [...table.querySelectorAll('tr.movie')];
//     const dataIds = trElements.map(tr => tr.getAttribute('data-id'));
//     const dataTitles = trElements.map(tr => tr.getAttribute('data-title'));;
//     const dataYears = trElements.map(tr => tr.getAttribute('data-year'));
//     const dataImdb = trElements.map(tr => tr.getAttribute('data-imdb'));

//     let counterSorting = 0;
//     setInterval(() => {
//         if(counterSorting === 0) {
//             dataIds.sort((a, b) => Number(a) - Number(b));
//             console.log('Сортировка данных по возрастанию по первому полю');
//         } else if(counterSorting === 1) {
//             dataIds.sort((a, b) => Number(b) - Number(a));
//             console.log('Сортировка данных по убыванию по первому полю');
//         } else if(counterSorting === 2) {
//             dataTitles.sort((a, b) => a.localeCompare(b));
//             console.log('Сортировка данных по возрастанию по второму полю');
//         } else if(counterSorting === 3) {
//             dataTitles.sort((a, b) => b.localeCompare(a));
//             console.log('Сортировка данных по убыванию по второму полю');
//         } else if(counterSorting === 4) {
//             dataYears.sort((a, b) => Number(a) - Number(b));
//             console.log('Сортировка данных по возрастанию по третьему полю');
//         } else if(counterSorting === 5) {
//             dataYears.sort((a, b) => Number(b) - Number(a));
//             console.log('Сортировка данных по убыванию по третьему полю');
//         } else if(counterSorting === 6) {
//             dataImdb.sort((a, b) => (Number(a) - Number(b)).toFixed(2));
//             console.log('Сортировка данных по возрастанию по четвертому полю');
//         } else if(counterSorting === 7) {
//             dataImdb.sort((a, b) => (Number(b) - Number(a)).toFixed(2));
//             console.log('Сортировка данных по убыванию по четвертому полю');
//         }

//         updateTable(dataIds, dataTitles, dataYears, dataImdb);
//         counterSorting++;
//         if(counterSorting === 8) {
//             counterSorting = 0;
//             console.log('цикл заново')
//         }
//     }, 2000)
// }

// setTimeout(() => {
//     console.log('Началась сортировка данных')
//     sorting();
// }, 5000)
