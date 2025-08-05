import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        'prose-invert',
        'prose-slate',
        'w-full',
        'max-w-none',
        'overflow-hidden',
        'prose-a:transition',
        'prose-a:no-underline',
        'prose-a:text-blue-500',
        'prose-a:hover:text-blue-700',
        'prose-a:hover:underline',
        'prose-img:mx-auto',
        'md:prose-lg',
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return '';

            return (
              <div className={clsx('overflow-auto')}>
                <table
                  className={clsx('w-full', 'min-w-[600px]', 'h-full')}
                  {...props}
                ></table>
              </div>
            );
          },
          thead: ({ ...props }) => (
            <thead
              className='text-left px-4 py-2 font-semibold border-b'
              {...props}
            ></thead>
          ),

          pre: ({ ...props }) => (
            <pre className={clsx('prose-invert', 'border')} {...props}></pre>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
