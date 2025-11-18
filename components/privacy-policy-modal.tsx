'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
  variant: 'a' | 'b' | 'c'
}

export function PrivacyPolicyModal({ isOpen, onClose, variant }: PrivacyPolicyModalProps) {
  if (!isOpen) return null

  const policyContent = {
    a: {
      title: 'Privacy Policy - Variant A',
      sections: [
        {
          heading: '1. Introduction',
          content: 'FlowFit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cycle-synced fitness application.'
        },
        {
          heading: '2. Information We Collect',
          content: 'We collect information you provide directly to us, including:',
          list: [
            'Account information (email, password)',
            'Menstrual cycle data and phase information',
            'Workout data and performance metrics',
            'Symptom tracking information'
          ]
        },
        {
          heading: '3. How We Use Your Information',
          content: 'Your data is used to:',
          list: [
            'Personalize your training recommendations based on your cycle',
            'Optimize your workout performance and recovery',
            'Improve and develop our app features',
            'Provide customer support and respond to inquiries'
          ]
        },
        {
          heading: '4. Data Storage & Security',
          content: 'Your cycle and workout data are uploaded to our secure servers. We use SSL/TLS encryption to protect your data in transit and server-side encryption to protect data at rest.'
        },
        {
          heading: '5. Data Sharing & Third Parties',
          content: 'We do not sell, trade, or rent your menstrual and workout data to third parties. Your data is not shared with advertisers or marketing partners. We may share anonymized, aggregated data for research purposes only.'
        },
        {
          heading: '6. Your Rights & Control',
          content: 'You have the right to:',
          list: [
            'Access and review your personal data at any time',
            'Delete your account and all associated data',
            'Export your data in a portable format',
            'Contact us with privacy concerns or data requests'
          ]
        },
        {
          heading: '7. Legal Compliance',
          content: 'FlowFit complies with applicable privacy laws including GDPR, CCPA, and state-level privacy regulations.'
        },
        {
          heading: '8. Contact Us',
          content: 'If you have questions about this Privacy Policy, please contact us at privacy@flowfit.app'
        }
      ]
    },
    b: {
      title: 'Privacy Policy - Variant B',
      sections: [
        {
          heading: '1. Introduction',
          content: 'FlowFit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cycle-synced fitness application.'
        },
        {
          heading: '2. Information We Collect',
          content: 'We collect information you provide directly to us, including:',
          list: [
            'Account information (email, password)',
            'Menstrual cycle data and phase information',
            'Workout data and performance metrics',
            'Symptom tracking information'
          ]
        },
        {
          heading: '3. How We Use Your Information',
          content: 'Your data is used to:',
          list: [
            'Personalize your training recommendations based on your cycle',
            'Optimize your workout performance and recovery',
            'Improve and develop our app features',
            'Provide customer support and respond to inquiries'
          ]
        },
        {
          heading: '4. Data Storage & Security - Your Choice',
          content: 'FlowFit gives you control over where your data is stored:',
          list: [
            'Local Storage (default): Your cycle and workout data are encrypted using industry-standard encryption (AES-256) and stored exclusively on your device. This data never leaves your phone unless you explicitly enable cloud sync.',
            'Cloud Storage (optional): If you choose to enable sync, your data is encrypted both in transit (SSL/TLS) and at rest using server-side encryption.'
          ]
        },
        {
          heading: '5. Encryption & No Sale of Data',
          content: 'Whether you choose local or cloud storage, your data is always encrypted. We do not sell, trade, or rent your menstrual and workout data to third parties. Your data is not shared with advertisers or marketing partners. We may share anonymized, aggregated data for research purposes only.'
        },
        {
          heading: '6. Your Rights & Control',
          content: 'You have the right to:',
          list: [
            'Access and review your personal data at any time',
            'Delete your account and all associated data',
            'Export your data in a portable format',
            'Toggle between local and cloud storage modes',
            'Delete your data from our servers at any time',
            'Contact us with privacy concerns or data requests'
          ]
        },
        {
          heading: '7. Legal Compliance',
          content: 'FlowFit complies with applicable privacy laws including GDPR, CCPA, and state-level privacy regulations. In the context of post-Dobbs reproductive privacy concerns, we take enhanced precautions to protect menstrual data from potential government access through our local-first storage option.'
        },
        {
          heading: '8. Contact Us',
          content: 'If you have questions about this Privacy Policy, please contact us at privacy@flowfit.app'
        }
      ]
    },
    c: {
      title: 'Privacy Policy - Variant C',
      sections: [
        {
          heading: '1. Introduction',
          content: 'FlowFit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cycle-synced fitness application.'
        },
        {
          heading: '2. Information We Collect',
          content: 'We collect information you provide directly to us, including:',
          list: [
            'Account information (email, password)',
            'Menstrual cycle data and phase information',
            'Workout data and performance metrics',
            'Symptom tracking information'
          ]
        },
        {
          heading: '3. How We Use Your Information',
          content: 'Your data is used to:',
          list: [
            'Personalize your training recommendations based on your cycle',
            'Optimize your workout performance and recovery',
            'Improve and develop our app features',
            'Provide customer support and respond to inquiries'
          ]
        },
        {
          heading: '4. Data Storage & Security',
          content: 'We take privacy seriously and use industry-leading security practices to protect your cycle and fitness data. Your data is encrypted both in transit and at rest to ensure maximum protection of your sensitive reproductive health information.'
        },
        {
          heading: '5. Data Sharing & Third Parties',
          content: 'We do not sell, trade, or rent your menstrual and workout data to third parties. Your data is not shared with advertisers or marketing partners. We may share anonymized, aggregated data for research purposes only.'
        },
        {
          heading: '6. Your Rights & Control',
          content: 'You have the right to:',
          list: [
            'Access and review your personal data at any time',
            'Delete your account and all associated data',
            'Export your data in a portable format',
            'Contact us with privacy concerns or data requests'
          ]
        },
        {
          heading: '7. Legal Compliance',
          content: 'FlowFit complies with applicable privacy laws including GDPR, CCPA, and state-level privacy regulations.'
        },
        {
          heading: '8. Contact Us',
          content: 'If you have questions about this Privacy Policy, please contact us at privacy@flowfit.app'
        }
      ]
    }
  }

  const policy = policyContent[variant]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border flex items-center justify-between p-6">
          <h2 className="text-2xl font-bold text-primary">{policy.title}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-sm text-foreground">
          {policy.sections.map((section, idx) => (
            <section key={idx}>
              <h3 className="font-bold text-lg mb-2">{section.heading}</h3>
              <p className="mb-2">{section.content}</p>
              {section.list && (
                <ul className="list-disc list-inside space-y-1 ml-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="sticky bottom-0 bg-background border-t border-border p-6 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
