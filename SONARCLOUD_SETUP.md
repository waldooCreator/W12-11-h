# 🔧 Instrucciones de Configuración de SonarCloud

## Pasos para configurar SonarCloud en tu proyecto

### 1. Crear cuenta en SonarCloud

- Ir a https://sonarcloud.io
- Hacer clic en "Log in" o "Sign up"
- Seleccionar "With GitHub"
- Autorizar SonarCloud para acceder a tu cuenta de GitHub

### 2. Importar el repositorio

- En SonarCloud, hacer clic en el botón "+" (arriba a la derecha)
- Seleccionar "Analyze new project"
- Buscar y seleccionar tu repositorio fork: `cypress-realworld-app`
- Hacer clic en "Set Up"

### 3. Configurar el proyecto

- Seleccionar "With GitHub Actions" como método de análisis
- SonarCloud te mostrará tu `SONAR_TOKEN`
- **COPIAR** el token (solo se muestra una vez)

### 4. Agregar el token a GitHub Secrets

1. Ir a tu repositorio en GitHub
2. Navegar a: `Settings` → `Secrets and variables` → `Actions`
3. Hacer clic en `New repository secret`
4. Nombre: `SONAR_TOKEN`
5. Valor: Pegar el token copiado de SonarCloud
6. Hacer clic en `Add secret`

### 5. Actualizar sonar-project.properties

Editar el archivo `sonar-project.properties` en la raíz del proyecto:

```properties
sonar.projectKey=TU_USUARIO_cypress-realworld-app
sonar.organization=tu-organizacion-sonarcloud
```

**Obtener estos valores:**

- `projectKey`: En SonarCloud → Tu Proyecto → Information → Project Key
- `organization`: En SonarCloud → Tu Proyecto → Information → Organization Key

### 6. Verificar configuración en GitHub Actions

El archivo `.github/workflows/ci.yml` ya está configurado con:

```yaml
- name: SonarCloud Scan
  uses: SonarSource/sonarcloud-github-action@master
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

### 7. Hacer push y verificar

```bash
git add .
git commit -m "feat: Add SonarCloud configuration"
git push origin main
```

- Ir a la pestaña `Actions` en GitHub para ver el pipeline ejecutándose
- Una vez completado, ir a SonarCloud para ver el análisis

## 📊 Métricas que verás en SonarCloud

- **Bugs**: Errores en el código
- **Vulnerabilities**: Problemas de seguridad
- **Code Smells**: Problemas de mantenibilidad
- **Coverage**: Cobertura de código
- **Duplications**: Código duplicado
- **Security Hotspots**: Puntos de seguridad a revisar

## 🎯 Para el entregable del taller

**Tomar screenshot del dashboard de SonarCloud mostrando:**

- Nombre del proyecto
- Quality Gate status (Passed/Failed)
- Métricas principales (Bugs, Vulnerabilities, Code Smells)
- Porcentaje de cobertura
- Rating de seguridad y mantenibilidad

**Nombre sugerido del screenshot:** `03_sonarcloud_dashboard.png`
