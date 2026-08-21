export function getDeploymentIdentity() {
  const commitSha = process.env.VERCEL_GIT_COMMIT_SHA ?? null;
  const environment = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? 'unknown';
  const deploymentUrl = process.env.VERCEL_URL ?? null;
  const deploymentId = process.env.VERCEL_DEPLOYMENT_ID ?? null;
  const gitRef = process.env.VERCEL_GIT_COMMIT_REF ?? null;
  const isProduction = environment === 'production';
  const isMainRef = gitRef === 'main';
  const provenanceOk = !isProduction || isMainRef;

  return {
    commitSha,
    shortCommitSha: commitSha ? commitSha.slice(0, 12) : null,
    environment,
    deploymentUrl,
    deploymentId,
    gitRef,
    isProduction,
    isMainRef,
    provenanceOk,
  };
}
