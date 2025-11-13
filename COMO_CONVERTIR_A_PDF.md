# 📄 Cómo Convertir el Documento a PDF

El documento `Pipeline_Testing_Walter_Velasco_12-11-2025.md` está listo para ser convertido a PDF.

## Opción 1: Usando VS Code (Recomendado)

### Paso 1: Instalar extensión
1. Abre VS Code
2. Ve a Extensions (Ctrl+Shift+X)
3. Busca: **"Markdown PDF"** por yzane
4. Click en **Install**

### Paso 2: Convertir a PDF
1. Abre el archivo `Pipeline_Testing_Walter_Velasco_12-11-2025.md`
2. Click derecho en el editor
3. Selecciona **"Markdown PDF: Export (pdf)"**
4. Espera a que se genere el PDF
5. El PDF se guardará en la misma carpeta

## Opción 2: Online (Más Rápido)

### Usar servicio online:
1. Ve a: https://www.markdowntopdf.com/
2. Sube el archivo `Pipeline_Testing_Walter_Velasco_12-11-2025.md`
3. Click en "Convert"
4. Descarga el PDF generado

O usa:
- https://md2pdf.netlify.app/
- https://www.markdown2pdf.com/

## Opción 3: Usando Pandoc (Avanzado)

### Instalar Pandoc:
```powershell
# Usando Chocolatey
choco install pandoc

# O descarga desde: https://pandoc.org/installing.html
```

### Convertir:
```powershell
cd "c:\Users\walte\OneDrive\Documentos\FESC\12-11-h\W12-11-h"

pandoc Pipeline_Testing_Walter_Velasco_12-11-2025.md -o Pipeline_Testing_Walter_Velasco_12-11-2025.pdf --pdf-engine=xelatex
```

## Opción 4: Desde el Navegador

1. Abre el archivo `.md` en VS Code
2. Presiona `Ctrl+Shift+V` (Preview)
3. Presiona `Ctrl+P` para imprimir
4. Selecciona "Save as PDF"
5. Guarda el archivo

## 📝 Notas Importantes

- **Screenshots:** Debes insertar manualmente tus 4 screenshots en el PDF final
- **Ubicación:** Los screenshots deben ir en la sección "9. Resultados y Evidencias"
- **Nombres:**
  - Screenshot #1: Tests unitarios locales
  - Screenshot #2: Cypress local
  - Screenshot #3: GitHub Actions pipeline
  - Screenshot #4: SonarCloud dashboard

## ✅ Checklist Final del PDF

- [ ] PDF generado correctamente
- [ ] Todas las secciones visibles
- [ ] Tablas formateadas correctamente
- [ ] Código con syntax highlighting
- [ ] Screenshots insertados (4 total)
- [ ] Portada con tu nombre y fecha
- [ ] Tabla de contenidos funcional
- [ ] Referencias incluidas
- [ ] Tamaño aproximado: 15-25 páginas

## 🎯 Archivo Final

**Nombre:** `Pipeline_Testing_Walter_Velasco_12-11-2025.pdf`  
**Ubicación:** `c:\Users\walte\OneDrive\Documentos\FESC\12-11-h\W12-11-h\`
