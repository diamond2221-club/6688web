<template>
    <footer id="mainFooter">
        <p id="copyright">
            COPYRIGHT©2019 188HG 188皇冠 ALL RIGHTS RESERVED 版权所有
        </p>
    </footer>
</template>
<script>
export default {
    name: "Footer"
};
</script>

<style lang="scss" scoped>
#mainFooter {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #151515;
    #copyright {
        font-size: 12px;
        color: hsla(0, 0%, 40%, 0.502);
        text-transform: uppercase;
        line-height: 2.35;
        text-align: center;
        padding: 0 10px;
    }
}
</style>
