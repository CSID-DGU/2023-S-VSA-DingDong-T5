import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 23px;
  margin-right: 40px;
  height: 400px;
  overflow: auto;
`;

export const Table = styled.div<{ $expanded?: boolean }>`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 185px;
  max-height: ${props => (props.$expanded ? 'auto' : '200px')};
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

// export const Tbody = styled.tbody``;

export const Button = styled.button`
  font-color: #0f172a;
  font-size: 15px;
`;

export const Tr = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Td = styled.div``;

export const Special = styled.button`
  margin-left: 10px;
  margin-bottom: 5px;
  padding: 5px 15px;
  background-color: #8b5cf6;
  color: #ffffff;
  border: 1px solid #8b5cf6;
  border-radius: 20px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const HashTag = styled.button<{ $click?: boolean }>`
  margin-left: 10px;
  margin-bottom: 5px;
  padding: 5px 15px;
  background-color: ${props => (props.$click ? '#8B5CF6' : '#f1f5f9')};
  color: ${props => (props.$click ? '#FFFFFF' : '#64748b')};
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
    background-color: ${props => (props.$click ? '#8B5CF6' : '')};
    color: ${props => (props.$click ? '#FFFFFF' : '')};
  }
`;

export const Img = styled.img`
  margin-left: 7px;
`;
