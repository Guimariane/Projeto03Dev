<template>
 <div class="sidebar" :style="{ width: sidebarWidth }">
    <h2>
      <span v-if="collapsed">
            <br>
            <SideBarLink to='/dashboard' icon="fa-solid fa-chart-pie"></SideBarLink>
            <SideBarLink to='/lista' icon="fa-solid fa-solar-panel"></SideBarLink>
            <SideBarLink to='/geracaomensal' icon="fa-solid fa-gear"></SideBarLink>
      </span>
      <span v-else>
        <br>
        <div class="logomenu">
          <img class="logomenu" src="@/assets/SolarEnergy.png">
        </div>
    <br>
    <SideBarLink to='/dashboard' icon="fa-solid fa-chart-pie">Dashboard</SideBarLink>
    <SideBarLink to='/lista' icon="fa-solid fa-solar-panel">Unidades</SideBarLink>
    <SideBarLink to='/geracaomensal' icon="fa-solid fa-gear">Cadastro de Energia Gerada</SideBarLink>
    </span>
    </h2> 
    <span 
        class="collapse-icon" 
        :class="{ 'rotate-180': collapsed }" 
        @click="toggleSidebar">

        <i class="fas fa-angle-double-left" ></i>
    </span>
  </div>
</template>

<script>
import SideBarLink from './SideBarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
    props: {},
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth };
    },
    components: { SideBarLink }
}
</script>

<style>
:root{
  --sidebar-bg-color: #fff;
  --sidebar-item-hover: #06a5c2;
  --sidebar-item-active: #06a5c2;
}
</style>

<style scoped>
.sidebar {
  color: grey;
  background-color: #fff;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.menu{
  text-align: left;
}
img.logomenu{
  text-align: center;
  max-width: 90px;
  align-items: center;

}
span{
  color: grey;
  text-align: center;
}
.collapse-icon{
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: grey;
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>