Auto release solution (ARS)
--

1. [Dependencies](#dependencies)
2. [Hooks](#husky-hooks)
3. [Commitlint config](#commitlint-config)
4. [Release-please config](release-please-config.json)
5. [Conventional commit messages](#conventional-commit-message-part-)
6. [Bump version](#bump-version)
7. [Fix release notes](#fix-release-notes--during-merge-pr-squash-message-or-amend-commit-)

### Dependencies

```shell
$ yarn add -D husky @commitlint/{cli,config-conventional}  
```

### Husky hooks

```shell
 npx husky install
 npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
 npx husky add .husky/pre-commit "echo 'some process ci/cd'" 
```

### Commitlint config

> ⚠️ To file `commitlint.config.js`

```module.exports = {extends: ['@commitlint/config-conventional']};```

### Release please configs

#### manifest
```json
{
  ".": "1.0.0"
}
```

#### config
```json
{
  "release-type": "node",
  "packages": {
    ".": {
      "changelog-path": "CHANGELOG.md",
      "release-type": "node",
      "bump-minor-pre-major": false,
      "bump-patch-for-minor-pre-major": false,
      "draft": false,
      "prerelease": false
    }
  },
  "$schema": "https://raw.githubusercontent.com/googleapis/release-please/main/schemas/config.json"
}
```

### Conventional commit message part:

Release Please assumes you are using [Conventional Commit messages](https://www.conventionalcommits.org/).

The most important prefixes you should have in mind are:

`fix`: which represents _bug fixes_, and correlates to a [SemVer](https://semver.org/) patch.
`feat`: which represents a _new feature_, and correlates to a SemVer minor.
`feat!`:, or fix!:, refactor!:, etc., which represent a breaking change (indicated by the !) and will result in a SemVer major.

#### Examples
```text
feat: adds v4 UUID to crypto

This adds support for v4 UUIDs to the library.

fix(utils): unicode no longer throws exception
  PiperOrigin-RevId: 345559154
  BREAKING-CHANGE: encode method no longer throws.
  Source-Link: googleapis/googleapis@5e0dcb2

feat(utils): update encode to support unicode
  PiperOrigin-RevId: 345559182
  Source-Link: googleapis/googleapis@e5eef86
```
The above commit message will contain:

* an entry for the "adds v4 UUID to crypto" feature.
* an entry for the fix "unicode no longer throws exception", along with a note that it's a breaking change.
* an entry for the feature "update encode to support unicode"

### Bump version

```git commit -m "chore: release 2.0.0\n\nRelease-As: 2.0.0"```

### Fix release notes (during merge PR, squash message, or amend commit)

```text
BEGIN_COMMIT_OVERRIDE
feat: add ability to override merged commit message

fix: another message
chore: a third message
END_COMMIT_OVERRIDE
```
