import styled from 'styled-components';

const getWidthtring = (span) => {
    if(!span) return ;

    let width = span / 12 * 100;
    return `width: ${width}%;`;
}

const Column = styled.div`
    float: left;
    ${({ xs }) => ( xs? getWidthtring(xs) : 'width: 100%')}

    border: 1px solid rgba(0,0,0,0.4);

    @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthtring(sm)};
    }
    @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidthtring(md)};
    }
    @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthtring(lg)};
    }
`
const Row = styled.div`
    width: 100%;
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`

export {Column,Row}