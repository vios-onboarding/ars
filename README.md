Auto release solution (ARS)
--

# Dependencies

```shell
$ yarn add husky @commitlint/{cli,config-conventional}  
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
