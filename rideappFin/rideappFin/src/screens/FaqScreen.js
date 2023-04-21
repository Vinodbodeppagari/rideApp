import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

const FaqScreen = ({ navigation }) => {
  const faqs = [
    {
      question: "Can I cancel my Ride?",
      answer:
        "Yes, You can cancel your ride. But, it's your responsibility to inform to the rider",
    },
    {
      question: "How do I contact customer service?",
      answer:
        "You can contact our 24*7 customer service through mobile or Email",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "That will be purely depends on the rider. All the riders are accept cash and as well as online payment. But suggested you to discuss with rider before starting your journey",
    },
    {
      question: "Is my ride safe?",
      answer:
        "Yes, We have safety measures in place, including driver and passenger ratings, verified phone numbers. However, as with any ride-sharing service, there is always some risk involved. It's important to use common sense and communicate clearly with your driver or passengers.",
    },
    // Add more FAQs as needed
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqContainer}>
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.answer}>{faq.answer}</Text>
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
  faqContainer: {
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

export default FaqScreen;

