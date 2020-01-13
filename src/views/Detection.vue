<template>
    <div
        id="detection"
        class="mainContent"
        :style="{backgroundImage: `url(${require('@/assets/images/detection-background.41c78eb.jpg')})`}"
    >
        <div id="wrapper1">
            <div id="title"></div>
            <div id="detectionHolder">
                <p id="subTitle"><span id="text1">线路检测</span> <span id="text2">提示：ms数值越小的网址，打开速度就越快</span></p>
                <div
                    id="detectionDataHolder"
                    class="pc"
                    style=""
                ><a
                        id="ljj"
                        :href="`https://${url}`"
                        target="_blank"
                        class="detectionData"
                        style="height: 50px;"
                    ><span
                            class="url"
                            style="margin-top: 4px; margin-right: 30px;"
                        >
                            <span id="wzzz">{{url}}</span>

                            <span
                                class="time"
                                style="float: right; margin: 4px 0px 0px;"
                                id="msmsz"
                            >{{timeOut}}</span> <span
                                class="signalBar"
                                style="float: right; margin-right: -75px;"
                            ><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar"></span></span></span></a> <button
                        @click="gg();"
                        id="reCheck"
                        style="height: 50px; margin: 2px auto 0px; border-radius: 9px;"
                    >重新检测</button></div>

                <div id="infoHolder">
                    <div id="info1">
                        <p id="subTitle">如检测后还不能登录，请按以下操作：</p>
                        <p class="text">1 打开IE浏览器，选择：工具-&gt; Internet选项-&gt; 再选择 (删除历史浏览记录)-&gt; 删除-&gt; 重启IE</p>
                        <p class="text">2 如果打开本公司出现跳转到其他网站的情况，请点击查看：修复电脑DNS方法</p>
                        <p class="text">3 下载寰宇浏览器，专为线上娱乐城贵宾打造，快速度安装，安全性能佳，网络稳定</p>
                        <p class="text">4 如果以上仍不能解决您的问题，请联系在线客服</p>
                    </div>
                    <div id="info2"><img
                            src="../assets/images/1531651052464521.png"
                            width="100"
                            height="100"
                            alt=""
                        />
                        <div id="textButtonHolder">
                            <p id="text">
                                <br/>&nbsp;扫<br/>&nbsp;一<br/>&nbsp;扫<br/>
                            </p>
                        </div>
                    </div>
                </div>
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
            url: "",
            timeOut: 0,
            i: 0
        };
    },
    methods: {
        get() {
            let { urls, i, randomNum } = this;
            this.url = urls[i].url;
            this.timeOut = randomNum(26, 89) + "ms";

            i++;
            if (i >= urls.length) {
                i = 0;
            }
            this.i = i;
        },
        randomNum(min, max) {
            switch (arguments.length) {
                case 1:
                    return Math.floor(Math.random() * minNum + 1);
                    break;
                case 2:
                    return Math.floor(Math.random() * (max - min + 1) + min);
                    break;
                default:
                    return 0;
                    break;
            }
        },
        gg() {
            this.i = 0;
            this.get();
        }
    },
    created() {
        fetchIndexData().then(res => {
            const { testing = [] } = res;
            this.urls = testing;
            this.get();
            window.setInterval(this.get, 5000);
        });
    }
};
</script>

<style lang="scss" scoped>
#detection {
    background-color: #2b2325;
}
#detection.mainContent {
    background-image: url(/static/img/detection-background.41c78eb.jpg);
}
#detection #wrapper1 {
    max-width: 1180px;
    margin: 0 auto;
    padding: 10px;
}
@media screen and (max-width: 880px) {
    #detection #wrapper1 {
        margin: 0 0 3.2em;
    }
}
#detection #wrapper1 #title {
    width: 100%;
    height: 105px;
    margin: 8% 0 5%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUMAAABpCAYAAACgc0HjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MzRGOUE3N0IzNDUxMUU4QTAwM0FFNjgyRTJCNzk4RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MzRGOUE3OEIzNDUxMUU4QTAwM0FFNjgyRTJCNzk4RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjczNEY5QTc1QjM0NTExRThBMDAzQUU2ODJFMkI3OThGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjczNEY5QTc2QjM0NTExRThBMDAzQUU2ODJFMkI3OThGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SgXPZwAAFNNJREFUeNrsXftx27rT3Xjyf9hBmArCVBC6AisVmKrAcgWSK5BVgegKLFcgugIrFZip4CoV+DN+d/fjmpekABCg+Ngzg1Emlkg8Fgdn8Vh8ent7gx4gxs+sxTNCTDmmISF5T7v3dOx5PslYPoFgKIje0/o9Hd7TrVRHPS4sO+7re5o5JIL9e7px9JxkgMa6fU8vYo69wQrTGBCg2IikWZvx2eI316jAIlQzbUFqcNazuoks8rTDEdi0Ptuq4rFADWRX2HkDTdt5ek+pY1W9ZKQoEDKsJQhyaVNHeSC3NsRnn5sUAlRqM8tOpPL/y6BzkpJ9mrAdqjp/ZLalixiTqvdLi4HIF2L0dGwG040MjMMgwxtGhLnDfGRICn0gQyLCI5bzr+bvvrAyPGLnPIUZEkHuSGUPFUSERyQDHfsKsP6WOJDue0KIW7CfqplhUuWfCz11DLWAopmC9/TP27+IDX6nk2b43H2LZ6zwGasWz4jwGf/gv21+T3Wk8/tH/O7acX36SgSXz1y0rHNlly8O7MdFOVesLAnmzaQcCbMfHTvea/TH2HHdjDZ9Nhy1SMW4Vm8Zcy8CON+qKp8CsFEYB/ztAuvroKFs6L17T2XKe64yaH7u1rLOjzgt8cLc5nN4FwHznGwU6pEpYlpQvIf+7zCYpJtMRrvxkI8jGg/NSZ7LZaRJ+78tnqH721lpLtYX+kyECRtg05aET4PQ9ZnIkMSCzSJaWRjs8Hnn7AtChg2KKWSjlw88IClcWRpAVvrsOw6a84q2CneJ7dXnznTtcIDdIBkmqDK7VlQhfv528KzfSIYRCBn2jgzJaH1uDM7YCDu3/H02oLr3OdHPVbxOe60Mn79y8L0Q3O5MyLH9YyTEe+neAtdkGECxOrbxTA45FHsYD9I8VqCphqMBISwtybYNGfKdCa4G2AcotrUIGQqck+GCkZVvgtqB3uKDiesSwrT2ba0NVaHCnSEJ3jnIZ8IIzKX9rKE/e1YFIyNDl/M6p/CMZHhVoSoC+LjQELN//ywpo/LphamcpaVJ99xQGem6va5OZiTgZ2cCzZEmcL6FFMFIyXAGxcKJy4ncJmIjQtszZWeLnLneeU/qPAE/25MCpgrvoN9bMq48DrAbrGOVbBdShESFDGtVYWphVEo9fGGkVybAU4gbyI3+/afm//Oe1jcRVoDKzSVpLdmUQNpjmwuh2FbkI580nUNny23ecemx/PsO3iFwTIbcaDeWnfOUS3MoucgKX3FUp5BDfSY3W+WyhGJudO5AicT4vCO021eYYLunFnUeQzFPl514h+0Aa1LH6ljcTQ8HhlhoZ3hkeMNchryBMOv+dleh1MoEWKeeEihWlMe0A/+IinmHnZWmA9qoRApyAGzwsMU1IzQbMlxquJnkbfgMTMHrV3YmCLRwoTGCPzQQoYpr+NLgJq9wZCa1cNAkDJqfnI203lU9/GADxgKK42Q2bleA9Zz2vNwzNoD63EzMDwfcSDcXtFGGCZw+JpWwju0aT9hxrgbQwdugrUrcMuUzhCjG18xmfLuLfxgBn+NEimAkZHhzQhXyQ+k+VgSJIOi855gNmVTiCszmEtc4IFGggr7XUciU/qxD1U8BMUwG1VXpUzBRMqR5FjihCgMD19fGzdnBx/huY4eJSkygWDC5hGEsMJEnkXeYX9rBYLqQIpGuhQw/qMJdg9HSd+485o1c5esOyfDA3LmVZee7bjF9oKMSF6gKiQiHsjhA9XIL3QUfUO3xioQYwrh2JQg8kyGPsbdpGOFD7ISZx7yRSoo7NGQKv0TKzORIWwDFXr9Dyw5fpxID5hoPiQipDbuOosNPpNyA3A4nMCBDcn/zBqLr6ngerQgmmLpyWZQKozD0scXvc3ATQ7BKJcIAiRA0PA2foNBwf6S7C0zI8NSiCBFE3pHr+gTFOdOuyJBISL33quY7IVTf0ezjprYd5iMqKdA5DGdhKYPzHXHLsD0FAm0yJFeG1N9VDQl0oQo5ERxBPwpJCB/PMnNl9xX/pnMMisJf3Te4sUtUHT5JeoaucoAk/YDvpYAMv0DO0QoEzsnwmv070nBfuwCtWNMtaIoAvpTyVxWlZugISq6xqm/aK8fnUtueXmlqY4FgsmT4AM2x5YiMNpadJa5RcLrkFoPeHF7dmWcYiIqKkexCLMttafDJUd0uwP0ZZz5VIBBMlgyzE0rl1N5DjgT+nX+MHHTKIyPIjJEbP7ecw/C3TVBEm4SVb95ATPceVGLcQTkpmkymSd4LrBvT6YgEB5S2FzQJJkiGOgaZapJOWEGEnLBUZ/1dQ8RZjWFvLTvFEJBAEdoLkNB0ytmFSnQNmvL4rpnHJRsITcrEg04IBE7IkB+9091knUJxOsXF/FOKZBF1YOCr0qdvYlizKYMMicxU5fpQib6QMYLT9Q5sFGvEBl6B4CQuNDssjcy6nTTH77s0xA0b8X1iCeYXJNm4o4qwHqHYovML2h2tI5VICy1tIuF0gdDz9wNGpgKBEzJ0eQlQW3VILuVQV48TJME9FDfYqXr9Bu5OZihF+AMHoxDfte5RnR0Myc30+y5U4SeYzr05Ak0yTKCbo3e6yocIYzGwelZ1+MrcWE6CK091VaUSox7UhSlB/cXPLxYqUlShQBu6d6BsepLfDRTBG3RJJEAy8EE6XzXc0Bw+LhxtUL11MZfF5xIjTRe8i3zloL+RPi+pPRNlmEsXF7ggwxi6PXqng4x1pEQjXwG6idQ5XBNiAsVWmDrQyvAvzHvXE/qkEqMT7447VFO5gdtrQ2hf8VPOIwuckGFf5gqryGWL+Us1ifAAZvcIm3TqXLMzn9tl66PLGIH+9IuNMsykiwvakiG5MF2HXNKBIsD1CTerTISXnhSZi7PJC3T7Xc3n5Vgndz12E5+x7XQWdTLWpud0k0Nxu8eNixOq0PbonW9sSvksd4SXDoiwLQLM5xrcLmzQFMKLhgt/bny1KJsuER4dkpd6L11+FghtTIcMQ9aJ7nuab1qAiOHjAsYMFWHYcyJUeGSEreYTPzlK31A9B1AsnOiSM3RUXz6310QepgWWrG5c1Y+Q6gDI8Ia5o30lkiNTh5TfFRIMHRv80eP8E4nnSNgupyLUM+dQzPWuDV3L3x21nwkhmLTjd+aKuyKtU9HfTd33Oq9G0CMyDJgqvOt53lOmBh/h44LPvOd5v+5gGoKr576pkLyCHHTIMNYcaFwqwwSK6O9tBy3eDgswP1Uj6JAMKSDDuUK0m3Yoftk8hcNfDaDeQw+uXBWBHAxJp2sy1IWuWg08uMkuLz8rk/kaBL0lw2tGLm+GKe4w3xTuit+9K1Gf2+GrhUvqwlU2IervmmSTOxrME3B7kRXln04GzaC/Z8cnTYbJQGS7Mp4XKI7kZSUiF/RXrXIcKlzHOmSa3/1Z+n6X0xkpeiapBlmnUMw/ri2fJfBIhqri26xiZh10VjU3SKvF6n0/UBEeB0TmgmoS1vUIdJShi8WTuEReOq5/1qBIKfoThbWjOd0I/rsF6tSzBB24yX0EBXR9hWJu8BaK6zL5yrKs0A0HJttlcg2XOgS3J0+uGRHmDp/3wKYJbpndylYbIUMtElwyw/wG/93/eM/UYSTNaq2EunSTTaLR6JDRjOW/LXmFTK25CFISsfztSt7YAd+3EBMUMqwiwQUjwYC5xHV3BXN1KCt07dDVAoqO2qvKV933ab7wyUHebpjCdDE4rBtU5i17ZyjmJ2RYVoJrRoKXzCVuwj0aWgyyQjcEmKq3pgWXoEZ52dqhS1W4gI8xLMvIMAUg0zyTJ0M10m8rlCCRYGagHExPXQg+ush5h++02VoDNeppxvLfVskl4G6TdQQfDwPU1e+cvdukPlT/6GLxUsjQswpUDa9Whl+YAdqQIAe5IVUrdF2Su1IDj0jyY1ZrbUDR01PN7z9B/WGAA/7NxV5AV5usAyiOh+6g+Zx/zv4uA/mZ8PkMRHEDxTYDUgg7cBdyag7FvR878D8HRjf2/YT/Hn07Qv+PBta5nl3g0uC79w2EQsEu2mIGbjZZUwi5EIr7r0/hDgfwGPOxA8HolGGIxPRaUoFkJN/A7nrMOmTgdw6GiA/w+RSGiwj+CEU8wV8DsQMfkV6GCFKFbc6MR2AXS9PXNE+X0YgGrwxjcLfgkFaQGrmNwOZhNp5dsjmSr3rvQ4tOHpRUX1RjxIr8nkF/9ZHuAr4Cf/M9IWtX3Xf8nXBfiMBsk3XdQPnIBnvTEHL3UKwqL8BNCD3a3/gMgma8vb2t3twhfk9QSsF7Wr+nqOJvPtMa87Q3+E3AyvJSU8bX97R9T0mLMoX4rH881ssjvmNr8N3Fie8Rqv5GdrTquJ1dpa1BfTWVn2wnsHzOjNlG0LJMC4fPGn367FiZ5DXK6fYMPM/nYJKG0X5Wo/y463hgyi93VE/3OPrvMW9PjsodovseGtS97wvXQ+jHHrqsIX8Jc5FNy7ZlqvK+pb3vMJ8xtmPTs5KGer1mf7sVN1lPGY45JRojY1kZv6CqnHUwmq7f/OHFQHW+Nih7F8pw9dYPnFJ1e4s23DMbmzmyi4jlOdR491uDFzMT1aevDMeMFIrLlupuYtuVFl66xC3Oabq+EOrZcN5L5eG7R2WYQ7/3wmXoHdhssp7jgsfcofo6YPsl6LncN7Tbc0OZMhBo45NixAlMjOfiJrhxJMhupCq8I2QLMQIhQ4FAIOgGF1IFAoFAIGQoEAgEQoYCgUAgZCgQCARChgKBQCBkKBAIBEKGAoFAIGQoEAgEBmQYw7gupqGjeAKBQAB1nFd1AkX9h4r4snL8wgT+PYN7eeI76gjSvcP37vHz0uK3oeHAQPc4jw0RmEXDzgZQpnO3bcz+nUP/LoxX/UadfU4d13Hbsq6guObBFf7HeZ87Nr74xHeuobhJLD1jJ1Ghk2ZgHg7/0jERxJi+aKhbZSB/oQg5ljt4N13RYIpPDYbsC7mGzZyrbUOsy+hEHzhi291CcSY5BL/3+WQ15VL5fG5R1lnDYEMBkTcWdUrR67+5HkD6GrWmq/tLqpTpFoo7MJ4M8+D6UH3MGv+UMikbX4YK36YDb7EuclTprmItLj136rRnbRuhLcfsGSqPf0oKif7+FYoADWUCB8915wILltcdkmleUSc/0V5n+G6baz+2lt5egz6sjlnnI1rx6kRMOYrP9toy4nDVM3Xi1MUsDmDYkxhrOnVWVY41xtejegws3rk9c3Rkl3Z4jrblsTRXHb031oxL6aP+KVL4WtNuAhbP0yTi+xvjiMSlrfVxNTmHj1Gqu8Ijvvuyh/M3pqP8LboRKdbjo4GSWeKo7jI+37nRdduSClVt8QOnB3IYLxZY5jnoR9WmKOxz+Hitqg4esG7X4PBmx75urSHj2UI311gm+J4xEQBdU5rioKIzX3cDw7netK9tO0O7TUcwsOrOES6xvKnF71NsmxCKi+N0QCTq7G7yPu8ztKkgW/yE/kdjblOPByS6UwNLfKa52rG0LXVO3buSx4AltL/nKMX2WRqIH/IgZ648yD6TYYaVtAT/+wRjGHeI9Fs0suTECK/S2K6U7LJtl0yFTgEh2tSdgwH0jin5s3iQFwPoxEdwe6l2XaP+GbHRZmg01yfqAEbo1nXVtjTYpDCdUP207WrnyEYPJ2zUqwfZdzKk+au4I3d5zNiBnMTxTQyKEB8mVOZrcDutklnYqPrNvQsP8mIgnZjmE0Lpc9Z4Zm6jwD3GPO9chwjcTqvY2ii56a0WU4YSqIHmYNbS56xxKLnDAreIJ0aEccmuzmmj5EFGbTzIoZChGnE3UOxaF9jVoZChHwRYr78nVObQAxm2sdHWHuSQQnitsOKdbrScKCEK3LuLrolhKGToehtWm+e18iCHFs+QVo6W0v+syfCnVIM3HCdU1i+eyP/QwkaVfd/ZepBDI0NVUfc4LyAro4K+IJ6gMox6Sv73th7k5wE2AjG/Wjn64fC51w5UU9v4b33A2oGR3/aMGKRtpwXlQb6gB6l9MmaIYf/p6I8amVbS7gKBoMGDjMesDBV2mG5wtM4dPPNByPX/VV02sjJJ204P5EGudT3IIV8IRStHW2l3gUBQ4UHOTTzIi4EX9g5lsOw91EMI05rk79ItU5jSlq+jRxt1daolYx5kOGYyBJwXyKC7uIdjIMO/Ug3eiGFKOxx+g5+jnaHj52l7kGO4N5nCU8new2YEnkf0KSP31JGnaqP5OTzIMZDhAQtrtHI0QUzxlESXZKg63fcJDgCRBxvNHedVy4O8GEnDrKAI8iioRixk6BXZxAZjH4E/YlaXrkHXBKzHToZU2BBkC0UdfsJ4L7nvA55R2UzFVT4wu3KFK3B7OXxZyTZeNDcmMlSjSQoS97AKIUwvxFTXSPHzZkJlVsQ1c2ijruMjGnmQFyNrHLomwNRdVqPc1xEbLS0ubTp2e/qiYLpo2yMUV7NOZTB+wrLOHNnoEfwfeaz1IC9qjGeoE8G21wQcYLzzPRF20B00T0wfYZxRbbpsW7rUaCpz1ym4uaOIbHQD/qdxlHdUeU3ARYPxDHXfHg/yqFuGZ+ZKjgl0daXuVY4ZFHd5jAVdtm2O9RxPiBBvsX63LW00R5LqatD6D4lXkeEDnFh1GQBMj+ql2BhjChyrOuQrjn5z0NuucDeCtj9326ZQTNS/wPg3YqcoQBILu1HtsUcy/QXdLe5VepAXNeqA5j72A1UKORTXBOgaI51jpMbpG7FFmsZF7bbH/7sE/RW6nHXkMZ3q6bptV1DMTSlCfMQ6HespqTnyxgLLO9Ow0xUO1iHaaNdbvrgH+T98biicumv2BhvSRoauztxA6v1XBmSY4ei0xUbKwHxly1eZ9xV5rZp34adM7tDtOFqWYYlGrd5lcrdHDv2L+3eOtk1ZZ0ugiMGZN6h0cuU/DYwMj0hoK8YZxwrb+YJ2GjNCuoXzXUdBcQ//rfS3tzddVRIYGl9WYUzLEw3N1YwLhJiOBiMPqasrMJ9n8mHEART710jVfK9oD1W+vzV1b1t3NwaqlLe9i/Z78zConqttAyTD76wvRRWDW44ixLbMMfahSwc2YFv/VNYrKLbL8IEyx4EotSRB13ZB7ZHrkKFLVy8G2RQt0FfDEl3avGOvwU2k8ZXDgXUQ+D8BBgApGGp60e35nwAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-size: contain;
}
#detection #wrapper1 #detectionHolder #subTitle {
    color: #fff;
    font-size: 18px;
    margin: 0 0 10px;
    text-transform: uppercase;
}
#detection #wrapper1 #detectionHolder #subTitle #text2 {
    color: #ff9200;
    font-size: 14px;
    padding: 0 0 0 10px;
}
#detection #wrapper1 #detectionHolder #detectionDataHolder {
    width: 100%;
    text-align: center;
    margin: 3px auto;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-pack: center;
    justify-content: center;
}
#detection #wrapper1 #detectionHolder #detectionDataHolder * {
    display: block;
}
#detection #wrapper1 #detectionHolder #detectionDataHolder .detectionData {
    width: 230px;
    -ms-flex-positive: 1;
    flex-grow: 1;
    background-color: hsla(0, 0%, 93%, 0.3);
    padding: 10px;
    border-radius: 10px;
    margin: 3px;
    box-sizing: border-box;
    text-decoration: none;
}
#detection
    #wrapper1
    #detectionHolder
    #detectionDataHolder
    .detectionData:hover {
    background-color: #ff9200;
}
@media screen and (max-width: 300px) {
    #detection #wrapper1 #detectionHolder #detectionDataHolder .detectionData {
        width: 100%;
        height: auto;
        margin: 3px 0;
    }
}
@media screen and (max-width: 510px) {
    #detection #wrapper1 #detectionHolder #detectionDataHolder .detectionData {
        width: 48%;
        height: auto;
    }
}
#detection
    #wrapper1
    #detectionHolder
    #detectionDataHolder
    .detectionData
    .signalBar {
    text-align: right;
}
#detection
    #wrapper1
    #detectionHolder
    #detectionDataHolder
    .detectionData
    .signalBar
    .bar {
    background-color: #222;
    width: 3px;
    margin: 0 0.5px;
    display: inline-block;
}
#detection
    #wrapper1
    #detectionHolder
    #detectionDataHolder
    .detectionData
    .signalBar
    .bar:first-child {
    height: 5px;
}
#detection
    #wrapper1
    #detectionHolder
    #detectionDataHolder
    .detectionData
    .signalBar
    .bar:nth-child(2) {
    height: 7.5px;
}
#detection
    #wrapper1
    #detectionHolder
    #detectionDataHolder
    .detectionData
    .signalBar
    .bar:nth-child(3) {
    height: 10px;
}
#detection
    #wrapper1
    #detectionHolder
    #detectionDataHolder
    .detectionData
    .signalBar
    .bar:nth-child(4) {
    height: 12.5px;
}
#detection
    #wrapper1
    #detectionHolder
    #detectionDataHolder
    .detectionData
    .signalBar
    .bar:nth-child(5) {
    height: 15px;
}
#detection
    #wrapper1
    #detectionHolder
    #detectionDataHolder
    .detectionData
    .signalBar
    .bar.active {
    background-color: #fff;
}
#detection #wrapper1 #detectionHolder #detectionDataHolder .detectionData .url {
    color: #fff;
    font-size: 18px;
    text-align: left;
    word-wrap: break-word;
    margin-top: 8px;
    #wzzz {
        display: inline-block;
    }
}
#detection
    #wrapper1
    #detectionHolder
    #detectionDataHolder
    .detectionData
    .time {
    color: #000;
    color: #fff;
    font-size: 14px;
    text-align: left;
    margin: -22px 0 0;
}
#detection #wrapper1 #detectionHolder #reCheck {
    display: block;
    border-radius: 19px;
    background-color: #ff9200;
    width: 360px;
    height: 40px;
    border: none;
    font-size: 18px;
    margin: 20px auto 40px;
    cursor: pointer;
}
#detection #wrapper1 #detectionHolder #reCheck:hover {
    background-color: #e58504;
}
@media screen and (max-width: 619px) {
    #detection #wrapper1 #detectionHolder #reCheck {
        width: 100%;
        height: 40px;
    }
}
#detection #wrapper1 #detectionHolder #infoHolder {
    height: auto;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin: 20px auto 0;
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
}
@media screen and (max-width: 880px) {
    #detection #wrapper1 #detectionHolder #infoHolder {
        -ms-flex-pack: center;
        justify-content: center;
    }
}
#detection #wrapper1 #detectionHolder #infoHolder #info1 {
    display: inline-block;
    padding: 20px;
}
#detection #wrapper1 #detectionHolder #infoHolder #info1 #subTitle {
    color: #fff;
    font-size: 14px;
    padding: 0 0 10px;
    text-transform: uppercase;
}
#detection #wrapper1 #detectionHolder #infoHolder #info1 .text {
    color: #666;
    font-size: 12px;
    padding: 0 0 10px;
    text-transform: uppercase;
}
#detection #wrapper1 #detectionHolder #infoHolder #info2 {
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 51.5px 20px;
    border-left: 1px solid #252323;
}
@media screen and (max-width: 853px) {
    #detection #wrapper1 #detectionHolder #infoHolder #info2 {
        width: 100%;
        border-left: none;
        border-top: 1px solid #252323;
    }
}
#detection #wrapper1 #detectionHolder #infoHolder #info2 #qrCode {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    background-color: #333;
    margin: 0 10px 0 0;
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: contain;
}
#detection #wrapper1 #detectionHolder #infoHolder #info2 #textButtonHolder > * {
    margin: 0 0 10px;
}
#detection
    #wrapper1
    #detectionHolder
    #infoHolder
    #info2
    #textButtonHolder
    #text {
    color: #999;
    font-size: 14px;
}
#detection
    #wrapper1
    #detectionHolder
    #infoHolder
    #info2
    #textButtonHolder
    #download {
    padding: 5.5px 42px;
    border-radius: 5px;
    background-color: #ff9200;
    border: none;
    font-size: 14px;
    text-decoration: none;
    color: #000;
}
#detection
    #wrapper1
    #detectionHolder
    #infoHolder
    #info2
    #textButtonHolder
    #download:hover {
    background-color: #e58504;
}
</style>
