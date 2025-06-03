import {
  ImgCarousel,
  ImgCarouselFour,
  ImgCarouselThree,
  ImgCarouselTwo,
} from "@/assets/image";
import * as React from "react";
import { Image, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const defaultDataWith6Colors = [
  ImgCarousel,
  ImgCarouselTwo,
  ImgCarouselThree,
  ImgCarouselFour,
];
// const defaultDataWith6Colors = [
//   "#B0604D",
//   "#899F9C",
//   "#B3C680",
//   "#5C6265",
//   "#F5D399",
//   "#F1F1F1",
// ];

const renderItem = ({ rounded }: { rounded?: boolean }) => {
  const Component = ({ item }: { item: string }) => (
    // <View
    //   style={{
    //     flex: 1,
    //     borderRadius: rounded ? 16 : 0,
    //     backgroundColor: item,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // />

    <Image
      source={item}
      style={{
        flex: 1,
        borderRadius: rounded ? 16 : 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );

  Component.displayName = "CarouselItem";

  return Component;
};

const PAGE_WIDTH = 410;
const PAGE_HEIGHT = 130;

const ServiceCarousel = () => {
  const progress = useSharedValue<number>(0);
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  } as const;

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View
      id="carousel-component"
      dataSet={{ kind: "utils", name: "pagination" }}
      style={{ gap: 1, marginTop: 16 }}
    >
      <View style={{ marginBottom: 20 }}>
        <Carousel
          ref={ref}
          {...baseOptions}
          loop
          onProgressChange={progress}
          style={{ width: PAGE_WIDTH }}
          data={defaultDataWith6Colors}
          renderItem={renderItem({ rounded: true })}
        />
      </View>
      <Pagination.Basic<{ color: string }>
        progress={progress}
        data={defaultDataWith6Colors.map((color) => ({ color }))}
        dotStyle={{
          width: 25,
          height: 4,
          backgroundColor: "#6DA40A",
        }}
        activeDotStyle={{
          overflow: "hidden",
          backgroundColor: "#f1f1f1",
        }}
        containerStyle={{
          gap: 10,
          marginBottom: 10,
        }}
        horizontal
        onPress={onPressPagination}
      />
    </View>
  );
};

export default ServiceCarousel;
