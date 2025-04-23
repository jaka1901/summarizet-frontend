import React, { useState } from 'react'
import { API_BASE_URL } from '../constants/global';

export default function FileSummarizer() {
  const [summary, setSummary] = useState('')

  const handleFileUpload = async (e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])

    const res = await fetch(`${API_BASE_URL}/summarize-file`, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    setSummary(data.summary)
  }

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <pre>{summary}</pre>
    </div>
  )
}
