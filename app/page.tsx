'use client'

import { useState } from 'react'
import VariantA from '@/components/variant-a'
import VariantB from '@/components/variant-b'
import VariantC from '@/components/variant-c'

export default function Home() {
  const [activeVariant, setActiveVariant] = useState<'a' | 'b' | 'c'>('a')
  const [selectedVariant, setSelectedVariant] = useState<string>('')

  if (selectedVariant) {
    if (selectedVariant === 'a') return <VariantA />
    if (selectedVariant === 'b') return <VariantB />
    if (selectedVariant === 'c') return <VariantC />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-2">FlowFit H17 Experiment</h1>
            <p className="text-muted-foreground">Keep My Data Local - Trust Lift A/B Test</p>
            <p className="text-sm text-muted-foreground mt-4">
              Select a variant to preview the experimental prototype
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                id: 'a',
                title: 'Variant A: Control',
                description: 'No privacy toggle - standard data permission text',
                color: 'border-muted-foreground/30 hover:border-primary/50',
              },
              {
                id: 'b',
                title: 'Variant B: Treatment',
                description: 'Visible "Keep my data local" toggle with explanation',
                color: 'border-primary/50 hover:border-accent',
              },
              {
                id: 'c',
                title: 'Variant C: Trust Theater',
                description: 'Privacy badge + messaging without functional control',
                color: 'border-secondary/50 hover:border-secondary',
              },
            ].map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id)}
                className={`p-6 rounded-lg border-2 transition-all text-left ${variant.color} bg-card hover:bg-secondary/5`}
              >
                <h3 className="font-bold text-lg text-foreground mb-2">{variant.title}</h3>
                <p className="text-sm text-muted-foreground">{variant.description}</p>
                <div className="mt-4 text-sm font-medium text-primary">Launch Prototype →</div>
              </button>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Hypothesis (H17)</h2>
            <p className="text-foreground mb-4">
              Including a visible "keep my data local" toggle increases reported trust in the app by ≥ 25% compared to an identical flow without that toggle.
            </p>
            <div className="bg-secondary/20 border border-secondary/30 rounded p-4">
              <p className="text-sm text-foreground">
                <strong>Primary Risk:</strong> Users will not trust a cycle-synced fitness app enough to share menstrual and hormonal data unless they perceive strong privacy control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
