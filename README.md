# Tarea 2 – Pipeline CI/CD completo con Render

## 1. Descripción del proyecto
Proyecto Node.js con Express desplegado en Render.  
Incluye pruebas automáticas con Jest, despliegue continuo (CI/CD), rollback manual y documentación del flujo completo.  
Cada commit que pasa los tests se despliega automáticamente; si falla, Render bloquea el deploy.

---

## 2. Tecnologías usadas
- Node.js 22.x
- Express 5.x
- Jest
- Supertest
- Render (Web Service)
- Git / GitHub

---

## 3. Flujo del pipeline CI/CD
1. Se realiza un `git push` o Pull Request en GitHub.
2. Render clona el repositorio automáticamente.
3. Se ejecuta el comando de build:
4. Si los tests **fallan**, el despliegue se bloquea y la versión anterior permanece activa.
5. Si los tests **pasan**, Render realiza automáticamente el deploy de la nueva versión.
6. En caso de fallo en producción, se puede ejecutar un **rollback manual** desde el panel de Render.

**Diferencia entre errores:**
| Tipo de error | Qué ocurre |
|---------------|-----------|
| Build Failed  | La app no se despliega, la versión estable sigue activa |
| Runtime Failed | La app se despliega pero falla al ejecutarse |

**Rollback vs Redeploy:**
- **Rollback:** vuelve a una versión anterior estable.
- **Redeploy:** vuelve a desplegar la versión actual del repositorio.

---

## 4. Pruebas automáticas
- Se usan **Jest y Supertest** para tests unitarios e integración.
- Test principal verifica que la ruta `/` devuelve el HTML esperado.
- Comando de test:
```bash
npm test