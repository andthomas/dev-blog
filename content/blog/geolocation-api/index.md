---
title: "HTML5 Geolocation, Mac's and a sober realisation"
description: 'In this post I quickly take a look at the HTML5 Geolocation API, and how my MacBook is calculating my location.'
date: 2021-02-21
categories: ['tech', 'location', 'html', 'mac']
ogImage: ../og-images/andy-og-image.png
---

Geofencing is "the use of GPS or RFID technology to create a virtual geographic boundary, enabling software to trigger a response when a mobile device enters or leaves a particular area." (thanks Wikipedia).

There are several applications for this. One that is used by Uber is to manage pickups from LAX. As Uber is prohibited from using LAX's private hire car/taxi pick up and drop off zone, Uber has created a geofenced area nearby (see below) where drivers (once they are within the area) can wait for a fare from LAX, then pick up individuals from the regular pick up area at the airport. 

![A map of Ubers geofenced waiting area](https://lh3.googleusercontent.com/zhhnT5DVR0xezCZ4J2VEATVO3QNhxyZtdufGtcY_ePf3ty10sDgqS_ZVovglXB3T8iJP3ToO4AyaDpqLR2GZ2U1ZdxEh3v6pcm0dDDYvvPU1MSP5otPhXbDuB04W0aeCXrnqwass)

Native apps have supported this kind of functionality for a while, due to their ability to interface directly with GPS location data from the users mobile device. However websites and web-apps have only been able to access this data since the advent of HTML5 through the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

When a website requests your geolocation, the browser will prompt you to give permission to provide them with your location. When you agree the browser then requests your location coordinates from your device. 

While I was playing with the geolocation api on the [W3 website](https://www.w3schools.com/html/html5_geolocation.asp), I notice that my location was very accurate. This surprised me as I was using my laptop. I had assumed that the location for a laptop would be determined by my IP address. Mac's don't have GPS's so I went down a mini rabbit hole trying to figure out what was going on. First I turned on my VPN, set the location to London then refreshed the page. The location was still showing my home address so I could confirm that it definitely wasn't going off the IP address. Then I turned off my mobile phone. I thought that my iPhone might be sharing my location data with my Mac, but even after turning that off it was still showing my home address. I then had a bit of a dig around online and found [this post](https://apple.stackexchange.com/questions/111032/how-does-my-imac-know-my-location-in-the-maps-app-given-that-i-use-a-vpn-that-h%C2%A0).

It turns out that through a process called trilateration*. My Mac gathers as much data as it can from the wifi networks within range (including signal strength) and looks up those addresses in Apples database of geolocated wifi enabled devices. Based off this calculation it determines my address within an uncomfortable level of accuracy.

This has certainly made me a lot more wary of how accurate my location data is on my laptop... so I think I'll go back to disabling my location services for now!

*Similar to triangulation, trilateration relies on signal strength rather than response time differences to calculate a location.