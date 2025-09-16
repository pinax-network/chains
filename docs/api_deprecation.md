# API Service Deprecation

## Overview
This document describes the process for deprecating the token API service ("api") in the chains package.

## Deprecation Process

1. **Identify Services for Deprecation**
   - Find all chains that use the API service
   - Set a deprecation date in the `deprecated_at` field

2. **Implementation**
   - Update chain metadata files (`meta.ts`) by setting `deprecated_at` field to the current date or a planned deprecation date
   - Example:
     ```typescript
     api: {
       beta_released_at: '2025-03-04T00:00:00.000Z',
       full_released_at: '2025-03-04T00:00:00.000Z',
       deprecated_at: '2025-09-16T00:00:00.000Z', // Set the deprecation date
     },
     ```

3. **Testing**
   - Run tests to ensure the `isServiceDeprecated` function correctly identifies the deprecated services
   - Check for any related test failures

4. **Publication**
   - Update the package version according to semver (likely a minor version bump)
   - Create a changelog entry
   - Publish the updated package

## Effect of Deprecation

When a service is marked as deprecated:

1. `isServiceDeprecated(chain, 'api')` will return `true`
2. `isServiceSupported(chain, 'api')` will return `false`
3. `isServiceBeta(chain, 'api')` will return `false`
4. If all services for a chain are deprecated, `isChainDeprecated(chain)` will return `true`

## Updating Consumers

Consumer applications should check for service deprecation using the provided utility functions and display appropriate messaging to users when accessing deprecated services.
