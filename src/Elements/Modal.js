import React, { Component } from 'react'
import styled from 'styled-components';
import { Transition, animated, config } from 'react-spring';

import { Portal, absolute } from 'Utilities';
import Icon from './Icon';
import { Card } from './Cards';


export default class Modal extends Component {
  render() {
      const { children, toggle, on} = this.props;
    return (
      <Portal>
          <Transition
            native
            config={config.gentle}
            items={on}
            from={{ opacity: 0, bgOpacity: 0, y: -50 }}
            enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
            leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
          >
          {on => on && (props =>
          <ModalWrapper>
              <ModalCard style={{
                  transform: props.y.interpolate(y => `translate3d(0, ${y}px, 0)`)
                  
                  ,
                  ...props 
              }}>
            <CloseButton onClick={toggle}>
                <Icon name='close' />
            </CloseButton>
            <div>{children}</div>
              </ModalCard>
              <Background 
                onClick={toggle} 
                style={{opacity: props.bgOpacity.interpolate(
                    bgOpacity => bgOpacity
                    )}}
                />
          </ModalWrapper>
          )}
          </Transition>
      </Portal>
    )
  }
}

const ModalWrapper = styled.div`
    ${absolute({})};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AnimCard = Card.withComponent(animated.div);

const ModalCard = styled(AnimCard)`
    position: relative;
    min-width: 320px;
    z-index: 10;
    margin-bottom: 100px;
`;

const CloseButton = styled.button`
    ${absolute({y: 'top', x: 'right'})};
    border: none;
    background: transparent;
    padding: 10px;
`;

const Background = styled(animated.div)`
    ${absolute({})}
    width: 100%;
    height: 100%;
    background: black;
    // opacity: 0.5;
`;
