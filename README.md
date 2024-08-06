# Generador de Rutinas de Ejercicio con IA

## Descripción

Este proyecto es una landing page desarrollada en NextJS 14 que genera rutinas de ejercicio personalizadas utilizando inteligencia artificial. La información del usuario es procesada para crear una rutina adaptada a sus necesidades y objetivos específicos.

### Demo en vivo

Puedes probar en vivo la app en:
<a href="https://vercelai.mydeploys.com" target="_blank">DEMO</a>

## Tecnologías Utilizadas

- **NextJS 14**: Framework de React para la construcción de aplicaciones web.
- **Vercel AI SDK**: Librería utilizada para integrar las capacidades de inteligencia artificial en la generación de rutinas.
- **OpenAI API**: ChatGPT como modelo de lenguaje para generar la rutina.

## Instalación y Configuración

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn
- API de OpenAI

### Pasos para la Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/jccm6/workout-vercel-ai
   cd tu-repositorio
   ```

2. Instalar las dependencias:

   Con npm:

   ```bash
   npm install
   ```

   Con yarn:

   ```bash
   yarn install
   ```

3. Configurar las variables de entorno:

   Crear un archivo `.env` en la raíz del proyecto y añadir las siguientes variables:

   ```plaintext
   OPENAI_API_KEY=tu_api_key_de_OpenAI
   ```

### Ejecución en Desarrollo

Para ejecutar la aplicación en modo desarrollo, utiliza el siguiente comando:

Con npm:

```bash
npm run dev
```

Con yarn:

```bash
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Uso

1. Abre la landing page en tu navegador.
2. Proporciona la información requerida.
3. La inteligencia artificial generará una rutina de ejercicios personalizada basada en los datos suministrados.

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```
.
├── components      # Componentes reutilizables
│   ├── ui          # Interfaz de usuario
├── app             # Páginas de NextJS
│   ├── api         # Endpoints API
├── public          # Archivos estáticos
├── .env            # Variables de entorno
├── package.json    # Dependencias y scripts
└── README.md       # Documentación del proyecto
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Empuja tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de [jc@jccm.dev](mailto:jc@jccm.dev).

---

¡Gracias por utilizar mi Generador de Rutinas de Ejercicio con IA!
