import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'lud0914', name: 'mkt52' },
  },
  collections: {
    posts: collection({
      label: '블로그 포스트',
      slugField: 'title',
      path: 'src/content/posts/*', // 마크다운이 저장될 경로
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: '제목' } }),
        date: fields.date({ label: '날짜', defaultValue: { kind: 'today' } }),
        content: fields.mdx({
          label: '내용',
        }),
      },
    }),
  },
});