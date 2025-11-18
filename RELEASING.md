## Releasing

1. Make and test changes
   - Branch from `main`, implement changes.
   - Run:
     - `npm ci`
     - `npm run build`
     - `npm run lint`

2. Add a changeset (on your feature branch)
   - `npm run changeset`
   - Commit code + changeset

3. Open PR and merge
   - `git push -u origin feature/my-change`
   - Open PR to `main`, wait for CI, merge.

4. Prepare the release (on `main`)
   - `npm run changeset:version`
   - `git add .`
   - `git commit -m "chore: release vX.Y.Z"`
   - `git push`

5. Publish via GitHub Release
   - On GitHub: **Releases → Draft a new release** with tag `vX.Y.Z`.
   - Publish the release to trigger the NPM publishing workflow.
