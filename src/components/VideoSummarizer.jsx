import React, { useState } from 'react'

export default function VideoSummarizer() {
  const [summary, setSummary] = useState('')

  const handleVideoUpload = async (e) => {
    const formData = new FormData()
    formData.append('video', e.target.files[0])

    const res = await fetch(`api/summarize-video`, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    setSummary(data.summary)
  }

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      <p style={{whiteSpace: "pre-line"}}>{summary}</p>
    </div>
  )
}
