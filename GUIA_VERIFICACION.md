# 🔍 Guía de Verificación del Pipeline

## 📍 PASO 6.1: Verificar GitHub Actions

### **URL de tu proyecto:**

```
https://github.com/waldooCreator/W12-11-h/actions
```

### **Qué debes ver:**

#### 1️⃣ **Workflow ejecutándose o completado:**

- Nombre: **"CI Pipeline - Testing Workshop"**
- Disparado por: commit `a6c3118` o `2a88139`
- Rama: `develop`

#### 2️⃣ **Jobs del Pipeline (5 en total):**

```
┌─────────────────────────────────────────┐
│ 1. install-and-verify                   │
│    ├─ Checkout code                     │
│    ├─ Setup Node.js                     │
│    ├─ Install dependencies              │
│    ├─ Verify Cypress                    │
│    ├─ Check TypeScript types            │
│    └─ Run ESLint                        │
├─────────────────────────────────────────┤
│ 2. unit-tests (depende de #1)          │
│    ├─ Checkout code                     │
│    ├─ Setup Node.js                     │
│    ├─ Restore dependencies cache        │
│    ├─ Install dependencies              │
│    ├─ Run unit tests                    │
│    └─ Upload test results               │
├─────────────────────────────────────────┤
│ 3. cypress-tests (depende de #1)       │
│    ├─ Checkout code                     │
│    ├─ Setup Node.js                     │
│    ├─ Restore dependencies cache        │
│    ├─ Install dependencies              │
│    ├─ Build application                 │
│    ├─ Cypress run                       │
│    ├─ Upload Cypress screenshots        │
│    └─ Upload Cypress videos             │
├─────────────────────────────────────────┤
│ 4. build (depende de #2 y #3)          │
│    ├─ Checkout code                     │
│    ├─ Setup Node.js                     │
│    ├─ Install dependencies              │
│    ├─ Build application                 │
│    └─ Upload build artifacts            │
├─────────────────────────────────────────┤
│ 5. sonarcloud (depende de #2)          │
│    ├─ Checkout code                     │
│    ├─ Setup Node.js                     │
│    ├─ Install dependencies              │
│    ├─ Run unit tests with coverage      │
│    └─ SonarCloud Scan                   │
└─────────────────────────────────────────┘
```

### **Estados posibles:**

| Icono | Estado      | Significado                         |
| ----- | ----------- | ----------------------------------- |
| 🟡 ⟳  | En progreso | El job se está ejecutando           |
| ✅ ✓  | Completado  | El job terminó exitosamente         |
| ❌ ✗  | Fallido     | El job tuvo errores                 |
| ⏸️ -  | Esperando   | Esperando que termine un job previo |
| ⏭️ ⊘  | Omitido     | El job se saltó (por condiciones)   |

---

## 📸 SCREENSHOT #3 - GitHub Actions

### **Cuándo tomar la captura:**

- **Opción A (Recomendado):** Cuando TODOS los jobs estén ✅ completados
- **Opción B:** Mientras están 🟡 ejecutándose (si quieres mostrar el proceso)

### **Qué debe incluir la captura:**

✅ **Elementos obligatorios:**

1. URL visible: `github.com/waldooCreator/W12-11-h/actions`
2. Nombre del workflow: "CI Pipeline - Testing Workshop"
3. Los 5 jobs visibles
4. Estado de cada job (✅, 🟡, o ❌)
5. Tiempo de ejecución
6. Commit que lo disparó

### **Cómo tomar la captura:**

1. Ir a: https://github.com/waldooCreator/W12-11-h/actions
2. Click en el workflow más reciente
3. Esperar a que se vean los 5 jobs
4. Presionar `Windows + Shift + S` (Snipping Tool)
5. Capturar toda la pantalla
6. Guardar como: `03_github_actions_pipeline.png`

### **Ejemplo de lo que debes capturar:**

```
┌─────────────────────────────────────────────────────┐
│ waldooCreator / W12-11-h / Actions                  │
├─────────────────────────────────────────────────────┤
│ CI Pipeline - Testing Workshop                      │
│ #1 · develop · a6c3118                              │
│ ⏱️ 8m 32s                                            │
├─────────────────────────────────────────────────────┤
│ ✅ install-and-verify        2m 15s                 │
│ ✅ unit-tests                1m 45s                 │
│ ✅ cypress-tests             3m 22s                 │
│ ✅ build                     1m 10s                 │
│ ✅ sonarcloud                2m 30s                 │
└─────────────────────────────────────────────────────┘
```

---

## 🔍 PASO 6.2: Verificar SonarCloud

### **URL de tu proyecto:**

```
https://sonarcloud.io/dashboard?id=waldooCreator_W12-11-h
```

O simplemente:

```
https://sonarcloud.io
```

Y buscar tu proyecto "W12-11-h"

### **Qué debes ver (después de que termine el pipeline):**

#### 1️⃣ **Quality Gate:**

```
┌──────────────────────────┐
│ Quality Gate             │
│ ✅ Passed                │
│ o                        │
│ ❌ Failed                │
└──────────────────────────┘
```

#### 2️⃣ **Métricas principales:**

| Métrica             | Descripción                    | Rating esperado      |
| ------------------- | ------------------------------ | -------------------- |
| **Bugs**            | Errores en el código           | 🟢 A, 🟡 B, 🔴 C/D/E |
| **Vulnerabilities** | Problemas de seguridad         | 🟢 A, 🟡 B, 🔴 C/D/E |
| **Code Smells**     | Problemas de mantenibilidad    | 🟢 A, 🟡 B, 🔴 C/D/E |
| **Coverage**        | % de código cubierto por tests | 0-100%               |
| **Duplications**    | % de código duplicado          | 0-100%               |

#### 3️⃣ **Ejemplo de vista:**

```
┌─────────────────────────────────────────────┐
│ waldooCreator_W12-11-h                      │
├─────────────────────────────────────────────┤
│ Quality Gate: ✅ Passed                     │
├─────────────────────────────────────────────┤
│ Reliability    🟢 A    0 Bugs               │
│ Security       🟢 A    0 Vulnerabilities    │
│ Maintainability 🟡 B   45 Code Smells       │
│ Coverage       📊      15.3%                │
│ Duplications   📊      2.1%                 │
└─────────────────────────────────────────────┘
```

---

## 📸 SCREENSHOT #4 - SonarCloud Dashboard

### **Cuándo tomar la captura:**

- **Solo DESPUÉS** de que el job `sonarcloud` en GitHub Actions haya terminado ✅
- Esperar 1-2 minutos adicionales para que SonarCloud procese los datos

### **Qué debe incluir la captura:**

✅ **Elementos obligatorios:**

1. Nombre del proyecto: "waldooCreator_W12-11-h"
2. Quality Gate status (Passed/Failed)
3. Las 5 métricas principales con sus valores
4. Ratings (A, B, C, D, E)
5. Gráficos de tendencia (si están disponibles)

### **Cómo tomar la captura:**

1. Ir a: https://sonarcloud.io/dashboard?id=waldooCreator_W12-11-h
2. Esperar a que cargue completamente
3. Scroll para ver todas las métricas
4. Presionar `Windows + Shift + S`
5. Capturar todo el dashboard
6. Guardar como: `04_sonarcloud_dashboard.png`

---

## ⚠️ POSIBLES PROBLEMAS Y SOLUCIONES

### **Problema 1: El pipeline falla en `cypress-tests`**

**Causa:** Tests E2E pueden fallar por incompatibilidad local
**Solución:** No pasa nada, lo importante es que los otros jobs pasen
**Acción:** Captura el screenshot de todas formas y documéntalo en el PDF

### **Problema 2: El job `sonarcloud` falla**

**Posibles causas:**

- ❌ El SONAR_TOKEN no está configurado correctamente
- ❌ Los valores en sonar-project.properties son incorrectos
- ❌ Primera vez ejecutándose (puede tardar más)

**Solución:**

1. Ve a GitHub → Settings → Secrets → Verifica que existe `SONAR_TOKEN`
2. Verifica que los valores en sonar-project.properties sean correctos
3. Si es necesario, re-ejecuta el workflow manualmente

### **Problema 3: SonarCloud muestra "No calculado"**

**Causa:** El análisis aún no se ha ejecutado o está procesando
**Solución:**

- Espera 2-5 minutos más
- Actualiza la página (F5)
- Verifica que el job `sonarcloud` en GitHub Actions haya terminado ✅

### **Problema 4: No veo el workflow en Actions**

**Causa:** El push no disparó el workflow
**Solución:**

1. Verifica que el archivo `.github/workflows/ci.yml` existe
2. Verifica que hiciste push a la rama `develop`
3. Intenta hacer un pequeño cambio y push de nuevo

---

## ✅ CHECKLIST DE VERIFICACIÓN

### **GitHub Actions:**

- [ ] Abrí la URL: https://github.com/waldooCreator/W12-11-h/actions
- [ ] Veo el workflow "CI Pipeline - Testing Workshop"
- [ ] El workflow está ejecutándose o completado
- [ ] Puedo ver los 5 jobs
- [ ] Tomé screenshot #3

### **SonarCloud:**

- [ ] El job `sonarcloud` en GitHub Actions terminó ✅
- [ ] Abrí la URL: https://sonarcloud.io/dashboard?id=waldooCreator_W12-11-h
- [ ] Veo las métricas actualizadas
- [ ] El Quality Gate muestra un estado (Passed/Failed)
- [ ] Tomé screenshot #4

---

## 🎯 SIGUIENTE PASO

Una vez que tengas ambos screenshots:

- ✅ `03_github_actions_pipeline.png`
- ✅ `04_sonarcloud_dashboard.png`

Estarás listo para crear el **documento PDF** y grabar el **video de 3-5 minutos**.

---

## ⏱️ TIEMPO ESTIMADO

- **Esperar pipeline:** 5-10 minutos
- **Tomar screenshots:** 2-3 minutos
- **TOTAL:** ~12 minutos

---

**¡Monitorea el pipeline y avísame cuando termine para continuar!** 🚀
