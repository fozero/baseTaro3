import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

import SwiperSL from "@/components/swiperSL/swiperSL";
import MySwiper from "@/components/MySwiper";
import FoldCard from "@/components/FoldCard";
import SpecialEffect from "@/components/SpecialEffect";
import Sticky from "@/components/Sticky";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <Sticky />
      <SpecialEffect />
      <FoldCard />
      <MySwiper />

      <SwiperSL />
    </View>
  );
}
