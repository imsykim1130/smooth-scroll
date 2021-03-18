# smooth-scroll

## 공부한 것

- debounce
- intersection observer

## 코드설명

- **transform**의 _translate3d_ 속성을 이용하여 부드럽게 스크롤 되는 것 처럼 구현해 보았습니다.<br><br>
- 짧은 시간 내에 중복으로 일어나는 wheel event 를 제어하기 위하여 **debounce** 를 사용했습니다.<br><br>
- image 의 가시성을 판단하기 위하여 **intersection observer** 를 사용했습니다. 가시성을 판단하여 viewport 에 보이는 요소가 바뀔 때 마다 body의 background-color 속성을 바꿔주었습니다.
