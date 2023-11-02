import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

import SwiperSL from "@/components/swiperSL/swiperSL";
import MySwiper from "@/components/MySwiper";
import FoldCard from "@/components/FoldCard";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>

      <FoldCard />
      <MySwiper />

      <SwiperSL />
    </View>
  );
}
