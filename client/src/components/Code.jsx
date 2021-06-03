import React from "react"
import { connect } from 'react-redux'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark, coy, okaidia, twilight, tomorrow, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'


const CodeBlock = ({ code, language, theme, themeOverride }) => {
  const themeOpts = {
    'Dark': dark, 
    'Coy': coy, 
    'Okaidia': okaidia, 
    'Twilight': twilight, 
    'Tomorrow': tomorrow, 
    'Solarized Light': solarizedlight,
  }
  console.log(code)
  return (
    <div style={styling}>
      <SyntaxHighlighter language={language.toLowerCase()} style={themeOpts[themeOverride] || themeOpts[theme]} showLineNumbers={true} wrapLines={true} wrapLongLines={true} data-src="myfile.js" data-download-link>
      {code}
     </SyntaxHighlighter>
    </div>

  );
}

const styling = {
  height: 'auto',
  minHeight: '3rem',
  maxHeight: '12rem',
  overflowY: 'auto',
  margin: '1rem 0',
  fontSize: 12,
}

const mapStateToProps = (state) => ({
  theme: state.user.theme,
})





export default connect(mapStateToProps, null)(CodeBlock)