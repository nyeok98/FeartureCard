# FeatureCard

최근 현대카드 앱 업데이트와 함께 아주 마음에 드는 UI를 발견, 모킹을 진행해보고자 한다. <br/>
이후 라이브러리 구현 및 Demo 구현.

<br/>

### Tasks

- [ ] [WIP] Mocking
  - [x] Vite로 Boiler Plate 만들기
  - [x] Emotion으로 스타일 구성(추후 라이브러리화 할때의 변수 등을 활용하기 위해)
  - [x] Lottie로 애니메이션 구현
  - [ ] 라이브러리 없이 자체적으로 수치 계산해서 애니메이션 프레임 조절하는 방향으로 수정
- [ ] 라이브러리화
- [ ] Demo 구현

<br/>

### Notes

- (24.12.08) 렌더링 최적화를 위해 불필요한 라이브러리 계산을 제거하고 자체 document 내부의 `clientRect()` 사이즈로 전환 결정
- (24.12.05) [자주 잊는 것] `overflow: scroll` 옵션은 자신과 바로 윗 부모에서 허용해줘야함 + `white-space` 속성 확인

<br/>

### Example

![example3](https://github.com/user-attachments/assets/02043be7-6c8f-4d36-a9c9-91415a7ace65)
