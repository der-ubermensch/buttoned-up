import React from 'react';
import styled from 'styled-components';


export interface AvatarProps {
    image?: string;
    alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, alt }) => {
    return (
        <StyledAvatar>
            <img src={image} alt={alt && alt} />
        </StyledAvatar>
    );
};

const StyledAvatar = styled.div`
  background: gray;
  border-radius: 50%;
  flex-shrink: 0;
  height: 64px;
  overflow: hidden;
  width: 64px;
  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export { Avatar, StyledAvatar };
