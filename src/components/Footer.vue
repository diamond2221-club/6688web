<template>
    <footer id="mainFooter">
        <p id="copyright">
            {{ copyright }}
        </p>
    </footer>
</template>
<script>
export default {
    name: "Footer",
    props: ["copyright"]
};
</script>

<style lang="scss" scoped>
#mainFooter {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #151515;
    z-index: 2;
    #copyright {
        font-size: 12px;
        color: hsla(0, 2%, 81%, 0.502);
        text-transform: uppercase;
        line-height: 2.35;
        text-align: center;
        padding: 0 10px;
    }
}
</style>
