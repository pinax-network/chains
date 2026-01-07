## Releasing

1. Make and test changes
   - Branch from `main`, implement changes.
   - Regenerate types and data:
     - `bun run generate`
   - Validate:
     - `bun run build`
     - `bun run lint`

2. Add a changeset (on your feature branch)
   - `bun run changeset`
   - Commit code + changeset

3. Open PR and merge
   - `git push -u origin feature/my-change`
   - Open PR to `main`, wait for CI, merge.

4. Prepare the release (on `main`)
   - `bun run changeset:version`
   - `git add .`
   - `git commit -m "chore: release vX.Y.Z"`
   - `git push`

5. Publish via GitHub Release
   - On GitHub: **Releases → Draft a new release** with tag `vX.Y.Z`.
   - Publish the release to trigger the NPM publishing workflow.


### Quick mode to quickly deprecate a chain

1. Deprecate chain in corresponding `meta.ts` file by setting the `deprecated_at` field to the current date.
2. Build, test and regenerate with `bun run update`, making sure everything succeeds, fixing errors if any.
3. Set changeset and bump the package version with `bun run release`
4. Commit
5. Publish a github release
