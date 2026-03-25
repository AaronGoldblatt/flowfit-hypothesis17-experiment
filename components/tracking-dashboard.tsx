'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, Trash2, Copy } from 'lucide-react'
import { exportTrackingData, clearTrackingData } from '@/lib/experiment-tracker'

export function TrackingDashboard() {
  const [data, setData] = useState('')
  const [copied, setCopied] = useState(false)

  const handleExport = () => {
    const exported = exportTrackingData()
    setData(exported)
  }

  const handleDownload = () => {
    const exported = exportTrackingData()
    const blob = new Blob([exported], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `h17-tracking-data-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(data)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleClear = () => {
    if (confirm('Clear all tracking data? This cannot be undone.')) {
      clearTrackingData()
      setData('')
      alert('Tracking data cleared.')
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-card border border-border rounded-lg shadow-lg p-4 max-w-sm">
        <h3 className="font-bold text-foreground mb-3">Tracking Data</h3>
        <div className="flex gap-2 mb-3">
          <Button
            size="sm"
            variant="outline"
            onClick={handleExport}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            View
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleDownload}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </Button>
          {data && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleCopy}
              className="gap-2"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          )}
        </div>
        <Button
          size="sm"
          variant="destructive"
          onClick={handleClear}
          className="w-full gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Clear Data
        </Button>
        {data && (
          <div className="mt-3 bg-background rounded p-3 text-xs overflow-auto max-h-48">
            <pre className="text-muted-foreground whitespace-pre-wrap break-words">
              {data}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
