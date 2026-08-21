export function getDeploymentIdentity() {
  const commitSha = process.env.VERCEL_GIT_COMMIT_SHA ?? null;
  const environment = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? 'unknown';
  const deploymentUrl = process.env.VERCEL_URL ?? null;
  const gitRef = process.env.VERCEL_GIT_COMMIT_REF ?? null;

  return {
    commitSha,
    shortCommitSha: commitSha ? commitSha.slice(0, 12) : null,
    environment,
    deploymentUrl,
    gitRef,
  };
}
