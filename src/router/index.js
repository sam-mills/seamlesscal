import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import WidgetCustomizer from '@/views/WidgetCustomizer.vue'
import Bookings from '@/views/Bookings.vue'
import ProfileSettings from '@/views/ProfileSettings.vue'
import UpgradeView from '../views/Upgrade.vue'
import AppHome from '@/views/AppHome.vue'
import SuccessView from '@/views/SuccessView.vue'

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
      component: DashboardLayout, // Loads the clean container shell first
      children: [
        {
          path: '', // Matches exactly /dashboard (No trailing slash or paths)
          name: 'WidgetCustomizer',
          component: WidgetCustomizer, // Injects your customizer parameters right inside the viewport
          meta: { requiresAuth: true },
        },
        {
          path: 'bookings', // Matches /dashboard/bookings
          name: 'DashboardBookings',
          component: Bookings,
          meta: { requiresAuth: true },
        },
        {
          path: 'profile', // Matches /dashboard/profile
          name: 'DashboardProfile',
          component: ProfileSettings,
          meta: { requiresAuth: true },
        },
        {
          path: '/dashboard/upgrade',
          name: 'Upgrade',
          component: UpgradeView,
          meta: { requiresAuth: true }, // Keeps the layout protected behind your login guard
        },
        {
          path: '/dashboard/success',
          name: 'SubscriptionSuccess',
          component: SuccessView,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
})

export default router
