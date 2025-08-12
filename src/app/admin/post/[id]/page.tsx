import clsx from 'clsx';

export const dynamic = 'force-dynamic';

type AdminPostPageByIdProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostPageById({
  params,
}: AdminPostPageByIdProps) {
  const { id } = await params;
  console.log(id);
  return (
    <>
      <div className={clsx('py-16', 'text-6xl')}>AdminPostPageById: {id}</div>
    </>
  );
}
