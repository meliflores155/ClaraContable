import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../infrastructure/supabase/client'

const SiteDataContext = createContext(null)

/**
 * Provides all editable site content from Supabase.
 * Falls back to default data when Supabase is not configured.
 */
export function SiteDataProvider({ children }) {
  const [data, setData] = useState({
    services: [],
    testimonials: [],
    faq: [],
    settings: {},
    loading: true,
  })

  useEffect(() => {
    loadSiteData()
  }, [])

  async function loadSiteData() {
    try {
      const [services, testimonials, faq, settings] = await Promise.all([
        supabase.from('services').select('*').order('order'),
        supabase.from('testimonials').select('*').eq('active', true),
        supabase.from('faq').select('*').order('order'),
        supabase.from('settings').select('*').single(),
      ])

      setData({
        services: services.data || [],
        testimonials: testimonials.data || [],
        faq: faq.data || [],
        settings: settings.data || {},
        loading: false,
      })
    } catch {
      // Supabase not configured yet — use defaults
      setData(prev => ({ ...prev, loading: false }))
    }
  }

  return (
    <SiteDataContext.Provider value={{ ...data, refresh: loadSiteData }}>
      {children}
    </SiteDataContext.Provider>
  )
}

export const useSiteData = () => {
  const context = useContext(SiteDataContext)
  if (!context) throw new Error('useSiteData must be used within SiteDataProvider')
  return context
}
