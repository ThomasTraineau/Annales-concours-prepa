var annees = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]


window.onload = function() {
  matiereContainer = document.getElementById('dropdown-matiere')

  concoursSciencesContainer = document.getElementById('dropdown-concours-sciences')
  concoursLanguesContainer = document.getElementById('dropdown-concours-langues')

  document.getElementById('matieres').addEventListener('click', (evt) => {
    window.matiereId = evt.target.id //to make the variable global
    const type = evt.target.title
    changeText(matiereId, matiereContainer)
    if (type == "langues") {
      displayContainer(concoursLanguesContainer)
    } else if (matiereId == "Informatique") {
      displayTable("Informatique", "")
    } else {
      displayContainer(concoursSciencesContainer)
    }
  })

  document.getElementById('dropdown-concours-langues').addEventListener('click', (evt) => {
    const concoursId = evt.target.id
    changeText(concoursId, concoursLanguesContainer)

    displayTable(matiereId, concoursId)
  })
  document.getElementById('dropdown-concours-sciences').addEventListener('click', (evt) => {
    const concoursId = evt.target.id
    changeText(concoursId, concoursSciencesContainer)
    displayTable(matiereId, concoursId)
  })


  function changeText(text, container) {
    container.innerHTML = "<div class='dropdown-select'>" + text + "</div>"
  }

  function displayContainer(container) {
    container.style.display = "flex"
  }

  function displayTable(matiere, concours) {
    var tableau = document.getElementById('tableau')
    tableau.insertAdjacentHTML("beforeend", `
    <table>
      <thead>
          <tr>
              <th>Année</th>
              <th>Sujet</th>
              <th>Corrigé</th>
          </tr>
      </thead>
      <tobody>
    `);
    for (annee in annees) {
      console.log(annee)
      tableau.insertAdjacentHTML("beforeend", `
          <tr>
            <td>` + annee + `<td>
            <td><a href="archives/` + matiere + concours + `.pdf">Sujet</a></td>
            <td><a href="archives/` + matiere + concours + `_.pdf">Corrigé</a></td>
          </tr>
        `)
    }
    tableau.insertAdjacentHTML("beforeend", '</tbody></table>')
  }
}