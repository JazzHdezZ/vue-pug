<template lang="pug">
   b-form-select.select(v-model="selectedOption" @change="countryChange($event)" :options="options")
</template>

<script src="./Country.js"></script>

<style src="./Country.scss" lang="scss" scoped></style>
