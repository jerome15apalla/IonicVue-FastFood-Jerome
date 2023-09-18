<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header class="ion-padding-bottom">
              <ion-avatar>
                <img alt="profile" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </ion-avatar>
              <ion-button class="loyalty">
                <img style="width: 30px;" src="assets/crown.png">
                0 Points
                <ion-icon slot="end" color="warning" :ios="forwardIcon" :md="forwardIcon"></ion-icon>
              </ion-button>
            </ion-list-header>
            <ion-list-header>Jerome</ion-list-header>
            <ion-note>+639268778273</ion-note>

            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="labels-list">
            <ion-item v-for="(l, index) in labels" lines="none" :key="index">
              <ion-icon aria-hidden="true" slot="start" :ios="l.iosIcon" :md="l.mdIcon"></ion-icon>
              <ion-label>{{ l.title }}</ion-label>
            </ion-item>
          </ion-list>

          <ion-button class="logOut" color="warning">Log Out</ion-button>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane
} from '@ionic/vue';
import { ref } from 'vue';
import {
  home,
  fastFood,
  fastFoodOutline,
  notifications,
  notificationsOutline,
  storefront,
  storefrontOutline,
  helpCircle,
  helpCircleOutline,
  bagHandle,
  bagHandleOutline,
  heartOutline,
  heart,
  man,
  manOutline,
  navigateCircle,
  navigateCircleOutline,
  arrowUndoCircle,
  arrowUndoCircleOutline,
  chevronForwardOutline
} from 'ionicons/icons';

const selectedIndex = ref(0);
const forwardIcon = chevronForwardOutline;
const appPages = [
  {
    title: 'Home',
    url: '/Home',
    notif: '',
    iosIcon: home,
    mdIcon: home,
  },
  {
    title: 'Order Now!',
    url: '/Foods',
    notif: '',
    iosIcon: fastFoodOutline,
    mdIcon: fastFood,
  },
  {
    title: 'Notifications',
    url: '/folder/Notifications',
    notif: '4',
    iosIcon: notificationsOutline,
    mdIcon: notifications,
  },
  {
    title: 'Store Locator',
    url: '/folder/Store',
    notif: '',
    iosIcon: storefrontOutline,
    mdIcon: storefront,
  },
  {
    title: "FAQ's",
    url: '/folder/FAQ',
    notif: '',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircle,
  }
];

const labels = [
  {
    title: 'My Orders',
    notif: '2',
    iosIcon: bagHandleOutline,
    mdIcon: bagHandle,
  },
  {
    title: 'My Account',
    notif: '',
    iosIcon: manOutline,
    mdIcon: man,
  },
  {
    title: 'My Favorites',
    notif: '',
    iosIcon: heartOutline,
    mdIcon: heart,
  },
  {
    title: 'Order Tracker',
    notif: '',
    iosIcon: navigateCircleOutline,
    mdIcon: navigateCircle,
  },
  {
    title: 'Order History',
    notif: '',
    iosIcon: arrowUndoCircleOutline,
    mdIcon: arrowUndoCircle,
  }
];

const path = window.location.pathname.split('/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-warning-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-warning);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-warning);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-warning);
}

.loyalty {
  --color: black;
}

.logOut {
  --border-radius: 11px;

  --padding-top: 10px;
  --padding-bottom: 10px;
  --padding-start: 40px;
  --padding-end: 40px;
}
</style>
