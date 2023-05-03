# Nala Rocks Organigram

Este proyecto es una aplicación web para visualizar y editar organigramas. Este proyecto hace parte de un desafío para [Nala Rocks](https://www.linkedin.com/company/nalarocks/)

El sitio esta deplegado [aquí](https://nala-rocks.netlify.app/)

## Instalación

Aquí una lista de pasos para la instalación del proyecto:

- Clona este repositorio en tu ordenador con el siguiente comando:

```bash
git clone https://github.com/wilmion/nala-rocks-exam.git
```

- Es necesario instalar dependencias para el funcionamiento del proyecto.

```bash
npm install # Si usas npm
yarn install # Si usas yarn
```

## Ejecución

- Si deseas ejecutarlo en modo desarrollo, ideal si quieres tener la ventaja de **hot realoading**

```bash
npm run start
```

- Si deseas correr en modo producción, estos son los pasos a seguir:

```bash
npm run build # Primero para compilar el proyecto y servir los archivos estáticos en /build
npm install -g serve # Puedes saltar este paso si aún no tienes instalado serve como global
serve -s build # Pondrá el proyecto en http://localhost:3000
```

## Agradecimiento

Principalmente a agradecer a [Nala Rocks](https://www.linkedin.com/company/nalarocks/) por plantear este desafío y poner a prueba mis conocimientos en poco tiempo. Estaré encantado de formar parte de su equipo.

💛 Aprende para no envejecer 💛