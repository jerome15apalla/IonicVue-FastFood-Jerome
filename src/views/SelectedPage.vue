<template>
    <ion-page>
        <ion-header :translucent="true">
        <ion-toolbar>
            <ion-buttons slot="start">
            <ion-menu-button color="warning"></ion-menu-button>
            </ion-buttons>
            <ion-title>Meat</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding content">
            <ion-card class="pop">
                <img alt="Silhouette of mountains" src="assets/pop1.png" />
            </ion-card>
            <h3>
                Steak Fries Veggies
            </h3>
            <ion-icon aria-hidden="true" slot="start" :ios="star" :md="star"></ion-icon>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h1>
                P 172
            </h1>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">

    import {
        star
    } from 'ionicons/icons';
</script>

<style>
.search{
    padding: 0;
    --border-radius: 15px;
}
.category-buttons{
    margin-top: 15px;
    margin-bottom: 15px;
}
ion-grid{
    margin: 0;
}
ion-card{
    border-radius: 15px;
    box-shadow: none;
    background: #E6E6E6;
    padding: 0;
    margin: 0;
}
.banner{
    border-radius: 15px;
}
.pop{
    margin: 5px;
    padding: 50px;
}
ion-card-subtitle{
    color: black;
}
ion-card-header{
    padding-bottom: 0;
}
.price{
    --padding-top: 30px;
    --padding-bottom: 30px;
    color: var(--ion-color-danger);
}
</style>