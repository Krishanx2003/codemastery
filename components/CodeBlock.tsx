// src/components/CodeBlock.tsx
import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript'; // Add other modes if needed
import 'ace-builds/src-noconflict/theme-monokai'; // Add other themes if needed
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  onChange?: (code: string) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, onChange }) => {
  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={code}
        onChange={onChange}
        name="codeEditor"
        editorProps={{ $blockScrolling: true }}
        style={{ width: '100%', height: '200px' }}
      />
      <div style={{ marginTop: '20px' }}>
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
