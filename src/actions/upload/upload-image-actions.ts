'use server';

import { IMAGE_SERVER_URL, IMAGEUPLOADER_DIR_PATH } from '@/lib/constants';
import { mkdir, writeFile } from 'fs/promises';
import { extname, resolve } from 'path';

type uploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<uploadImageActionResult> {
  //TODO: Validar login do usuário

  const makeResult = ({ url = '', error = '' }) => ({
    url,
    error,
  });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados inválidos!' });
  }

  const file = formData.get('file');

  if (!(file instanceof File)) {
    return makeResult({ error: 'Dados inválidos!' });
  }

  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Dados inválidos!' });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;
  const uploadFullPath = resolve(
    process.cwd(),
    'public',
    IMAGEUPLOADER_DIR_PATH,
  );

  console.log(uniqueImageName);

  await mkdir(uploadFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const fileBuffer = Buffer.from(fileArrayBuffer);
  const uploadFileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(uploadFileFullPath, fileBuffer);

  const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;
  return makeResult({ url: url });
}
