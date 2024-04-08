<template>
  <v-app>
    <v-container class="d-flex flex-column h-100" style="gap: 1rem">

      <v-card class="px-3">
        <div class="d-flex justify-center align-center btn-group-height" style="gap: 0.8rem; position: relative;">

          <v-btn icon variant="text" v-if="mobile" class="controls-left">
            <v-app-bar-nav-icon />
            <v-menu activator="parent">
              <v-list>
                <v-list-item v-for="(item) in mainMenuItems" :key="item.title" :value="item.title" :to="item.route">
                  <v-list-item-title>
                    <div class="d-flex align-center" style="gap: 1rem">
                      <v-icon>{{ item.icon }}</v-icon>
                      {{ item.title }}
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-btn>

          <!-- v-btn-toggle Group -->
          <v-btn-toggle v-else divided class="btn-group-height" rounded="0">
            <v-btn v-for="(item) in mainMenuItems" :to="item.route" class="btn-toggle">
              <div class="d-flex flex-column align-center justify-center" style="gap: 0.4rem">
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.title }}
              </div>
            </v-btn>
          </v-btn-toggle>

          <!-- Right-aligned ThemeSwitcher and UserProfile -->
          <div class="controls-right">
            <ThemeSwitcher />
            <UserProfile />
          </div>
        </div>
      </v-card>

      <v-card class="flex-grow-1">
        <View />
      </v-card>

      <v-card>
        <div data-role="message-send"></div>
      </v-card>

    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
import ThemeSwitcher from '../components/ThemeSwitcher.vue';
import UserProfile from '../components/UserProfile.vue';
import { appRoutes } from '@/store/appRoutes';
import View from '@/layouts/default/View.vue'
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay()

const mainMenuNames = {
  Chats: "Chats",
  Friends: "Friends",
  Groups: "Groups"
} as const
type MainMenuNames = keyof [keyof typeof mainMenuNames]

const mainMenuItems = [
  { title: mainMenuNames.Chats, icon: "mdi-chat", route: appRoutes.Chat.build() },
  { title: mainMenuNames.Friends, icon: "mdi-account", route: undefined },
  { title: mainMenuNames.Groups, icon: "mdi-account-group", route: undefined }
]
</script>

<style lang="scss" scoped>
.position-relative {
  position: relative;
}

.btn-toggle {
  width: 100px;
  /* Adjust this value as needed */
}

.btn-group-height {
  height: 3.5rem;
}

.controls-left {
  position: absolute;
  left: 0;
  /* Align to the left instead of right */
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  /* Adjust the gap as needed */
}


.controls-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  /* Adjust the gap as needed */
}
</style>
