import styled, { css } from 'styled-components';
import media from './styles/mixins';
import { colours } from './styles/vars';


const ContainerSt = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  background-color: ${colours.yellow};
  color: ${colours.green};

  ${media.sm(css`
    background-color: ${colours.black};
  `)}

  ${media.md(css`
    background-color: ${colours.white};
  `)}

  ${media.lg(css`
    background-color: ${colours.red};
  `)}

  ${media.xl(css`
    background-color: ${colours.green};
    color: ${colours.white};
  `)}

  ${media.xxl(css`
    background-color: ${colours.blue};
  `)}
`;

export default ContainerSt;
