import React from 'react';
import { AboutInfoContainer } from './styles';
import Calendar from './Svg/Calendar';
import Location from './Svg/Location';
import Education from './Svg/Education';
import Award from './Svg/Award';
import Certificate from './Svg/Certificate';

export default function AboutInfo(): JSX.Element {
  return (
    <AboutInfoContainer id="About">
      <article>
        <h3>
          <span>강동훈</span>
          <span>DONGHOON KANG</span>
        </h3>
        <div className="about-list">
          <ul>
            <li>
              <h4>
                <Calendar />
                Birth
              </h4>
            </li>
            <li>1997.03.25</li>
            <li>
              <h4>
                <Location />
                Location
              </h4>
            </li>
            <li>Seoul, Republic of Korea</li>
            <li>
              <h4>
                <Education />
                Education
              </h4>
            </li>
            <li>
              Computer Science,
              <br />
              University of Seoul
            </li>
          </ul>
          <ul>
            <li>
              <h4>
                <Award />
                Award
              </h4>
            </li>
            <li>2021 도시데이터 활용 아이디어 공모전</li>
            <li>2021.1학기 캡스톤 디자인 우수작품상</li>
            <li>
              <h4>
                <Certificate />
                Certificate
              </h4>
            </li>
            <li>정보처리기사</li>
            <li>MOS PowerPoint 2010</li>
            <li>MOS Excel Expert 2010</li>
            <li>TOEIC 875</li>
            <li>JLPT N3</li>
          </ul>
        </div>
      </article>
      <div className="picture-container">
        <img src="/image/donghoon.JPG" />
      </div>
    </AboutInfoContainer>
  );
}
