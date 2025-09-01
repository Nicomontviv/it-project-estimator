# it-project-estimator
IT Project Estimator A web application built with Node.js and Express.js that helps IT companies estimate project costs in person-hours. The system allows clients to submit project ideas, calculates estimated effort, and displays available employees not currently assigned to other projects.


Sistema de carpetas: 
it-project-estimator/
│
├── src/
│   ├── config/        # Configuración (DB, entorno, etc.)
│   ├── controllers/   # Lógica de negocio
│   ├── models/        # Definición de modelos/tablas
│   ├── routes/        # Rutas de la API
│   ├── services/      # Servicios (ej. auth, lógica compleja)
│   └── app.js         # Configuración de express (cuando lo instalemos)
│
├── scripts/           # Scripts auxiliares (ej. para crear DB)
│   └── create_db.js
│
├── .env               # Variables de entorno
├── package.json
└── README.md
