import React from "react"
import { connect } from 'react-redux'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark, coy, okaidia, twilight, tomorrow, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'


const CodeBlock = ({ code, language, theme, themeOverride, height }) => {
  const themeOpts = {
    'Dark': dark, 
    'Coy': coy, 
    'Okaidia': okaidia, 
    'Twilight': twilight, 
    'Tomorrow': tomorrow, 
    'Solarized Light': solarizedlight,
  }

  const styling = (height) => ({
    height: 'auto',
    minHeight: height ? height : '1rem',
    maxHeight: '12rem',
    overflowY: 'auto',
    margin: '1rem 0',
    fontSize: 12,
  })

  return (
    <SyntaxHighlighter 
      language={language.toLowerCase()} 
      style={themeOpts[themeOverride] || themeOpts[theme]} 
      customStyle={styling(height)}
      showLineNumbers={true} 
      wrapLines={true} 
      wrapLongLines={true} 
      data-src="myfile.js" 
      data-download-link>
    {code}
    </SyntaxHighlighter>
  );
}

const mapStateToProps = (state) => ({
  theme: state.user.theme,
})

export default connect(mapStateToProps, null)(CodeBlock)