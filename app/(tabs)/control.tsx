import Logo from "@/assets/images/logo.png";
import database from "@/lib/firebase.config";
import { get, onValue, ref, set } from "firebase/database";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const Control = () => {
	const [mainBulb, setMainBulb] = React.useState(false);
	const [isMainBulb, setIsMainBulb] = React.useState(false);
	const [reservedBulb, setReservedBulb] = React.useState(false);
	const [isReservedBulb, setIsReservedBulb] = React.useState(false);
	const [weight, setWeight] = React.useState(0);
	const [gasValue, setGasValue] = React.useState(0);

	React.useEffect(() => {
		getMainBulbValue();
		getReservedBulbValue();
		getGasValue();
		getWeightValue();
	});

	const getGasValue = async () => {
		const valueRef = ref(database, "monitor/gas");
		const subscribe = onValue(valueRef, (snapshot) => {
			const value = snapshot.val();
			setGasValue(value);
		});

		return () => subscribe();
	};
	const getWeightValue = async () => {
		const valueRef = ref(database, "monitor/weight");
		const subscribe = onValue(valueRef, (snapshot) => {
			const value = snapshot.val();
			setWeight(value);
		});

		return () => subscribe();
	};

	const activeMainBulb = async () => {
		const valueRef = ref(database, "controls/mainBulb");
		await set(valueRef, mainBulb ? true : false);
		setMainBulb((prev) => !prev);
		setIsMainBulb(mainBulb);
	};

	const getMainBulbValue = async () => {
		const valueRef = ref(database, "controls/mainBulb");
		const value = await get(valueRef);
		setIsMainBulb(value.val());
	};

	const activeReservedBulb = async () => {
		const valueRef = ref(database, "controls/reservedBulb");
		await set(valueRef, reservedBulb ? true : false);
		setReservedBulb((prev) => !prev);
		setIsReservedBulb(reservedBulb);
	};

	const getReservedBulbValue = async () => {
		const valueRef = ref(database, "controls/reservedBulb");
		const value = await get(valueRef);
		setIsReservedBulb(value.val());
	};

	return (
		<View className="bg-white flex-1 justify-start">
			<View className="flex-col gap-2 items-center justify-center">
				<Image source={Logo} width={0} height={0} resizeMode="contain" />
				<Text className="text-4xl text-primary font-bold text-center">
					Gas Monitoring
				</Text>
			</View>
			<View className="flex-1 items-center justify-center gap-10">
				<View className="flex-row justify-center items-center gap-10 px-4 w-full">
					<View className="bg-primary w-36 h-36 rounded-2xl flex items-center justify-center gap-5">
						<Text className="text-2xl text-white font-semibold">Weight</Text>
						<View className="flex-row items-end justify-center gap-2">
							<Text className="text-4xl text-slate-800 font-bold">
								{weight}
							</Text>
							<Text className="text-base text-slate-700 font-bold">kg.</Text>
						</View>
					</View>
					<View className="bg-primary w-36 h-36 rounded-2xl flex items-center justify-center gap-5">
						<Text className="text-2xl text-white font-semibold">Gas</Text>
						<Text className="text-4xl text-slate-800 font-bold">
							{gasValue}
						</Text>
					</View>
				</View>
				<View className="gap-5 justify-center items-center w-full">
					<Pressable
						onPress={activeMainBulb}
						className={` py-3 px-6 w-60 rounded-xl ${
							isMainBulb ? "bg-primary" : "bg-secondary"
						}`}
					>
						<Text className="text-center font-bold text-xl text-white">
							Main Bulb
						</Text>
					</Pressable>
					<Pressable
						onPress={activeReservedBulb}
						className={` py-3 px-6 w-60 rounded-xl ${
							isReservedBulb ? "bg-primary" : "bg-secondary"
						}`}
					>
						<Text className="text-center font-bold text-xl text-white">
							Reserved Bulb
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default Control;
