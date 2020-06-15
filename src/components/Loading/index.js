import React from 'react';
import Lottie from 'react-lottie';
import * as loadingAnimation from '../../assets/animations/loading.json';
import { Container } from './styles.js';

function Loading() {
  // should render Loading screen
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={200} width={200} />
    </Container>
  );
}

export default Loading;
