import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth' // 🚀 Added onAuthStateChanged
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import WidgetCustomizer from '@/views/WidgetCustomizer.vue'
import Bookings from '@/views/Bookings.vue'
import ProfileSettings from '@/views/ProfileSettings.vue'
import UpgradeView from '../views/Upgrade.vue'
import AppHome from '@/views/AppHome.vue'
import SuccessView from '@/views/SuccessView.vue'
import PublicWidgetView from '@/components/PublicWidgetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome,
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'WidgetCustomizer',
          component: WidgetCustomizer,
          meta: { requiresAuth: true },
        },
        {
          path: 'bookings',
          name: 'DashboardBookings',
          component: Bookings,
          meta: { requiresAuth: true },
        },
        {
          path: 'profile',
          name: 'DashboardProfile',
          component: ProfileSettings,
          meta: { requiresAuth: true },
        },
        {
          path: '/dashboard/upgrade',
          name: 'Upgrade',
          component: UpgradeView,
          meta: { requiresAuth: true },
        },
        {
          path: '/dashboard/success',
          name: 'SubscriptionSuccess',
          component: SuccessView,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/render-widget',
      name: 'PublicWidget',
      component: PublicWidgetView,
      meta: { isPublic: true },
    },
  ],
})

// Helper to wait for Firebase Auth to be fully ready
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject,
    )
  })
}

// ==========================================
// 🛡️ THE MODERN DYNAMIC ROUTER GUARD
// ==========================================
router.beforeEach(async (to) => {
  const isPublicRoute = to.matched.some((record) => record.meta.isPublic)

  // 1. Instantly allow public widget routes through without blocking
  if (isPublicRoute) {
    return true
  }

  // 2. Wait for Firebase to determine actual user auth state
  const currentUser = await getCurrentUser()
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  // 3. Guard private dashboard screens
  if (requiresAuth && !currentUser) {
    return '/' // Redirect to portal home
  }

  return true // Let the transition proceed
})

export default router
