<script setup lang="ts">
import SpacedColumn from '@/components/SpacedColumn.vue'
import SpacedPair from '@/components/SpacedPair.vue'
import CenteredHeader from '@/components/styled/CenteredHeader.vue'
import StyledText from '@/components/styled/StyledText.vue'
import AccentedText from '@/components/styled/AccentedText.vue'
import LinkText from '@/components/styled/LinkText.vue'
import FilledButton from '@/components/styled/FilledButton.vue'

const buttonClass = 'w-64 lg:w-96 hover:bg-marshland-200'
const discordServerAddress = 'https://discord.gg/xXTejbunjC'
</script>

<template>
  <SpacedColumn>
    <SpacedPair>
      <template #firstElem>
        <CenteredHeader>
          Zapraszamy na <br />
          e-GeKKoN!
        </CenteredHeader>
      </template>
      <template #secondElem>
        <StyledText>
          <AccentedText>Górnośląska Kosmiczna Konferencja Naukowa GeKKoN</AccentedText>
          to wydarzenie organizowane przez studentów
          <AccentedText>Politechniki Śląskiej</AccentedText>. W tym roku już po raz trzeci spotkamy
          się, aby podzielić się odkryciami i badaniami związanymi z przestrzenia kosmiczną!
        </StyledText>
      </template>
    </SpacedPair>
    <!-- <SpacedPair reversed>
      <template #firstElem>
        <CenteredHeader> Konferencja odbywa się na Discordzie! </CenteredHeader>
      </template>
      <template #secondElem>
        <router-link :to="{ name: 'submissions' }">
          <FilledButton :additional-class="buttonClass">Zapisy</FilledButton></router-link
        >
      </template>
    </SpacedPair> -->
    <!-- <SpacedPair reversed>
      <template #firstElem>
        <CenteredHeader> Oto postery zaprezentowane w czasie wydarzenia </CenteredHeader>
      </template>
      <template #secondElem>
        <router-link :to="{ name: 'posters' }">
          <FilledButton :additional-class="buttonClass">Postery</FilledButton></router-link
        >
      </template>
    </SpacedPair> -->
    <!-- <SpacedPair>
      <template #firstElem>
        <CenteredHeader> Gdzie i kiedy? </CenteredHeader>
      </template>
      <template #secondElem>
        <StyledText>
          Widzimy się już
          <AccentedText>25 marca 2025 roku</AccentedText>
          na
          <AccentedText
            ><LinkText
              ><a :href="discordServerAddress">serwerze Discord konferencji</a></LinkText
            ></AccentedText
          >.
        </StyledText>
      </template>
    </SpacedPair> -->
    <!-- <SpacedPair reversed>
      <template #firstElem>
        <CenteredHeader> Plan wydarzenia pojawi się już wkrótce! </CenteredHeader>
        <a href="https://www.youtube.com/live/IRl5jmq-dIA" target="_blank">
          <FilledButton :additional-class="buttonClass">Nagranie konferencji</FilledButton>
        </a>
      </template>
      <template #secondElem>
        <router-link :to="{ name: 'schedule' }">
          <FilledButton :additional-class="buttonClass">Harmonogram</FilledButton></router-link
        >
      </template>
    </SpacedPair> -->
    <!-- <SpacedPair>
      <template #firstElem>
        <CenteredHeader> Zapoznaj się z regulaminem </CenteredHeader>
      </template>
      <template #secondElem>
        <router-link :to="{ name: 'regulations' }">
          <FilledButton :additional-class="buttonClass"
            >Regulamin konferencji</FilledButton
          ></router-link
        >
      </template>
    </SpacedPair> -->
    <SpacedPair reversed>
      <template #firstElem>
        <CenteredHeader> Masz pytania? </CenteredHeader>
      </template>
      <template #secondElem>
        <div class="flex flex-col gap-y-4">
          <router-link :to="{ name: 'q&a' }">
            <FilledButton :additional-class="buttonClass">Q&A</FilledButton></router-link
          >
          <router-link :to="{ name: 'contact' }">
            <FilledButton :additional-class="buttonClass"
              >Skontaktuj się z nami!</FilledButton
            ></router-link
          >
        </div>
      </template>
    </SpacedPair>
  </SpacedColumn>
</template>
