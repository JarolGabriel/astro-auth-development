import { firebase } from "@/firebase/config";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  type AuthError,
} from "firebase/auth";

export const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    remember_me: z.boolean().optional(),
  }),

  handler: async ({ name, password, remember_me, email }, { cookies }) => {
    if (remember_me) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        path: "/",
      });
    } else {
      cookies.delete("email", {
        path: "/",
      });
    }

    // creacion de usuario

    try {
      const user = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );

      //actualizar usuario

      updateProfile(firebase.auth.currentUser!, {
        displayName: name,
      });

      // verificar correo

      await sendEmailVerification(firebase.auth.currentUser!, {
        // url: "http://localhost:4321/protected?emailVerified=true",
        url: `${import.meta.env.WEBSITE_URL}/protected?emailVerified=true`,
      });

      return {
        uid: user.user.uid,
        email: user.user.email,
      };
    } catch (error) {
      const firebaseError = error as AuthError;

      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error("El correo ya esta en uso");
      }

      throw new Error("Auxilio! algo salio mal");
    }
  },
});
