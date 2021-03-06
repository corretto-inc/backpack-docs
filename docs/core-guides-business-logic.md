---
id: core-guides-business-logic
title: 비즈니스 로직
sidebar_label: 비즈니스 로직
---

비즈니스로직은 데이터를 가공하기 위한 기능입니다.

## 트리거

트리거는 모델 항목 전/후, 각종 서비스 실제 기능 전/후에 이벤트를 불러올 수 있는 기능을 제공합니다. [Http Method](https://naver.com)에 따라 각각 다르게 설정할 수 있습니다.

### 트리거 추가하기

1. 좌측에 비즈니스로직을 클릭합니다.
2. 트리거추가를 클릭하여 트리거를 추가합니다.

## 이벤트

이벤트는 트리거의 작업항목 중 하나의 단위를 의미합니다. 하나의 트리거에 여러가지 이벤트가 연동될 수 있으며 그 순서도 지정할 수 있습니다.

### 이벤트 추가하기

1. 좌측에 비즈니스로직을 클릭합니다.
2. 이벤트를 추가하고 싶은 트리거의 이벤트 관리를 클릭합니다.
3. 원하시는 지점에 이벤트를 생성, 추가합니다. (시간이 소요될 수 있습니다.)
4. 생성된 이벤트 내에서 원하시는 이벤트를 호출하실 수 있습니다. (베타버전에서는 코딩으로된 Custom형식만 지원하고 있습니다.)

### 커스텀 코딩하기

베타버전에서는 비즈니스로직의 기능이 커스텀으로 제약되어 있습니다.
