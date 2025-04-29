import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					headerShadowVisible: false,
					tabBarStyle: {
						backgroundColor: "#083344",
						borderTopWidth: 0,
					},
				}}
			>
				<Tabs.Screen
					name="control"
					options={{
						href: null,
						headerTitle: "Gas Monitoring",
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
