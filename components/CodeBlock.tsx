// src/components/CodeBlock.tsx

import React from 'react';
import styles from './CodeBlock.module.css';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <pre className={styles.codeBlock}>
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;
