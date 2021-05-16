import * as React from 'react';
import styled, { css } from 'styled-components';
import { device } from '../../helpers';

const defaults = {
  gutter: '30px',
  col: 1,
  colTablet: 2,
  colLaptop: 3,
  colDesktop: 4
};

const settings = {};

const initSettings = props => {
  props.gutter ? settings.gutter = props.gutter : settings.gutter = defaults.gutter;
  props.col ? settings.col = props.col : settings.col = defaults.col;

  if (props.colTablet) {
    settings.colTablet = props.colTablet;
    settings.hasTablet = true;
  } else {
    settings.colTablet = defaults.colTablet;
    settings.hasTablet = false;
  }

  if (props.colLaptop) {
    settings.colLaptop = props.colLaptop;
    settings.hasLaptop = true;
  } else {
    settings.colLaptop = defaults.colLaptop;
    settings.hasLaptop = false;
  }

  if(props.colDesktop) {
    settings.colDesktop = props.colDesktop
    settings.hasDesktop = true;
  } else {
    settings.colDesktop = defaults.colDesktop
    settings.hasDesktop = false;
  };

  // props.colTablet ? settings.colTablet = props.colTablet : settings.colTablet = defaults.colTablet;
  // props.colLaptop ? settings.colLaptop = props.colLaptop : settings.colLaptop = defaults.colLaptop
  // props.colDesktop ? settings.colDesktop = props.colDesktop : settings.colDesktop = defaults.colDesktop

}

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(-${settings => settings.gutter} / 2);
  margin-right: calc(-${settings => settings.gutter} / 2);

  > div {
    margin-left: calc(${settings => settings.gutter} / 2);
    margin-right: calc(${settings => settings.gutter} / 2);
    width: calc(100% / ${settings => settings.col} - ${settings => settings.gutter});
    
    ${settings => settings.hasTablet && css`
      @media ${device.tablet} {
        width: calc(100% / ${settings => settings.colTablet} - ${settings => settings.gutter});
      }
    `}
    
    ${settings => settings.hasLaptop && css`
      @media ${device.laptop} {
        width: calc(100% / ${settings => settings.colLaptop} - ${settings => settings.gutter});
      }
    `}

    ${settings => settings.hasDesktop && css`
      @media ${device.desktop} {
        width: calc(100% / ${settings => settings.colDesktop} - ${settings => settings.gutter});
      }
    `}
  }
`;

const Grid = (props) => {
  initSettings(props);
  
  return (
    <GridWrapper {...settings}>
      {props.children}
    </GridWrapper>
  )
}

export default Grid