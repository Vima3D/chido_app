# Chido App – Sistema de Reportes Internos del Restaurante Chido

Chido App es una aplicación web creada para gestionar **reportes internos** sobre los trabajadores del restaurante **Chido**.
El objetivo es mantener un registro estructurado de **observaciones, incidentes y fallos**, con el fin de mejorar el rendimiento y garantizar el cumplimiento de las normas del restaurante.

---

## ⚠️ Importante

Al inicio de la aplicación se explica que:

- Los reportes **no** se usan para felicitaciones.
- Solo se registran **observaciones**, **incidentes** o **fallos**.
- La **acumulación de fallos** puede generar consecuencias internas según las normas del restaurante (amonestaciones, seguimiento, reuniones, etc.).

---

## 🚀 Funcionalidades principales

### 👥 Lista de trabajadores

La pantalla principal muestra un conjunto de tarjetas, cada una correspondiente a un trabajador.

### ➕ Registrar un reporte

- Al **hacer clic sobre el cuadro del trabajador**, puedes **añadir un nuevo reporte negativo**.
- Cada reporte describe un incidente, un fallo o una observación relevante.

### 📄 Ver historial de reportes

- Al **hacer clic sobre el nombre del trabajador**, se abre su vista de detalle.
- Allí puedes consultar **todos los reportes acumulados** del empleado.

---

## 🛠️ Tecnologías utilizadas

- **React** + **TypeScript**
- **Vite**
- **ESLint** (configurado para mantener orden y calidad en el código)

---

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Vima3D/chido_app.git
```

2. Entrar al proyecto:

```bash
cd chido_app
```

3. Instalar dependencias:

```bash
npm install
```

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

## 📁 Estructura sugerida del proyecto

```
src/
  components/     # Componentes reutilizables (cards, inputs, modales, etc.)
  pages/          # Pantallas principales (lista, reporte del trabajador)
  data/           # Datos estáticos o de ejemplo
  hooks/          # Lógica compartida
  styles/         # Estilos globales y utilitarios
```

---

## 🎯 Objetivo del sistema

Chido App busca facilitar el seguimiento del desempeño de cada empleado, registrando de forma clara:

- Incidentes ocurridos durante el turno
- Fallos recurrentes
- Observaciones relevantes del supervisor

Este sistema permite mantener transparencia y uniformidad en la gestión del personal, asegurando que cada trabajador conozca las expectativas y consecuencias de acumular fallos.

---

## 🤝 Contribuciones

Sugerencias y mejoras son bienvenidas.
Puedes abrir **issues** o enviar **pull requests** en cualquier momento.

---
