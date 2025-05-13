# 🔐 Astro Auth con Firebase (Google Login + Rutas Protegidas)

🚀 **Demo en vivo**:
[https://astro-autentication-v1.netlify.app](https://astro-autentication-v1.netlify.app)

Este proyecto es una práctica básica que hice para aprender a implementar
**autenticación de usuarios** en **Astro**, usando **Firebase Authentication**
con login mediante **Google**. También implementé la protección de rutas para
que solo usuarios autenticados puedan acceder a ciertas páginas.

---

## ✨ ¿Qué incluye este proyecto?

- ✅ Login con Google usando Firebase Authentication.
- ✅ Middleware de Astro para proteger rutas (archivo `middleware.ts`).
- ✅ Definición del tipo `Locals` en `type.d.ts` para guardar datos del usuario
  (como el nombre y la foto).
- ✅ Página protegida `/protected` que solo es accesible si estás autenticado.
- ✅ Redirección automática:
  - Si **no estás autenticado**, no puedes entrar a `/protected`, te redirige a
    `/login`.
  - Si **ya estás autenticado**, no puedes entrar a `/login`, te redirige a
    `/protected`.
- ✅ Botón para cerrar sesión (`logout`) disponible en la zona protegida.

---

## 👤 Registro y login

- Para iniciar sesión, ve a
  [`/login`](https://astro-autentication-v1.netlify.app/login).
- Si no tienes una cuenta, haz clic en el **enlace de "Registrarme"** que
  aparece en la pantalla de login.
- El login se hace mediante **Google**, usando `signInWithPopup` de Firebase.

---

## 🛠️ Tecnologías usadas

- Astro
- Firebase (Authentication)
- Astro Middleware
- TypeScript
- Tailwind CSS (para estilos rápidos)

---

## 🧠 Notas para mi yo del futuro

- 🔒 Las rutas están protegidas usando middleware.
- La sesión del usuario se guarda en `locals.user` dentro de Astro.
- Para cambiar el comportamiento de redirección, edita el archivo
  `middleware.ts`.
- Las redirecciones funcionan usando `window.location.replace(...)` después del
  login.
- Los datos como `photoURL` y `name` se obtienen directamente desde las
  credenciales de Firebase.
- Puedes extender esto en el futuro para usar Firestore, JWTs o cookies para
  sesiones más persistentes.

---

## 📄 Estado del proyecto

Este proyecto es solo una práctica personal. No está pensado para producción,
pero sirve como base para futuras apps con autenticación en Astro.

---

📝 _Creado para aprender y recordar lo básico sobre autenticación con Astro +
Firebase._
