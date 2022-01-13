/*
 * @Author: ylyu
 * @Date: 2022-01-13 16:40:45
 * @LastEditors: ylyu
 * @LastEditTime: 2022-01-13 17:43:58
 * @Description:
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'fish-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  mfsu: {},
  // more config: https://d.umijs.org/config
  // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
  menus: {
    '/components/Button': [
      {
        title: '菜单项',
        path: '菜单路由（可选）',
        children: [
          // 菜单子项（可选）
          'components/Button/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
    ],
    // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
    // '/zh-CN/guide': [
    // 省略，配置同上
    // ],
  },
});
