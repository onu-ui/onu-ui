import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import type { UserModule } from '../types'

export const router = createRouter({ routes: setupLayouts(generatedRoutes), history: createWebHistory() })

export const install: UserModule = app => app.use(router)
