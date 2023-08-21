import styled from 'styled-components';
import SearchIcon from '../../assets/icon/search.svg';
import Logo from '../../assets/icon/logo.svg';
import NotificationIcon from '../../assets/icon/notification.svg';
import { SearchBar } from './SearchBar';

export const Root = styled.header`
  padding-top: 32px;
  display: flex;
  align-items: center;
`;

export const LogoSection = styled.div`
  display: flex;
  width: 136px;
  height: 54px;
  justify-content: center;
  align-items: center;
  padding-right: 25px;
  margin-right: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const LogoImg = styled.img.attrs({
  src: Logo,
})`
  width: 22px;
  height: 22px;
`;

export const LogoTypo = styled.div`
  color: #7c3aed;
  text-align: right;
  font-family: 'Inter';
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -1px;
`;

export const NotificationSection = styled.img.attrs({
  src: NotificationIcon,
})`
  width: 32px;
  height: 32px;
  margin-left: 17px;
  &:hover {
    cursor: pointer;
  }
`;

export const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface IWrapper {
  $ishome?: boolean;
  $isSearching?: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  justify-content: center;
  width: ${props => (props.$ishome ? '686px' : '661px')};
  height: ${props => (props.$ishome ? '68px' : '48px')};
  border-radius: ${props => (props.$isSearching ? '15px' : '50px')};
  background: #fff;
  box-shadow: 0px 0px ${props => (props.$ishome ? '30px' : '8px')} 0px rgba(100, 116, 139, 0.18);
  margin-left: ${props => (props.$ishome ? '0' : '27px')};

  .SearchInput {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background-image: url(${SearchIcon});
    background-size: ${props => (props.$ishome ? '23px' : '18px')};
    background-repeat: no-repeat;
    background-position: ${props => (props.$ishome ? '30px 50%' : '18px 50%')};
    padding-left: ${props => (props.$ishome ? '75px' : '60px')};
    padding-right: ${props => (props.$ishome ? '25px' : '0')};
    font-size: ${props => (props.$ishome ? '18px' : '16px')};
    ${props =>
      props.$ishome &&
      `
  &::placeholder {
    color: #94a3b8;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`}
  }

  .Div {
    width: 50px;
    background-color: transparent;
    display: grid;
    place-items: center;

    svg {
      cursor: pointer;
      font-size: 16px;
      margin-right: 10px;
    }
  }
`;

export const SearchInput = styled.input<IWrapper>`
  width: 100%;
  height: 100%;
  border-radius: ${props => (props.$isSearching ? '5px' : '20px')};
  background-image: url(${SearchIcon});
  background-size: ${props => (props.$ishome ? '23px' : '18px')};
  background-repeat: no-repeat;
  background-position: ${props => (props.$ishome ? '30px 50%' : '18px 50%')};
  padding-left: ${props => (props.$ishome ? '75px' : '60px')};
  padding-right: ${props => (props.$ishome ? '25px' : '0')};
  font-size: ${props => (props.$ishome ? '18px' : '16px')};
  ${props =>
    props.$ishome &&
    `
  &::placeholder {
    color: #94a3b8;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`}
`;

export const DataResult = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 0 0 20px 20px;
  margin-top: 60px;
  box-shadow: 0px 8px 8px 0px rgba(100, 116, 139, 0.1);
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 1rem;
  }

  a {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    color: black;
    text-decoration: none;
    padding: 5px 15px;

    &:hover {
      background-color: #ede9fe;
      cursor: pointer;
    }
    .title {
      font-weight: 500;
    }
    .content {
      all: unset;
      font-size: 13px;
      > * {
        all: unset;
        display: inline-block;

        &:not(:first-child) {
          margin-left: 2px;
        }
      }
    }
  }
`;
