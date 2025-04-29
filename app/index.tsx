import Logo from "@/assets/images/logo.png";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Index() {
	const router = useRouter();

	React.useEffect(() => {
		setTimeout(() => {
			router.push("/(tabs)/control");
		}, 2000);
	});

	return (
		<View className="bg-background h-screen w-screen items-center justify-center gap-5">
			<Image source={Logo} width={0} height={0} className="w-32 h-32" />
			<Text className="text-2xl text-primary font-bold text-center">
				Gas Monitoring
			</Text>
		</View>
	);
}
