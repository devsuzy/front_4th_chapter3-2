# 항해 플러스 프론트엔드 4기 과제 8주차 <br/>: Chapter 3-2. 프론트엔드 테스트코드 (2)
- [과제 체크포인트](#과제-체크포인트)
    - [기본과제](#기본과제)
    - [심화과제](#심화과제)
- [과제 셀프회고](#과제-셀프회고)
  - [기술적 성장](#기술적-성장)
  - [코드 품질](#코드-품질)
  - [학습 효과 분석](#학습-효과-분석)
  - [과제 피드백](#과제-피드백)
- [리뷰 받고 싶은 내용](#리뷰-받고-싶은-내용)

## 과제 체크포인트

### 기본과제

#### 필수

- [x] 반복 유형 선택
  - 일정 생성 또는 수정 시 반복 유형을 선택할 수 있다.
  - 반복 유형은 다음과 같다: 매일, 매주, 매월, 매년
    - 만약, 윤년 29일에 또는 31일에 매월 또는 매년 반복일정을 설정한다면 어떻게 처리할까요? 다른 서비스를 참고해보시고 자유롭게 작성해보세요.
- [x] 반복 간격 설정
  - 각 반복 유형에 대해 간격을 설정할 수 있다.
  - 예: 2일마다, 3주마다, 2개월마다 등
- [x] 반복 일정 표시
  - 캘린더 뷰에서 반복 일정을 시각적으로 구분하여 표시한다.
    - 아이콘을 넣든 태그를 넣든 자유롭게 해보세요!
- [x] 반복 종료
  - 반복 종료 조건을 지정할 수 있다.
  - 옵션: 특정 날짜까지, 특정 횟수만큼, 또는 종료 없음 (예제 특성상, 2025-06-30까지)
- [x] 반복 일정 단일 수정
  - 반복일정을 수정하면 단일 일정으로 변경됩니다.
  - 반복일정 아이콘도 사라집니다.
- [x] 반복 일정 단일 삭제
  - 반복일정을 삭제하면 해당 일정만 삭제합니다.

#### 선택

- [ ] 예외 날짜 처리:
  - 반복 일정 중 특정 날짜를 제외할 수 있다.
  - 반복 일정 중 특정 날짜의 일정을 수정할 수 있다.
- [ ] 요일 지정 (주간 반복의 경우):
  - 주간 반복 시 특정 요일을 선택할 수 있다.
- [ ] 월간 반복 옵션:
  - 매월 특정 날짜에 반복되도록 설정할 수 있다.
  - 매월 특정 순서의 요일에 반복되도록 설정할 수 있다.
- [ ] 반복 일정 전체 수정 및 삭제
  - 반복 일정의 모든 일정을 수정할 수 있다.
  - 반복 일정의 모든 일정을 삭제할 수 있다.

### 심화과제

- [x] 이 앱에 적합한 테스트 전략을 만들었나요?

### 각 팀원들의 테스트 전략은?

시간이 없어서 팀 활동 및 통합 테스트는 진행하지 못했고, 반복 일정 기능에 따른 단위 테스트 코드만 작성했습니다.

### 합의된 테스트 전략과 그 이유는 무엇인가요?

### 추가로 작성된 테스트 코드는 어떤 것들이 있나요?

반복 일정 이벤트를 만드는 함수인 `createRepeatEvent`의 기능 구현 테스트 입니다.
선택한 반복 유형 및 간격에 따른 반복 일정을 생성하는 기능과 윤년, 윤달, 31일과 같은 특수 날짜에 대한 처리를 수월하게 처리하는 테스트를 진행했습니다.

---

## 과제 셀프회고

### 기술적 성장

> 🍦 TDD 학습하기

#### TDD(Test-Driven Development)
- TDD, 테스트 주도 개발은 소프트웨어 개발 방법론 중 하나로 매우 짧은 개발 사이클의 반복에 의존하는 개발 프로세스 입니다.
- 이 방법론의 핵심은 실제 코드를 작성하기 전에 테스트 케이스를 먼저 작성하는 것입니다.
- 실패하는 테스트 작성(Red) -> 통과하는 테스트 작성(Green) -> 코드 리팩토링(Refactor)으로 크게 세 단계로 나눌 수 있습니다.

#### TDD의 장점
- 테스트 케이스를 먼저 작성하기 때문에 개발 초기부터 버그를 발견하고 수정할 수 있습니다.
- 코드를 작성하기 전에 설계 품질이 향상하여 유지보수가 용이하고 확장성 있는 코드를 만들 수 있습니다.
- 코드를 리팩토링할 때 안정성을 유지하면서 개선할 수 있습니다.

#### TDD의 단점
- 테스트 케이스 작성에 대한 이해와 경험이 필요하기에 초반에는 시간과 노력이 많이 소요됩니다.
- 테스트 케이스를 먼저 작성하고 코드를 개발하는 과정은 초기 개발 속도를 늦출 수 있습니다.
- 때로는 과도한 설계를 유도할 수 있습니다.
- 단순한 코드나 빠르게 변화하는 요구사항을 가진 프로젝트에서는 적용하기 어렵습니다.

### 코드 품질

> 🎈`getRepeatUnitText` 유틸리티 함수 추가
- type을 인자로 받아 해당하는 단위를 반환
- 객체를 mapping하여 간결하고 유지보수하기 쉽게 구현

```javascript
const getRepeatUnitText = (type: RepeatType) => {
  const unitMap = {
    daily: '일',
    weekly: '주',
    monthly: '개월',
    yearly: '년',
    none: '',
  };
  return unitMap[type] || '';
};

...

// 캘린더 뷰에 반복 일정을 시각적으로 표시하는 아이콘
 const renderRepeatIcon = (event: Event) => {
  if (event.repeat.type !== 'none') {
    return (
      <Tooltip
        hasArrow
        label={`${event.repeat.interval}${getRepeatUnitText(event.repeat.type)}마다 반복 ${
          event.repeat.endDate ? `${event.repeat.endDate}까지` : ''
        }`}
      >
        <RepeatIcon />
      </Tooltip>
    );
  }
};
```

### 학습 효과 분석

>  🪄 TDD 기반으로 코드 작성해보기

1. 발제 자료의 필수로 추가되어야 하는 요구사항을 보고, 반복 일정 이벤트를 생성하는 로직을 먼저 구상
- 반복 유형 및 간격 선택 -> 매일, 매주, 매월, 매년
- 반복 일정 표시 -> 캘린더 뷰에서 반복 일정을 시각적으로 구분하여 표시
- 반복 종료 지정 -> 종료일이 없을 시, 2025-06-30까지
- 반복 일정 수정 및 삭제 -> 단일 일정 수정 및 삭제

2. 리스트에 대한 API 연결
```typescript
  const saveRepeatEvent = async (eventData: EventForm) => {
    try {
      const repeatedEvents = createRepeatEvents(eventData);
      console.log(repeatedEvents);
      const response = await fetch('/api/events-list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events: repeatedEvents }),
      });

      if (!response.ok) {
        throw new Error('Failed to save event');
      }

      await fetchEvents();
      onSave?.();
      toast({
        title: '일정이 추가되었습니다.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error saving event:', error);
      toast({
        title: '일정 저장 실패',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };
```

3. 기본 및 필수 기능을 하는 반복 일정 이벤트를 생성하는 함수를 1차적으로 작성
```typescript
export const createRepeatEvents = (eventData: EventForm) => {
  const repeatedEvents: EventForm[] = [];
  if (!eventData.repeat || eventData.repeat.type === 'none') {
    return [eventData];
  }
  const { type, interval, endDate } = eventData.repeat;
  const startDate = new Date(eventData.date);
  const repeatEndDate = endDate ? new Date(endDate) : new Date('2025-06-30');
  let currentDate = new Date(startDate);
  while (!repeatEndDate || currentDate <= repeatEndDate) {
    repeatedEvents.push({
      ...eventData,
      date: formatDate(currentDate),
    });
    switch (type) {
      case 'daily':
        currentDate.setDate(currentDate.getDate() + interval);
        break;
      case 'weekly':
        currentDate.setDate(currentDate.getDate() + 7 * interval);
        break;
      case 'monthly':
        currentDate.setDate(currentDate.getMonth() + interval);
        break;
      default:
        break;
    }
    if (repeatEndDate && currentDate > repeatEndDate) {
      break;
    }
  }
  return repeatedEvents;
};
```

4. 필수 기능에 따른 테스트 코드 및 특수 날짜에 따른 테스트 코드 작성
```javascript
describe('createRepeatEvents', () => {
  describe('반복 일정 테스트', () => {
      it('반복 설정이 되어있지 않으면 단일 일정을 반환한다.', () => {});
      it('입력한 종료 날짜까지 1일마다 매일 반복되는 일정을 생성한다.', () => {});
      it('입력한 종료 날짜까지 1주마다 매주 반복되는 일정을 생성한다.', () => {});
      it('입력한 종료 날짜까지 1달마다 매월 반복되는 일정을 생성한다.', () => {});
      it('입력한 종료 날짜까지 1년마다 매년 반복되는 일정을 생성한다.', () => {});
      it('종료 날짜를 입력하지 않으면 2025-06-30까지만 반복 일정이 생성된다.', () => {});
  
    describe('윤년 2월 29일 매년 반복 일정', () => {
      it('윤년이 아닌 해의 2월 29일 매년 반복 일정은 2월 28일로 조정된다.', () => {});
      it('다음 윤년에는 2월 29일에 정상적으로 반복된다.', () => {});
    });
  
    describe('31일 매월 반복 일정', () => {
      it('31일이 없는 달의 경우 해당 달의 마지막날로 조정된다.', () => {});
      it('31일이 있는 달의 경우 31일에 정상적으로 반복된다.', () => {});
    });
  
    describe('반복 일정 유효성 검사', () => {
      it('31일에 매월 반복 일정 생성이 가능하다.', () => {});
      it('2월 29일에 매년 반복 일정 생성이 가능하다', () => {});
    });
  });
};
```
5. 윤년/윤달/31일과 같은 특수 날짜 반복 일정 코드 구현
- 아래 코드 참조

### 과제 피드백

- 지난 과제와 달리 기능 구현과 테스트 코드를 모두 작성하려고 하니 좀 더 신경써야할게 많았습니다.
- 지난 과제의 학습으로인해 테스트 코드 작성은 생각보다 수월하게 진행되었습니다.
- 개인적으로 윤년/윤달/31일을 처리하는 로직 구현에 시간을 많이 써서 심화과제까지 진행하지 못한게 아쉬움이 남습니다.

## 리뷰 받고 싶은 내용

- 해당 월에 31일 또는 29일이 없을 경우 자동으로 다음 달로 변환하는 결과를 계속 초래했습니다. 
- `setFullYear`, `setMonth`, `setDate`등의 호출 순서 때문인 것 같습니다.
- 윤년/윤달/31일을 처리하는 함수 부분에서 계속해서 오류가 발생하여 코드를 계속 추가하다보니 함수 분리(getAdjustRepeatDate에서 31일 처리가 안되어 사용하지 못함)가 의미 없어지고, 함수 내에서 부수효과도 많이 발생하게 되었습니다.
- 해당 코드에 대한 피드백 부탁드립니다.😥

```typescript
export const createRepeatEvents = (eventData: EventForm) => {
  const repeatedEvents: EventForm[] = [];

  if (!eventData.repeat || eventData.repeat.type === 'none') {
    return [eventData];
  }

  const getAdjustRepeatDate = (date: Date): Date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let adjustedDate = new Date(date);

    // 윤달 2월 29일이 반복일 경우, 2월 28일로 처리
    if (month === 1 && day === 29 && !isLeapYear(year)) {
      adjustedDate.setDate(28);
    }

    // 31일이 반복일 경우, 해당 월의 마지막 일자로 처리
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    if (day > lastDayOfMonth) {
      adjustedDate.setDate(lastDayOfMonth);
    }

    return adjustedDate;
  };

  const { type, interval, endDate } = eventData.repeat;
  const startDate = new Date(eventData.date);
  const repeatEndDate = endDate ? new Date(endDate) : new Date('2025-06-30');
  let currentDate = new Date(startDate);

  while (!repeatEndDate || currentDate <= repeatEndDate) {
    repeatedEvents.push({
      ...eventData,
      date: formatDate(currentDate),
    });

    switch (type) {
      case 'daily':
        currentDate.setDate(currentDate.getDate() + interval);
        break;
      case 'weekly':
        currentDate.setDate(currentDate.getDate() + 7 * interval);
        break;
      case 'monthly':
        // 원래 설정된 날짜 저장 (31일인 경우 유지되도록)
        const originalDay = new Date(eventData.date).getDate();

        currentDate.setMonth(currentDate.getMonth() + interval, 1);

        const lastDayOfNewMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0
        ).getDate();

        // 원래 날짜 유지하되, 해당 월의 최대 날짜를 초과하면 마지막 날로 설정
        currentDate.setDate(Math.min(originalDay, lastDayOfNewMonth));
        break;
      case 'yearly':
        currentDate.setFullYear(currentDate.getFullYear() + interval);

        // 윤년이 아닌 해에서는 2월 28일로 조정
        if (currentDate.getMonth() === 2 && currentDate.getDate() === 1) {
          currentDate.setDate(0);
        }

        // 윤년을 다시 만나면 2월 29일로 조정
        if (
          currentDate.getMonth() === 1 &&
          currentDate.getDate() === 28 &&
          isLeapYear(currentDate.getFullYear())
        ) {
          currentDate.setDate(29);
        }
        currentDate = getAdjustRepeatDate(currentDate);
        break;
    }
    if (repeatEndDate && currentDate > repeatEndDate) {
      break;
    }
  }

  return repeatedEvents;
};
```
