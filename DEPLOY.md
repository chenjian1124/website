# GitHub Pages 部署说明

## 问题解决

已修复 GitHub Pages 部署时 CSS 文件 404 的问题。

## 修复内容

### 1. Vite 配置更新
- 添加了 `base` 路径配置，生产环境使用 `/website/`
- 配置了正确的资源文件输出路径
- 优化了构建配置

### 2. 构建脚本
- 添加了 `build:github` 脚本用于 GitHub Pages 部署
- 使用 `cross-env` 确保跨平台兼容性

### 3. GitHub Actions 工作流
- 创建了自动部署工作流 `.github/workflows/deploy.yml`
- 自动构建并部署到 GitHub Pages

## 部署步骤

### 方法一：使用 GitHub Actions（推荐）

1. 将代码推送到 GitHub 仓库
2. 在 GitHub 仓库设置中启用 Pages
3. 选择 "GitHub Actions" 作为源
4. 每次推送到 master/main 分支会自动部署

### 方法二：手动部署

1. 运行构建命令：
   ```bash
   yarn build:github
   ```

2. 将 `dist` 文件夹内容推送到 `gh-pages` 分支

## 验证部署

部署成功后，访问：
`https://你的用户名.github.io/website/`

## 注意事项

- 适用于 GitHub Pages 子目录部署（仓库名为 website）
- CSS 和 JS 文件现在会正确加载，路径为 `/website/assets/...`
- 确保仓库名称为 `website`，否则需要修改 `vite.config.js` 中的 `base` 路径
