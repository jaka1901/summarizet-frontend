import React, { useState } from 'react'

export default function TextSummarizer() {
  const [text, setText] = useState('')
  const [summary, setSummary] = useState('')

  const handleSummarize = async () => {
    const res = await fetch(`api/summarize`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })
    const data = await res.json()
    setSummary(data.summary)
  }

  return (
    <div>
      <textarea rows={10} cols={60} onChange={(e) => setText(e.target.value)} />
      <br />
      <button onClick={handleSummarize}>Summarize</button>
      <p style={{whiteSpace: "pre-line"}}>{summary}</p>
    </div>
  )
}
