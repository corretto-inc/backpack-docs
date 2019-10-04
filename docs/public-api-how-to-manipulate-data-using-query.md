---
id: public-api-how-to-manipulate-data-using-query
title: 쿼리를 활용하여 데이터다루기
sidebar_label: 쿼리를 활용하여 데이터다루기
---

백팩에서 쿼리를 활용하여 필터링, 정렬 등 다양하게 데이터를 다룰 수 있는 방법을 알아봅니다.

## 쿼리 가능 목록

쿼리는 크게 5가지로 분류되어 이용됩니다.

### LIMIT

데이터 양을 조절하는 파라미터입니다. 필수적으로 숫자여야 하며 실패하거나 존재하지 않으면 기본적으로 20개가 조정됩니다.

```Typescript
const url = 'https://sampleurl.com?LIMIT=10';
```

### OFFSET

데이터의 초기 인덱스 값을 조절하는 파라미터입니다. 필수적으로 숫자여야 하며 실패하거나 존재하지 않으면 기본적으로 0으로 조정됩니다.

```Typescript
const url = 'https://sampleurl.com?OFFSET=0';
```

### SELECT

해당 모델의 갖고오는 필드를 지정할 수 있는 파라미터입니다. 필수적으로 배열형태여야 하며 각 필드는 문자열이여야 합니다.

```Typescript
const selectString = encodeURIComponent('[필드명1, 필드명2, 필드명3]');
const url = `https://sampleurl.com?SELECT=${selectString}`;
```

### FILTER

해당 모델에 데이터를 검색 시 조건을 이용하여 정보를 갖고올 수 있는 파라미터입니다. 필수적으로 배열형태여야 하며 다양한 명령어가 있습니다.

```Typescript
const filterString = encodeURIComponent(`
[
  { // 둘 중 하나의 형태로 들어갑니다.
    "Op.or, and": [
      "컬럼명": {
        "Op.eq, ne...": "값"
      }
    ]
  },
  {
    "컬럼명": {
      "Op.eq, ne...": "값"
    }
  },
]`);
const url = `https://sampleurl.com?FILTER=${filterString}`;
```

### SORT

데이터를 검색 후 정렬이 필요한 경우 사용합니다. ASC(오름차순), DESC(내림차순) 두 가지 형태를 지원합니다.

```Typescript
const sortString = encodeURIComponent(`
[
  {
    field: "createdAt",
    direction: "ASC",
  },
  {
    field: "updatedAt",
    direction: "DESC",
  },
]`);
const url = `https://sampleurl.com?SORT=${filterString}`;
```

## 주의사항

- 특수문자들은 필수로 인코딩 되어야 합니다.
- 좀 더 좋은 구축환경을 제공하고자 평범한 개발경험에 맞게 정식출시 버전의 업데이트 내역에 쿼리스트링에 대한 부분이 확정되어 있습니다. 사용에 유의하시기 바랍니다. 불편을 드려 죄송합니다.
