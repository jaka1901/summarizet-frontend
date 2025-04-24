import React, { useState } from 'react'
import TextSummarizer from './components/TextSummarizer'
import SummarizeFromURL from './components/SummarizeFromURL'
import FileSummarizer from './components/FileSummarizer'

const App = () => {
  const [type, setType] = useState('text')

  const renderComponent = () => {
    switch (type) {
      case 'text': return <TextSummarizer />
      case 'url': return <SummarizeFromURL />
      case 'file': return <FileSummarizer />
      default: return null
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Summarize Anything</h1>
      <label>
        Select summarization type:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="text">Text</option>
          <option value="url">URL</option>
          <option value="file">File (PDF/DOCX)</option>
        </select>
      </label>
      <div style={{ marginTop: 20 }}>
        {renderComponent()}
      </div>
    </div>
  )
}

export default App
