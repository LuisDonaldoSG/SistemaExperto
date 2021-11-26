const preguntas = [
    {
      pregunta : "Eres una persona creativa que le gusta plasmar sus ideas", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Multimedios',
        'Graficasporcomputadora',
        'Disenoydesarrollodevideojuegos',
        'Comercioelectronico'
      ]
    },
    {
      pregunta : "¿Te agradan los temas históricos y reflexivos que permiten expandir tu perspectiva?", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Arteculturaysociedad',
        'Propuestacristiana',
        'Apreciacioncinematografica'
      ]
    },
    {
      pregunta : "Te interesaría desarrollar secuencias de imágenes para plasmar tus ideas", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Apreciacioncinematografica',
        'Multimedios'
      ]
    },
    {
      pregunta : "Te gusta aprender diferentes culturas", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Arteculturaysociedad',
        'Propuestacristiana'
      ]
    },
    {
      pregunta : "Eres una persona curiosa que le gusta estudiar, recoger y analizar datos", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Tecnicasdeinvestigacion',
        'Gestiondeproyectosinformaticos',
        'Personayproyectodevida',
        'Sistemasdeinformacionintegral'
      ]
    },
    {
      pregunta : "Te interesaría conocer cómo se mueve el comercio en internet y la forma de sacarle provecho", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Comercioelectronico',
        'Gestiondeproyectosinformaticos'
      ]
    },
    {
      pregunta : "Te has preguntado como la sociedad puede cambiar en base a sus creencias", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Arteculturaysociedad',
        'Propuestacristiana'
      ]
    },
    {
      pregunta : "Eres aficionado a llevar el control en desarrollo de proyectos", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Gestiondeproyectosinformaticos',
        'Sistemasdeinformacionintegral'
      ]
    },
    {
      pregunta : "Te gustaría desarrollar proyectos donde se tenga presente un equilibrio que ayude a la sociedad ", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Responsabilidadsocialymundocontemporaneo',
        'Gestiondeproyectosinformaticos',
        'Sistemasdeinformacionintegral'
      ]
    },
    {
      pregunta : "Te interesaría desarrollar modelos tridimensionales ", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Disenoydesarrollodevideojuegos',
        'Graficasporcomputadora'
      ]
    },
    {
      pregunta : "Eres una persona que te interesaría desarrollarte personalmente y socialmente para descubrir un sentido de vida", 
      tipo: "optativa", 
      respuesta: null, 
      materias: [
        'Personayproyectodevida',
        'Responsabilidadsocialymundocontemporaneo'
      ]
    },
    //Redes
    {
      pregunta : "¿Te gustaría ejercer tus actividades en interiores o exteriores?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Telecomunicaciones'
      ]
    },  
    {
      pregunta : "¿Te gustan las actividades que requieran el uso de herramientas y/o el uso de tus manos en el proceso para completar tareas físicas?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Telecomunicaciones'
      ]
    },
    
    {
      pregunta : "o	¿Eres aficionado a la idea de ensamblar equipos de cómputo o conocer sus componentes?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Telecomunicaciones'
      ]
    },
    {
      pregunta : "Si tuvieras la capacidad de cambiar el entorno físico para mejorar el rendimiento que puede proporcionar un sistema, ¿lo harías?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Telecomunicaciones'
      ]
    } ,
    //Programacion 
    {
      pregunta : "¿Te interesa desarrollar proyectos informáticos mediante el uso de programas?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Desarrollodeaplicaciones'
      ]
    },
    {
      pregunta : "¿Te interesa la creación de aplicaciones o videojuegos?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Desarrollodeaplicaciones'
      ]
    },
    {
      pregunta : "¿El uso de computadoras en tu día a día consume una gran parte de tu tiempo?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Desarrollodeaplicaciones'
      ]
    },
    {
      pregunta : "¿Te gusta resolver los problemas a través de sistemas digitales?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Desarrollodeaplicaciones'
      ]
    },
    //Electronica
    {
      pregunta : "¿Te gustan las actividades que requieran el uso de herramientas y/o el uso de tus manos en el proceso para completar tareas físicas?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Circuitosyelectronica'
      ]
    },
    {
      pregunta : "¿Eres fanático de los robots y te gustaría ensamblar uno?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Circuitosyelectronica'
      ]
    },
    {
      pregunta : "¿Alguna vez te has preguntado cómo funcionan los aparatos electrónicos por dentro?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Circuitosyelectronica'
      ]
    },
    {
      pregunta : "¿Te has puesto a pensar en cómo se comunican los circuitos de dispositivo electrónico?", 
      tipo: "especialidad", 
      respuesta: null, 
      materias: [
        'Circuitosyelectronica'
      ]
    },
    //Tronco comun 
    {
      pregunta : "¿Tienes algún certificado de inglés equivalente a B2?", 
      tipo: "troncocomun", 
      respuesta: null, 
      materias: [
        'Ingles',
      ]
    },
    //Adicional
    {
      pregunta : "¿Estás interesado en cursar dos especialidades durante tu preparación profesional?", 
      tipo: "adicional",
      respuesta: null, 
      materias: [
        'especialidadmultiple',
      ]
    }
  ]

  export  {preguntas}