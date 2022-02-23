import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { generateWeight } from '../../../commons/generateWeight';
import { Container, WeightItem } from './styles';

export function SelectedWeight() {

  const flatListRef = useRef<FlatList<any>>(null);

  const [weight, setWeight] = useState<Array<number>>(() => {
    return generateWeight(50, 100)
  })

  useEffect(() => {
  }, [])

  return (
    <Container>
      <FlatList
        ref={flatListRef} 
        data={weight}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => String(item)}
        renderItem={({item}) => (
          <WeightItem>{item}</WeightItem>
        )}
      />
    </Container>
  );
}