import React, { FC } from 'react';
import svg, { Path, Svg } from 'react-native-svg';

const LockIcon: FC = () => {
    return (
        <Svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.5 14.4762C7.93641 14.4762 7.39591 14.2855 6.9974 13.9462C6.59888 13.6068 6.375 13.1466 6.375 12.6667C6.375 11.6624 7.32062 10.8571 8.5 10.8571C9.06359 10.8571 9.60409 11.0478 10.0026 11.3871C10.4011 11.7265 10.625 12.1868 10.625 12.6667C10.625 13.1466 10.4011 13.6068 10.0026 13.9462C9.60409 14.2855 9.06359 14.4762 8.5 14.4762ZM14.875 17.1905V8.14286H2.125V17.1905H14.875ZM14.875 6.33333C15.4386 6.33333 15.9791 6.52398 16.3776 6.86333C16.7761 7.20268 17 7.66294 17 8.14286V17.1905C17 17.6704 16.7761 18.1307 16.3776 18.47C15.9791 18.8094 15.4386 19 14.875 19H2.125C1.56141 19 1.02091 18.8094 0.622398 18.47C0.223883 18.1307 0 17.6704 0 17.1905V8.14286C0 7.13857 0.945625 6.33333 2.125 6.33333H3.1875V4.52381C3.1875 3.32402 3.74721 2.17337 4.74349 1.32499C5.73978 0.476614 7.09104 0 8.5 0C9.19765 0 9.88846 0.117012 10.533 0.344355C11.1775 0.571697 11.7632 0.904919 12.2565 1.32499C12.7498 1.74507 13.1411 2.24377 13.4081 2.79262C13.6751 3.34148 13.8125 3.92973 13.8125 4.52381V6.33333H14.875ZM8.5 1.80952C7.65462 1.80952 6.84387 2.09549 6.2461 2.60452C5.64832 3.11355 5.3125 3.80394 5.3125 4.52381V6.33333H11.6875V4.52381C11.6875 3.80394 11.3517 3.11355 10.7539 2.60452C10.1561 2.09549 9.34538 1.80952 8.5 1.80952Z" fill="#C7C7C7" />
        </Svg>
    )
}

export default LockIcon;