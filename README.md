# @loyaltylion/typeorm

How to make changes to our fork:

- use the `loyaltylion/changes` branch
  - while you're making changes, consider rebasing it on the latest typeorm master
- make your changes -- keep everything organised with good, isolated commits in case we want to cherry pick some of these commits to get them upstream later
- to test it locally:
  - run `yarn package`
  - this will create a dist build in `build/package`
  - from inside `build/package`, run `yarn link`
  - inside projects using this fork, run `yarn link "@loyaltylion/typeorm"`. this will link it to your local build
  - each time you make a change in the fork you'll need to run `npx gulp package` in there again
- to publish:
  - adjust the package.json version from `x.x.x-y` to `x.x.x-z` (z = y + 1)
  - run `npx gulp publish`. this will publish a new version to @loyaltylion/typeorm
  - update referenced projects to use the new version from NPM: `yarn upgrade --latest @loyaltylion/typeorm`
