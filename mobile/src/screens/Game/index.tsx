import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";
import { TouchableOpacity, View, Image, FlatList, Text } from "react-native";
import { THEME } from "../../theme";
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";

export function Game() {
  const [duo, setDuo] = useState<DuoCardProps[]>([]);
  const [discordDuosSelected, setDiscordDuosSelected] = useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.1.102:3333/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordDuosSelected(data.discord));
  }

  useEffect(() => {
    fetch(`http://192.168.1.102:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuo(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={duo}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[
            duo.length > 0 ? styles.contentList : styles.emptyListContent,
          ]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />
        <DuoMatch
          visible={discordDuosSelected.length > 0}
          discord={discordDuosSelected}
          onClose={() => setDiscordDuosSelected("")}
        />
      </SafeAreaView>
    </Background>
  );
}
