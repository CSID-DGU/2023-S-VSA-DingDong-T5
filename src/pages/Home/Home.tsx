import {
  Root,
  LogoSection,
  LogoImg,
  LogoTypo,
  Header,
  Div,
  Login,
  SignUp,
  Container,
  Button1,
  Button2,
  Block,
  QuestionBlock,
  AnswerBlock,
  TitleBlock,
  QuestionTypo,
  TitleText,
  TopItems,
  ButtonBar,
  HashBody,
} from "./styled";
import { SearchBar } from "components/Header";
import { RealCarousel } from "../../components/HashtagBar/";
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Articles from "../../db/articles.json";

export const Home = () => {
  const HashtagArr = Articles.map(item => item.hashtags);
  const oneHashtag = HashtagArr.flat();
  const onlyHashtag = Array.from(new Set(oneHashtag)).slice(0, 13);
  const carouselItems: JSX.Element[] = onlyHashtag.map((item, index) => (
    <div key={index}>
      {onlyHashtag[index]}
    </div>
  ));

  // console.log(carouselItems);
  // const [fetchSearch, setSearch] = useState('');
  // const [page, setPage] = useState(1);
  // const [sortType, setSortType] = useState('Popular');

  // const handleChange = (e: any) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  //   setPage(1)
  // };
  
  return (
    <Root>
      <Header>
        <LogoSection>
          <LogoImg />
          <LogoTypo>DINGDONG</LogoTypo>
        </LogoSection>
        <Div>
          <Login>
            <Link to={'/signin'}>로그인</Link>
          </Login>
          <SignUp>
            <Link to={'/signup'}>회원가입</Link>
          </SignUp>
        </Div>
      </Header>
      <Container>
        <SearchBar
          placeholder="함께 이어지는 여정, 여행 커뮤니티 딩동" 
          data={Articles}
        /> 
        <ButtonBar>
          <Link to={'/articles/write'}>
            <Button1> 질문하기</Button1>
          </Link>
          <Link to={'/articles'}>
            <Button2> 바로가기</Button2>
          </Link>
        </ButtonBar>
        <Block>
          <QuestionBlock>
            <TitleBlock>
              <QuestionTypo>Q</QuestionTypo> <TitleText>인기 질문</TitleText>
            </TitleBlock>
            <TopItems></TopItems>
          </QuestionBlock>
          <AnswerBlock>
            <TitleBlock>
              <QuestionTypo>A</QuestionTypo> <TitleText>인기 답변</TitleText>
            </TitleBlock>
            <TopItems></TopItems>
          </AnswerBlock>
        </Block>
        <HashBody>
          <RealCarousel items={carouselItems} />
        </HashBody>
      </Container>
    </Root>
  );
};
