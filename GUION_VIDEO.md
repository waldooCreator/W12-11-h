# 🎥 Guión para Video Explicativo (3-5 minutos)

## Información del Video

**Duración:** 3-5 minutos  
**Formato:** Screencast con narración  
**Herramientas sugeridas:** OBS Studio, Loom, Zoom (grabar reunión)

---

## 🎬 ESTRUCTURA DEL VIDEO

### **INTRODUCCIÓN (0:00 - 0:30) - 30 segundos**

**Visual:** Pantalla inicial con título

**Guión:**
```
"Hola, soy Walter Velasco y en este video voy a explicar la implementación 
de un pipeline completo de CI/CD usando GitHub Actions, Cypress y SonarCloud.

Este proyecto demuestra cómo automatizar pruebas y análisis de código 
en una aplicación real: Cypress Real World App."
```

**Qué mostrar:**
- Tu nombre en pantalla
- Título del proyecto
- Logo de GitHub Actions, Cypress, SonarCloud

---

### **PARTE 1: DEMOSTRACIÓN DEL PIPELINE (0:30 - 1:30) - 1 minuto**

**Visual:** GitHub Actions en navegador

**Guión:**
```
"Primero, veamos el pipeline de GitHub Actions en funcionamiento.

Cada vez que hago push al repositorio, se ejecutan automáticamente 
5 jobs en paralelo:

1. Install and Verify - que instala dependencias y verifica el código
2. Unit Tests - que ejecuta 44 tests unitarios con Vitest
3. Cypress E2E Tests - que ejecuta tests end-to-end
4. Build - que compila la aplicación para producción
5. Y SonarCloud - que analiza la calidad del código

Como pueden ver, 3 de los 5 jobs pasaron exitosamente, 
incluyendo los tests unitarios y el análisis de SonarCloud."
```

**Qué mostrar:**
1. Abrir: https://github.com/waldooCreator/W12-11-h/actions
2. Click en el workflow más reciente
3. Mostrar los 5 jobs
4. Señalar los que pasaron ✅
5. Mencionar brevemente el que falló ❌

**Tiempo:** 1 minuto

---

### **PARTE 2: EXPLICACIÓN DEL WORKFLOW (1:30 - 2:30) - 1 minuto**

**Visual:** Código del archivo ci.yml en VS Code

**Guión:**
```
"El workflow está definido en este archivo YAML.

Configuré el pipeline para usar Node.js 20, que es compatible con el proyecto.

Cada job tiene pasos específicos:
- Primero hace checkout del código
- Luego instala las dependencias con Yarn
- Y finalmente ejecuta los tests o análisis correspondientes

Los jobs están organizados con dependencias, por ejemplo, 
el job de Build depende de que los tests pasen primero."
```

**Qué mostrar:**
1. Abrir `.github/workflows/ci.yml` en VS Code
2. Scroll por las secciones principales
3. Señalar:
   - `node-version: '20'`
   - Los steps de cada job
   - La configuración de `needs: [install-and-verify]`

**Tiempo:** 1 minuto

---

### **PARTE 3: SONARCLOUD (2:30 - 3:30) - 1 minuto**

**Visual:** Dashboard de SonarCloud

**Guión:**
```
"Ahora veamos SonarCloud, la herramienta de análisis de calidad.

Como pueden ver, el proyecto pasó el Quality Gate.

SonarCloud detectó algunas áreas de mejora:
- 11 bugs en el código
- Pero sin vulnerabilidades de seguridad críticas
- Y 180 code smells que podrían mejorarse

Estas métricas nos ayudan a mantener la calidad del código 
y detectar problemas antes de que lleguen a producción."
```

**Qué mostrar:**
1. Abrir: https://sonarcloud.io/dashboard?id=waldooCreator_W12-11-h
2. Mostrar Quality Gate (Passed/Failed)
3. Señalar las métricas principales:
   - Reliability (E - 11 bugs)
   - Security (A - 0 vulnerabilities)
   - Maintainability (A - 180 code smells)
4. Hacer zoom en alguna métrica específica

**Tiempo:** 1 minuto

---

### **PARTE 4: PAGE OBJECT Y TESTS (3:30 - 4:30) - 1 minuto**

**Visual:** Código del Page Object y test en VS Code

**Guión:**
```
"Una parte importante del proyecto fue implementar el patrón Page Object.

Aquí está LoginPage.js, que encapsula todas las interacciones 
con la página de login.

Esto me permitió escribir tests más limpios y reutilizables, 
como este test personalizado que valida el flujo completo de login:
- Navega a la página
- Ingresa credenciales
- Verifica que el login fue exitoso
- Y confirma que muestra la lista de transacciones

Todo usando métodos del Page Object, lo que hace el código 
mucho más fácil de mantener."
```

**Qué mostrar:**
1. Abrir `cypress/pages/LoginPage.js`
2. Mostrar brevemente la clase y métodos
3. Abrir `cypress/tests/ui/custom-flow.spec.ts`
4. Mostrar un test completo usando el Page Object
5. Señalar cómo se encadenan los métodos

**Tiempo:** 1 minuto

---

### **CONCLUSIONES (4:30 - 5:00) - 30 segundos**

**Visual:** Pantalla final con resumen

**Guión:**
```
"En resumen, este proyecto demuestra:

✅ Un pipeline de CI/CD completamente funcional
✅ 44 tests unitarios pasando automáticamente
✅ Integración con SonarCloud para calidad de código
✅ Uso de Page Object Pattern para tests mantenibles

Los principales aprendizajes fueron la importancia de la automatización, 
cómo debuggear errores en CI/CD, y las mejores prácticas en testing.

Gracias por su atención. El código completo está disponible en GitHub."
```

**Qué mostrar:**
- Resumen de logros en pantalla
- URL del repositorio
- Tu nombre y contacto (opcional)

**Tiempo:** 30 segundos

---

## 📋 CHECKLIST DE GRABACIÓN

### Antes de grabar:
- [ ] Cerrar notificaciones del sistema
- [ ] Limpiar escritorio
- [ ] Preparar todas las pestañas del navegador
- [ ] Abrir archivos en VS Code
- [ ] Probar micrófono
- [ ] Hacer un ensayo rápido

### URLs a tener abiertas:
- [ ] https://github.com/waldooCreator/W12-11-h/actions
- [ ] https://sonarcloud.io/dashboard?id=waldooCreator_W12-11-h
- [ ] VS Code con archivos abiertos:
  - [ ] `.github/workflows/ci.yml`
  - [ ] `cypress/pages/LoginPage.js`
  - [ ] `cypress/tests/ui/custom-flow.spec.ts`

### Durante la grabación:
- [ ] Hablar claro y pausado
- [ ] Mover el mouse despacio
- [ ] Hacer zoom cuando sea necesario
- [ ] Pausar entre secciones
- [ ] No ir muy rápido

### Después de grabar:
- [ ] Revisar el video completo
- [ ] Verificar que el audio se escucha bien
- [ ] Verificar que todo sea visible
- [ ] Exportar en calidad HD (1080p)
- [ ] Guardar como: `Video_Pipeline_Testing_Walter_Velasco.mp4`

---

## 🎙️ TIPS PARA MEJORAR EL VIDEO

### Audio:
- Graba en un lugar silencioso
- Usa audífonos con micrófono si es posible
- Habla a 20-30 cm del micrófono
- Evita ruidos de fondo

### Video:
- Graba en 1080p (1920x1080)
- Usa zoom para mostrar detalles importantes
- Mantén un ritmo constante
- No leas textualmente, explica con tus palabras

### Presentación:
- Sé entusiasta pero profesional
- Usa transiciones suaves entre secciones
- Señala con el cursor lo que estás explicando
- Haz pausas breves entre temas

---

## 🛠️ HERRAMIENTAS DE GRABACIÓN

### Opción 1: OBS Studio (Gratuito - Recomendado)
**Link:** https://obsproject.com/

**Ventajas:**
- ✅ Gratis y open source
- ✅ Calidad profesional
- ✅ Control total de la grabación
- ✅ Múltiples fuentes de video/audio

**Configuración básica:**
1. Descargar e instalar OBS
2. Agregar fuente: Display Capture
3. Agregar fuente: Audio Input
4. Configurar a 1080p 30fps
5. Grabar y exportar

### Opción 2: Loom (Online - Fácil)
**Link:** https://www.loom.com/

**Ventajas:**
- ✅ Muy fácil de usar
- ✅ Se sube automáticamente
- ✅ Puedes compartir con link
- ✅ Gratis hasta 5 minutos

**Pasos:**
1. Instalar extensión de Chrome
2. Click en el ícono de Loom
3. Seleccionar "Screen + Camera" o "Screen Only"
4. Grabar
5. Descargar o compartir link

### Opción 3: Zoom (Si ya tienes cuenta)
**Pasos:**
1. Iniciar reunión contigo mismo
2. Click en "Share Screen"
3. Click en "Record"
4. Grabar el video
5. Detener y guardar

### Opción 4: PowerPoint (Windows)
**Pasos:**
1. Abrir PowerPoint
2. Insertar → Grabación de pantalla
3. Seleccionar área
4. Grabar
5. Exportar como video

---

## 📊 ESTRUCTURA TEMPORAL DETALLADA

| Tiempo | Sección | Duración | Contenido |
|--------|---------|----------|-----------|
| 0:00 | Intro | 30s | Presentación y objetivo |
| 0:30 | GitHub Actions | 60s | Demostración del pipeline |
| 1:30 | Workflow YAML | 60s | Explicación del código |
| 2:30 | SonarCloud | 60s | Métricas y calidad |
| 3:30 | Code & Tests | 60s | Page Object y tests |
| 4:30 | Conclusión | 30s | Resumen y cierre |

**Total:** 5 minutos exactos

---

## ✅ VALIDACIÓN FINAL

Antes de entregar, verifica:

- [ ] Duración entre 3-5 minutos ✓
- [ ] Se ve todo claramente en pantalla ✓
- [ ] Audio se escucha sin ruido ✓
- [ ] Cubre todos los puntos solicitados ✓
- [ ] Muestra GitHub Actions funcionando ✓
- [ ] Muestra SonarCloud con métricas ✓
- [ ] Explica el workflow YAML ✓
- [ ] Muestra Page Object y tests ✓
- [ ] Tiene introducción y conclusión ✓
- [ ] Formato de archivo: MP4 o similar ✓

---

**¡Listo para grabar!** 🎬
