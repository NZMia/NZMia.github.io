import React, { useRef, useState, useEffect } from 'react';
import hljs from '../highlight';
import Clipboard from 'clipboard';
import 'highlight.js/styles/default.css';

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const preRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (preRef !== null && preRef.current !== null) {
      hljs.highlightBlock(preRef.current);
    }

    // create clipboard instance and store it in a variable
    const clipboard = new Clipboard(`#${language}copy_btn`, {
      text: () => code,
    });

    // Listen to the copy success event
    clipboard.on('success', () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });

    // Destroy the clipboard instance
    return () => {
      clipboard.destroy();
    };
  }, [code]);
  return (
    <div className="code__block">
      <pre>
        <code id={language} ref={preRef} className={language}>
          {code}
        </code>
      </pre>
      <button className="button--text code__copy" id={`${language}copy_btn`}>
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

export default CodeBlock;
