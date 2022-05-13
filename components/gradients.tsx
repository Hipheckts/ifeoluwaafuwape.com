import { Box, BoxProps } from '@chakra-ui/react';

export function AboveTheFoldGradient(props: BoxProps) {
  return (
    <Box
      zIndex={0}
      width="100%"
      height="920px"
      position="absolute"
      top="0"
      left="0"
      pointerEvents="none"
      {...props}
      bg="radial-gradient(53.09% 53.09% at 50% 37.57%, #301000 0%, rgba(18, 19, 24, 0) 100%)"
    />
  );
}

export function SpanGradient(props: BoxProps) {
  return (
    <Box
      zIndex={0}
      width="100%"
      height="1400px"
      position="absolute"
      left="0"
      top="700px"
      pointerEvents="none"
      {...props}
      bg="linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, rgba(214, 94, 28, 0.3) 45.31%, rgba(19, 19, 19, 0) 100%)"
    />
  );
}

export function StartSideGradient(props: BoxProps) {
  return (
    <Box
      zIndex={0}
      width="3279px"
      height="1000px"
      position="absolute"
      pointerEvents="none"
      right="-400px"
      top="-300px"
      opacity="0.24"
      {...props}
      bg="radial-gradient(50% 50% at 50% 50%, #FF7D35 0%, rgba(0, 0, 0, 0) 100%)"
    />
  );
}

export function FooterGradient(props: BoxProps) {
  return (
    <Box
      zIndex={0}
      position="absolute"
      pointerEvents={'none'}
      width="full"
      height="680px"
      left="0px"
      bottom="0px"
      opacity={0.5}
      {...props}
      bg="linear-gradient(180deg, rgba(56, 32, 19, 0) 0%, rgba(240, 108, 35, 0.4) 100%)"
    />
  );
}
