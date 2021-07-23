import styled from 'styled-components';
import ReactPlayer from 'react-player'

export const PlayerWrap = styled.div`
  z-index: 2;
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
`

export const ReactStyled = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`
export const StyledText = styled.div`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`