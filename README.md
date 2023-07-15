# MODAWN API

## 프로젝트 구조
```
.
├── README.md
├── apidoc              ---------> api 문서 작성
│   └── apidoc.json     ---------> api 문서 설정 파일
├── config              ---------> 서버 설정
│   └── config.js       ---------> 설정 파일
├── models              ---------> 데이터베이스 entity
│   ├── index.js        ---------> model 인덱스 파일
│   └── directories     ---------> 각 entity들이 들어있는 디렉토리
├── package-lock.json
├── package.json
├── server.js           ---------> 서버 인덱스 파일
├── server.config.js    ---------> 서버 환경 파일
├── src
│   ├── api             ---------> 컨트롤러, 서비스, 레포지토리를 관리하는 폴더
│   ├── index.js        ---------> api router 인덱스 파일
│   └── util.js         ---------> api router 유틸 파일
└── .env.example        ---------> 환경변수 설정 파일 (.env로 복사하여 사용)
```

---

## npm script
### 개발 모드
```shell
$ npm run start:dev
```

### 배포 모드
```shell
$ npm run start
```

### api 문서 실행
<i><b>사전에 `http-server`모듈이 설치되어 있어야 합니다!</b></i>
```shell
# 설치안했다면
$ npm i -g http-server

# 실행
$ npm run apidoc:start
```

---

## api 문서 작성
새로운 카테고리로서의 기능이 추가되면 `apidoc`폴더에 해당 카테고리의 이름으로 파일을 생성합니다.  
ex) 게시글 관련 기능들이 추가되면 `apidoc/post.js`파일을 생성합니다.
</br>
</br>
api문서를 작성하는 방법은 `example.js`파일을 참조합니다.
