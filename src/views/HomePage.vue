<template>
    <ion-page>
        <ion-header :translucent="true">
        <ion-toolbar>
            <ion-buttons slot="start">
            <ion-menu-button color="warning"></ion-menu-button>
            </ion-buttons>
            <ion-title>Home</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding content">
            <ion-card class="hello">
                <ion-avatar class="hello-logo">
                    <img src="assets/logo.png" />
                </ion-avatar>
                <div class="hello-message">
                    <p>Annyeong, Jerome!</p>
                    <h1>
                    What do you want to eat?
                    </h1>
                </div>
            </ion-card>
            <ion-searchbar class="search" placeholder="Try our new Steak Fries Veggies"></ion-searchbar>
            <ion-card class="section">
                <h5 class="offer-left">
                    Special Offers!
                </h5>
                <h5 class="offer-right">
                    View All >
                </h5>
                <img src="assets/banner1.png" class="banner">
            </ion-card>
            <ion-card class="section">
                <h5>
                    Category
                </h5>
                <ion-card class="category-card">
                    <img src="assets/category1.png" class="category-banner">
                    <ion-card-content class="category-overlay">
                        <ion-card-title class="category-title">
                            Chicken
                        </ion-card-title>
                        9 Recipes
                    </ion-card-content>
                </ion-card>
            </ion-card>
            <ion-card class="section">
                <h5>
                    What's New?
                </h5>
                <img src="assets/banner3.png" class="banner">
            </ion-card>
            <div>
                <h5>
                    Most Popular
                </h5>
            </div>
            <ion-grid class="ion-no-padding">
            <ion-row>
                <ion-col size="6" size-md="4" size-lg="2" class="ion-no-padding">
                    <ion-card class="pop">
                        <img alt="Silhouette of mountains" src="assets/pop1.png" />
                        <ion-card-header>
                            <ion-card-subtitle>Steak Fries Veggies</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>
                            Meat
                            <p class="price"><b>P 172</b></p>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
                <ion-col size="6" size-md="4" size-lg="2" class="ion-no-padding">
                    <ion-card class="pop">
                        <img alt="Silhouette of mountains" src="assets/pop2.png" />
                        <ion-card-header>
                            <ion-card-subtitle>Chicken Salad</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>
                            Chicken
                            <p class="price"><b>P 172</b></p>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
                <ion-col size="6" size-md="4" size-lg="2" class="ion-no-padding">
                    <ion-card class="pop">
                        <img alt="Silhouette of mountains" src="assets/pop3.png" />
                        <ion-card-header>
                            <ion-card-subtitle>Sorvetes Primavera</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>
                            Dessert
                            <p class="price"><b>P 172</b></p>
                        </ion-card-content>
                        
                    </ion-card>
                </ion-col>
                <ion-col size="6" size-md="4" size-lg="2" class="ion-no-padding">
                    <ion-card class="pop">
                        <img alt="Silhouette of mountains" src="assets/pop4.png" />
                        <ion-card-header>
                            <ion-card-subtitle>Fried Chicken</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>
                            Chicken
                            <p class="price"><b>P 172</b></p>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
            </ion-grid>
            <!-- <ion-nav-link router-direction="forward" :component="component"> -->
                <ion-button color="warning" class="order-button" href="/Foods">
                    Order Now!
                </ion-button>
            <!-- </ion-nav-link> -->
        </ion-content>
        <ion-footer>
        <ion-toolbar>
            <ion-title>Footer</ion-title>
        </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<!-- <script setup lang="ts">
    import {
        chevronForwardOutline
    } from 'ionicons/icons';

    import OurFoodPage from './OurFoodPage.vue';

    export default {
        // components: { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton },
        data() {
            return {
                component: OurFoodPage,
            };
        },
    };
</script> -->

<style>
ion-toolbar{
    box-shadow: none;
    border: none;
}
.content{
    --padding-bottom: 70px;
}
.hello{
    background: none;
    color: black;
    padding-top: 15px;
    padding-bottom: 15px;
}
.hello-logo{
    float: left;
    margin: 10px;
}
.hello-messaege{
    float: left;
}
ion-searchbar{
    margin-bottom: 15px;
}
.search{
    padding: 0;
    --border-radius: 15px;
}
.section{
    color: black;
    background: none;
    padding: 0;
    margin: 0;
}
.offer-left{
    float: left;
}
.offer-right{
    float: right;
    color: var(--ion-color-warning);
}
.category-card{
    position: relative;
    background: none;
    --margin: 0;
    --padding: 0;
}
.category-banner{
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
.category-overlay{
    width: 100%;
    height: 22%;
    position: absolute;
    z-index: 99;
    bottom: 0px;
    color: #fff;
    padding: 20px;
    font-weight: bolder;
}
.category-title{
    color: white;
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
h1{
    margin: 0;
    padding: 0;
}
p{
    margin: 0;
    padding: 0;
}
.order-button{
    float: right;
    margin-top: 15px;
    margin-bottom: 15px;
    
    --padding-top: 20px;
    --padding-bottom: 20px;
    --padding-start: 30px;
    --padding-end: 30px;

    --border-radius: 25px;
}
</style>