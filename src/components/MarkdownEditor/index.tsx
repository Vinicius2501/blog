'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useId } from 'react';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

type MarkdownEditorProps = {
  labeltext?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  textAreaName: string;
  disabled?: boolean;
};

export function MarkdownEditor({
  labeltext = '',
  value,
  setValue,
  textAreaName,
  disabled = false,
}: MarkdownEditorProps) {
  const id = useId();

  return (
    <div className={clsx('flex', 'flex-col', 'gap-2')}>
      {labeltext && (
        <label className='text-sm' htmlFor={id}>
          {labeltext}
        </label>
      )}

      <MDEditor
        className='whitespace-pre-wrap'
        value={value}
        onChange={value => {
          if (value === undefined) return;
          setValue(value);
        }}
        height={400}
        //extraCommands={[]}
        preview='edit'
        hideToolbar={disabled}
        textareaProps={{
          id,
          name: textAreaName,
          disabled: disabled,
        }}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkGfm]],
        }}
      ></MDEditor>
    </div>
  );
}
