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
		<View className="bg-white flex-1 items-center justify-center gap-8 pb-10">
			<Image source={Logo} width={0} height={0} className="w-52 h-52" />
			<View className="flex-row justify-center items-center gap-2">
				<Text className="text-4xl text-primary font-bold text-center">Gas</Text>
				<Text className="text-4xl text-secondary font-bold text-center">
					Monitoring
				</Text>
			</View>
		</View>
	);
}
