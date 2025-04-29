import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					headerShadowVisible: false,
					tabBarStyle: {
						backgroundColor: "#020f0f",
						borderTopWidth: 0,
					},
				}}
			>
				<Tabs.Screen
					name="control"
					options={{
						href: null,
						headerTitle: "Controls",
						headerStyle: {
							backgroundColor: "white",
						},
						headerTintColor: "#0aa9df",
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
