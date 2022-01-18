/*
 * @Author: ylyu
 * @Date: 2022-01-13 16:40:45
 * @LastEditors: ylyu
 * @LastEditTime: 2022-01-18 10:08:52
 * @Description:
 */
import { defineConfig } from 'dumi';
const path = require('path');
function getMenus(opts: { lang?: string; base: '/components' | '/docs' }) {
  const menus = {
    '/docs': [
      {
        title: 'Introduce',
        'title_zh-CN': '介绍',
        path: '/docs/guide',
      },
      {
        title: 'FAQ',
        'title_zh-CN': '问题',
        path: '/docs/faq',
      },
    ],
    '/components': [
      {
        title: 'Common',
        'title_zh-CN': '通用',
        children: ['/components/button', '/components/icon', '/components/typography'],
      },
      {
        title: 'Layout',
        'title_zh-CN': '布局',
        children: [
          '/components/layout/Divider',
          '/components/layout/Grid',
          '/components/layout/Layout',
          '/components/space',
        ],
      },
      // {
      //   title: 'Nav',
      //   'title_zh-CN': '导航',
      //   children: [
      //     '/components/nav/Header',
      //     '/components/nav/Footer',
      //     '/components/nav/Menu',
      //     '/components/nav/Breadcrumb',
      //     '/components/nav/Pagination',
      //   ],
      // },
    ],
  };
  return (menus[opts.base] as [])?.map((menu: any) => {
    if (!opts.lang) return menu;
    return {
      ...menu,
      title: menu[`title_${opts.lang}`] || menu.title,
    };
  });
}

export default defineConfig({
  title: 'fish-ui',
  hash: true,
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  mfsu: {},
  dynamicImport: {},
  navs: [
    // null,
    {
      title: '文档',
      path: '/docs',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/umi',
    },
  ],
  menus: {
    '/zh-CN/docs': getMenus({ lang: 'zh-CN', base: '/docs' }),
    '/docs': getMenus({ base: '/docs' }),
    '/zh-CN/components': getMenus({ lang: 'zh-CN', base: '/components' }),
    '/components': getMenus({ base: '/components' }),
  },
  // more config: https://d.umijs.org/config
  lessLoader: { javascriptEnabled: true },
  //  按需加载 antd
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
    // [
    //   'import',
    //   {
    //     libraryName: 'piatto',
    //     libraryDirectory: '',
    //     customStyleName: (name) => path.resolve(__dirname, `src/${name}/index.less`),
    //   },
    // ],
  ],
  chainWebpack: (config, { webpack }) => {
    // console.log('webpack Config===', config.toConfig());
    config.merge({
      module: {
        rules: [
          {
            test: /\.less$/i,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                  lessOptions: {
                    paths: [path.resolve(__dirname, 'src')],
                  },
                },
              },
            ],
          },
        ],
      },
    });

    return config;
  },
});
