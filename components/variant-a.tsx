'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Lock, Zap } from 'lucide-react'
import { trackEvent } from '@/lib/experiment-tracker'

type Screen = 'landing' | 'features' | 'permission'

export default function VariantA() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    cycleSynced: false,
  })

  useEffect(() => {
    trackEvent('screen_view', 'A', currentScreen)
  }, [currentScreen])

  const screens = {
    landing: (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center px-4">
        <div className="max-w-lg w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-2">FlowFit</h1>
            <p className="text-xl text-muted-foreground mb-2">Cycle-Synced Training</p>
            <p className="text-base text-muted-foreground">
              Adapt your workouts to your cycle and perform at your best every week.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {[
              'Personalized training plans based on cycle phase',
              'Real-time performance insights',
              'Optimize recovery and energy',
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <Button
            onClick={() => setCurrentScreen('features')}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base"
          >
            Create Account <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-6">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    ),

    features: (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center px-4">
        <div className="max-w-lg w-full">
          <button
            onClick={() => setCurrentScreen('landing')}
            className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium mb-8"
          >
            ← Back
          </button>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">How It Works</h2>
            <p className="text-muted-foreground">We adapt to your unique cycle</p>
          </div>

          <div className="space-y-6 mb-8">
            {[
              {
                phase: 'Follicular',
                desc: 'High-energy workouts & strength training',
              },
              {
                phase: 'Ovulation',
                desc: 'Peak performance & competition focus',
              },
              {
                phase: 'Luteal',
                desc: 'Steady-state & recovery emphasis',
              },
              {
                phase: 'Menstrual',
                desc: 'Gentle movement & regeneration',
              },
            ].map((phase, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground">{phase.phase}</h3>
                <p className="text-sm text-muted-foreground mt-1">{phase.desc}</p>
              </div>
            ))}
          </div>

          <Button
            onClick={() => setCurrentScreen('permission')}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base"
          >
            Continue <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    ),

    permission: (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center px-4">
        <div className="max-w-lg w-full">
          <button
            onClick={() => setCurrentScreen('features')}
            className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium mb-8"
          >
            ← Back
          </button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-2">Personalize Your Experience</h2>
            <p className="text-muted-foreground">We need your data to give you the best training plan</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                />
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 border border-secondary/50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-foreground mb-3">Privacy & Data</h3>
            <p className="text-sm text-foreground mb-4">
              We use your cycle and workout data to personalize training recommendations. This helps us give you the most effective program.
            </p>
            <a href="#" className="text-primary text-sm font-medium hover:underline">
              Read our Privacy Policy
            </a>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={() => setCurrentScreen('landing')}>
              Cancel
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              I Agree & Continue
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-6">
            No sale of data • No sharing with third parties
          </p>
        </div>
      </div>
    ),
  }

  return screens[currentScreen]
}
