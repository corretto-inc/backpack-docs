---
id: getting-started-requesting-your-api
title: API 요청하기
sidebar_label: API 요청하기
---

백팩을 통해 제작한 애플리케이션을 실제로 사용할 수 있는 방법과 보안에 관련된 부분을 설명합니다.

## 변수 확인하기

백팩의 퍼블릭 API를 사용하기 위해선 Endpoint URL, API 호출용 키, 시크릿 키를 알아야 합니다.
보시는 이미지처럼 앱 대시보드에서 쉽게 확인하실 수 있으며 API 호출용 키, 시크릿 키는 <strong>절대로</strong> 외부에 노출하시면 안됩니다.

## 호출방법

호출시 유효성검사를 위해 필요한 헤더는 X-Backpack-Date, X-Backpack-Authorization, Content-MD5(POST, PATCH의 경우만), Date, User-Agent, Host 입니다. 대개 Date, User-Agent, Host 헤더는 브라우저에 의해 자동적으로 들어가지만 Content-MD5, X-Backpack-Date, X-Backpack-Authorization은 자동으로 들어가지 않습니다. X-Backpack-Date는 [ISO-8601](https://naver.com)의 형식이며 아래와 같이 코딩하여 사용하시면 됩니다. [Typescript](https://naver.com)를 기준으로 코딩하였습니다.

```Typescript
import * as axios from 'axios';
import { createHash, createHmac } from 'crypto';

// ISO-8601 날짜 포맷 형식 (각각 YYYY-MM-DDTHH:mm:ss.sssZ 또는 ±YYYYYY-MM-DDTHH:mm:ss.sssZ)
const xBackpackDate = new Date().toISOString();
// JSON.stringify()된 body 값, 혹시 body 값이 undefined인 경우 ''를 넣으면 됩니다.
const contentMd5 = createHash('md5').update(stringifiedBody || '').digest('hex');
// 암호화용 키를 생성합니다. 보시는 바와 같이 API 시크릿 키만 상수값이기 때문에 절대로 노출해선 안됩니다.
const signatureKey = createHmac('sha256', 'API 시크릿 값').update(xBackpackDate).digest('hex');
// 위 값 두개를 활용하여 암호화된 데이터를 생성합니다.
const xBackpackAuthorization = createHmac('sha256', signatureKey).update(contentMd5).digest('hex');

// xBackpackDate, xBackpackAuthorization, contentMd5값을 헤더에 넣어주시면 됩니다.
// Content-MD5의 경우 BODY가 있어야 하는 POST, PATCH 요청에 대해서만 확인하기 때문에 GET, DELETE등의 요청에선 필요 없습니다.

// 원하시는 요청
await axios.default.get(
  '앱URL/path',
  {
    headers: {
      'X-Backpack-Date': xBackpackDate,
      'X-Backpack-Authorization': xBackpackAuthorization
    }
  }
);

// patch의 경우도 Content-MD5를 넣어주셔야 합니다.
await axios.default.post(
  '앱URL/path',
  {
    headers: {
      'X-Backpack-Date': xBackpackDate,
      'X-Backpack-Authorization': xBackpackAuthorization,
      'Content-MD5': contentMd5
    }
  }
);
```
