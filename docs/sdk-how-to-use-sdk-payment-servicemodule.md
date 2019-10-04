---
id: sdk-how-to-use-sdk-payment-servicemodule
title: 결제 서비스모듈 SDK 사용하기
sidebar_label: 결제 서비스모듈 SDK 사용하기
---

SDK를 활용하여 결제 서비스모듈을 쉽게 사용할 수 있는 방법을 알아봅니다. 10줄 코딩으로 웹이나 앱에서 쉽게 PG를 연동할 수 있는 모듈로써 서비스 수수료를 추가로 받지 않습니다.

## 시작하기 전에

웹에서 하나이상의 PG에 가입이되어 있고 어플리케이션에 결제 서비스모듈에 해당 PG가 연동이 되어있어야 합니다.
연동이 되어있으면 [시작하기](https://naver.com)로 넘어가시면 됩니다.

### 결제 연동하기

이미지로 결제 연동방법을 설명합니다.

## 사용하기

연동이 되었으면 SDK를 사용할 준비가 되신겁니다. 아래에서는 언어별로 결제를 사용하는 방법을 알아보겠습니다.

### 자바스크립트 (타입스크립트 호환)

브라우저 사용 예

```Javascript
// Javascript version in browser
<script>주소</script>

var bpPayment = new BP.Payment({
  apiKey: '',
  apiSecret: '',
  applicationId: '',
  paymentGatewayId: '',
});

// web page 호출 (Iframe)
bpPayment.payment(function(resp) {
  /* 결제 완료 후 호출. */

  // 성공
  if (resp.success) {
    alert('결제성공');

  // 실패
  } else {
    alert('결제실패');
  }
});

```

NodeJS, ReactJS 등, npm 패키지를 사용할 수 있는 곳에서의 사용 예

설치

```Javascript
npm install @corretto/backpack
// or
yarn add @corretto/backpack
```

```Typescript
// Typescript version
import { BP } from '@corretto/backpack';

const bpPayment = new BP.Payment({
  apiKey: '',
  apiSecret: '',
  applicationId: '',
  paymentGatewayId: '',
});

// web page 호출 (Iframe)
bpPayment.payment((resp) => {
  /* 결제 완료 후 호출. */

  // 성공
  if (resp.success) {
    alert('결제성공');

  // 실패
  } else {
    alert('결제실패');
  }
});

```
