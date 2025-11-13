# ⚡ SIGUIENTE PASO - Instrucciones Inmediatas

## 📸 **PRIMERO: Toma tus screenshots locales**

Antes de hacer cualquier commit, toma estas capturas:

### Screenshot #1: Tests Unitarios ✅

**Ya ejecutado anteriormente**

- Archivo: `01_unit_tests_passed.png`
- Contenido: Resultado de `yarn test:unit:ci` mostrando 44 tests pasados

### Screenshot #2: Cypress ✅

**Ya ejecutado anteriormente**

- Archivo: `02_cypress_component_tests.png`
- Contenido: Resultado de Cypress ejecutado

---

## 🔧 **AHORA: Configurar Git y hacer commit**

### 1. Verificar configuración de Git

```powershell
git config user.name
git config user.email
```

Si no están configurados:

```powershell
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
```

### 2. Ver los archivos nuevos

```powershell
git status
```

Deberías ver:

```
?? .github/workflows/ci.yml
?? SONARCLOUD_SETUP.md
?? TALLER_RESUMEN.md
?? cypress/pages/
?? cypress/tests/ui/custom-flow.spec.ts
?? sonar-project.properties
?? SIGUIENTE_PASO.md
```

### 3. Agregar todos los archivos al staging

```powershell
git add .
```

### 4. Hacer commit

```powershell
git commit -m "feat: Add CI/CD pipeline with SonarCloud, Page Object, and custom E2E tests

- Add GitHub Actions workflow (ci.yml) with 5 jobs
- Implement LoginPage Page Object pattern
- Create custom E2E test suite (custom-flow.spec.ts)
- Configure SonarCloud integration
- Add documentation (SONARCLOUD_SETUP.md, TALLER_RESUMEN.md)"
```

### 5. Ver el estado después del commit

```powershell
git log --oneline -1
git status
```

---

## 🌐 **DESPUÉS: Configurar SonarCloud**

### Paso 1: Crear cuenta

1. Ir a https://sonarcloud.io
2. Click en "Log in"
3. Seleccionar "With GitHub"
4. Autorizar SonarCloud

### Paso 2: Importar proyecto

1. En SonarCloud, click en "+" (arriba derecha)
2. "Analyze new project"
3. Buscar tu repositorio fork
4. Click "Set Up"

### Paso 3: Configurar análisis

1. Seleccionar "With GitHub Actions"
2. **COPIAR** el `SONAR_TOKEN` mostrado
3. **NO CIERRES LA VENTANA** hasta que copies el token

### Paso 4: Agregar token a GitHub

1. Ir a tu repo en GitHub
2. `Settings` → `Secrets and variables` → `Actions`
3. `New repository secret`
4. Nombre: `SONAR_TOKEN`
5. Valor: pegar el token
6. `Add secret`

### Paso 5: Actualizar configuración

Editar el archivo `sonar-project.properties`:

```properties
sonar.projectKey=TU_USUARIO_cypress-realworld-app
sonar.organization=tu-organizacion
```

**Obtener estos valores de SonarCloud:**

- Project Information → Project Key
- Project Information → Organization Key

### Paso 6: Commit y push

```powershell
git add sonar-project.properties
git commit -m "chore: Update SonarCloud configuration with project keys"
git push origin main
```

(Reemplaza `main` con tu rama si es diferente: `develop`, `master`, etc.)

---

## 🚀 **FINALMENTE: Verificar Pipeline**

### 1. Ver ejecución en GitHub Actions

1. Ir a tu repositorio en GitHub
2. Click en pestaña `Actions`
3. Ver el workflow "CI Pipeline - Testing Workshop" ejecutándose

**📸 Screenshot #3: GitHub Actions Pipeline**

- Archivo: `03_github_actions_pipeline.png`
- Capturar: Pantalla completa mostrando todos los jobs en ejecución o completados

### 2. Verificar SonarCloud

1. Ir a https://sonarcloud.io
2. Seleccionar tu proyecto
3. Ver el dashboard con las métricas

**📸 Screenshot #4: SonarCloud Dashboard**

- Archivo: `04_sonarcloud_dashboard.png`
- Capturar: Dashboard completo con:
  - Quality Gate status
  - Bugs, Vulnerabilities, Code Smells
  - Coverage
  - Ratings

---

## 📋 **CHECKLIST RÁPIDO**

Marca conforme vayas completando:

- [ ] ✅ Screenshots #1 y #2 ya tomados
- [ ] Configurar usuario Git (nombre y email)
- [ ] `git add .`
- [ ] `git commit` con mensaje descriptivo
- [ ] Crear cuenta en SonarCloud
- [ ] Importar repositorio en SonarCloud
- [ ] Copiar SONAR_TOKEN
- [ ] Agregar SONAR_TOKEN a GitHub Secrets
- [ ] Actualizar sonar-project.properties con tus keys
- [ ] `git push origin main`
- [ ] Verificar Actions en GitHub
- [ ] Screenshot #3 (GitHub Actions)
- [ ] Verificar dashboard en SonarCloud
- [ ] Screenshot #4 (SonarCloud)
- [ ] Crear documento PDF
- [ ] Grabar video de 3-5 minutos
- [ ] Preparar URL del repositorio para entregar

---

## ⚠️ **IMPORTANTE**

### Si el pipeline falla en GitHub Actions:

1. Revisa los logs del job que falló
2. El job de SonarCloud puede fallar si no configuraste el token
3. Los tests pueden fallar si hay problemas de configuración

### Si SonarCloud no muestra datos:

1. Verifica que el SONAR_TOKEN esté correcto en GitHub Secrets
2. Verifica que los valores en sonar-project.properties sean correctos
3. Revisa los logs del job "sonarcloud" en GitHub Actions

---

## 🎯 **Tiempo Estimado**

- ⏱️ Commits: 5 minutos
- ⏱️ Configurar SonarCloud: 10-15 minutos
- ⏱️ Push y verificar: 5-10 minutos
- ⏱️ Screenshots: 5 minutos
- ⏱️ **TOTAL: 25-35 minutos**

---

## 📞 **¿Necesitas ayuda?**

Revisa estos archivos en tu proyecto:

- `TALLER_RESUMEN.md` - Resumen completo del trabajo realizado
- `SONARCLOUD_SETUP.md` - Guía detallada de SonarCloud

---

**¡Estás a solo unos pasos de completar el taller!** 🚀
