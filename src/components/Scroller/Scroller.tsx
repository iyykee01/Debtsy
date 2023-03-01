import { FlatList } from "react-native";

interface ScrollerProps {
  children: React.ReactNode;
  ref?: any;
  style?: any;
}

export const Scroller = ({ children, ref, style }: ScrollerProps) => (
  <FlatList
    ref={ref}
    showsVerticalScrollIndicator={false}
    data={[]}
    keyExtractor={() => "key"}
    renderItem={null}
    style={style}
    ListHeaderComponent={<>{children}</>}
  />
);
