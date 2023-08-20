export type Namespace = 'prod' | 'homolog' | 'dev';

export function getNamespace(namespace: string | undefined): Namespace {
  if (!namespace) throw new Error('NAMESPACE environment variable is required');
  if (!['prod', 'homolog', 'dev'].includes(namespace)) throw new Error(`NAMESPACE environment variable '${namespace}' is invalid`);

  return namespace as Namespace;
}