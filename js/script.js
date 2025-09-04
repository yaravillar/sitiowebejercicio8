const DATA_URL = "json/data.json"; 
const container = document.getElementById("container");

function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`;
  }
}

fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }
    return response.json();
  })
  .then(data => {
    
    showData(data.students);
  })
  .catch(error => {
    console.error("Hubo un problema con el fetch:", error);
    container.innerHTML = `<p style="color:red;">No se pudieron cargar los estudiantes</p>`;
  });
