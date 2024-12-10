const propiedadesVenta = [
    {
      nombre: "Apartamento de lujo en zona exclusiva",
      src: "./assets/img/img1.jpg",
      descripcion: "Este apartamento está en una zona exclusiva.",
      ubicacion: "123 Luxury Lane, CA",
      habitaciones: 4,
      baños: 4,
      costo: 5000,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Apartamento acogedor en la montaña",
      src: "./assets/img/img2.jpg",
      descripcion: "Este apartamento tiene vistas a la montaña.",
      ubicacion: "789 Mountain Road, CA",
      habitaciones: 2,
      baños: 1,
      costo: 1200,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Penthouse con terraza panorámica",
      src: "./assets/img/img3.jpg",
      descripcion: "Penthouse con vistas espectaculares.",
      ubicacion: "567 Skyline Avenue, CA",
      habitaciones: 3,
      baños: 3,
      costo: 4500,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Penthouse",
      src: "./assets/img/img4.jpg",
      descripcion: "Penthouse con vistas privilegiadas.",
      ubicacion: "San Eugenio 401, Stgo",
      habitaciones: 3,
      baños: 3,
      costo: 7500,
      smoke: true,
      pets: true,
    },
  ];
  
  function renderizarTodasPropiedades(propiedades, idContenedor) {
    const contenedor = document.querySelector(`#${idContenedor}`);
    let template = "";
  
    for (let i = 0; i < propiedades.length; i++) {
      const propiedad = propiedades[i];
      const smokeClass = propiedad.smoke ? "text-success" : "text-danger";
      const petsClass = propiedad.pets ? "text-success" : "text-danger";
      const smokeIcon = propiedad.smoke ? "fa-smoking" : "fa-smoking-ban";
      const petsIcon = propiedad.pets ? "fa-paw" : "fa-ban";
  
      template += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p>${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
              <p>
                <i class="fas fa-bed"></i> ${propiedad.habitaciones} Hab |
                <i class="fas fa-bath"></i> ${propiedad.baños} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              <p class="${smokeClass}">
                <i class="fas ${smokeIcon}"></i>
                ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
              </p>
              <p class="${petsClass}">
                <i class="fas ${petsIcon}"></i>
                ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
              </p>
            </div>
          </div>
        </div>
      `;
    }
  
    contenedor.innerHTML = template;
  }
  
  renderizarTodasPropiedades(propiedadesVenta, "contenedor-venta");
  