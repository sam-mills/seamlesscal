<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-white">
    <Card class="w-full max-w-md p-6 bg-zinc-900 border-zinc-800 shadow-xl space-y-6">
      <div class="space-y-1 text-center">
        <h2 class="text-2xl font-bold tracking-tight">SeamlessCal Creator Portal</h2>
        <p class="text-xs text-zinc-400">
          {{
            isSignUp
              ? 'Create an account to build your custom booking widget'
              : 'Log into your widget customization console'
          }}
        </p>
      </div>

      <div class="space-y-3">
        <Button
          type="button"
          @click="handleGoogleSignIn"
          :disabled="loading"
          variant="outline"
          class="w-full h-9 border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 hover:text-white font-medium text-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          {{ isSignUp ? 'Sign up with Google' : 'Sign in with Google' }}
        </Button>

        <div class="relative flex items-center justify-center py-2">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-zinc-800"></div>
          </div>
          <span
            class="relative bg-zinc-900 px-3 text-[10px] uppercase font-bold tracking-widest text-zinc-500"
          >
            or continue with email
          </span>
        </div>
      </div>

      <form @submit.prevent="handleAuthSubmit" class="space-y-4">
        <div class="space-y-1.5">
          <Label class="text-xs font-semibold text-zinc-300">Email Address</Label>
          <input
            type="email"
            v-model="email"
            required
            class="w-full h-9 rounded-md border border-zinc-800 bg-slate-950 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-400"
            placeholder="name@company.com"
          />
        </div>

        <div class="space-y-1.5">
          <Label class="text-xs font-semibold text-zinc-300">Password</Label>
          <input
            type="password"
            v-model="password"
            required
            class="w-full h-9 rounded-md border border-zinc-800 bg-slate-950 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-400"
            placeholder="••••••••"
          />
        </div>

        <Button
          type="submit"
          :disabled="loading"
          class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-9 shadow-sm transition-all text-xs cursor-pointer"
        >
          {{
            loading
              ? 'Processing security keys...'
              : isSignUp
                ? 'Create Account & Build Widget'
                : 'Sign In'
          }}
        </Button>
      </form>

      <div class="text-center">
        <button
          @click="isSignUp = !isSignUp"
          class="text-xs text-zinc-400 hover:text-white transition-all underline cursor-pointer"
        >
          {{
            isSignUp ? 'Already have an account? Sign In' : "Don't have an account yet? Create one"
          }}
        </button>
      </div>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth, db } from '@/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider, // 🆕 Import Google OAuth provider module
  signInWithPopup, // 🆕 Import secure window authentication popup tool
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const loading = ref(false)

const emit = defineEmits(['auth-success'])

// 🆕 HIGH-PERFORMANCE GOOGLE SIGN-IN INTERACTION LOGIC
async function handleGoogleSignIn() {
  loading.value = true
  const provider = new GoogleAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user

    // Fetch snapshot profile check parameters to avoid overwriting existing tenants
    const docRef = doc(db, 'widgets', user.uid)
    const docSnap = await getDoc(docRef)

    // Provision default structure tokens *only* if the account has never logged in before
    if (!docSnap.exists()) {
      await setDoc(docRef, {
        userId: user.uid,
        settings: {
          layoutMode: 'elastic',
          defaultView: 'month',
          primaryColor: '#1e6b7b',
          accentColor: '#f0ad4e',
          eventBgColor: '#eef7f9',
          fontFamily: 'sans-serif',
          maxWidth: '100%',
          borderRadius: '6px',
        },
      })
    }
    emit('auth-success', user.uid)
  } catch (err) {
    console.error('Google cross-origin authentication loop failure:', err)
    alert(err.message)
  } finally {
    loading.value = false
  }
}

// STANDARD EMAIL HANDLER FLOW
async function handleAuthSubmit() {
  loading.value = true
  try {
    if (isSignUp.value) {
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
      const user = userCredential.user

      await setDoc(doc(db, 'widgets', user.uid), {
        userId: user.uid,
        settings: {
          layoutMode: 'elastic',
          defaultView: 'month',
          primaryColor: '#1e6b7b',
          accentColor: '#f0ad4e',
          eventBgColor: '#eef7f9',
          fontFamily: 'sans-serif',
          maxWidth: '100%',
          borderRadius: '6px',
        },
      })
      emit('auth-success', user.uid)
    } else {
      const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
      emit('auth-success', userCredential.user.uid)
    }
  } catch (err) {
    console.error('Authentication gate error details:', err)
    alert(err.message)
  } finally {
    loading.value = false
  }
}
</script>
