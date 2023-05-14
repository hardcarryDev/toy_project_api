# toy_project_api

쇼핑몰에서 쓰일듯한 api 셋을 제공하는 Express 서버
(곧 프론트 만들 예정)

## 기술스택

- node.js
- express
- typescript
- maria db 10.11
- prisma
- erd cloud
- 그 외 라이브러리
  - typia
  - lodash
  - dotenv
  - prettier & eslint

---

## Getting started

### 1. install dependencies

Install npm dependencies:

```
cd toy_project_api
npm install
```

### 2. prisma setting

.env file 설정 : (dialog://id:pw@host:port/db_name)

```
PRISMA_DB_URL="mysql://developer:developer@localhost:3306/toy_project"
```

```
npx prsisma db push  // prisma schema를 db table로 restore 하는 작업 (최초 1회만 진행)
npx prsisma generate // prisma schema를 type, interface 등으로 만듬(prisma/client/index.d.ts 파일)
```

### 3. compile typscript code -> javascript code

```
npm run build
```

tsconfig.json에 "outDir" 항목에 적힌 곳에 컴파일 결과물이 옮겨진다. 해당 프로젝트에서는 ./build 로 설정이 되어 있음.

<br>

### 4. Start the REST API server

```
npm run dev
```

### 5. ERD(2023-05-14)
![toy_project](https://github.com/hardcarryDev/toy_project_api/assets/21008572/d201f9c4-1695-4730-a82a-e72955bd2b68)

