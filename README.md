# 🔐 Astro Auth con Firebase (Google Login + Rutas Protegidas)

Este proyecto es una práctica básica que hice para aprender a implementar
**autenticación de usuarios** en una aplicación hecha con **Astro**. Utilicé
**Firebase Authentication** para el inicio de sesión con **Google** y añadí un
sistema de **protección de rutas** para que algunas páginas solo sean accesibles
si el usuario ha iniciado sesión.

---

## ✨ ¿Qué incluye este proyecto?

- Login con Google usando **Firebase Authentication**
- Redirección después del login
- Middleware de Astro para proteger rutas
- Uso de `Locals` en Astro (`type.d.ts`) para guardar información del usuario
- Página protegida (`/protected`) que solo se puede ver si estás autenticado
- Control de sesión básico en el lado del servidor

---

## 🛠️ Tecnologías usadas

- Astro
- Firebase (Authentication)
- Astro middleware
- TypeScript
- Tailwind CSS

---

## 📄 Notas importantes

- Usé un `middleware.ts` para validar si el usuario tiene sesión antes de
  acceder a ciertas rutas.
- En `type.d.ts` extendí el tipo `Locals` de Astro para incluir los datos del
  usuario.
- Guardé información básica del usuario (como `name`, `photoURL`, etc.) después
  del login.
- La ruta `/login` permite iniciar sesión con Google y después redirige a
  `/protected`.

---

## 🚀 ¿Para qué me servirá en el futuro?

Este proyecto me sirve como base si quiero agregar autenticación de usuarios en
futuras aplicaciones hechas con Astro. También me ayudó a entender mejor cómo
manejar sesiones, proteger rutas y trabajar con Firebase en un entorno moderno y
sencillo.

---

> 📝 _Este README es breve porque solo es una práctica, pero suficiente para
> recordarme lo que hice dentro de unos meses._
