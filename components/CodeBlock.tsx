import React from 'react';

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
}

export default CodeBlock;
