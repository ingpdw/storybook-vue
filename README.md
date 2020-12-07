# storybook-vue

- 컴포넌트 주도 개발 환경을 지원하는 툴
- 문서 자동화, 디버깅, 스냅샷 테스팅 등 다양한 addon 지원
- story를 통하여 컴포넌트를 실행 및 테스트 가능
- 개별 컴포넌트를 다른 컴포넌트와 의존성 없이 개발 가능
- props의 시각적 변경 및 확인 가능

### install

```
npx -p @storybook/cli sb init --type vue
yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

### storybook run

```
yarn storybook
```

### service

```
yarn serve
```

### issue

- 2020.11.30 현재 vue3 미지원
- https://github.com/storybookjs/storybook/issues/13224
