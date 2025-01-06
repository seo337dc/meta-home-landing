"use client";

import { styled } from "styled-components";

const Intro = () => {
  return (
    <div>
      <div>
        <TitleText>
          진실된 리뷰로 기업의 가치를 평가하고, 진성 인증으로 신뢰를 보장합니다.
        </TitleText>
        <TitleText>
          &quot;METAHOME&quot;에서 건강하고 투명한 디지털 생태계를 조성하세요.
        </TitleText>
      </div>

      <div></div>
    </div>
  );
};

export default Intro;

const TitleText = styled.p`
  font-family: Pretendard;
  font-size: 1.822vw;
  font-weight: 700;

  text-align: center;
`;
