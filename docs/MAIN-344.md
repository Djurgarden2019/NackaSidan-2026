# Main 344 – deployment ID visibility

Main 344 adds Vercel's unique deployment identifier to the operational identity model.

## Changes
- adds `VERCEL_DEPLOYMENT_ID` to the shared deployment identity
- exposes it in `/api/deployment` JSON
- adds `X-NackaSidan-Deployment-Id` when available
- shows the deployment ID directly on `/driftstatus`

## Why
The deployment ID is the most precise way to identify and inspect the exact Vercel deployment involved in a release or incident. Vercel does not expose deployment creation time as a normal runtime system variable, so Main 344 avoids presenting an unreliable deployment-age estimate.
