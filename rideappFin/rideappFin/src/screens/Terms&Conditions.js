import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

const TermsScreen = ({ navigation }) => {
    const terms = [
        {
            answer:
                "Welcome to our ride sharing app! Before using our services, please take a moment to read and understand our Terms and Conditions.",
        },
        {
            question: "User Requirements:",
            answer:
                "By using our app, you must be at least 18 years old and have a valid driver's license, vehicle registration, and insurance.",
        },
        {
            question: "Service Description: ",
            answer:
                "Our app allows users to connect with other users for carpooling or ride-sharing purposes. We do not employ drivers or own vehicles, and we are not responsible for the safety or reliability of the drivers or vehicles.",
        },
        {
            question: "User Conduct:",
            answer:
                "You agree to use our app for lawful purposes only and not to engage in any activity that could harm other users, our app, or our reputation. You agree not to share inappropriate or offensive content, engage in spamming or phishing, or use the app for any illegal purposes. ",
        },
        {
            question: "Termination: ",
            answer:
                "We reserve the right to terminate or suspend your use of our app at any time for any reason without notice.",
        },
        {
            question: "",
            answer:
                "By using our ride sharing app, you agree to these Terms and Conditions. If you do not agree, please do not use our app.",
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                {terms.map((terms, index) => (
                    <View key={index} style={styles.termsContainer}>
                        <Text style={styles.question}>{terms.question}</Text>
                        <Text style={styles.answer}>{terms.answer}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10
        // padding: '10%',
        // paddingTop:'20%'

    },
    termsContainer: {
        marginBottom: 16,
    },
    question: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    answer: {
        fontSize: 16,
        color: "#666",
    },
});

export default TermsScreen;

