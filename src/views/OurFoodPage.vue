<template>
    <ion-page>
        <ion-header :translucent="true">
        <ion-toolbar>
            <ion-buttons slot="start">
            <ion-menu-button color="warning"></ion-menu-button>
            </ion-buttons>
            <ion-title>Our Foods</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-back-button text="Back" :icon="chevronBackOutline"></ion-back-button>
        <ion-content class="ion-padding content">
            <ion-searchbar class="search" placeholder="Try our new Steak Fries Veggies"></ion-searchbar>

            <ion-buttons class="category-buttons">
                <ion-button color="warning" fill="solid">All</ion-button>
                <ion-button color="dark" fill="outline">Breakfast</ion-button>
                <ion-button color="dark" fill="outline">Chicken</ion-button>
                <ion-button color="dark" fill="outline">Seafood</ion-button>
            </ion-buttons>

            <ion-grid class="ion-no-padding">
            <ion-row>
                <ion-col size="6" size-md="4" size-lg="2" class="ion-no-padding">
                    <a href="/Selected" class="select">
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
                    </a>
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
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
    import { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton } from '@ionic/vue';
    import {
        chevronBackOutline
    } from 'ionicons/icons';

    import HomePage from './HomePage.vue';

    // import { caretBack } from 'ionicons/icons';

    // export default {
    //     // components: { IonHeader },
    //     setup() {
    //         return { chevronBackOutline };
    //     },
    // };
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
.select{
    text-decoration: none;
}
</style>