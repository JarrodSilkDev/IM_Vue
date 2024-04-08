<template>
  <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success" bordered>
    <VAvatar class="cursor-pointer" variant="tonal">
      J.D.
      <VMenu activator="parent" width="230" location="bottom end" offset="14px">
        <VList>
          <VDivider class="my-2" v-if="mobile" />
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success">
                  <VAvatar variant="tonal" title="Jane Doe">
                    J.D.
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              Jane Doe
            </VListItemTitle>
            <VListItemSubtitle>JaneDoe@gmail.com</VListItemSubtitle>
            <VListItemSubtitle>Admin</VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />

          <VListItem link :to="'#'">
            <template #prepend>
              <VIcon class="me-2" icon="mdi-account" size="22" />
            </template>

            <VListItemTitle>Edit Account</VListItemTitle>
          </VListItem>
          <VListItem>
            <template #prepend>
              <VIcon class="me-2" icon="mdi-key" size="22" />
            </template>

            <VListItemTitle>Change Password</VListItemTitle>
          </VListItem>

          <VDivider class="my-2" />

          <VListItem>
            <template #prepend>
              <VIcon class="me-2" icon="mdi-logout" size="22" />
            </template>

            <VListItemTitle>Disconnect</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
    </VAvatar>
  </VBadge>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

</script>

<style scoped lang="scss"></style>