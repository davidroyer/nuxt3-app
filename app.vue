<template>
  <div>
    <header>
      <AppNav />
    </header>

    <button @click="getLocation">Get Location</button>

    <div v-if="userLocationObject">
      <h2>userLocationObject</h2>
      <pre>{{userLocationObject}}</pre>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { getUserLocation } from './utils';

let userLocationObject = reactive({})

if (!process.server) {
  const localStorageLocationInfo = localStorage.getItem('userLocation')

  if (localStorageLocationInfo) {
    const { latitude, longitude, timestamp } = JSON.parse(localStorageLocationInfo)

    userLocationObject.latitude = latitude
    userLocationObject.longitude = longitude
    userLocationObject.timestamp = timestamp
  }
}

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(handleLocation);
}

const handleLocation = ({ coords, timestamp }) => {
  const { latitude, longitude } = coords
  const locationInfo = {
    timestamp,
    latitude,
    longitude
  }
  localStorage.setItem('userLocation', JSON.stringify(locationInfo))

  userLocationObject.latitude = latitude
  userLocationObject.longitude = longitude
  userLocationObject.timestamp = timestamp
}
</script>
