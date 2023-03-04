import styles from '../styles/About.module.css';

export default function about() {
    return(
      <div className= {styles.explain}>
        <h1>이 사이트는 당신의 감정을 모니터링 하는것을 도와줍니다.</h1>
        <h1>매일매일 당신의 감정을 기록하고, 감정의 추세를 보여주며 당신의 감정을 예측해줍니다.</h1>
        <h1>사이트에 로그인 하고 하루를 마무리 한 후 당신의 감정을 기록하세요</h1>
        <h1>당신의 감정을 분석하여 당신이 감정을 이해하는것을 도와드립니다.</h1>
      </div>
    )
  }