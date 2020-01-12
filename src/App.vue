<template>
    <div id="app">
        <div
            id="main"
            :class="showSilde ? 'rightMove' : 'canScroll'"
        >
            <Header @toggleMenu="toggleMenu" />
            <router-view />
            <Footer />
            <!-- <RightHeader /> -->
            <div
                class="mask-layer"
                v-if="showSilde"
                @click="toggleMenu(false)"
            ></div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import RightHeader from "@/components/RightHeader.vue";
export default {
    components: {
        Header,
        Footer,
        RightHeader
    },
    data() {
        return {
            showSilde: false
        };
    },
    methods: {
        toggleMenu(newState) {
            this.showSilde =
                typeof newState !== "undefined" ? newState : !this.showSilde;
        }
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    font-family: Microsoft YaHei, sans-serif;
    user-select: none;
    outline: none;
    // tap-highlight-color: hsla(0, 0%, 100%, 0);
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f2f2f2;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: relative;
    .mainContent {
        min-height: 93vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        overflow: hidden;
    }
}
#main {
    z-index: 1;
    background: #151515;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: relative;
}
.mask-layer {
    // width: 80%;
    right: 0;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}
.rightMove {
    transition: all 0.3s linear;
}
@media screen and (max-width: 968px) {
    .rightMove {
        transform: translate(-17%);
    }
}
@media screen and (max-width: 768px) {
    .rightMove {
        transform: translate(-20%);
    }
}
@media screen and (max-width: 568px) {
    .rightMove {
        transform: translate(-25%);
    }
}
@media screen and (max-width: 468px) {
    .rightMove {
        transform: translate(-40%);
    }
}
.canScroll {
    transition: all 0.3s linear;
    transform: translate(0);
}
</style>
