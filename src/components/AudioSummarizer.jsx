import React, { useState } from 'react'

export default function AudioSummarizer() {
  const [summary, setSummary] = useState('')

  const handleAudioUpload = async (e) => {
    const formData = new FormData()
    formData.append('audio', e.target.files[0])

    const res = await fetch(`api/summarize-audio`, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    setSummary(data.summary)
  }

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleAudioUpload} />
      <p style={{whiteSpace: "pre-line"}}>{summary}</p>
    </div>
  )
}
