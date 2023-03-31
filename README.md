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

### 
