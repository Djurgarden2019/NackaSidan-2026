# Main 359 – remediation on driftstatus

Main 359 surfaces the release remediation code directly in the human operations view.

## Changes
- shows the stable remediation code on `/driftstatus`
- adds a Swedish operator explanation for every remediation code
- keeps release gate, primary reason and remediation together
- links back to the machine-readable release verification endpoint

## Why
Operators and automation should receive the same recommended next action without translating release-gate reasons independently.
