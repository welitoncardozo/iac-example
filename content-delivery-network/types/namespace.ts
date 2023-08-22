export type Namespace = 'prod' | 'stage' | string;

export function getNamespace(namespace: string | undefined): Namespace {
  if (!namespace) throw new Error('NAMESPACE environment variable is required');

  const isNamespaceInvalid = namespace !== 'prod' && namespace !== 'stage' && !namespace.includes('pr');
  if (isNamespaceInvalid) throw new Error(`NAMESPACE environment variable '${namespace}' is invalid`);

  return namespace as Namespace;
}