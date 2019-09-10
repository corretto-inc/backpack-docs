---
id: public-api-header-and-validation
title: 헤더 세팅 및 유효성 확인하기
sidebar_label: 헤더 세팅 및 유효성 확인하기
---

백팩의 퍼블릭 API를 호출하기 위해 필요한 헤더와 그 용도를 기술합니다.

## 헤더 목록과 그 기능

다음은 요청 시 필요한 모든 HTTP 헤더 입니다.

### X-Backpack-Date

요청 시간을 기록한 날짜/시간 입니다. [ISO-8601](https://naver.com)형태로 기록, 제출합니다. 현재 시간과 최대 3분 차이여야 합니다. 또한 API 시크릿 키 값을 암호화하여 암호화 키를 만드는데 사용되기도 합니다. 다음은 예시입니다.

```Typescript
// ISO-8601 날짜 포맷 형식 (각각 YYYY-MM-DDTHH:mm:ss.sssZ 또는 ±YYYYYY-MM-DDTHH:mm:ss.sssZ)
const xBackpackDate = new Date().toISOString();
// 암호화용 키를 생성합니다. 보시는 바와 같이 API 시크릿 키만 상수값이기 때문에 절대로 노출해선 안됩니다.
const signatureKey = createHmac('sha256', 'API 시크릿 값').update(xBackpackDate).digest('hex');
```

### X-Backpack-Authorization

요청한 바디값의 [MD5해쉬](https://naver.com)된 값을 활용, 위에서 만든 암호화 키로 암호화된 값을 만들어 해당 헤더에 기록, 제출합니다. 다음은 예시입니다.

```Typescript
import { createHash, createHmac } from 'crypto';

// JSON.stringify()된 body 값, 혹시 body 값이 undefined인 경우 ''를 넣으면 됩니다.
const contentMd5 = createHash('md5').update(stringifiedBody || '').digest('base64');
// 위에서 만든 암호화 키를 활용하여 암호화 진행
const xBackpackAuthorization = createHmac('sha256', signatureKey).update(contentMd5).digest('hex');
```

### Content-MD5(조건부)

요청 시 바디의 변조를 막기위해 바디 값을 MD5해시, base64화 시킨 값입니다. [RFC 1864](https://naver.com)에 정의되어 있으며 다음은 예시입니다.

```Typescript
import { createHash } from 'crypto';

// JSON.stringify()된 body 값, 혹시 body 값이 undefined인 경우 ''를 넣으면 됩니다.
const contentMd5 = createHash('md5').update(stringifiedBody || '').digest('base64');
```

### Date

요청 시 요청 날짜를 적는 헤더입니다. 대개는 브라우저에서 자동으로 넣어주기 때문에 크게 신경쓰실 필요는 없습니다. 변조의 가능성이 있기 때문에 딱히 쓰이지는 않습니다.

### Host

요청 시 서버의 도메인 이름, 포트번호를 적는 헤더입니다. 대개는 브라우저에서 자동으로 넣어주기 때문에 크게 신경쓰실 필요는 없습니다. 변조의 가능성이 있기 때문에 딱히 쓰이지는 않습니다.

### User-Agent

요청 시 요청하는 운영체제, 소프트웨어 제작사, 버전 등을 적는 헤더입니다. 대개는 브라우저에서 자동으로 넣어주기 때문에 크게 신경쓰실 필요는 없습니다. 변조의 가능성이 있기 때문에 딱히 쓰이지는 않습니다.
