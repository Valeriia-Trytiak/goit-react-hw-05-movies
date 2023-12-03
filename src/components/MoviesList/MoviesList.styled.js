// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export const MovieItem = styled.li`
//   flex-basis: calc((100% - ${p => p.theme.spacing(10)} * (1 - 1)) / 1);
//   text-align: center;
//   background-color: ${p => p.theme.colors.grey};
//   box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
//   border-radius: ${p => p.theme.spacing(10)};
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   /* &:first-child {
//     margin-top: ${p => p.theme.spacing(3)};
//   } */

//   &:hover,
//   &:focus {
//     transform: translateY(-4px);
//     box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
//   }

//   @media only screen and (min-width: 768px) {
//     flex-basis: calc((100% - ${p => p.theme.spacing(10)} * (3 - 1)) / 3);
//   }

//   @media only screen and (min-width: 1158px) {
//     flex-basis: calc((100% - ${p => p.theme.spacing(15)} * (4 - 1)) / 4);
//   }
// `;

// export const MovieLink = styled(NavLink)`
//   position: relative;
//   text-decoration: none;
//   font-size: 12px;
//   color: ${p => p.theme.colors.textColor};
//   font-weight: bold;
//   transition: color 0.3s ease;

//   &:hover {
//     color: ${p => p.theme.colors.accent};
//   }
// `;
// export const MoviePoster = styled.img`
//   width: 100%;
//   border-radius: ${p => p.theme.spacing(10)};
//   /* height: 300px; */
//   object-fit: cover;
//   position: relative;
//   z-index: 1;
//   transition: filter 0.3s ease;

//   ${MovieItem}:hover & {
//     filter: brightness(0.8);
//   }
// `;

// export const MoviesListContainer = styled.ul`
//   max-width: 275px;
//   margin: 0 auto;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   row-gap: ${p => p.theme.spacing(11)};
//   column-gap: ${p => p.theme.spacing(10)};

//   @media only screen and (min-width: 768px) {
//     max-width: 600px;
//   }

//   @media only screen and (min-width: 1158px) {
//     max-width: 1050px;
//     row-gap: ${p => p.theme.spacing(15)};
//     column-gap: ${p => p.theme.spacing(13)};
//   }
// `;

// export const OverlayText = styled.h2`
//   position: absolute;
//   bottom: 0;
//   transform: translateY(100%);
//   /* width: 100%; */
//   padding: 16px;
//   font-weight: 400;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   color: ${p => p.theme.colors.white};
//   background-color: rgba(0, 0, 0, 0.7);
//   z-index: 2;
//   visibility: hidden;

//   ${MovieItem}:hover & {
//     transform: translateY(0);
//     visibility: visible;
//   }
// `;

// export const ListThumb = styled.div`
//   position: relative;
//   overflow: visible;
// `;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieItem = styled.li`
  flex-basis: calc((100% - ${p => p.theme.spacing(10)} * (1 - 1)) / 1);
  text-align: center;
  background-color: ${p => p.theme.colors.grey};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: ${p => p.theme.spacing(10)};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus {
    transform: translateY(-8px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }

  @media only screen and (min-width: 768px) {
    flex-basis: calc((100% - ${p => p.theme.spacing(10)} * (3 - 1)) / 3);
  }

  @media only screen and (min-width: 1158px) {
    flex-basis: calc((100% - ${p => p.theme.spacing(15)} * (4 - 1)) / 4);
  }
`;

export const MovieLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: 14px;
  color: ${p => p.theme.colors.textColor};
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  border-radius: ${p => p.theme.spacing(10)};
  object-fit: cover;
  position: relative;
  z-index: 1;
  transition: filter 0.3s ease;

  ${MovieItem}:hover & {
    filter: brightness(0.8);
  }
`;

export const MoviesListContainer = styled.ul`
  max-width: 275px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: ${p => p.theme.spacing(11)};
  column-gap: ${p => p.theme.spacing(10)};

  @media only screen and (min-width: 768px) {
    max-width: 600px;
  }

  @media only screen and (min-width: 1158px) {
    max-width: 1050px;
    row-gap: ${p => p.theme.spacing(15)};
    column-gap: ${p => p.theme.spacing(13)};
  }
`;

export const OverlayText = styled.h2`
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  padding: 20px;
  font-weight: bold;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => p.theme.colors.white};
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  visibility: hidden;
  text-align: center;
  width: calc(100% + ${p => p.theme.spacing(1)});

  ${MovieItem}:hover & {
    transform: translateY(0);
    visibility: visible;
  }
`;

export const ListThumb = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${p => p.theme.spacing(10)};
  transition: transform 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
