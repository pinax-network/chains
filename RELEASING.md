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


### Quick mode

1. Make, test and regenerate on main branch
   `bun run update`
2. Changeset
   `bun run release`
3. Commit and publish on github
