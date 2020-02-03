<h1>Vue 프로젝트 설정방법</h1>

<h3>1. 뷰 CLI 설치</h3>
<pre>
  <code>
    npm install vue-cli -global
  </code>
</pre>
<img width="671" alt="스크린샷 2020-02-03 오후 2 42 27" src="https://user-images.githubusercontent.com/31758135/73628355-68c37c00-4693-11ea-8823-5fce6f8288e1.png">

 - 뷰 CLI 명령어
<table>
  <tr>
    <td>vue init webpack</td>
    <td>고급 웹팩 기능을 활용한 프로젝트 구성 방식. 테스팅, 문법검사 등 지원</td>
  </tr>
  <tr>
    <td>vue init webpack-simple</td>
    <td>웹팩 최소 기능을 활용한 프로젝트 구성 방식. 빠른 화면 프로토타이핑용</td>
  </tr>
  <tr>
    <td>vue init browserify</td>
    <td>고급 브라우저리파이 기능을 활용한 프로젝트 구성방식. 테스팅, 문법검사 등 지원</td>
  </tr>
  <tr>
    <td>vue init browserify-simple</td>
    <td>브라우저리파이 최소 기능을 활용한 프로젝트 구성 방식. 빠른 화면 프로토타이핑용</td>
  </tr>
   <tr>
    <td>vue init simple</td>
    <td>최소 뷰 기능만 들어간 HTML 파일 1개 생성</td>
  </tr>
   <tr>
    <td>vue init pwa</td>
    <td>웹팩 기반의 프로그레시브 웹앱(PWA, Progressive Wev App) 기능을 지원하는 뷰 프로젝트</td>
  </tr>
</table>
<br>
<h3>2. 뷰 CLI로 프로젝트 생성하기</h3>
  
  - 뷰 프로젝트를 생성할 빈 폴더 하나 생성하기 

  - 프롬프트 창에서 아래 코드 입력
<pre>
  <code>
    vue init webpack-simple
  </code>
</pre>
<img width="538" alt="스크린샷 2020-02-03 오후 3 14 21" src="https://user-images.githubusercontent.com/31758135/73629899-dc678800-4697-11ea-90fb-8611c2c90f17.png">

 - 생성된 폴더구조
 <img width="168" alt="스크린샷 2020-02-03 오후 3 15 41" src="https://user-images.githubusercontent.com/31758135/73629969-0caf2680-4698-11ea-9685-34d331169a4c.png">
 (package.json 파일은 프로젝트 정보를 담고 있는 설정 파일임과 동시에
 
  npm 명령어 빛 뷰로 어플리케이션을 제작하는데 필요한 라이브러리 정보들을 포함함.


  **npm install 명령어를 실행하면 package.json의 라이브러리 목록이 전부 프로젝트의 node_modules 폴더 및에 설치됨.** )
 <pre>
  <code>
    npm install
  </code>
</pre>

<img width="1275" alt="스크린샷 2020-02-03 오후 3 26 11" src="https://user-images.githubusercontent.com/31758135/73630476-84318580-4699-11ea-8346-d0734dacbeaf.png">
<br>
<h3>3. 프로젝트 구동하기</h3>

  - 아래 명령어 실행시 index.html 파일 실행
 <pre>
  <code>
    npm run dev
  </code>
</pre>
<img width="981" alt="스크린샷 2020-02-03 오후 3 29 28" src="https://user-images.githubusercontent.com/31758135/73630627-f99d5600-4699-11ea-9ee1-375e1f161847.png">
<br><br>

> <h3>뷰 로더</h3>
>
> **Vue Loader**는 웹팩에서 지원하는 라이브러리
>
> 싱글 파일 컴포넌트 체계에서 사용하는 .vue 파일의 내용을 브라우저에서 실행 가능한 웹 페이지의 형태로 변환해줌
>
> 위에 wepack-simple 프로젝트를 생성하고 실행시켰을때 App.vue 파일의 내용이 웹페이지에 표시됨
>
> 이때 뷰 로더가 <template>, <script>, <style>의 내용이 각각 HTML, JS, CSS로 인식될 수 있도록 **변환작업**을 한것
>
> 뷰 로더 속성을 확인하려면 **webpack.config.js** 파일 확인
