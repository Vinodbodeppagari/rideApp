import { Dimensions } from "react-native";

// export const cities = [
//   { label: "New York, New York", value: "New York" },
//   { label: "Los Angeles, California", value: "Los Angeles" },
//   { label: "Chicago, Illinois", value: "Chicago" },
//   { label: "Houston, Texas", value: "Houston" },
//   { label: "Phoenix, Arizona", value: "Phoenix" },
//   { label: "Philadelphia, Pennsylvania", value: "Philadelphia" },
//   { label: "San Antonio, Texas", value: "San Antonio" },
//   { label: "San Diego, California", value: "San Diego" },
//   { label: "Dallas, Texas", value: "Dallas" },
//   { label: "San Jose, California", value: "San Jose" },
//   { label: "Austin, Texas", value: "Austin" },
//   { label: "Jacksonville, Florida", value: "Jacksonville" },
//   { label: "Fort Worth, Texas", value: "Fort Worth" },
//   { label: "Columbus, Ohio", value: "Columbus" },
//   { label: "San Francisco, California", value: "San Francisco" },
//   { label: "Charlotte, North Carolina", value: "Charlotte" },
//   { label: "Indianapolis, Indiana", value: "Indianapolis" },
//   { label: "Seattle, Washington", value: "Seattle" },
//   { label: "Denver, Colorado", value: "Denver" },
//   { label: "Washington DC, District of Columbia", value: "Washington DC" },
//   { label: "Miami, Florida", value: "Miami" },
//   { label: "Boston, Massachusetts", value: "Boston" },
//   { label: "Nashville, Tennessee", value: "Nashville" },
//   { label: "Portland, Oregon", value: "Portland" },
//   { label: "Atlanta, Georgia", value: "Atlanta" },
//   { label: "Las Vegas, Nevada", value: "Las Vegas" },
//   { label: "New Orleans, Louisiana", value: "New Orleans" },
//   { label: "Minneapolis, Minnesota", value: "Minneapolis" },
//   { label: "Detroit, Michigan", value: "Detroit" },
//   { label: "Memphis, Tennessee", value: "Memphis" },
//   { label: "Salt Lake City, Utah", value: "Salt Lake City" },
//   { label: "Kansas City, Missouri", value: "Kansas City" },
//   { label: "Sacramento, California", value: "Sacramento" },
//   { label: "Orlando, Florida", value: "Orlando" },
//   { label: "Cincinnati, Ohio", value: "Cincinnati" },
//   { label: "Pittsburgh, Pennsylvania", value: "Pittsburgh" },
//   { label: "Tampa, Florida", value: "Tampa" },
//   { label: "Raleigh, North Carolina", value: "Raleigh" },
//   { label: "Baltimore, Maryland", value: "Baltimore" },
//   { label: "Milwaukee, Wisconsin", value: "Milwaukee" },
//   { label: "Omaha, Nebraska", value: "Omaha" },
//   { label: "Louisville, Kentucky", value: "Louisville" },
//   { label: "Albuquerque ,New Mexico", value: "Albuquerque" },
// ];

export const { height, width } = Dimensions.get("screen");



export const data = {
  countries: [
    {
      label: "United States",
      value: "US",
    },
    {
      label: "Canada",
      value: "CA",
    },

  ],
  states: [
    {
      label: "Texas",
      value: "TX",
      country: "US",
    },
    {
      label: "California",
      value: "CA",
      country: "US",
    },
    {
      label: "Florida",
      value: "FL",
      country: "US",
    },
    {
      label: "Missouri",
      value: "MS",
      country: "US",
    },
    {
      label: "Ontario",
      value: "ON",
      country: "CA",
    },
    {
      label: "Alberta",
      value: "AL",
      country: "CA",
    },
    {
      label: "Manitoba",
      value: "MA",
      country: "CA",
    },

  ],
  cities: [
    {
      label: "Houston",
      value: "HO",
      state: "TX",
      country: "US",
    },
    {
      label: "Austin",
      value: "AU",
      state: "TX",
      country: "US",
    },
    {
      label: "Dallas",
      value: "DA",
      state: "TX",
      country: "US",
    },
    {
      label: "Texas city",
      value: "TC",
      state: "TX",
      country: "US",
    },
    {
      label: "Los Angeles",
      value: "LA",
      state: "CA",
      country: "US",
    },
    {
      label: "San Francisco",
      value: "SF",
      state: "CA",
      country: "US",
    },
    {
      label: "Fresno",
      value: "FR",
      state: "CA",
      country: "US",
    },
    {
      label: "Oakland",
      value: "OK",
      state: "CA",
      country: "US",
    },
    {
      label: "Jacksonville",
      value: "JK",
      state: "FL",
      country: "US",
    },
    {
      label: "Miami",
      value: "MIA",
      state: "FL",
      country: "US",
    },
    {
      label: "Tampa",
      value: "TA",
      state: "FL",
      country: "US",
    },
    {
      label: "Kansas City",
      value: "KC",
      state: "MS",
      country: "US",
    },
    {
      label: "St. Louis",
      value: "ST",
      state: "MS",
      country: "US",
    },
    {
      label: "Branson",
      value: "BR",
      state: "MS",
      country: "US",
    },
    {
      label: "Columbia",
      value: "CL",
      state: "MS",
      country: "US",
    },
    {
      label: "Toronto",
      value: "TOR",
      state: "ON",
      country: "CA",
    },
    {
      label: "Kingston",
      value: "KG",
      state: "ON",
      country: "CA",
    },
    {
      label: "Ottawa",
      value: "OT",
      state: "ON",
      country: "CA",
    },
    {
      label: "Edmonton",
      value: "ED",
      state: "AL",
      country: "CA",
    },
    {
      label: "Calgary",
      value: "CL",
      state: "AL",
      country: "CA",
    },
    {
      label: "Red Deer",
      value: "RD",
      state: "AL",
      country: "CA",
    },
    {
      label: "St. Albert",
      value: "SA",
      state: "AL",
      country: "CA",
    },
    {
      label: "Winnipeg",
      value: "WI",
      state: "MA",
      country: "CA",
    },
    {
      label: "Brandon",
      value: "BR",
      state: "MA",
      country: "CA",
    },
    {
      label: "Selkirk",
      value: "SE",
      state: "MA",
      country: "CA",
    },
    {
      label: "Test",
      value: "CA",
      state: "CA",
      country: "US",
    },
  ],
};
