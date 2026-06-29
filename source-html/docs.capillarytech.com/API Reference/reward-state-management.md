> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Reward State Management

Reward state management APIs control the lifecycle of an issued reward transaction. An issued reward can be revoked, which cancels the reward and refunds the points consumed during issuance.

Each state transition is gated by a brand-level configuration flag and is disabled by default.

| API                                                                               | Description                                                                                     |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [Revoke User Reward](https://docs.capillarytech.com/reference/revoke-user-reward) | Revokes an issued reward transaction (`ISSUED` to `CANCELLED`) and refunds the consumed points. |