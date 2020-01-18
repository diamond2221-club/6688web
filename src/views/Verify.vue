<template>
    <div
        id="verify"
        class="mainContent"
        :style="{backgroundImage: `url(${require('@/assets/images/verify-background.ed583cf.jpg')})`}"
    >
        <div id="wrapper1">
            <div id="title"></div>
            <div id="checkerHolder">
                <p id="subTitle"><span id="text1">域名认证</span> <span id="text2">提示：请在下方输入域名，验证是否为我公司官方域名</span></p>
                <div id="checker">
                    <div id="inputWrapper">
                        <span id="placeHolder">http://</span>
                        <input
                            type="text"
                            name="checkerInput"
                            id="checkerInput"
                            autofocus="autofocus"
                            v-model="urlVal"
                            autocomplete="off"
                            @keydown.enter="get"
                        >
                    </div>
                    <input
                        @click="get"
                        type="submit"
                        name="checkerButton"
                        id="checkerButton"
                        value="验证"
                    >
                </div>
                <p
                    id="checkerStatus"
                    :class="tipClass"
                    v-html='tipText'
                ></p>
                <!-- class="no_input green" -->
            </div>
        </div>
    </div>
</template>

<script>
import { fetchIndexData } from "@/api/index.js";

export default {
    data() {
        return {
            urls: [],
            urlVal: "",
            tipText: "&emsp;",
            tipClass: "no_input green"
        };
    },
    methods: {
        get() {
            const { urls, urlVal } = this;
            if (urlVal == "") {
                this.tipText = "请输入要检测的域名";
                this.tipClass = "class no_input";
                return;
            }

            if (urls.find(item => item.url.split('://')[1] == urlVal)) {
                this.tipText = "此域名通过认证，欢迎访问我公司网站";
                this.tipClass = "class no_input green";
            } else {
                this.tipText = "此域名没有通过认证，请谨慎访问";
                this.tipClass = "class no_input red";
            }
        }
    },
    created() {
        fetchIndexData().then(res => {
            const { urlAuth = [] } = res;
            this.urls = urlAuth;
        });
    }
};
</script>

<style lang="scss" scoped>
.no_input {
    color: #ff9200;
}
#verify {
    background-color: #202731;
}
#verify.mainContent {
    background-image: url(/static/img/verify-background.ed583cf.jpg);
}
#verify #wrapper1 {
    max-width: 770px;
    margin: 0 auto;
    padding: 10px 10px 100px;
}
@media screen and (max-width: 880px) {
    #verify #wrapper1 {
        margin: 0 0 3.2em;
    }
}
#verify #wrapper1 #title {
    width: 100%;
    height: 105px;
    margin: 11% 0 5%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAosAAABpCAYAAABS+Wm3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMjFCOTc1OUIzNDUxMUU4OUYwQ0Q1OTYzNkZCNTUwQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMjFCOTc1QUIzNDUxMUU4OUYwQ0Q1OTYzNkZCNTUwQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMyMUI5NzU3QjM0NTExRTg5RjBDRDU5NjM2RkI1NTBBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyMUI5NzU4QjM0NTExRTg5RjBDRDU5NjM2RkI1NTBBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8wnyBwAAG9NJREFUeNrsne1127gS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);
    background-repeat: no-repeat;
    background-size: contain;
}
#verify #wrapper1 #checkerHolder #subTitle {
    color: #fff;
    font-size: 18px;
    margin: 0 0 10px;
    text-transform: uppercase;
}
#verify #wrapper1 #checkerHolder #subTitle #text2 {
    color: #ff9200;
    font-size: 14px;
    padding: 0 0 0 10px;
}
#verify #wrapper1 #checkerHolder #checker {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
}
#verify #wrapper1 #checkerHolder #checker #inputWrapper {
    width: 560px;
    height: 50px;
    padding: 0 20px;
    margin: 0 10px 0 0;
    border-radius: 5px;
    background-color: hsla(0, 0%, 100%, 0.2);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
#verify #wrapper1 #checkerHolder #checker #inputWrapper #placeHolder {
    color: #fff;
    font-size: 14px;
    padding: 0 10px 0 0;
}
#verify #wrapper1 #checkerHolder #checker #inputWrapper #checkerInput {
    width: 90%;
    height: 100%;
    font-size: 14px;
    color: #fff;
    border: none;
    background-color: transparent;
    -webkit-user-select: text;
}
#verify #wrapper1 #checkerHolder #checker #inputWrapper input {
    -webkit-user-select: text;
}
#verify #wrapper1 #checkerHolder #checker #checkerButton {
    width: 161px;
    height: 50px;
    border-radius: 5px;
    background-color: #ff9200;
    border: none;
    font-size: 18px;
    color: #000;
    cursor: pointer;
    padding: 0 12px;
    box-sizing: border-box;
}
#verify #wrapper1 #checkerHolder #checker #checkerButton:hover {
    background-color: #e58504;
}
#verify #wrapper1 #checkerHolder #checkerStatus {
    margin: 10px 0;
    font-size: 18px;
    text-transform: capitalize;
}
#verify #wrapper1 #checkerHolder #checkerStatus.red {
    color: red;
}
#verify #wrapper1 #checkerHolder #checkerStatus.green {
    color: green;
}
</style>
