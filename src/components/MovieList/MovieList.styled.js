import styled from "@emotion/styled/macro";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
`;

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  height: 464px;
`;
