var matiere
var concours

window.onload = function() {
  matiereContainer = document.getElementById('dropdown-matiere')

  concoursContainer = document.getElementById('dropdown-concours')

  document.getElementById('matieres').addEventListener('click', (evt) => {
    const matiereId = evt.target.id
    changeText(matiereId, matiereContainer)
  })

  document.getElementById('concours').addEventListener('click', (evt) => {
    const concoursId = evt.target.id
    changeText(concoursId, concoursContainer)
  })


  function changeText(text, container) {
    container.innerHTML = "<div class='dropdown-select'>" + text + "</div>"
    document.getElementById('dropdown-concours').style.display = "flex"
  }
}