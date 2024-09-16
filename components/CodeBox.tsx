import React from 'react';
import { CopyBlock, solarizedDark, solarizedLight } from 'react-code-blocks';

interface CodeBoxProps {
  code: string;
  language: string;
  name?: string;
  classic?: boolean;
  theme?: 'solarizedDark' | 'solarizedLight'; // Define the themes you want to use
}

const CodeBox: React.FC<CodeBoxProps> = ({ code, language, name, classic, theme = 'solarizedDark' }) => {
  let selectedTheme;

  switch (theme) {
    case 'solarizedLight':
      selectedTheme = solarizedLight;
      break;
    case 'solarizedDark':
    default:
      selectedTheme = solarizedDark;
  }

  return (
    <div className="code-block my-4">
      {name && <div className="font-semibold mb-2">{name}</div>}
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={true}
        theme={selectedTheme}
        codeBlock
      />
    </div>
  );
};

export default CodeBox;
