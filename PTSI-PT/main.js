window.onload = function() {
  matiereContainer = document.getElementById('dropdown-matiere')

  document.getElementById('matieres').addEventListener('click', (evt) => {
    window.matiereId = evt.target.id //to make the variable global
    changeText(matiereId, matiereContainer)
  })

  function changeText(text, container) {
    container.innerHTML = text
  }

  function displayContainer(container) {}

  function displayTable(matiere) {

    matiere.style.display = "flex"
  }
}