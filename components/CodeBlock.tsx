// src/components/CodeBlock.tsx
import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript'; // Add other modes if needed
import 'ace-builds/src-noconflict/theme-monokai'; // Add other themes if needed
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

interface CodeBlockProps {
  code: string;
  onChange?: (code: string) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, onChange }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="relative">
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={code}
        onChange={onChange}
        name="codeEditor"
        editorProps={{ $blockScrolling: true }}
        style={{ width: '100%', height: '200px' }}
      />
        <div className="rounded-md border bg-background p-4">
       <pre className="p-4">
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {code}
        </SyntaxHighlighter>
        </pre>
        </div>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button className="absolute top-2 right-2 p-2 bg-gray-800 rounded text-white">
          <FontAwesomeIcon icon={copied ? faClipboardCheck : faClipboard} />
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeBlock;
