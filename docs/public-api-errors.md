---
id: public-api-errors
title: 퍼블릭 API 에러목록
sidebar_label: 퍼블릭 API 에러목록
---

## BadRequest

status 400

### DnsResolveFailed

DNS 확인실패 시 발생합니다.

### FilenameTooLong

파일 이름이 긴 경우 발생합니다.

### MalformedBackpackToken

백팩에 접근하는 용도의 토큰이 올바르지 않은 경우 발생합니다.

### MalformedMd5

Content-MD5가 올바르지 않은 경우 발생합니다.

### MissingArrayColumnType

배열의 컬럼타입이 정의되지 않은 경우 발생합니다.

### MissingArrayReferenceTable

배열의 참조 테이블이 정의되지 않은 경우 발생합니다.

### MissingHeader

해당 헤더가 존재하지 않은 경우 발생합니다.

### MissingReferenceTable

참조 테이블이 정의되지 않은 경우 발생합니다.

### MissingResourceId

리소스 ID가 없는 경우 발생합니다.

### MissingUserPayload

사용자 Payload가 존재하지 않은 경우 발생합니다.

### NestedArrayDoesNotSupport

중첩 배열을 사용 시도한 경우 발생하며, 중첩 배열은 현재 지원하지 않습니다.

### NotNullConstraintFailed

필수 필드이지만 값이 없는 경우 발생합니다.

### PaymentTypeDoesNotSupport

결제 타입이 지원하지 않는 타입의 경우 발생합니다.

### RequestTooLate

너무 늦게 요청되는 경우 발생합니다.

### RequireFunctionDoesNotSupport

이벤트 커스텀 코딩 중 require를 사용하는 경우 발생합니다.

### InvalidOperationPatchFailed

업데이트 요청 시, [RFC6902](https://naver.com)에 정의된 OP값이 아니거나 없는 경우 발생합니다.

### MissingPatchFailed

업데이트 요청 시, 키 값이 충분하지 않은 경우 발생합니다.

### TestPatchFailed

업데이트 요청 시, 올바른 [RFC6902](https://naver.com) 형식이 아닌 경우 발생합니다.

### GetBillingKeyFailed

결제 요청 시, 어떠한 이유에 의해 PG사의 빌링키를 얻을 수 없는 경우 발생합니다.

### RemoveBillingKeyFailed

PG사의 빌링키를 삭제요청이 실패한 경우 발생합니다.

### TryCancelFailed

결제 취소 요청이 실패한 경우 발생합니다.

### TryPayFailed

결제 요청이 실패한 경우 발생합니다.

### IsNotArray

쿼리가 배열형식이 아닌 경우 발생합니다.

### IsNotNumber

쿼리에 숫자가 필요한 경우지만 숫자가 아닌 값이 들어온 경우 발생합니다.

### IsNotOp

쿼리에 올바른 OP값이 아닌경우 발생합니다.

### IsNotStringOrNumber

쿼리에 숫자나 문자열이 필요하지만 요청 값이 숫자나 문자열이 아닌 경우 발생합니다.

### IsNotSupport

쿼리에 지원하지 않는 명령어가 들어온 경우 발생합니다.

### QueryParsingFailed

쿼리 파싱이 실패한 경우 발생합니다.

### AlphaValidationFailed

알파벳 형식만 받을 수 있는 곳에 알파벳이 아닌 다른 값이 들어올 경우 발생합니다.

### DateValidationFailed

날짜 형식만 받을 수 있는 곳에 날짜가 아닌 다른 값이 들어올 경우 발생합니다.

### EmailValidationFailed

이메일 형식만 받을 수 있는 곳에 이메일이 아닌 다른 값이 들어올 경우 발생합니다.

### EnumValidationFailed

특정 열거형 형식만 받을 수 있는 곳에 열거형이 아닌 다른 값이 들어올 경우 발생합니다.

### NumberValidationFailed

숫자만 받을 수 있는 곳에 숫자가 아닌 다른 값이 들어올 경우 발생합니다.

### StringValidationFailed

문자열만 받을 수 있는 곳에 문자열이 아닌 다른 값이 들어올 경우 발생합니다.

## Conflict

status 409

### EmailAlreadyUsed

회원가입시 이메일이 이미 존재하는 경우 발생합니다.

### InsertFailed

데이터를 저장하려 시도하다 실패한 경우 발생합니다.

### UniqueConstraintFailed

고유한 값이 저장되야만 하는 필드에 중복된 값이 입력된 경우 발생합니다.

## InternalServerError

status 500, 서버에러로 발생하는대로 수 분내로 처리되지 않으면 언제든지 [고객지원](https://naver.com)으로 요청해 주세요.

### ConfigDoesNotSet

서버의 설정 값이 잘못된 경우 발생합니다.

### GeneratePemKeyFailed

메시지 서비스 모듈 중 이메일 확인 과정에서 필요한 PEM키 발급에 실패한 경우 발생합니다.

### NewError

찾아내지 못한 새로운 오류가 발생한 경우 발생합니다.

## NotFound

status 404

### CompiledModelDoesNotExist

컴파일된 모델을 찾을 수 없는 경우 발생합니다.

### DocumentDoesNotExist

해당 모델의 문서를 찾을 수 없는 경우 발생합니다.

### MatchedRouterDoesNotExist

매칭되는 라우터 경로를 찾을 수 없는 경우 발생합니다.

## NotImplemented

status 501, 아직 기능을 구현하지 않은 경우 발생합니다. 최대한 빠르게 구현하겠습니다. 진행사항을 알고싶으신 경우 언제든지 [고객지원](https://naver.com)으로 요청해 주세요.

## PermissionDenied

status 403

### AccessDenied

접근이 허락되지 않는 경로를 요청한 경우 발생합니다.

### UserIdDoesNotMatched

요청한 사용자와 다른 사용자의 요청을 한 경우 발생합니다.

## Unauthorized

status 401

### AccessTokenDoesNotExist

엑세스토큰이 필요하나 존재하지 않는 경우 발생합니다.

### AccessTokenExpired

엑세스토큰이 만료된 경우 발생합니다.

### MalformedAccessToken

엑세스토큰이 변조된 경우 발생합니다.

### PasswordIncorrect

비밀번호가 틀린 경우 발생합니다.
