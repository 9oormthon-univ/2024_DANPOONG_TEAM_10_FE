# 2024_DANPOONG_TEAM_10_FE
누구에게나 만족을 선사하는 '오달지다'

## 브렌치 컨벤션

- main
- develop
- develop/page명


## 커밋 컨벤션

- Feat - 새로운 기능을 추가할 경우
- Fix - 버그를 고친 경우
- Design - CSS 등 사용자 UI 디자인 변경
- Style - 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- Refactor - 프로덕션 코드 리팩토링
- Comment - 필요한 주석 추가 및 변경
- Docs - 문서를 수정한 경우
- Test - 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
- Chore - 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)
- Rename - 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- Remove - 파일을 삭제하는 작업만 수행한 경우

+ !BREAKING CHANGE - 커다란 API 변경의 경우
+ !HOTFIX - 급하게 치명적인 버그를 고쳐야하는 경우

<br/>

1. 각 페이지별로 developer/Page 브랜치를 만들고 시작합니다.
2. 기능별로 제작하고 커밋합니다.
3. 완성된 페이지는 PR을 올려서 develop 브랜치로 병합합니다.
4. 빌드 및 테스트가 완료되면 main 브랜치로 병합합니다.

---
