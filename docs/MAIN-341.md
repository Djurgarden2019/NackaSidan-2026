# Main 341 – deployment identity on drift status

Main 341 makes deployment identity visible to operators without requiring raw API inspection.

## Changes
- `/driftstatus` now shows the running commit, environment and Git ref
- links directly to the current Vercel deployment when available
- updates the driftstatus checkpoint label to Main 341

## Why
Deployment identity was machine-readable after Main 340. Main 341 makes the same information immediately visible during incident diagnosis and production verification.
