import React, { useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { Svg, Circle, Text, Defs, G, Use } from 'react-native-svg';
import theme from '../../global/styles/theme';

// rotation='-90' origin={`${halfCircle}, ${halfCircle}`}

type Props = {
  data: {
    percentage: number,
    radius: number,
    strokeWidth: number,
    duration: number,
    color: string,
    delay: number,
    max: number,
    textColor?: string,
  }
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export function Pie ({data}: Props) {

  const animatedValue = useRef(new Animated.Value(0)).current;

  const circleCircumference = 370;
  // const halfCircle = data.radius * data.strokeWidth;
  const halfCircle = 59 * 13;

  const maxPercent = 100 * data.percentage / data.max;

  
  const caloriesTotal = useMemo(() => {
    return data.max - data.percentage
  }, [data.percentage])

  
  const animation = (toValue: number) => {
    const strokeDashoffset = 
      circleCircumference - (circleCircumference * maxPercent) / 100;    

    return Animated.timing(animatedValue, {
      toValue: strokeDashoffset,
      duration: data.duration,
      delay: data.delay,
      useNativeDriver: true, 
    }).start() 
  }
  
  useEffect(() => {
    animation(data.percentage); 
  }, [data.percentage])

  return (
    <Svg 
      width="145"
      height="150"
      fill="red"
      // viewBox="0 0 170 170"
    >
      {/* <Rect x="0" y="0" width="150" height="150" fill="black" /> */}
      <Defs>
        {/* Add filter here? */}
      </Defs> 
        <G id="body">
          <Circle 
            cx="70"
            cy="75"
            r="59"
            fill= "transparent"
            strokeWidth={13}
            stroke= "#FFFFFF"
            strokeOpacity={0.8}
            strokeDasharray={circleCircumference}
            strokeDashoffset={0}
          />
          <AnimatedCircle
            cx="70"
            cy="75"
            r="59"
            fill= "transparent"
            strokeWidth={13}
            stroke="#8587E5"
            strokeOpacity={0.8}
            strokeDasharray={circleCircumference}
            strokeDashoffset={animatedValue}
            strokeLinecap="round"
          />
          <Text 
            x="55" 
            y="70"
            fill="#494949"
            fontSize={theme.sizes.large}
            fontFamily={theme.fonts.bold}
          >
            {caloriesTotal}
          </Text>
          <Text 
            x="32" 
            y="83"
            fill="#494949" 
            fontSize={theme.sizes.small}
            fontFamily={theme.fonts.regular}
            fontWeight="50"
          >
            Calorias restantes
          </Text>
        </G>
      <Use xlinkHref='#body' x="0" y="0" />    
    </Svg>
  )
}
