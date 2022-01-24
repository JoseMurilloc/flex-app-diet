import React, { useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { Svg, Circle, Path, Rect, Text, Defs, G, Use } from 'react-native-svg';
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
  const circleProgressRef= useRef(null);

  const circleCircumference = 370;
  const halfCircle = data.radius * data.strokeWidth;

  const maxPercent = 100 * data.percentage / data.max;
  const strokeDashoffset = 
    circleCircumference - (circleCircumference * maxPercent) / 100; 

  
  const caloriesTotal = useMemo(() => {
    return data.max - data.percentage
  }, [])

  
  const animation = (toValue: number) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration: data.duration,
      delay: data.delay,
      useNativeDriver: true, 
    }).start() 
  }

  
  useEffect(() => {
    animation(data.percentage);
    console.log('LOG EFFECT');
  }, [])

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
      <G id="body" >
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
            ref={circleProgressRef} 
            cx="70"
            cy="75"
            r="59"
            fill= "transparent"
            strokeWidth={13}
            stroke= {data.color}
            strokeOpacity={0.8}
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
          <Text 
            x="55" 
            y="70"
            stroke="#494949"
            fontSize={theme.sizes.default}
            fontFamily={theme.fonts.bold}
          >
            {caloriesTotal}
          </Text>
          <Text 
            x="32" 
            y="83"
            stroke="#494949" 
            fontSize={theme.sizes.small}
            fontFamily={theme.fonts.regular}
            fontWeight="100"
          >
            Calorias restantes
          </Text>
        </G>
      <Use xlinkHref='#body' x="0" y="0" />    
    </Svg>
  )
}
